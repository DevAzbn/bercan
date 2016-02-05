
	$('.b-all-product-catalog').each(function(index){
		
		var block = $(this);
		var cat_list = block.find('.left-cont.category-list .category-list');
		
		cat_list.find('.item > .link').on('click', function(event){
			//event.preventDefault();
			//event.stopPropagation();
			
			var btn = $(this);
			if(btn.next('.children').size() > 0) {
				event.preventDefault();
				btn.closest('.item').toggleClass('active');
			}
			
		}).eq(0).trigger('click');
		
	});
	