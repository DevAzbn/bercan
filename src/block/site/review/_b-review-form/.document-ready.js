	
	
	$('.b-order-content.b-review-form').each(function(index){
		
		var block = $(this);
		
		block.find('form#form-feedback-create').on('submit', function(event){
			event.preventDefault();
			event.stopPropagation();
			
		});
		
		block.find('form#form-feedback-create input[type="submit"]').on('click', function(event){
			//event.preventDefault();
			//event.stopPropagation();
			
			var btn = $(this);
			//alert('123');
			
			var view_as = block.find('form#form-feedback-create input[name="view_as"]');
			var where = block.find('form#form-feedback-create input[name="where"]');
			var title = block.find('form#form-feedback-create input[name="title"]');
			var main_info = block.find('form#form-feedback-create input[name="main_info"]');
			
			Shop.feedback.add(view_as.val(), where.val(), title.val(), main_info.val(), function() {
				
				view_as.val('');
				where.val('');
				title.val('');
				main_info.val('');
				btn.val('Отзыв добавлен').toggleClass('r2w w2r disabled');
				setTimeout(function(){
					
					btn.val('Отправить').toggleClass('r2w w2r disabled');
					
				},2500);
				
			});
			
		});
		
		
	});
	