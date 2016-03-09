	$('.modal-after-send-faq').on('click', function(event){
		//event.preventDefault();
		//event.stopPropagation();
		
		var btn = $(this);
		$('#modal-after-send-faq').trigger('setActive');
		
	});
	
	$('[data-toggle="tooltip"]').tooltip();
	
	$('form.fastbuy-product-form').on('submit', function(event){
		event.preventDefault();
		//event.stopPropagation();
		
		console.log('.fastbuy-product-form submit');
		
		var form = $(this);
		var product_id = form.find('input[name="product_id"]').val();
		var name = form.find('input[name="name"]').val();
		var phone = form.find('input[name="phone"]').val();
		
		Shop.cart.fastbuy(product_id, name, phone, function(data){
			
			form.closest('.item#modal-fastbuy-product-' + product_id).trigger('setPassive');
			
		});
		
		return false;
		
	});
	
	$('form.subscribe-product-form').on('submit', function(event){
		event.preventDefault();
		//event.stopPropagation();
		
		console.log('.subscribe-product-form submit');
		
		var form = $(this);
		var product_id = form.find('input[name="product_id"]').val();
		var email = form.find('input[name="email"]').val();
		
		Shop.cart.fastbuy(product_id, email, function(data){
			
			form.closest('.item#modal-product-subscribe-' + product_id).trigger('setPassive');
			
		});
		
		return false;
		
	});
	
	$('form.order-cert-product-form').on('submit', function(event){
		event.preventDefault();
		//event.stopPropagation();
		
		console.log('.order-cert-product-form submit');
		
		var form = $(this);
		var product_id = form.find('input[name="product_id"]').val();
		var email = form.find('input[name="email"]').val();
		
		Shop.cart.order_cert(product_id, email, function(data){
			
			form.closest('.item#modal-product-cert-' + product_id).trigger('setPassive');
			
		});
		
		return false;
		
	});