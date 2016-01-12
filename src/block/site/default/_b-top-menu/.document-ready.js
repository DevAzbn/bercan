
	$('.b-top-menu').each(function(index){
		
		var block = $(this);
		
		var searchbtn = block.find('.search-btn');
		var closesearchbtn = block.find('.search-container .close-search');
		
		searchbtn.on('click', function(event){
			event.preventDefault();
			var btn = $(this);
			
			btn.closest('.menu-list').find('.search-container').toggleClass('active').find('.search-field input').trigger('focus');
		});
		
		closesearchbtn.on('click', function(event){
			event.preventDefault();
			var btn = $(this);
			
			btn.closest('.search-container').toggleClass('active');
		});
		
		block.find('.menu-list .item').each(function(index){
			var item = $(this);
			var _before = $('<span/>',{
				class : 'before',
			});
			var _after = $('<span/>',{
				class : 'after',
			});
			
			item.hover(
				function(event){
					var w = item.find('a.m-item').width();
					var l = (item.width() - w) / 2;
					_before.appendTo(item).css({width : w + 'px', left : l + 'px', });
					_after.appendTo(item);
					
					//$(item.find('a.m-item').attr('href')).addClass('active')
				},
				function(event){
					_before.detach();
					_after.detach();
					
					//$(item.find('a.m-item').attr('href')).removeClass('active')
				}
			);
			
			item.on('click', function(event){
				event.preventDefault();
				block.find('.menu-list .item').removeClass('active');
				$(this).addClass('active').find('a.m-item').trigger('click');
			});
			item.find('a.m-item').on('click', function(event){
				event.preventDefault();
				event.stopPropagation();
				$('.b-top-drd-menu').removeClass('active');
				$($(this).attr('href') + '.b-top-drd-menu').toggleClass('active')
			});
			
		});
		
	});
	