	
	$(function() {
	//$('.b-top-cart').each(function(index){
		
		var block = $('.b-top-cart');
		
		var items = block.find('.position');
		
		var cart_btn_counter = $('.b-top-header .b-top-cart-counter');
		
		block.on('recalc-all-position', function(event){
			event.preventDefault();
			var _sum = 0;
			var _icnt = 0;
			var _acnt = 0;
			items.each(function(index){
				var pos = $(this);
				var amount = parseInt(pos.attr('data-amount'));
				var cost = parseInt(pos.attr('data-cost'));
				
				_sum = _sum + (amount * cost);
				_icnt++;
				_acnt = _acnt + amount;
			});
			block.attr('data-sum', _sum);
			block.attr('data-iamount', _icnt);
			block.attr('data-aamount', _acnt);
			block.find('.sum-cont .sum span').html(_sum);
			cart_btn_counter.html(_icnt);
		});
		block.trigger('recalc-all-position');
		
		items.each(function(index){
			
			var pos = $(this);
			var poscnt = pos.find('.pos-counter');
			var d = poscnt.find('a.d');
			var u = poscnt.find('a.u');
			var c = poscnt.find('span.c');
			var sum = pos.find('.sum span');
			var deletebtn = pos.find('.delete a');
			
			pos.on('add-one-item', function(event){
				event.preventDefault();
				var amount = parseInt(pos.attr('data-amount'));
				var cost = parseInt(pos.attr('data-cost'));
				var orderitem = parseInt(pos.attr('data-orderitem'));
				var cost_id = parseInt(pos.attr('data-cost_id'));
				var product_id = parseInt(pos.attr('data-product_id'));
				
				amount = amount + 1;
				
				Shop.cart.set(product_id, cost_id, orderitem, amount, function(data){
					pos.attr('data-amount', amount);
					c.html(pos.attr('data-amount'));
					
					sum.html(amount * cost);
					
					block.trigger('recalc-all-position');
				});
				
			});
			
			pos.on('delete-one-item', function(event){
				event.preventDefault();
				var amount = parseInt(pos.attr('data-amount'));
				var cost = parseInt(pos.attr('data-cost'));
				var orderitem = parseInt(pos.attr('data-orderitem'));
				var cost_id = parseInt(pos.attr('data-cost_id'));
				var product_id = parseInt(pos.attr('data-product_id'));
				
				amount = amount - 1;
				if(amount < 0) {
					amount = 0;
					
					block.trigger('recalc-all-position');
				} else {
					
					Shop.cart.set(product_id, cost_id, orderitem, amount, function(data){
						pos.attr('data-amount', amount);
						c.html(pos.attr('data-amount'));
						
						sum.html(amount * cost);
						
						block.trigger('recalc-all-position');
					});
					
				}
				
			});
			
			pos.on('delete-all-items', function(event){
				event.preventDefault();
				var amount = 0;
				var cost = parseInt(pos.attr('data-cost'));
				var orderitem = parseInt(pos.attr('data-orderitem'));
				var cost_id = parseInt(pos.attr('data-cost_id'));
				var product_id = parseInt(pos.attr('data-product_id'));
				
				Shop.cart.set(product_id, cost_id, orderitem, amount, function(data){
					pos.attr('data-amount', amount);
					c.html(pos.attr('data-amount'));
					
					sum.html(amount * cost);
					
					pos.empty().remove();
					
					block.trigger('recalc-all-position');
				});
				
			});
			
			u.on('click', function(event){
				event.preventDefault();
				event.stopPropagation();
				pos.trigger('add-one-item');
			});
			
			d.on('click', function(event){
				event.preventDefault();
				event.stopPropagation();
				pos.trigger('delete-one-item');
			});
			
			deletebtn.on('click', function(event){
				event.preventDefault();
				event.stopPropagation();
				pos.trigger('delete-all-items');
			});
			
		});
		
		block.on('click', function(event){
			//event.preventDefault();
			
			var btn = $(this);
			
		});
	
	});
	//});
	