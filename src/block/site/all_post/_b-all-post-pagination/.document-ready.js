	
	$('.b-all-post-pagination').each(function(index){
		
		var block = $(this);
		
		block.find('.go-to-filters').on('click', function(event){
			event.preventDefault();
			
			$('.b-top-header').jqfeScrollTo({speed:555, diff:0});
		});
		
	});
	