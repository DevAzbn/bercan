
	$('.b-contact').each(function(index){
		
		var block = $(this);
		
		var mMap;
		
		function initYandexMap() {
			
			if($('#b-contact-map-cont-map').size()) {
				mMap = new ymaps.Map('b-contact-map-cont-map', {
					center: [60.949286, 76.61202],
					zoom: 16,
				}, {
					searchControlProvider: 'yandex#search'
				});
				mMap.behaviors.disable('scrollZoom');
				
				var op_office = new ymaps.Placemark([60.949286, 76.61202], {
					hintContent: 'Беркан'
				}, {
					//iconLayout: 'default#image',
					//iconImageHref: '/wp-content/themes/solnechny/img/yandex-map-icon.png',
					//iconImageSize: [104, 115],
					//iconImageOffset: [-52, -115]
				});
				mMap.geoObjects.add(op_office);
			}
		
		}
		
		if(typeof ymaps != 'undefined') {
			ymaps.ready(initYandexMap);
		}
		
	});
	