
	$('.b-review-content').each(function(index){
		
		var block = $(this);
		/*
		block.find('.review-load a').on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			
			btn.addClass('active');
			
			setTimeout(function(){
				btn.removeClass('active');
			},2500);
			
		}).eq(0).trigger('click');
		*/
		
		var cols = block.find('.review-col');
		var item_list = block.find('.item_list');
		
		item_list.find('.item').each(function(index){
			
			var item = $(this);
			var min = 1000000;
			var acol = cols.eq(0);
			cols.each(function(_index){
				var col = $(this);
				if(col.height() < min) {
					min = col.height();
					acol = col;
				}
			});
			acol.append(item);
			
		});
		
		cols.append($('<div/>', {
			class : 'clear',
		}));
		
		
		/*
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
		*/
		
		block.find('form#form-feedback-create').on('submit', function(event){
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
	