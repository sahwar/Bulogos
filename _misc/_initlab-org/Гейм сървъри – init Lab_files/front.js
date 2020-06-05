( function ( $ ) {

	// parse query string
	var parse_str = function( name, str ) {
		var regex = new RegExp( '[?&]' + name.replace( /[\[\]]/g, '\\$&' ) + '(=([^&#]*)|&|#|$)' ),
			results = regex.exec( '&' + str );

		return ( ! results || ! results[2] ? '' : decodeURIComponent( results[2].replace( /\+/g, ' ' ) ) );
	}

	// observe DOM changes
	var observe_script_dom = ( function () {
		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
			eventListenerSupported = window.addEventListener;

		return function ( obj, only_added, callback ) {
			if ( MutationObserver ) {
				// define a new observer
				var obs = new MutationObserver( function ( mutations, observer ) {
					if ( only_added ) {
						if ( mutations[0].addedNodes.length )
							callback();
					} else {
						if ( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
							callback();
					}
				} );

				// have the observer observe for changes in children
				obs.observe( obj, { childList: true, subtree: true } );
			} else if ( eventListenerSupported ) {
				obj.addEventListener( 'DOMNodeInserted', callback, false );

				if ( !only_added ) {
					obj.addEventListener( 'DOMNodeRemoved', callback, false );
				}
			}
		}
	} )();

	// ready event handler
	$( document ).on( 'ready' + rlArgs.customEvents, function () {
		var containers = [];

		// check for infinite galleries
		$( '.rl-gallery-container' ).each( function() {
			var container = $( this );

			// is it ifinite scroll gallery?
			if ( container.hasClass( 'rl-pagination-infinite' ) ) {
				containers.push( container );
			} else {
				// remove loading class
				container.removeClass( 'rl-loading' );
			}
		} );

		// any infinite galleries?
		if ( containers.length > 0 ) {
			for ( var i = 0; i < containers.length; i++ ) {
				var container = containers[i],
					gallery = container.find( '.rl-gallery' ),
					gallery_id = parseInt( container.data( 'gallery_id' ) ),
					gallery_scroll_type = container.find( '.rl-pagination-bottom' ).data( 'button' ),
					gallery_button = typeof gallery_scroll_type !== 'undefined' && gallery_scroll_type === 'manually';

				// initialize infinite scroll
				gallery.infiniteScroll( {
					path: '.rl-gallery-container[data-gallery_id="' + gallery_id + '"] .rl-pagination-bottom .next',
					append: '.rl-gallery-container[data-gallery_id="' + gallery_id + '"] .rl-gallery-item' + ( gallery.hasClass( 'rl-masonry-gallery' ) || gallery.hasClass( 'rl-basicmasonry-gallery' ) ? '-no-append' : '' ),
					status: false,
					hideNav: '.rl-gallery-container[data-gallery_id="' + gallery_id + '"] .rl-pagination-bottom',
					prefill: ! gallery_button,
					loadOnScroll: true,
					scrollThreshold: gallery_button ? false : 0,
					button: gallery_button ? '.rl-gallery-container[data-gallery_id="' + gallery_id + '"] .rl-load-more' : false,
					debug: false,
					history: false,
					onInit: function() {
						// infinite with button?
						if ( container.hasClass( 'rl-pagination-infinite' ) && gallery_button ) {
							// remove loading class
							container.removeClass( 'rl-loading' );
						}

						// store gallery ID for append event
						var _gallery_id = gallery_id;

						// request event
						this.on( 'request', function( path ) {
							// add loading class
							container.addClass( 'rl-loading' );
						} );

						// append event
						this.on( 'append', function ( response, path, items ) {
							// remove loading class
							container.removeClass( 'rl-loading' );

							$.event.trigger( {
								type: 'doResponsiveLightbox',
								script: rlArgs.script,
								selector: rlArgs.selector,
								args: rlArgs,
								pagination_type: 'infinite',
								gallery_id: _gallery_id,
								masonry: gallery.hasClass( 'rl-masonry-gallery' ) || gallery.hasClass( 'rl-basicmasonry-gallery' ),
								infinite: {
									gallery: gallery,
									response: response,
									items: items
								}
							} );
						} );
					}
				} );
			}
		}

		// initialize event
		$.event.trigger( {
			type: 'doResponsiveLightbox',
			script: rlArgs.script,
			selector: rlArgs.selector,
			args: rlArgs
		} );
	} );

	// pagination
	$( document ).on( 'click', '.rl-pagination a.page-numbers', function ( e ) {
		var link = $( this ),
			container = link.closest( '.rl-gallery-container' );

		// ajax type pagination?
		if ( container.hasClass( 'rl-pagination-ajax' ) ) {
			e.preventDefault();
			e.stopPropagation();

			var gallery_id = container.data( 'gallery_id' );

			// add loading class
			container.addClass( 'rl-loading' );

			$.post( rlArgs.ajaxurl, {
				action: 'rl-get-gallery-page-content',
				gallery_id: gallery_id,
				page: parse_str( 'rl_page', link.prop( 'href' ) ),
				nonce: rlArgs.nonce
			} ).done( function ( response ) {
				// replace container with new content
				container.replaceWith( $( response ).removeClass( 'rl-loading' ) );

				// trigger main event
				$.event.trigger( {
					type: 'doResponsiveLightbox',
					script: rlArgs.script,
					selector: rlArgs.selector,
					args: rlArgs,
					pagination_type: 'ajax',
					gallery_id: gallery_id
				} );
			} ).fail( function () {
				container.removeClass( 'rl-loading' );
			} );

			return false;
		}
	} );

	// this is similar to the WP function add_action();
	$( document ).on( 'doResponsiveLightbox', function ( event ) {
		if ( typeof event.masonry !== 'undefined' && event.masonry === true ) {
			return false;
		}

		var script = event.script,
			selector = event.selector,
			args = event.args;

		if ( typeof script === 'undefined' || typeof selector === 'undefined' ) {
			return false;
		}

		rl_view_image = function ( script, url ) {
			$.event.trigger( {
				type: 'doLightboxViewImage',
				script: script,
				url: url
			} );
		}

		rl_hide_image = function ( script, url ) {
			$.event.trigger( {
				type: 'doLightboxHideImage',
				script: script,
				url: url
			} );
		}

		// WooCommerce 3.0+ compatibility
		setTimeout( function () {
			var flex = $( '.flex-viewport' );

			// if ( flex.length )
				// flex.css( 'cursor', 'pointer' );

			if ( args.woocommerce_gallery === '1' ) {
				var gallery = $( '.woocommerce-product-gallery' );

				if ( gallery.find( '.woocommerce-product-gallery__trigger' ).length === 0 ) {
					gallery.prepend( '<a href="#" class="woocommerce-product-gallery__trigger">🔍</a>' );

					gallery.on( 'click', '.woocommerce-product-gallery__trigger', function( e ) {
						e.preventDefault();
						e.stopPropagation();

						if ( flex.length )
							flex.find( '.flex-active-slide a[data-rel]' ).trigger( 'click' );
						else
							gallery.find( 'a[data-rel]' ).first().trigger( 'click' );
					} );
				}
			}
		}, 10 );

		// init lightbox
		switch ( script ) {
			case 'swipebox':
				var slide = $( '#swipebox-overlay' ).find( '.slide.current' ),
					image_source = '',
					allow_hide = false,
					close_executed = false;

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).swipebox( {
					useCSS: ( args.animation === '1' ? true : false ),
					useSVG: ( args.useSVG === '1' ? true : false ),
					hideCloseButtonOnMobile: ( args.hideCloseButtonOnMobile === '1' ? true : false ),
					removeBarsOnMobile: ( args.removeBarsOnMobile === '1' ? true : false ),
					hideBarsDelay: ( args.hideBars === '1' ? parseInt( args.hideBarsDelay ) : 0 ),
					videoMaxWidth: parseInt( args.videoMaxWidth ),
					loopAtEnd: ( args.loopAtEnd === '1' ? true : false ),
					afterOpen: function () {
						close_executed = false;

						// update current slide container
						slide = $( '#swipebox-overlay' ).find( '.slide.current' );

						// get image source
						var image = slide.find( 'img' ).attr( 'src' );

						// valid image source?
						if ( typeof image !== 'undefined' ) {
							image_source = image;

							// trigger image view
							rl_view_image( script, image_source );
						} else {
							image_source = '';
						}

						// add current slide observer
						observe_script_dom( document.getElementById( 'swipebox-slider' ), false, function () {
							if ( image_source === '' ) {
								// get image source
								var image = slide.find( 'img' ).attr( 'src' );

								// valid image source?
								if ( typeof image !== 'undefined' ) {
									image_source = image;

									// trigger image view
									rl_view_image( script, image_source );
								} else {
									image_source = '';
								}
							}
						} );
					},
					nextSlide: function () {
						// update current slide container
						slide = $( '#swipebox-overlay' ).find( '.slide.current' );

						// get image source
						var image = slide.find( 'img' ).attr( 'src' );

						// valid image source?
						if ( typeof image !== 'undefined' ) {
							image_source = image;

							// trigger image view
							rl_view_image( script, image_source );
						} else {
							image_source = '';
						}
					},
					prevSlide: function () {
						// update current slide container
						slide = $( '#swipebox-overlay' ).find( '.slide.current' );

						// get image source
						var image = slide.find( 'img' ).attr( 'src' );

						// valid image source?
						if ( typeof image !== 'undefined' ) {
							image_source = image;

							// trigger image view
							rl_view_image( script, image_source );
						} else {
							image_source = '';
						}
					},
					afterClose: function () {
						// afterClose event executed
						close_executed = true;

						// allow to hide image?
						if ( allow_hide ) {
							// trigger image hide
							rl_hide_image( script, image_source );

							allow_hide = false;
						}
					}
				} );

				// additional event to prevent rl_hide_image to execure while opening modal
				$( window ).on( 'resize', function () {
					if ( !close_executed ) {
						allow_hide = true;
					}
				} );
				break;

			case 'prettyphoto':
				var view_disabled = false,
					last_image = '';

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).each( function () {
					var el = $( this );

					// set description
					el.attr( 'title', el.data( 'rl_caption' ) );

					// set title
					el.find( 'img' ).attr( 'alt', el.data( 'rl_title' ) );
				} );

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).prettyPhoto( {
					hook: 'data-rel',
					animation_speed: args.animationSpeed,
					slideshow: ( args.slideshow === '1' ? parseInt( args.slideshowDelay ) : false ),
					autoplay_slideshow: ( args.slideshowAutoplay === '1' ? true : false ),
					opacity: args.opacity,
					show_title: ( args.showTitle === '1' ? true : false ),
					allow_resize: ( args.allowResize === '1' ? true : false ),
					allow_expand: ( args.allowExpand === '1' ? true : false ),
					default_width: parseInt( args.width ),
					default_height: parseInt( args.height ),
					counter_separator_label: args.separator,
					theme: args.theme,
					horizontal_padding: parseInt( args.horizontalPadding ),
					hideflash: ( args.hideFlash === '1' ? true : false ),
					wmode: args.wmode,
					autoplay: ( args.videoAutoplay === '1' ? true : false ),
					modal: ( args.modal === '1' ? true : false ),
					deeplinking: ( args.deeplinking === '1' ? true : false ),
					overlay_gallery: ( args.overlayGallery === '1' ? true : false ),
					keyboard_shortcuts: ( args.keyboardShortcuts === '1' ? true : false ),
					social_tools: ( args.social === '1' ? '<div class="pp_social"><div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href=' + location.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' : '' ),
					ie6_fallback: true,
					changepicturecallback: function () {
						// is view disabled?
						if ( view_disabled ) {
							// enable view
							view_disabled = false;

							return;
						}

						last_image = $( '#pp_full_res' ).find( 'img' ).attr( 'src' );

						// trigger image view
						rl_view_image( script, last_image );

						// is expanding allowed?
						if ( args.allowExpand === '1' ) {
							// disable changepicturecallback event after expanding
							$( 'a.pp_expand' ).on( 'click', function () {
								view_disabled = true;
							} );
						}
					},
					callback: function () {
						// trigger image hide
						rl_hide_image( script, last_image );
					}
				} );
				break;

			case 'fancybox':
				var last_image = '';

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).fancybox( {
					modal: ( args.modal === '1' ? true : false ),
					overlayShow: ( args.showOverlay === '1' ? true : false ),
					showCloseButton: ( args.showCloseButton === '1' ? true : false ),
					enableEscapeButton: ( args.enableEscapeButton === '1' ? true : false ),
					hideOnOverlayClick: ( args.hideOnOverlayClick === '1' ? true : false ),
					hideOnContentClick: ( args.hideOnContentClick === '1' ? true : false ),
					cyclic: ( args.cyclic === '1' ? true : false ),
					showNavArrows: ( args.showNavArrows === '1' ? true : false ),
					autoScale: ( args.autoScale === '1' ? true : false ),
					scrolling: args.scrolling,
					centerOnScroll: ( args.centerOnScroll === '1' ? true : false ),
					opacity: ( args.opacity === '1' ? true : false ),
					overlayOpacity: parseFloat( args.overlayOpacity / 100 ),
					overlayColor: args.overlayColor,
					titleShow: ( args.titleShow === '1' ? true : false ),
					titlePosition: args.titlePosition,
					transitionIn: args.transitions,
					transitionOut: args.transitions,
					easingIn: args.easings,
					easingOut: args.easings,
					speedIn: parseInt( args.speeds ),
					speedOut: parseInt( args.speeds ),
					changeSpeed: parseInt( args.changeSpeed ),
					changeFade: parseInt( args.changeFade ),
					padding: parseInt( args.padding ),
					margin: parseInt( args.margin ),
					width: parseInt( args.videoWidth ),
					height: parseInt( args.videoHeight ),
					onComplete: function () {
						last_image = $( '#fancybox-content' ).find( 'img' ).attr( 'src' );

						// trigger image view
						rl_view_image( script, last_image );
					},
					onClosed: function () {
						// trigger image hide
						rl_hide_image( script, last_image );
					}
				} );

				break;

			case 'nivo':
				$.each( $( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ), function () {
					var attr = $( this ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr === 'undefined' || attr == false ) {
						// if not found then try to check rel attribute for backward compatibility
						attr = $( this ).attr( 'rel' );
					}

					// for some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
					if ( typeof attr !== 'undefined' && attr !== false ) {
						var match = attr.match( new RegExp( selector + '\\-(gallery\\-(?:[\\da-z]{1,4}))', 'ig' ) );

						if ( match !== null ) {
							$( this ).attr( 'data-lightbox-gallery', match[0] );
						}
					}

				} );

				var observer_initialized = false,
					change_allowed = true,
					last_image = '';

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).nivoLightbox( {
					effect: args.effect,
					clickOverlayToClose: ( args.clickOverlayToClose === '1' ? true : false ),
					keyboardNav: ( args.keyboardNav === '1' ? true : false ),
					errorMessage: args.errorMessage,
					afterShowLightbox: function ( lightbox ) {
						var content = $( lightbox )[0].find( '.nivo-lightbox-content' );

						// is observer initialized?
						if ( !observer_initialized ) {
							// turn it off
							observer_initialized = true;

							// add content observer
							observe_script_dom( document.getElementsByClassName( 'nivo-lightbox-content' )[0], true, function () {
								if ( change_allowed ) {
									last_image = content.find( '.nivo-lightbox-image img' ).attr( 'src' );

									// trigger image view
									rl_view_image( script, last_image );

									// disallow observer changes
									change_allowed = false;
								}
							} );
						}
					},
					afterHideLightbox: function () {
						// allow observer changes
						change_allowed = true;

						// trigger image hide
						rl_hide_image( script, last_image );
					},
					onPrev: function ( element ) {
						// disallow observer changes
						change_allowed = false;

						last_image = element[0].attr( 'href' );

						// trigger image view
						rl_view_image( script, last_image );
					},
					onNext: function ( element ) {
						// disallow observer changes
						change_allowed = false;

						last_image = element[0].attr( 'href' );

						// trigger image view
						rl_view_image( script, last_image );
					}
				} );
				break;

			case 'imagelightbox':
				var selectors = [ ],
					last_image = '';

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {
					// make unique
					selectors = $.unique( selectors );

					$( selectors ).each( function ( i, item ) {
						if ( typeof event.pagination_type !== 'undefined' ) {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).each( function() {
								$( this ).off( 'click.imageLightbox' );
							} );
						}

						$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).imageLightbox( {
							animationSpeed: parseInt( args.animationSpeed ),
							preloadNext: ( args.preloadNext === '1' ? true : false ),
							enableKeyboard: ( args.enableKeyboard === '1' ? true : false ),
							quitOnEnd: ( args.quitOnEnd === '1' ? true : false ),
							quitOnImgClick: ( args.quitOnImageClick === '1' ? true : false ),
							quitOnDocClick: ( args.quitOnDocumentClick === '1' ? true : false ),
							onLoadEnd: function () {
								last_image = $( '#imagelightbox' ).attr( 'src' );
 
								// trigger image view
								rl_view_image( script, last_image );
							},
							onEnd: function () {
								// trigger image hide
								rl_hide_image( script, last_image );
							}
						} );
					} );
				}
				break;

			case 'tosrus':
				var selectors = [ ],
					last_image = '';

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {
					// make unique
					selectors = $.unique( selectors );

					$( selectors ).each( function ( i, item ) {
						if ( typeof event.pagination_type !== 'undefined' ) {
							$( 'body' ).find( '.tosrus-' + item ).remove();

							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).each( function() {
								$( this ).off( 'click.tos' );
							} );
						}

						var tos = $( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).tosrus( {
							infinite: ( args.infinite === '1' ? true : false ),
							autoplay: {
								play: ( args.autoplay === '1' ? true : false ),
								pauseOnHover: ( args.pauseOnHover === '1' ? true : false ),
								timeout: args.timeout
							},
							effect: args.effect,
							keys: {
								prev: ( args.keys === '1' ? true : false ),
								next: ( args.keys === '1' ? true : false ),
								close: ( args.keys === '1' ? true : false )
							},
							pagination: {
								add: ( args.pagination === '1' ? true : false ),
								type: args.paginationType
							},
							// forced
							show: false,
							buttons: true,
							caption: {
								add: true,
								attributes: [ "title" ]
							},
							wrapper: {
								classes: 'tosrus-' + item,
								onClick: args.closeOnClick === '1' ? 'close' : 'toggleUI'
							}
						} );

						tos.bind( 'sliding.tos', function ( event, number ) {
							last_image = $( $( event.target ).find( '.tos-slider .tos-slide' )[number] ).find( 'img' ).attr( 'src' );

							// trigger image view
							rl_view_image( script, last_image );
						} );

						tos.bind( 'closing.tos', function () {
							// trigger image hide
							rl_hide_image( script, last_image );
						} );
					} );
				}
				break;

			case 'featherlight':
				var selectors = [ ],
					last_image = '';

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {
					// make unique
					selectors = $.unique( selectors );

					// set defaults
					$.extend( $.featherlight.defaults, {
						openSpeed: parseInt( args.openSpeed ),
						closeSpeed: parseInt( args.closeSpeed ),
						closeOnClick: args.closeOnClick,
						closeOnEsc: ( args.closeOnEsc === '1' ? true : false ),
						afterOpen: function ( event ) {
							last_image = event.currentTarget.href;

							// trigger image view
							rl_view_image( script, last_image );
						},
						afterClose: function () {
							// trigger image hide
							rl_hide_image( script, last_image );
						}
					} );

					$( selectors ).each( function ( i, item ) {
						if ( typeof event.pagination_type !== 'undefined' ) {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).each( function() {
								$( this ).off( 'click.featherlight' );
							} );
						}

						// gallery?
						if ( /-gallery-/.test( item ) ) {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).featherlightGallery( {
								galleryFadeIn: parseInt( args.galleryFadeIn ),
								galleryFadeOut: parseInt( args.galleryFadeOut ),
								previousIcon: '&#10094;',
								nextIcon: '&#10095;'
							} );
						// video?
						} else if ( /-video-/.test( item ) ) {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).featherlight();
						// single image?
						} else {
							$( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ).featherlight();
						}
					} );

				}
				break;

			case 'magnific':
				var selectors = [ ],
					last_image = '';

				$( 'a[rel*="' + selector + '"], a[data-rel*="' + selector + '"]' ).each( function ( i, item ) {
					var attr = $( item ).attr( 'data-rel' );

					// check data-rel attribute first
					if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
						selectors.push( attr );
					// if not found then try to check rel attribute for backward compatibility
					else {
						attr = $( item ).attr( 'rel' );

						if ( typeof attr !== 'undefined' && attr !== false && attr !== 'norl' )
							selectors.push( attr );
					}
				} );

				if ( selectors.length > 0 ) {
					// make unique
					selectors = $.unique( selectors );

					$( selectors ).each( function ( i, item ) {
						var subselector = $( 'a[data-rel="' + item + '"], a[rel="' + item + '"]' ),
							element = $( subselector[0] ),
							media_type = element.data( 'magnific_type' ),
							content_type = element.data( 'rl_content' );

						// check content type first
						if ( typeof content_type !== 'undefined' ) {
							media_type = content_type;
						}

						// then media type if needed
						if ( typeof media_type === 'undefined' ) {
							media_type = 'image';
						}

						subselector.magnificPopup( {
							type: media_type === 'gallery' ? 'image' : ( media_type === 'video' ? 'iframe' : media_type ),
							disableOn: args.disableOn,
							midClick: args.midClick === '1',
							preloader: args.preloader === '1',
							closeOnContentClick: args.closeOnContentClick === '1',
							closeOnBgClick: args.closeOnBgClick === '1',
							closeBtnInside: args.closeBtnInside === '1',
							showCloseBtn: args.showCloseBtn === '1',
							enableEscapeKey: args.enableEscapeKey === '1',
							alignTop: args.alignTop === '1',
							autoFocusLast: args.autoFocusLast === '1',
							fixedContentPos: args.fixedContentPos === 'auto' ? 'auto' : ( args.fixedContentPos === '1' ),
							fixedBgPos: args.fixedBgPos === 'auto' ? 'auto' : ( args.fixedBgPos === '1' ),
							image: {
								titleSrc: function ( item ) {
									return item.el.attr( 'data-rl_title' ) + '<small>' + item.el.attr( 'data-rl_caption' ) + '</small>';
								}
							},
							gallery: {
								enabled: subselector.length > 1 && media_type === 'gallery',
								navigateByImgClick: true,
								preload: [0,1]
							},
							callbacks: {
								close: function() {
									rl_hide_image( script, this.currItem.src );
								},
								imageLoadComplete: function() {
									// trigger image view
									rl_view_image( script, this.currItem.src );
								}
							}
						} );
					} );
				}
				break;
		}
	} );

} )( jQuery );