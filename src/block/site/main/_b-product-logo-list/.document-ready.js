	
	$('.b-product-logo-list').each(function(index){
		
		var block = $(this);
		var slb = block.find('.scroll-logo-block');
		var cont = slb.find('.item-list');
		slb.width(slb.parent().width());
		
		var scrolling = function() {
			cont.animate({scrollLeft : cont.width()}, 16000, 'linear', function(){
				cont.animate({scrollLeft : 0}, 16000, 'linear', function(){
					scrolling();
				});
			});
		};
		if(cont.size()) {
			scrolling();
		}
		
	});
	