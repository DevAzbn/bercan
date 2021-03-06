
	$('.b-top-drd-menu').each(function(index){
		
		var block = $(this);
		
		var pritem = block.find('.product-item');
		
		var pblock = pritem.find('.point-block');
		var variants = pritem.find('.item-variant');
		
		block.on('mouseleave', function(event){
			block.removeClass('active');
		});
		
		pblock.find('.point').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			var btn = $(this);
			
			variants.hide();
			variants.eq(btn.index()).fadeIn('fast');
			
			pblock.find('.point').removeClass('active');
			btn.addClass('active');
		}).eq(0).trigger('click');
		
	});
	