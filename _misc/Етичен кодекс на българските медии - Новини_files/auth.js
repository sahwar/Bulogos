/* global ga */
// keep the global scope clean
window.idAuth = (function () {
  var lastUrlLoaded // we'll remember the last URL requested in order to avoid making the same request twice in a row
  var termsNotAccepted
  var body
  var overlay
  var modal
  var modalDialog
  var modalContent
  var skeleton
  var skeletonInput
  var skeletonButton
  var skeletonCheckbox
  var skeletonFooter

  // some pages might be constructed asynchronously - wait for DOM to load
  window.onload = function (ev) {
    // set up the modal scaffolding
    body = document.querySelector('body')
    overlay = document.createElement('div')
    modal = document.createElement('div')
    modalDialog = document.createElement('div')
    modalContent = document.createElement('div')
    skeleton = document.createElement('div')
    skeletonInput = document.createElement('div')
    skeletonButton = document.createElement('div')
    skeletonCheckbox = document.createElement('div')
    skeletonFooter = document.createElement('div')

    termsNotAccepted = body.getAttribute('data-terms') === '1' // only data-terms="1" should open the terms modal

    addClass(overlay, 'idAuth__overlay')
    addClass(modal, 'idAuth__modal')
    addClass(modalDialog, 'idAuth__modalDialog')
    addClass(modalContent, 'idAuth__modalContent')
    addClass(skeleton, 'idAuth__skeleton')
    addClass(skeletonInput, 'idAuth__skeletonInput')
    addClass(skeletonButton, 'idAuth__skeletonButton')
    addClass(skeletonCheckbox, 'idAuth__skeletonCheckbox')
    addClass(skeletonInput, 'idAuth__skeletonElement')
    addClass(skeletonButton, 'idAuth__skeletonElement')
    addClass(skeletonCheckbox, 'idAuth__skeletonElement')
    addClass(skeletonFooter, 'idAuth__skeletonFooter')

    body.appendChild(overlay)
    // put it all together
    modal.appendChild(modalDialog)
    modalDialog.appendChild(modalContent)
    // skeleton screen
    modalDialog.appendChild(skeleton)
    skeleton.appendChild(skeletonInput)
    skeleton.appendChild(skeletonInput.cloneNode())
    skeleton.appendChild(skeletonCheckbox)
    skeleton.appendChild(skeletonCheckbox.cloneNode())
    skeleton.appendChild(skeletonFooter)
    skeletonFooter.appendChild(skeletonButton)
    skeletonFooter.appendChild(skeletonButton.cloneNode())
    // insert assembled modal in DOM
    insertAfter(modal, overlay)

    // check if a modal needs to be opened immediately
    if (termsNotAccepted) { // terms and conditions not yet accepted
      var loginCookie = getCookie('lg_sh1')
      if (loginCookie) {
        loadModal(window.idAuthConfig.baseUrl + '/agreements' + '?lg_sh1=' + loginCookie, false)
      }
    } else if (getUrlParameter('idAuthAction') && getUrlParameter('idAuthHash')) { // opened link from e-mail
      loadModal(window.idAuthConfig.baseUrl + '/' + getUrlParameter('idAuthAction') + '/' + getUrlParameter('idAuthHash'))
    }

    // set up modal triggers already in DOM
    bindModalLinks(document)
  }

  // INTERNAL FUNCTIONS
  // ===========================================

  var loadModal = function (source, closeable) {
    // check if there is a named endpoint in config, otherwise assume URL
    var url = window.idAuthConfig[source] || source

    // closeable should default to true, unless it's explicitly set to false
    if (closeable === false) {
      closeable = false
    } else {
      closeable = true
    }

    if (url) {
      // if we are not just reopening the last modal that was loaded, we have to request the new one
      if (url !== lastUrlLoaded) {
        // show skeleton screen while waiting
        if (!hasClass(skeleton, 'idAuth__skeleton--visible')) addClass(skeleton, 'idAuth__skeleton--visible')
        // make the request
        makeCorsRequest(url)
          .then(function (response) {
            if (response) {
              // remember this URL to avoid making the same request twice in a row
              lastUrlLoaded = url
              // insert new modal content in DOM
              drawModal(response, closeable)
            } else {
              console.error(Error('Server returned empty modal content'))
              closeModal()
            }
          })
      }
      // show modal
      if (!hasClass(overlay, 'idAuth__overlay--visible')) addClass(overlay, 'idAuth__overlay--visible')
      if (!hasClass(body, 'idAuth--open')) addClass(body, 'idAuth--open')
      // make sure it can be closed (if allowed) while waiting for content to load
      bindCloseLinks(modalDialog, closeable)
    } else {
      return Error('No valid URL specified for modal')
    }
  }

  var validateForm = function (form, event) {
    // based on Bootstrap's default validation example:
    // https://getbootstrap.com/docs/4.0/components/forms/#custom-styles

    // promising output
    return new Promise(function (resolve, reject) {
      var url = form.getAttribute('action')

      // get the required fields
      // form.elements is a HTML Collection, so we filter it into an array
      var requiredFields = Array.prototype.filter.call(form.elements, function (el) {
        return el.hasAttribute('required') === true
      })

      // unlike HTML Collections, arrays can be forEach'ed
      requiredFields.forEach(function (el) {
        el.addEventListener('change', function (event) {
          form.classList.remove('was-validated')
          el.parentNode.querySelectorAll('.invalid-feedback')[0].textContent = ''
        }, false)
      })

      // special case: reset password inputs must match
      if (form.name === 'resetpassword') {
        var inputs = form.querySelectorAll('input[type="password"]')
        var passwords = Array.prototype.map.call(inputs, function (obj) {
          return obj.value
        })
        var passwordsMatch = passwords.every(function (val) {
          return val === passwords[0]
        })

        if (passwordsMatch) {
          inputs.forEach(function (el) {
            el.setCustomValidity('')
          })
        } else {
          inputs.forEach(function (el) {
            el.setCustomValidity('Полетата не съвпадат')
          })
        }
      }

      // front end validation
      if (form.checkValidity()) { // PASSED
        // submit for back end validation
        makeCorsRequest(url, 'POST', serialize(form))
          .then(function (response) {
            if (response) {
              // try and parse the response as JSON (this will be the format when there are errors)
              try {
                JSON.parse(JSON.parse(response)).forEach(function (problem) {
                  // find the right element
                  var el = form.querySelector('[name="' + problem.field + '"]')
                  // find the closest feedback container and display the error text
                  el.closest('.form-group').querySelector('.invalid-feedback').innerHTML = problem.error
                })

                // sometimes there are links in error messages
                // we need to init them as modal triggers as necessary
                bindModalLinks(form)

                // return
                resolve('Back end validation failed', JSON.parse(JSON.parse(response)))
              } catch (error) {
                // could not parse as JSON, so assume it's HTML
                drawModal(response)
                  .then(function (response) {
                    resolve('All validations passed', response)
                  })
              }
            }
          })
      } else { // FAILED
        // get the invalid fields
        var invalidFields = Array.prototype.filter.call(form.elements, function (el) {
          return el.checkValidity() === false
        })

        // display each invalid field's error message
        invalidFields.forEach(function (el) {
          // to avoid hardcoding messages here, they're stored in the HTML as a data attribute
          var errorMessage = el.validity.customError ? el.validationMessage : el.getAttribute('data-error-empty')

          // find the closest feedback container and display the error text
          el.closest('.form-group').querySelector('.invalid-feedback').textContent = errorMessage
        })

        // return
        resolve('Front end validation failed', invalidFields)
      }

      // error styles are scoped to this class, so that they won't appear before the user tries to submit
      form.classList.add('was-validated')
    })
  }

  var drawModal = function (html, closeable) {
    return new Promise(function (resolve, reject) {
      if (html) {
        // can't be assigned yet because the markup is not yet in DOM
        var form

        // hide skeleton screen
        if (hasClass(skeleton, 'idAuth__skeleton--visible')) removeClass(skeleton, 'idAuth__skeleton--visible')

        // ==========================

        // insert new markup in DOM
        modalContent.innerHTML = html
        // now we can select elements inside the modal

        // ==========================

        // detect newly fetched form
        form = modalContent.querySelector('.idAuth__form')

        if (form) {
          // check if there is supposed to be an automatic redirect when the modal was loaded
          if (form.hasAttribute('data-js-redirect-to')) {
            // Google Analytics tracking code
            if (typeof ga === 'function') {
              ga('m.send', { 'hitType': 'event', 'eventCategory': 'Login', 'eventAction': 'LoginSuccess', 'eventLabel': 'from=Unknown' })
            }
            // redirect
            return setTimeout(function () {
              window.location.href = form.getAttribute('data-js-redirect-to')
            }, 1500)
          }

          // set up validation handling on the new form
          form.addEventListener('submit', function (event) {
            // don't submit the form
            event.preventDefault()
            event.stopPropagation()
            // validate asynchronously instead
            validateForm(form, event)
          }, false)

          // set up click handling on links which are supposed to close current modal
          bindCloseLinks(modalDialog, closeable)

          // set up click handling on links which are supposed to open another modal
          bindModalLinks(form)

          resolve(form)
        }
      } else {
        reject(Error('No content specified for modal'))
      }
    }).catch(function (error) {
      console.error(error)
    })
  }

  var bindModalLinks = function (context) {
    var modalTriggers = context.querySelectorAll('[data-js-auth-modal]')

    if (modalTriggers.length) {
      modalTriggers.forEach(function (el) {
        if (!el.getAttribute('data-modal-loading-bound')) {
          el.addEventListener('click', function (event) {
            var url = el.getAttribute('href')
            event.preventDefault()
            modalContent.innerHTML = ''
            loadModal(url)
            return false
          }, false)
          el.setAttribute('data-modal-loading-bound', 'true')
        }
      })
    }
  }

  var bindCloseLinks = function (context, closeable) {
    // detect elements marked as modal close triggers
    var modalCloseTriggers = context.querySelectorAll('[data-js-close-modal]')
    // convert that NodeList to array so that more can be added
    modalCloseTriggers = Array.prototype.slice.call(modalCloseTriggers)

    // if modal is supposed to be closeable but there isn't a close button, we need to create one
    if (closeable && !context.querySelector('.idAuth__modalCloseButton')) {
      var modalCloseButton = document.createElement('button')

      addClass(modalCloseButton, 'idAuth__modalCloseButton')
      modalCloseButton.setAttribute('type', 'button')
      modalDialog.appendChild(modalCloseButton)

      // add the button to the list of close triggers
      modalCloseTriggers.push(modalCloseButton)
    }

    // set up the behavior of all close triggers
    modalCloseTriggers.forEach(function (el) {
      if (!el.getAttribute('data-modal-closing-bound')) {
        el.addEventListener('click', function (ev) {
          closeModal()
        }, false)
        el.setAttribute('data-modal-closing-bound', 'true')
      }
    })
  }

  var closeModal = function () {
    if (hasClass(overlay, 'idAuth__overlay--visible')) removeClass(overlay, 'idAuth__overlay--visible')
    if (hasClass(body, 'idAuth--open')) removeClass(body, 'idAuth--open')
  }

  // EXPOSE TO GLOBAL
  // ========================================

  return {
    loadModal: loadModal,
    closeModal: closeModal,
    bindModalLinks: bindModalLinks
  }
})()

