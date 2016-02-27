
	$('.b-product-content').each(function(index){
		
		var block = $(this);
		
		
		block.find('.photos .other-photos .item').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			var src = btn.find('img').attr('src');
			
			btn.closest('.photos').find('.main-photo img').attr('src', src);
		});
		
		
		block.find('.main-info .header ul li a').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			$('.main-info .header ul li').removeClass('active');
			btn.parent().addClass('active');
			
			$('.main-info .info-block').removeClass('active').filter(btn.attr('href')).addClass('active');
			
		}).eq(0).trigger('click');
		
		
		block.find('.order-info .btn-cont .like-btn').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			var product = btn.attr('data-product_id');
			
			Shop.cart.like(product, function(data){
				
			});
			
			btn.toggleClass('active');
			
		});
		
		
		block.find('.order-info .boxing a.item').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			var product = btn.closest('.boxing').attr('data-product_id');
			var boxing = btn.attr('data-product_boxing');
			var real = btn.attr('data-boxing_cost');
			var old = btn.attr('data-boxing_oldcost');
			
			block.find('.order-info .cost-cont .real span').html(real);
			if(old > 0) {
				block.find('.order-info .cost-cont .old span').html(old);
			} else {
				block.find('.order-info .cost-cont .old span').html('');
			}
			
			block.find('.order-info .taste').hide();
			block.find('.order-info .taste a.item').removeClass('active');
			block.find('.order-info .taste[data-cost_id="' + boxing + '"]').show().find('a.item').eq(0).trigger('click');
			
			block.find('.order-info .cost-cont').attr('data-product_boxing', boxing);
			
			block.find('.order-info .boxing a.item').removeClass('active');
			btn.addClass('active');
			
		}).eq(0).trigger('click');
		
		
		block.find('.order-info .taste a.item').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			var product = btn.closest('.taste').attr('data-product_id');
			var taste = btn.attr('data-product_taste');
			
			block.find('.order-info .cost-cont').attr('data-product_taste', taste);
			
			block.find('.order-info .taste a.item').removeClass('active');
			btn.addClass('active');
			
		});//.eq(0).trigger('click');
		
		
		block.find('.order-info .btn-cont .addone-to-cart').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			var product = parseInt(btn.attr('data-product_id'));
			var boxing = parseInt(block.find('.order-info .cost-cont').attr('data-product_boxing'));
			var taste = parseInt(block.find('.order-info .cost-cont').attr('data-product_taste'));
			
			Shop.cart.addone(product, boxing, taste, function(data){
				
				btn.html('В корзине').toggleClass('r2w w2r disabled');
				setTimeout(function(){
					
					btn.html('Купить').toggleClass('r2w w2r disabled');
					$('.b-top-cart').trigger('ajax-reload');
					
				},2500);
				
			});
			
			btn.toggleClass('active');
			
		});
		
		
	});
	