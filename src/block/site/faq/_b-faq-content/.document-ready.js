
	$('.b-faq-content').each(function(index){
		
		var block = $(this);
		
		block.find('.faq-cont .faq-list .item').hide();
		
		var more = function() {
			
			console.log('.b-faq-content more-function');
			
			for(var i = 0; i < 5; i++) {
				block.find('.faq-cont .faq-list .item').filter(':hidden').eq(0).fadeIn('fast');
			}
			
			if(block.find('.faq-cont .faq-list .item').filter(':hidden').size() > 0) {
				
			} else {
				block.find('.faq-load a').empty().remove();
			}
			
		}
		
		block.find('.faq-load a').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			
			btn.addClass('active');
			
			setTimeout(function(){
				btn.removeClass('active');
				
				more();
			},500);
			
		}).eq(0).trigger('click');
		
		block.find('form#form-faq-create').on('submit', function(event){
			event.preventDefault();
			event.stopPropagation();
			
		});
		
		block.find('.order-form input[type="submit"]').on('click', function(event){
			//event.preventDefault();
			//event.stopPropagation();
			
			var btn = $(this);
			//alert('123');
			
			var view_as = block.find('.b-review-form .order-form input[name="view_as"]');
			var email = block.find('.b-review-form .order-form input[name="email"]');
			var main_info = block.find('.b-review-form .order-form input[name="main_info"]');
			
			Shop.faq.add(view_as.val(), email.val(), main_info.val(), function() {
				
				view_as.val('');
				email.val('');
				main_info.val('');
				btn.val('Вопрос добавлен').toggleClass('r2w w2r disabled');
				setTimeout(function(){
					
					btn.val('Отправить').toggleClass('r2w w2r disabled');
					
				},2500);
				
			});
			
		});
		
	});
	