	
	$('.b-add-post-form').each(function(index){
		
		var block = $(this);
		var change_img = block.find('.form-upload-img-btn');
		
		change_img.jqfeFileUploader({
			action:'/profile/upload/img/?w=600&h=600&crop=1&gray=0&path=profile/img',
			name:'icon_img',
			callback:function(file){
				
				var img = $('<input/>',{
					type : 'hidden',
					name : 'img',
					value : file,
				}).insertAfter(change_img);
				change_img.html('Обложка загружена');
				
			}
		});
		
	});
	