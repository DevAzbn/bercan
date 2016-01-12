
	$('.b-review-content').each(function(index){
		
		var block = $(this);
		
		block.find('.review-load a').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			
			btn.addClass('active');
			
			setTimeout(function(){
				btn.removeClass('active');
			},2500);
			
		}).eq(0).trigger('click');
		
	});
	