// stay cosnsitent with legacy function names just in case
window.openlogin = function () {
  window.idAuth.loadModal('login')
}
window.openregshort = function () {
  window.idAuth.loadModal('registration')
}
window.openlostpass = function () {
  window.idAuth.loadModal('forgottenpassword')
}
window.logout = function () {
  window.location = window.idAuthConfig.logout
}

// GLOBAL UTILITY FUNCTIONS
// ===========================================================

// vanilla versions of common jQuery methods --- https://plainjs.com

function hasClass (el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className)
}

function addClass (el, className) {
  if (el.classList) el.classList.add(className)
  else if (!hasClass(el, className)) el.className += ' ' + className
}

function removeClass (el, className) {
  if (el.classList) el.classList.remove(className)
  else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '')
}

function insertAfter (el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling)
}

// form serialization
function serialize (form) {
  var field; var l; var s = []
  if (typeof form === 'object' && form.nodeName === 'FORM') {
    var len = form.elements.length
    for (var i = 0; i < len; i++) {
      field = form.elements[i]
      if (field.name && !field.disabled && field.type !== 'file' && field.type !== 'reset' && field.type !== 'submit' && field.type !== 'button') {
        if (field.type === 'select-multiple') {
          l = form.elements[i].options.length
          for (var j = 0; j < l; j++) {
            if (field.options[j].selected) { s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.options[j].value) }
          }
        } else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
          s[s.length] = encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
        }
      }
    }
  }
  return s.join('&').replace(/%20/g, '+')
}

