
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
		
		block.on('hide-drd-menu', function(event){
			event.preventDefault();
			event.stopPropagation();
			block.find('.b-top-drd-menu.active').removeClass('active');
			//block.find('.menu-list .item').removeClass('active');
		});
		
		
		block.find('.menu-list .item').each(function(index){
			
			var item = $(this);
			
			var _before = item.find('.before');
			var _after = item.find('.after');
			
			var w = item.find('a.m-item').width();
			var l = (item.width() - w) / 2;
			
			_before.css({width : w + 'px', left : l + 'px', });
			
			item.on('mouseover', function(event){
				_before.addClass('colored');
				_after.addClass('colored');
				
				//block.trigger('hide-drd-menu');
				//$(item.find('a.m-item').attr('href')).addClass('active');
			});
			
			/*
			item.on('click', function(event){
				event.preventDefault();
				block.find('.menu-list .item').removeClass('active');
				$(this).addClass('active').find('a.m-item').trigger('click');
			});
			*/
			
			item.on('click', function(event){
				event.preventDefault();
				event.stopPropagation();
				block.trigger('hide-drd-menu');
				if(item.hasClass('go2page')) {
					window.location.href = item.find('a').attr('href');
				} else {
					$(item.find('a.m-item').attr('href')).addClass('active');
				}
			});
			
			
		});
		
		
	});
	