
	$('.b-top-cart').each(function(index){
		
		var block = $(this);
		
		var items = block.find('.position');
		
		var cart_btn_counter = $('.b-top-header .b-top-cart-counter');
		
		block.on('recalc-all-position', function(event){
			event.preventDefault();
			var _sum = 0;
			var _icnt = 0;
			var _acnt = 0;
			items.each(function(index){
				var pos = $(this);
				var count = parseInt(pos.attr('data-count'));
				var cost = parseInt(pos.attr('data-cost'));
				
				_sum = _sum + (count * cost);
				_icnt++;
				_acnt = _acnt + count;
			});
			block.attr('data-sum', _sum);
			block.attr('data-icount', _icnt);
			block.attr('data-acount', _acnt);
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
				var count = parseInt(pos.attr('data-count'));
				var cost = parseInt(pos.attr('data-cost'));
				
				count = count + 1;
				
				Shop.cart.set(pos.attr('data-product_id'), count, function(data){
					pos.attr('data-count', count);
					c.html(pos.attr('data-count'));
					
					sum.html(count * cost);
					
					block.trigger('recalc-all-position');
				});
				
			});
			
			pos.on('delete-one-item', function(event){
				event.preventDefault();
				var count = parseInt(pos.attr('data-count'));
				var cost = parseInt(pos.attr('data-cost'));
				count = count - 1;
				if(count < 0) {
					count = 0;
					
					block.trigger('recalc-all-position');
				} else {
					
					Shop.cart.set(pos.attr('data-product_id'), count, function(data){
						pos.attr('data-count', count);
						c.html(pos.attr('data-count'));
						
						sum.html(count * cost);
						
						block.trigger('recalc-all-position');
					});
					
				}
				
			});
			
			pos.on('delete-all-items', function(event){
				event.preventDefault();
				var count = 0;
				var cost = parseInt(pos.attr('data-cost'));
				
				pos.attr('data-count', count);
				c.html(pos.attr('data-count'));
				
				sum.html(count * cost);
				
				block.trigger('recalc-all-position');
			});
			
			u.on('click', function(event){
				event.preventDefault();
				pos.trigger('add-one-item');
			});
			
			d.on('click', function(event){
				event.preventDefault();
				pos.trigger('delete-one-item');
			});
			
			deletebtn.on('click', function(event){
				event.preventDefault();
				pos.trigger('delete-all-items');
			});
			
		});
		
		block.on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			
		});
		
	});
	