// matches polyfill
this.Element && (function (ElementPrototype) {
  ElementPrototype.matches = ElementPrototype.matches ||
    ElementPrototype.matchesSelector ||
    ElementPrototype.webkitMatchesSelector ||
    ElementPrototype.msMatchesSelector ||
    function (selector) {
      var node = this; var nodes = (node.parentNode || node.document).querySelectorAll(selector); var i = -1
      while (nodes[++i] && nodes[i] !== node);
      return !!nodes[i]
    }
}(window.Element.prototype))

// closest polyfill
this.Element && (function (ElementPrototype) {
  ElementPrototype.closest = ElementPrototype.closest ||
    function (selector) {
      var el = this
      while (el.matches && !el.matches(selector)) el = el.parentNode
      return el.matches ? el : null
    }
}(window.Element.prototype))

// more utility functions from other sources

// query string parsing
// https://davidwalsh.name/query-string-javascript
function getUrlParameter (name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  var results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

// cross-browser CORS
// https://www.html5rocks.com/en/tutorials/cors/

// create the XHR object
function createCORSRequest (url, method) {
  if (url) {
    var xhr = new window.XMLHttpRequest()
    if ('withCredentials' in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method || 'GET', url, true)
    } else if (typeof XDomainRequest !== 'undefined') {
      // XDomainRequest for IE.
      xhr = new window.XDomainRequest()
      xhr.open(method || 'GET', url)
    } else {
      // CORS not supported.
      xhr = null
    }
    return xhr
  } else {
    return Error('Need a URL to create a CORS request (none given)')
  }
}

