
	$('.b-sale-leader-list').each(function(index){
		event.preventDefault();
		
		var block = $(this);
		var menu = block.find('.menu ul');
		
		$('.b-sale-leader-gallery').hide().eq(0).fadeIn('fast');
		
		menu.find('li a').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			menu.find('li').removeClass('active');
			btn.parent().addClass('active');
			
			$('.b-sale-leader-gallery').fadeOut('fast');
			$(btn.attr('href')).fadeIn('fast');
		}).eq(0).trigger('click');
		
		/*
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
		*/
	});
	