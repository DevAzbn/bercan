	$('.modal-after-send-faq').on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		
		var btn = $(this);
		$('#modal-after-send-faq').trigger('setActive');
		
	});