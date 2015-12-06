
	$('.b-top-menu').each(function(index){
		event.preventDefault();
		
		var block = $(this);
		
		var searchbtn = block.find('.search-btn');
		var closesearchbtn = block.find('.search-container .close-search');
		
		searchbtn.on('click', function(event){
			event.preventDefault();
			var btn = $(this);
			
			btn.closest('.menu-list').find('.search-container').toggleClass('active').find('.search-field input').trigger('focus');
		});
		
		closesearchbtn.on('click', function(event){
			event.preventDefault();
			var btn = $(this);
			
			btn.closest('.search-container').toggleClass('active');
		})
		
	});
	