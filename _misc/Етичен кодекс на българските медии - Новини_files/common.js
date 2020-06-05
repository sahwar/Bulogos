/* search button dropdown */
(function() {
	$(document).ready(function() {

		// searchbox
		var gSearchSitesIcons = {
			'idcapital': {ico: 'https://id.capital.bg/img/icons/sites/id_icon.gif', url: 'https://id.capital.bg/search.php?tAction=search', name: 'id.capital.bg'},
			'dnevnik': {ico: 'https://id.capital.bg/img/icons/sites/dnevnik.gif', url: '//www.dnevnik.bg/search.php?tAction=search', name: 'Дневник'},
			// 'live': {ico: 'https://www.dnevnik.bg/live/favicon.gif', url: '//www.dnevnik.bg/live/search.php?tAction=search', name: 'Дневник L!VE'},
			'capital': {ico: 'https://id.capital.bg/img/icons/sites/capital.png', url: '//www.capital.bg/search.php?tAction=search', name: 'Капитал'},
			'karieri': {ico: 'https://id.capital.bg/img/icons/sites/karieri.gif', url: 'http://www.karieri.bg/search/ft.php?tAction=search', name: 'Кариери'},
			'regal': {ico: 'https://id.capital.bg/img/icons/sites/regal.gif', url: 'http://www.regal.bg/search.php?tAction=search', name: 'Регал'},
			// 'stroitelstvo': {ico: 'https://id.capital.bg/img/icons/sites/common.gif', url: 'http://www.gradat.bg/search.php?tAction=search', name: 'Строителство Градът'},
			// 'indeximoti': {ico: 'https://id.capital.bg/img/icons/sites/common.gif', url: 'http://www.indeximoti.bg/search.php?tAction=search', name: 'Индекс Имоти'},
			'bacchus': {ico: 'https://id.capital.bg/img/icons/sites/bacchus.gif', url: 'http://www.bacchus.bg/search.php?tAction=search', name: 'Бакхус'}
		};

		// focus/blur
		$('#lgSearchForm input[type="text"]').focus(function() {
			if (this.value == $(this).attr('label')) {
				this.value = '';
			}
		}).blur(function() {
			if (this.value == '' && $(this).attr('label')) {
				this.value = $(this).attr('label');
			}
		});

		$(".where").click(function(event) {
			event.stopPropagation();
			$(".sites").toggle();
			if ($(".sites").css("display") == "block" ) $(".where").addClass("on");
			else  $(".where").removeClass("on");
		});
		
		$(".sites").click(function(event) {
			event.stopPropagation();
		});

		$('body').bind('click', function() { 
			$(".sites").hide();
			$(".where").removeClass("on");
			$(".avatar ul").hide();
			$(".avatar .dropdown").removeClass("on");
		});

		var lCurSite;var lCurSite;
		var searchForm = $('#lgSearchForm');
		
		if (document.location.href.match(/id\.capital\.bg/)) {
			lCurSite = 'idcapital';
		} else {
			lCurSite = document.location.host.match(/([\d\w]+)\.[\d\w:]+$/)[1];
		}
			
		if (lCurSite && gSearchSitesIcons[lCurSite]) {
			var label = 'Търсене в ' + gSearchSitesIcons[lCurSite].name;
	
			if (lCurSite == 'idcapital') {
				label = 'Търсене по име в ' + gSearchSitesIcons[lCurSite].name;
			}
			
			$('input[name="stext"]', searchForm).val(label).attr('label', label);
			$('a.where img', searchForm).attr('src', gSearchSitesIcons[lCurSite].ico);
			$(searchForm).attr('action', gSearchSitesIcons[lCurSite].url);
			
			$('input[name="searchin"]').each(function() {
				if (this.id == 'srch_' + lCurSite) {
				}
			});
		}
		
		$('input[name="searchin"]', searchForm).change(function() {
			var val = this.value,
				label = 'Търсене в ' + gSearchSitesIcons[val].name;
			
			if (val == 'idcapital') {
				label = 'Търсене по име в ' + gSearchSitesIcons[lCurSite].name;
			}
			
			$('input[name="stext"]', searchForm).val(label).attr('label', label);
			$('a.where img', searchForm).attr('src', gSearchSitesIcons[val].ico);
			$(searchForm).attr('action', gSearchSitesIcons[val].url);
		});
		
		$('input[name="stext"]', searchForm)
			.focusin(function() {
				$(this).addClass('on');
			})
			.focusout(function() {
				$(this).removeClass('on');
			})
			.keydown(function(e) {
				if (e.which == 13) {
					e.preventDefault();
					
					if (this.value) {
						searchForm.submit();
					}
				}
			});
		$('.submit', searchForm).click(function() {
			var searchf = $('input[name="stext"]', searchForm);
			
			if (searchf.val() && searchf.val() != searchf.attr('label')) {
				searchForm.submit();
			}
			return false;
		});

	});
})();