// make the actual CORS request
function makeCorsRequest (url, method, data) {
  if (url) {
    // Promisifying XMLHttpRequest
    // https://developers.google.com/web/fundamentals/primers/promises#promisifying_xmlhttprequest
    return new Promise(function (resolve, reject) {
      var xhr = createCORSRequest(url, method || 'GET')
      // if we're sending data, encode it properly
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      }
      // Symfony requires this header for the isXmlHttpRequest() check
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      if (!xhr) {
        reject(Error('CORS not supported'))
      }
      // Response handlers.
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject(Error(xhr.status + ' ' + xhr.statusText))
        }
      }
      xhr.onerror = function () {
        reject(Error('AJAX request failed due to network error'))
      }
      xhr.send(data)
    }).catch(function (error) {
      console.error(error)
    })
  } else {
    return Error('No URL given')
  }
}

// cookie getter
function getCookie (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

// common cookies line
(function() {
    $(document).ready(function() {
        var domain = document.domain;
        if (domain.indexOf("capital") >= 0 || domain.indexOf("dnevnik") >= 0 || domain.indexOf("regal") >= 0 || domain.indexOf("bacchus") >= 0 || domain.indexOf("karieri") >= 0) {
            $('.cookies-banner-button').on('click', function() {
                var cookiesBar = $(this).parents('.cookies-banner-wrapper'),
                    cookiesBarHeight = cookiesBar.height(),
                    wallpaperWrapper = $('#bodywrapper, #wrapper'),
                    wallpaperPos = wallpaperWrapper.css('background-position'),
                    wallpaperPosTop;
                idCreateCookie('cookiesAgreement', 1, 30 * 12 * 10);
                if (wallpaperPos) {
                    wallpaperPos = wallpaperPos.split(' ');
                    wallpaperPosTop = parseInt(wallpaperPos[1]);
                }
                $('.cookies-banner-wrapper').animate({
                    'margin-top': '-' + cookiesBarHeight + 'px'
                }, 700, function() {
                    var wallpaperPosTopNew = (wallpaperPosTop - cookiesBarHeight) + 'px';
                    $(this).remove();
                    $('#bodywrapper, #wrapper').css('background-position', wallpaperPos[0] + ' ' + wallpaperPosTopNew);
                    $('#badmwplink, #badmwplink2').css('top', wallpaperPosTopNew);
                });
                return false;
            });
        } else {
            $('.cookies-banner-button').on('click', function() {
                var cookiesBar = $(this).parents('.cookies-banner-wrapper'),
                    cookiesBarHeight = cookiesBar.height(),
                    wallpaperWrapper = $('body'),
                    wallpaperPos = wallpaperWrapper.css('background-position'),
                    wallpaperPosTop;
                idCreateCookie('cookiesAgreement', 1, 30 * 12 * 10);
                if (wallpaperPos) {
                    wallpaperPos = wallpaperPos.split(' ');
                    wallpaperPosTop = parseInt(wallpaperPos[1]);
                }
                $('.cookies-banner-wrapper').animate({
                    'margin-top': '-' + cookiesBarHeight + 'px'
                }, 700, function() {
                    var wallpaperPosTopNew = (wallpaperPosTop - cookiesBarHeight) + 'px';
                    $(this).remove();
                    $('body').css('background-position', wallpaperPos[0] + ' ' + wallpaperPosTopNew);
                    $('#badmwplink, #badmwplink2').css('top', wallpaperPosTopNew);
                });
                return false;
            });
        }
    });

})();

function idCreateCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
