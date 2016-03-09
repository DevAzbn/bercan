var Shop = {
	
	cart : {
		
		set : function(product, cost, orderitem, amount, cb) {
			//cmsAPI.callbacks
			cmsAPI.call({
				service:'cart',
				method:'set',
				product_id:product,
				orderitem_id:orderitem,
				cost_id:cost,
				amount:amount,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
		like : function(product, cb) {
			//cmsAPI.callbacks
			cmsAPI.call({
				service:'cart',
				method:'like',
				product_id:product,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
		clear : function(cb) {
			var data = {};
			cb(data);
		},
		
		delete_from_order : function(orderitem_id, cb) {
			
			cmsAPI.call({
				service:'cart',
				method:'delete_from_order',
				orderitem_id:orderitem_id,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
		create_review : function(product_id, view_as, email, main_info, cb) {
			cmsAPI.call({
				service:'cart',
				method:'create_review',
				product_id:product_id,
				view_as:view_as,
				email:email,
				main_info:main_info,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
		addone : function(product, boxing, taste, cb) {
			//cmsAPI.callbacks
			cmsAPI.call({
				service:'cart',
				method:'addone',
				product_id:product,
				cost_id:boxing,
				taste_id:taste,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
		fastbuy : function(product, name, phone, cb) {
			//cmsAPI.callbacks
			
			console.log('Shop.cart.fastbuy');
			
			cmsAPI.call({
				service:'cart',
				method:'fastbuy',
				product_id:product,
				name:name,
				phone:phone,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
		subscribe : function(product, email, cb) {
			//cmsAPI.callbacks
			
			console.log('Shop.cart.subscribe');
			
			cmsAPI.call({
				service:'cart',
				method:'subscribe',
				product_id:product,
				email:email,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
		order_cert : function(product, email, cb) {
			//cmsAPI.callbacks
			
			console.log('Shop.cart.order_cert');
			
			cmsAPI.call({
				service:'cart',
				method:'order_cert',
				product_id:product,
				email:email,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
	},
	
	post : {
		
		create_comment : function(post, name, email, text, cb) {
			var data = {};
			cb(data);
		},
		
		upload_post_img : function(img, cb) {
			var data = {};
			cb(data);
		},
		
		like : function(post, cb) {
			//cmsAPI.callbacks
			cmsAPI.call({
				service:'post',
				method:'like',
				post_id:post,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
	},
	
	feedback : {
		
		add : function(view_as, where, title, main_info, cb) {
			//cmsAPI.callbacks
			cmsAPI.call({
				service:'feedback',
				method:'add',
				view_as:view_as,
				where:where,
				title:title,
				main_info:main_info,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
	},
	
	faq : {
		
		add : function(view_as, email, main_info, cb) {
			//cmsAPI.callbacks
			cmsAPI.call({
				service:'faq',
				method:'add',
				view_as:view_as,
				email:email,
				main_info:main_info,
				callback:'ShopCartSet'
			});
			
			cb({});
		},
		
	},
	
}