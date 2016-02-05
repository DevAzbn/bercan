	/*
	$('.b-registration-content').each(function(index){
		
		var block = $(this);
		
		block.find('.order-form .radio-item .item .variant input[type="radio"]').on('click', function(event){
			event.stopPropagation();
		});
		
		block.find('.order-form .radio-item .item .variant').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			btn.find('input[type="radio"]').trigger('click');
			//btn.find('input[type="radio"]').trigger('click');
			
		});
		
		block.find('.order-form .checkbox-item label').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			btn.parent().find('input[type="checkbox"]').trigger('click');
			//btn.find('input[type="radio"]').trigger('click');
			
		});
		
	});
	*/
	
	$('form#form-profile-create').each(function(index){
		
		var form = $(this);
		var yes = true;
		var pass = form.find('input[name="pass"]');
		var pass2 = form.find('input[name="pass2"]');
		var login = form.find('input[name="login"]');
		var view_as = form.find('input[name="view_as"]');
		var email = form.find('input[name="email"]');
		var upload = form.find('.upload-photo input[type="button"]');
		var submit = form.find('.btn-item input[type="submit"]');
		
		var check = function() {
			
			yes = true;
			
			if(login.val() == '') {
				yes = false;
			}
			
			if(view_as.val() == '') {
				yes = false;
			}
			
			if(email.val() == '') {
				yes = false;
			}
			
			if(pass.val() == pass2.val()) {
				pass2.closest('.input-item').addClass('pass-confirm');
			} else {
				pass2.closest('.input-item').removeClass('pass-confirm');
				yes = false;
			}
			
			if(yes) {
				submit.prop('disabled', false).fadeIn();
			} else {
				submit.prop('disabled', 'disabled').fadeOut();
			}
			
		};
		
		check();
		
		form.on('submit', function(event){
			
			check();
			
			if(yes) {
				//alert('ok');
				//form.trigger('submit');
			} else {
				event.preventDefault();
				alert('Проверьте введенные данные!');//return false;
			}
			
		});
		
		login.on('keyup', function(event){
			check();
		});
		
		view_as.on('keyup', function(event){
			check();
		});
		
		email.on('keyup', function(event){
			check();
		});
		
		pass.on('keyup', function(event){
			check();
		});
		
		pass2.on('keyup', function(event){
			check();
		});
		
		upload.jqfeFileUploader({
			action:'/profile/upload/img/?w=600&h=600&crop=1&gray=0&path=profile/img',
			name:'icon_img',
			callback:function(file){
				//alert(file);
				upload.prev('span.title').html('');
				var img = $('<img/>',{
					src : file,
					width : 128,
					height : 128,
				}).appendTo(upload.prev('span.title'));
				var img = $('<input/>',{
					type : 'hidden',
					name : 'img',
					value : file,
				}).appendTo(upload.prev('span.title'));
				var br = $('<br/>',{
					
				}).appendTo(upload.prev('span.title'));
			}
		});
		
	});
	