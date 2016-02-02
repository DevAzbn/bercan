
	$('.b-order-header').each(function(index){
		
		var block = $(this);
		
		block.find('.review-title .add-review').on('click', function(event){
			event.preventDefault();
			
			$('.b-review-form').jqfeScrollTo({speed:555, diff:0});
		});
		
	});
	