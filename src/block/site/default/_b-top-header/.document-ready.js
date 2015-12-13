
	$('.b-top-header').each(function(index){
		event.preventDefault();
		
		var block = $(this);
		
		var cartbtn = block.find('.cart-btn');
		var menubtn = block.find('.menu-btn');
		
		cartbtn.on('click', function(event){
			event.preventDefault();
			var btn = $(this);
			
			if(menubtn.hasClass('active')) {
				menubtn.trigger('click')
			}
			
			btn.toggleClass('active');
			$('.b-top-cart').toggleClass('active');
		})
		
		menubtn.on('click', function(event){
			event.preventDefault();
			var btn = $(this);
			
			if(cartbtn.hasClass('active')) {
				cartbtn.trigger('click')
			}
			
			btn.toggleClass('active');
			$('.b-drd-menu').toggleClass('active').height($('.b-top-menu .menu-list').height());
		})
		
	});
	