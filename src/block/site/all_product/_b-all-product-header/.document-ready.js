
	$('.b-all-product-header').each(function(index){
		
		var block = $(this);
		
		var product_type = block.find('.product-list-type');
		var filters = block.find('.filters');
		
		product_type.find('.product-list-type-item').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			
			if(btn.hasClass('product-list-type-grid')) {
				
				$('.b-all-product-catalog .right-cont .product-list').removeClass('as-list');
				
			} else if(btn.hasClass('product-list-type-list')) {
				
				$('.b-all-product-catalog .right-cont .product-list').addClass('as-list');
				
			}
			
			product_type.find('.product-list-type-item').removeClass('active');
			btn.addClass('active');
			
		}).eq(0).trigger('click');
		
		filters.find('select.flt-select[name="maker"]').on('change', function(event){
			event.preventDefault();
			
			var sel=$(this);
			var opt=sel.find('option:selected').eq(0);
			location.href='?maker='+opt.attr('value');
		});
		
	});
	