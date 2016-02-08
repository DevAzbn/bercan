
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
		
	});
	