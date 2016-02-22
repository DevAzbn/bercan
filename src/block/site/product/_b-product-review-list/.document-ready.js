	
	
	$('.b-product-review-list').each(function(index){
		
		var block = $(this);
		
		block.find('form#form-product-review-create').on('submit', function(event){
			event.preventDefault();
			event.stopPropagation();
			
		});
		
		block.find('form#form-product-review-create input[type="submit"]').on('click', function(event){
			//event.preventDefault();
			//event.stopPropagation();
			
			var btn = $(this);
			//alert('123');
			
			var product_id = block.find('form#form-product-review-create input[name="product_id"]');
			var view_as = block.find('form#form-product-review-create input[name="view_as"]');
			var email = block.find('form#form-product-review-create input[name="email"]');
			var main_info = block.find('form#form-product-review-create input[name="main_info"]');
			
			Shop.cart.create_review(product_id.val(), view_as.val(), email.val(), main_info.val(), function() {
				
				view_as.val('');
				email.val('');
				main_info.val('');
				btn.val('Отзыв добавлен').toggleClass('r2w w2r disabled');
				setTimeout(function(){
					
					btn.val('Отправить').toggleClass('r2w w2r disabled');
					
				},2500);
				
			});
			
		});
		
		
	});
	