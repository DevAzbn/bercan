
	$('.b-product-content').each(function(index){
		
		var block = $(this);
		
		$('.photos .other-photos .item').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			var src = btn.find('img').attr('src');
			
			btn.closest('.photos').find('.main-photo img').attr('src', src);
		});
		
		$('.main-info .header ul li a').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			$('.main-info .header ul li').removeClass('active');
			btn.parent().addClass('active');
			
			$('.main-info .info-block').removeClass('active').filter(btn.attr('href')).addClass('active');
			
		}).eq(0).trigger('click');
	});
	