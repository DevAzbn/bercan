
	$('.b-order-content').each(function(index){
		
		var block = $(this);
		
		block.find('.order-form .radio-item .item .variant input[type="radio"]').on('click', function(event){
			event.stopPropagation();
		});
		
		block.find('.order-form .radio-item .item .variant').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			btn.find('input[type="radio"]').trigger('click');
			//btn.find('input[type="radio"]').trigger('click');
			
			if(btn.hasClass('personal-delivery')) {
				$('.b-order-content .cart-sum-container .sum-info').fadeIn('fast');
			} else {
				$('.b-order-content .cart-sum-container .sum-info').fadeOut('fast');
			}
			
			if(btn.hasClass('online-method')) {
				$('.order-form .radio-item.pay .not-online-method').fadeOut('fast');
			} else {
				$('.order-form .radio-item.pay .not-online-method').fadeIn('fast');
			}
			
			
		});
		
		block.find('.order-form .checkbox-item label').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			btn.parent().find('input[type="checkbox"]').trigger('click');
			//btn.find('input[type="radio"]').trigger('click');
			
		});
		
		block.find('.cart-container .position').each(function(index) {
			
			var pos = $(this);
			
			pos.find('.delete').on('click', function(event){
				event.preventDefault();
				
				var btn = $(this);
				Shop.cart.delete_from_order(pos.attr('data-orderitem_id'), function(data){
					
					pos.empty().remove();
					
				});
				
			});
			
		});
		
	});
	
	$('form#form-cart-create').each(function(index){
		
		var form = $(this);
		var yes = true;
		var adr = form.find('input[name="order[adr]"]');
		var phone = form.find('input[name="order[phone]"]');
		var email = form.find('input[name="order[email]"]');
		var chyes = form.find('input[name="order[yes]"]');
		var submit = form.find('.btn-item input[type="submit"]');
		
		var check = function() {
			
			yes = true;
			
			if(adr.val() == '') {
				yes = false;
			}
			
			if(phone.val() == '') {
				yes = false;
			}
			
			if(email.val() == '') {
				yes = false;
			}
			
			if(chyes.prop('checked')) {
				
			} else {
				yes = false;
			}
			
			console.log('Проверка данных формы');
			
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
		
		adr.on('keyup', function(event){
			check();
		});
		
		phone.on('keyup', function(event){
			check();
		});
		
		email.on('keyup', function(event){
			check();
		});
		
		chyes.on('click', function(event){
			check();
		});
		
	});
	