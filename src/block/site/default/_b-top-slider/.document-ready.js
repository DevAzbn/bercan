
	$('.fluid-block').each(function(index){
		
		var block = $(this);
		
		block.on('click', function(event){
			//event.preventDefault();
			var btn = $(this);
			
			$('.b-top-menu').trigger('hide-drd-menu');
			$('.b-top-cart').removeClass('active');
			$('.b-top-header .cart-btn').removeClass('active');
		})
		
	});
	