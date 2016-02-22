	
	$('.b-profile-content').each(function(index){
		
		var block = $(this);
		var change_img = block.find('.img-cont .change-img a');
		
		/*
		change_img.on('click', function(event){
			alert(123);
		});
		*/
		
		change_img.jqfeFileUploader({
			action:'/profile/upload/img/?w=600&h=600&crop=1&gray=0&path=profile/img',
			name:'icon_img',
			callback:function(file){
				//alert(file);
				block.find('.img-cont .image.resp').attr('src', file);
				cmsAPI.call({
					service:'profile',
					method:'update_img',
					url:file,
					callback:'ShopCartSet',
				});
				//
				//cmsAPI.call()
			}
		});
		
	});
	