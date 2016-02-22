
	$('.b-post-view-content').each(function(index){
		
		var block = $(this);
		
		block.find('.post-operations .like-btn').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			var btn = $(this);
			var post_id = btn.attr('data-post_id');
			
			Shop.post.like(post_id, function(data){
				
			});
			
			btn.toggleClass('active');
			
		});
		
	});
	