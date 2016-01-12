
	$('.path-cont').each(function(index){
		
		var block = $(this);
		var a = block.find('a');
		
		a.filter(':last-child').on('click', function(event){
			event.preventDefault();
		});
		
	});
	