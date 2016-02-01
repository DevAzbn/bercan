
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
		
		block.on('hide-drd-menu', function(){
			block.find('.b-top-drd-menu').removeClass('active');
			block.find('.menu-list .item').removeClass('active');
		});
		
		block.find('.menu-list .item').each(function(index){
			
			var item = $(this);
			
			var _before = $('<span/>',{
				class : 'before',
			});
			
			var _after = $('<span/>',{
				class : 'after',
			});
			
			_before.appendTo(item);//.detach();
			_after.appendTo(item);//.detach();
			
			item.on('mouseover', function(event){
				var w = item.find('a.m-item').width();
				var l = (item.width() - w) / 2;
				
				_before.css({width : w + 'px', left : l + 'px', }).addClass('colored');
				_after.addClass('colored');
				
				block.trigger('hide-drd-menu');
				//item.trigger('click');
				$(item.find('a.m-item').attr('href')).addClass('active');
				
				block.find('.menu-list .item').removeClass('active');
				item.addClass('active');
				
			});
			
			item.on('mouseleave', function(event){
				if(!$(this).hasClass('active')) {
					_before.removeClass('colored');
					_after.removeClass('colored');
				}
				
			});
			
			/*
			item.hover(
				function(event){
					var w = item.find('a.m-item').width();
					var l = (item.width() - w) / 2;
					
					_before.css({width : w + 'px', left : l + 'px', }).addClass('colored');
					_after.addClass('colored');
					
					block.trigger('hide-drd-menu');
					//item.trigger('click');
					$(item.find('a.m-item').attr('href')).addClass('active');
				},
				function(event){
					//_before.detach();
					//_after.detach();
					
					////$(item.find('a.m-item').attr('href')).removeClass('active');
					//$(item.find('a.m-item')).removeClass('active');
				}
			);
			*/
			
			item.on('click', function(event){
				event.preventDefault();
				block.find('.menu-list .item').removeClass('active');
				$(this).addClass('active').find('a.m-item').trigger('click');
			});
			item.find('a.m-item').on('click', function(event){
				event.preventDefault();
				event.stopPropagation();
				$('.b-top-drd-menu').removeClass('active');
				$($(this).attr('href') + '.b-top-drd-menu').toggleClass('active');
			});
			
			
		});
		
	});
	