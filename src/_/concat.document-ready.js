$(".arrow-slider").each(function(i){var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(".code-editable-block").each(function(e){var o=$(this),t=o.find(".code-name").eq(0),d=o.find(".code-value").eq(0),c=o.find(".code-status").eq(0);$(document.body).on("click.code-editable",".code-editable-block .code-btn.open",function(e){$.get("/pagebuilder/code-editable/open",{name:t.val()},function(e){d.text(e),c.text("opened")})}),$(document.body).on("click.code-editable",".code-editable-block .code-btn.save",function(e){$.post("/pagebuilder/code-editable/save",{name:t.val(),value:d.text()},function(e){c.text(e)})});var n=window.location.hash.substr(1);""!=n&&(t.val(n),o.find(".code-btn.open").trigger("click"))});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});
$(".b-add-post-form").each(function(i){var a=$(this),e=a.find(".form-upload-img-btn");e.jqfeFileUploader({action:"/profile/upload/img/?w=600&h=600&crop=1&gray=0&path=profile/img",name:"icon_img",callback:function(i){$("<input/>",{type:"hidden",name:"img",value:i}).insertAfter(e);e.html("Обложка загружена")}})});
$(".b-all-post-pagination").each(function(e){var o=$(this);o.find(".go-to-filters").on("click",function(e){e.preventDefault(),$(".b-top-header").jqfeScrollTo({speed:555,diff:0})})});
$(".b-all-product-catalog").each(function(t){var i=$(this),e=i.find(".left-cont.category-list .category-list");e.find(".item > .link").on("click",function(t){var i=$(this);i.next(".children").size()>0&&(t.preventDefault(),i.closest(".item").toggleClass("active"))}).eq(0).trigger("click"),e.find('.item > a.link[href="'+window.location.pathname+'"]').parents(".item").addClass("active")});
$(".b-all-product-header").each(function(t){var e=$(this),a=e.find(".product-list-type"),i=e.find(".filters");a.find(".product-list-type-item").on("click",function(t){t.preventDefault(),t.stopPropagation();var e=$(this);e.hasClass("product-list-type-grid")?$(".b-all-product-catalog .right-cont .product-list").removeClass("as-list"):e.hasClass("product-list-type-list")&&$(".b-all-product-catalog .right-cont .product-list").addClass("as-list"),a.find(".product-list-type-item").removeClass("active"),e.addClass("active")}).eq(0).trigger("click"),i.find('select.flt-select[name="maker"]').on("change",function(t){t.preventDefault();var e=$(this),a=e.find("option:selected").eq(0);location.href="?maker="+a.attr("value")}),i.find('select.flt-select[name="order_by"]').on("change",function(t){t.preventDefault();var e=$(this),a=e.find("option:selected").eq(0);location.href="?order_by="+a.attr("value")})});
$(".b-contact").each(function(a){function e(){if($("#b-contact-map-cont-map").size()){n=new ymaps.Map("b-contact-map-cont-map",{center:[60.949286,76.61202],zoom:16},{searchControlProvider:"yandex#search"}),n.behaviors.disable("scrollZoom");var a=new ymaps.Placemark([60.949286,76.61202],{hintContent:"Беркан"},{});n.geoObjects.add(a)}}var n;$(this);"undefined"!=typeof ymaps&&ymaps.ready(e)});
$(".modal-after-send-faq").on("click",function(t){$(this);$("#modal-after-send-faq").trigger("setActive")}),$('[data-toggle="tooltip"]').tooltip(),$("form.fastbuy-product-form").on("submit",function(t){t.preventDefault(),console.log(".fastbuy-product-form submit");var o=$(this),e=o.find('input[name="product_id"]').val(),i=o.find('input[name="name"]').val(),n=o.find('input[name="phone"]').val();return Shop.cart.fastbuy(e,i,n,function(t){o.closest(".item#modal-fastbuy-product-"+e).trigger("setPassive")}),!1}),$("form.subscribe-product-form").on("submit",function(t){t.preventDefault(),console.log(".subscribe-product-form submit");var o=$(this),e=o.find('input[name="product_id"]').val(),i=o.find('input[name="email"]').val();return Shop.cart.fastbuy(e,i,function(t){o.closest(".item#modal-product-subscribe-"+e).trigger("setPassive")}),!1});
$(".b-modal-container").each(function(t){var e=$(this),i=e.find(".modal-block").eq(0),o=e.find(".white-container").eq(0),n=e.find(".hide-modal");e.find(".item");e.on("setActive",function(t){e.css({height:$(document).height()+"px"}).addClass("active"),i.css({top:$(document).scrollTop()+50+"px"})}),e.on("setPassive",function(t){e.removeClass("active")}),e.on("click",function(t){t.preventDefault(),e.trigger("setPassive")}),n.on("click",function(t){t.preventDefault(),e.trigger("setPassive")}),o.on("click",function(t){t.stopPropagation()})}),$(".b-modal-container .item").on("click",function(t){t.stopPropagation()}),$(".b-modal-container .item").on("setActive",function(t){$(this).closest(".b-modal-container").trigger("setActive"),$(this).closest(".b-modal-container").find(".grid-row.item").removeClass("active"),$(this).addClass("active")}),$(".b-modal-container .item").on("setPassive",function(t){$(this).removeClass("active").closest(".b-modal-container").trigger("setPassive")}),$(".b-modal-btn").on("click",function(t){t.preventDefault(),t.stopPropagation(),console.log(".b-modal-btn click");var e=$(this),i=e.attr("href"),o=$(".b-modal-container .item").filter(i);o.size()>0?o.trigger("setActive"):o.trigger("setPassive")}),$(".b-modal-hide-btn").on("click",function(t){t.stopPropagation(),$(this).closest(".b-modal-container").find(".item.active").trigger("setPassive")}),$(".b-modal-fastlook").on("click",function(t){t.preventDefault(),t.stopPropagation(),console.log(".b-modal-fastlook click");var e=$(this),i=e.attr("data-product_id"),o=$(".b-modal-container .item#modal-fastlook-"+i);o.size()>0?o.trigger("setActive"):o.trigger("setPassive")});
$(function(){var t=$(".b-top-cart"),a=t.find(".position"),r=$(".b-top-header .b-top-cart-counter");t.on("ajax-reload",function(r){$.get("/cart/ajax_reload/",{},function(r){t.find(".cart-ajax-reload").empty().html(r),a=t.find(".position"),t.trigger("recalc-all-position"),t.trigger("set-onclick-triggers")})}),t.on("recalc-all-position",function(n){n.preventDefault();var e=0,o=0,i=0;a=t.find(".position"),a.each(function(t){var a=$(this),r=parseInt(a.attr("data-amount")),n=parseInt(a.attr("data-cost"));e+=r*n,o++,i+=r}),t.attr("data-sum",e),t.attr("data-iamount",o),t.attr("data-aamount",i),t.find(".sum-cont .sum span").html(e),r.html(i)}),t.on("set-onclick-triggers",function(r){r.preventDefault(),a=t.find(".position"),a.each(function(a){var r=$(this),n=r.find(".pos-counter"),e=n.find("a.d"),o=n.find("a.u"),i=n.find("span.c"),d=r.find(".sum span"),c=r.find(".delete a");r.on("add-one-item",function(a){a.preventDefault();var n=parseInt(r.attr("data-amount")),e=parseInt(r.attr("data-cost")),o=parseInt(r.attr("data-orderitem")),c=parseInt(r.attr("data-cost_id")),p=parseInt(r.attr("data-product_id"));n+=1,Shop.cart.set(p,c,o,n,function(a){r.attr("data-amount",n),i.html(r.attr("data-amount")),d.html(n*e),t.trigger("recalc-all-position")})}),r.on("delete-one-item",function(a){a.preventDefault();var n=parseInt(r.attr("data-amount")),e=parseInt(r.attr("data-cost")),o=parseInt(r.attr("data-orderitem")),c=parseInt(r.attr("data-cost_id")),p=parseInt(r.attr("data-product_id"));n-=1,0>n?(n=0,t.trigger("recalc-all-position")):Shop.cart.set(p,c,o,n,function(a){r.attr("data-amount",n),i.html(r.attr("data-amount")),d.html(n*e),t.trigger("recalc-all-position")})}),r.on("delete-all-items",function(a){a.preventDefault();var n=0,e=parseInt(r.attr("data-cost")),o=parseInt(r.attr("data-orderitem")),c=parseInt(r.attr("data-cost_id")),p=parseInt(r.attr("data-product_id"));Shop.cart.set(p,c,o,n,function(a){r.attr("data-amount",n),i.html(r.attr("data-amount")),d.html(n*e),r.empty().remove(),t.trigger("recalc-all-position")})}),o.on("click",function(t){t.preventDefault(),t.stopPropagation(),r.trigger("add-one-item")}),e.on("click",function(t){t.preventDefault(),t.stopPropagation(),r.trigger("delete-one-item")}),c.on("click",function(t){t.preventDefault(),t.stopPropagation(),r.trigger("delete-all-items")})})}),$(".b-top-cart").trigger("ajax-reload")});
$(".b-top-drd-menu").each(function(i){var e=$(this),n=e.find(".product-item"),t=n.find(".point-block"),a=n.find(".item-variant");e.on("mouseleave",function(i){e.removeClass("active")}),t.find(".point").on("click",function(i){i.preventDefault(),i.stopPropagation();var e=$(this);a.hide(),a.eq(e.index()).fadeIn("fast"),t.find(".point").removeClass("active"),e.addClass("active")}).eq(0).trigger("click")});
$(".b-top-header").each(function(t){var e=$(this),i=e.find(".cart-btn"),a=e.find(".menu-btn");i.on("click",function(t){t.preventDefault(),t.stopPropagation();var e=$(this);$(".b-top-menu").trigger("hide-drd-menu"),a.hasClass("active")&&a.trigger("click"),e.toggleClass("active"),$(".b-top-cart").trigger("ajax-reload").toggleClass("active")}),a.on("click",function(t){t.preventDefault();var e=$(this);$(".b-top-menu").trigger("hide-drd-menu"),i.hasClass("active")&&i.trigger("click"),e.toggleClass("active"),$(".b-drd-menu").toggleClass("active").height($(".b-top-menu .menu-list").height())})});
$(".b-top-menu").each(function(e){var t=$(this),n=t.find(".search-btn"),i=t.find(".search-container .close-search");n.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".menu-list").find(".search-container").toggleClass("active").find(".search-field input").trigger("focus")}),i.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".search-container").toggleClass("active")}),t.on("hide-drd-menu",function(e){e.preventDefault(),e.stopPropagation(),t.find(".b-top-drd-menu.active").removeClass("active")}),t.find(".menu-list .item").each(function(e){var n=$(this),i=n.find(".before"),a=n.find(".after"),o=n.find("a.m-item").width(),s=(n.width()-o)/2;i.css({width:o+"px",left:s+"px"}),n.on("mouseover",function(e){i.addClass("colored"),a.addClass("colored")}),n.on("click",function(e){e.preventDefault(),e.stopPropagation(),t.trigger("hide-drd-menu"),n.hasClass("go2page")?window.location.href=n.find("a").attr("href"):$(n.find("a.m-item").attr("href")).addClass("active")})})});
$(".fluid-block").each(function(e){var t=$(this);t.on("click",function(e){$(this);$(".b-top-menu").trigger("hide-drd-menu"),$(".b-top-cart").removeClass("active"),$(".b-top-header .cart-btn").removeClass("active")})});
$(".path-cont").each(function(t){var n=$(this),c=n.find("a");c.filter(":last-child").on("click",function(t){t.preventDefault()})});
$(".b-faq-content").each(function(i){var e=$(this);e.find(".faq-cont .faq-list .item").hide();var n=function(){console.log(".b-faq-content more-function");for(var i=0;5>i;i++)e.find(".faq-cont .faq-list .item").filter(":hidden").eq(0).fadeIn("fast");e.find(".faq-cont .faq-list .item").filter(":hidden").size()>0||e.find(".faq-load a").empty().remove()};e.find(".faq-load a").on("click",function(i){i.preventDefault();var e=$(this);e.addClass("active"),setTimeout(function(){e.removeClass("active"),n()},500)}).eq(0).trigger("click"),e.find("form#form-faq-create").on("submit",function(i){i.preventDefault(),i.stopPropagation()}),e.find('.order-form input[type="submit"]').on("click",function(i){var n=$(this),a=e.find('.b-review-form .order-form input[name="view_as"]'),t=e.find('.b-review-form .order-form input[name="email"]'),f=e.find('.b-review-form .order-form input[name="main_info"]');Shop.faq.add(a.val(),t.val(),f.val(),function(){a.val(""),t.val(""),f.val(""),n.val("Вопрос добавлен").toggleClass("r2w w2r disabled"),setTimeout(function(){n.val("Отправить").toggleClass("r2w w2r disabled")},2500)})})});
$(".b-product-logo-list").each(function(i){var t=$(this),n=t.find(".scroll-logo-block"),e=n.find(".item-list");n.width(n.parent().width()),n.fadeIn("fast");var l=function(){e.animate({scrollLeft:e.width()},16e3,"linear",function(){e.animate({scrollLeft:0},16e3,"linear",function(){l()})})};e.size()&&l()});
$(".b-sale-leader-list").each(function(e){var a=$(this),l=a.find(".menu ul");$(".b-sale-leader-gallery").hide().eq(0).fadeIn("fast"),l.find("li a").on("click",function(e){e.preventDefault();var a=$(this);l.find("li").removeClass("active"),a.parent().addClass("active"),$(".b-sale-leader-gallery").fadeOut("fast"),$(a.attr("href")).fadeIn("fast")}).eq(0).trigger("click")});
$(".b-order-content").each(function(n){var e=$(this);e.find('.order-form .radio-item .item .variant input[type="radio"]').on("click",function(n){n.stopPropagation()}),e.find(".order-form .radio-item .item .variant").on("click",function(n){n.preventDefault();var e=$(this);e.find('input[type="radio"]').trigger("click"),e.hasClass("personal-delivery")?$(".b-order-content .cart-sum-container .sum-info").fadeIn("fast"):$(".b-order-content .cart-sum-container .sum-info").fadeOut("fast"),e.hasClass("online-method")?$(".order-form .radio-item.pay .not-online-method").fadeOut("fast"):$(".order-form .radio-item.pay .not-online-method").fadeIn("fast")}),e.find(".order-form .checkbox-item label").on("click",function(n){n.preventDefault();var e=$(this);e.parent().find('input[type="checkbox"]').trigger("click")}),e.find(".cart-container .position").each(function(n){var e=$(this);e.find(".delete").on("click",function(n){n.preventDefault();$(this);Shop.cart.delete_from_order(e.attr("data-orderitem_id"),function(n){e.empty().remove()})})})}),$("form#form-cart-create").each(function(n){var e=$(this),t=!0,i=e.find('input[name="order[adr]"]'),o=e.find('input[name="order[phone]"]'),r=e.find('input[name="order[email]"]'),a=e.find('input[name="order[yes]"]'),d=e.find('.btn-item input[type="submit"]'),c=function(){t=!0,""==i.val()&&(t=!1),""==o.val()&&(t=!1),""==r.val()&&(t=!1),a.prop("checked")||(t=!1),console.log("Проверка данных формы"),t?d.prop("disabled",!1).fadeIn():d.prop("disabled","disabled").fadeOut()};c(),e.on("submit",function(n){c(),t||(n.preventDefault(),alert("Проверьте введенные данные!"))}),i.on("keyup",function(n){c()}),o.on("keyup",function(n){c()}),r.on("keyup",function(n){c()}),a.on("click",function(n){c()})});
$(".b-post-view-content").each(function(t){var o=$(this);o.find(".post-operations .like-btn").on("click",function(t){t.preventDefault(),t.stopPropagation();var o=$(this),i=o.attr("data-post_id");Shop.post.like(i,function(t){}),o.toggleClass("active")})});
$(".b-product-content").each(function(t){var o=$(this);o.find(".photos .other-photos .item").on("click",function(t){t.preventDefault(),t.stopPropagation();var o=$(this),a=o.find("img").attr("src");o.closest(".photos").find(".main-photo img").attr("src",a)}),o.find(".main-info .header ul li a").on("click",function(t){t.preventDefault(),t.stopPropagation();var o=$(this);$(".main-info .header ul li").removeClass("active"),o.parent().addClass("active"),$(".main-info .info-block").removeClass("active").filter(o.attr("href")).addClass("active")}).eq(0).trigger("click"),o.find(".order-info .btn-cont .like-btn").on("click",function(t){t.preventDefault(),t.stopPropagation();var o=$(this),a=o.attr("data-product_id");Shop.cart.like(a,function(t){}),o.toggleClass("active")}),o.find(".order-info .boxing a.item").on("click",function(t){t.preventDefault(),t.stopPropagation();var a=$(this),i=(a.closest(".boxing").attr("data-product_id"),a.attr("data-product_boxing")),n=a.attr("data-boxing_cost"),r=a.attr("data-boxing_oldcost");o.find(".order-info .cost-cont .real span").html(n),r>0?o.find(".order-info .cost-cont .old span").html(r):o.find(".order-info .cost-cont .old span").html(""),o.find(".order-info .taste").hide(),o.find(".order-info .taste a.item").removeClass("active"),o.find('.order-info .taste[data-cost_id="'+i+'"]').show().find("a.item").eq(0).trigger("click"),o.find(".order-info .cost-cont").attr("data-product_boxing",i),o.find(".order-info .boxing a.item").removeClass("active"),a.addClass("active")}).eq(0).trigger("click"),o.find(".order-info .taste a.item").on("click",function(t){t.preventDefault(),t.stopPropagation();var a=$(this),i=(a.closest(".taste").attr("data-product_id"),a.attr("data-product_taste"));o.find(".order-info .cost-cont").attr("data-product_taste",i),o.find(".order-info .taste a.item").removeClass("active"),a.addClass("active")}),o.find(".order-info .btn-cont .addone-to-cart").on("click",function(t){t.preventDefault(),t.stopPropagation();var a=$(this),i=parseInt(a.attr("data-product_id")),n=parseInt(o.find(".order-info .cost-cont").attr("data-product_boxing")),r=parseInt(o.find(".order-info .cost-cont").attr("data-product_taste"));Shop.cart.addone(i,n,r,function(t){a.html("В корзине").toggleClass("r2w w2r disabled"),setTimeout(function(){a.html("Купить").toggleClass("r2w w2r disabled"),$(".b-top-cart").trigger("ajax-reload")},2500)}),a.toggleClass("active")})});
$(".b-product-review-list").each(function(e){var r=$(this);r.find("form#form-product-review-create").on("submit",function(e){e.preventDefault(),e.stopPropagation()}),r.find('form#form-product-review-create input[type="submit"]').on("click",function(e){var t=$(this),i=r.find('form#form-product-review-create input[name="product_id"]'),o=r.find('form#form-product-review-create input[name="view_as"]'),a=r.find('form#form-product-review-create input[name="email"]'),n=r.find('form#form-product-review-create input[name="main_info"]');Shop.cart.create_review(i.val(),o.val(),a.val(),n.val(),function(){o.val(""),a.val(""),n.val(""),t.val("Отзыв добавлен").toggleClass("r2w w2r disabled"),setTimeout(function(){t.val("Отправить").toggleClass("r2w w2r disabled")},2500)})})});
$(".b-profile-content").each(function(i){var a=$(this),c=a.find(".img-cont .change-img a");c.jqfeFileUploader({action:"/profile/upload/img/?w=600&h=600&crop=1&gray=0&path=profile/img",name:"icon_img",callback:function(i){a.find(".img-cont .image.resp").attr("src",i),cmsAPI.call({service:"profile",method:"update_img",url:i,callback:"ShopCartSet"})}})});
$("form#form-profile-create").each(function(n){var i=$(this),e=!0,t=i.find('input[name="pass"]'),p=i.find('input[name="pass2"]'),a=i.find('input[name="login"]'),o=i.find('input[name="view_as"]'),u=i.find('input[name="email"]'),l=i.find('.upload-photo input[type="button"]'),s=i.find('.btn-item input[type="submit"]'),f=function(){e=!0,""==a.val()&&(e=!1),""==o.val()&&(e=!1),""==u.val()&&(e=!1),t.val()==p.val()?p.closest(".input-item").addClass("pass-confirm"):(p.closest(".input-item").removeClass("pass-confirm"),e=!1),e?s.prop("disabled",!1).fadeIn():s.prop("disabled","disabled").fadeOut()};f(),i.on("submit",function(n){f(),e||(n.preventDefault(),alert("Проверьте введенные данные!"))}),a.on("keyup",function(n){f()}),o.on("keyup",function(n){f()}),u.on("keyup",function(n){f()}),t.on("keyup",function(n){f()}),p.on("keyup",function(n){f()}),l.jqfeFileUploader({action:"/profile/upload/img/?w=600&h=600&crop=1&gray=0&path=profile/img",name:"icon_img",callback:function(n){l.prev("span.title").html("");$("<img/>",{src:n,width:128,height:128}).appendTo(l.prev("span.title")),$("<input/>",{type:"hidden",name:"img",value:n}).appendTo(l.prev("span.title")),$("<br/>",{}).appendTo(l.prev("span.title"))}})});
$(".b-review-content").each(function(e){var i=$(this),n=i.find(".review-col"),a=i.find(".item_list");a.find(".item").each(function(e){var i=$(this),a=1e6,r=n.eq(0);n.each(function(e){var i=$(this);i.height()<a&&(a=i.height(),r=i)}),r.append(i)}),n.append($("<div/>",{"class":"clear"})),i.find("form#form-feedback-create").on("submit",function(e){e.preventDefault(),e.stopPropagation()}),i.find('.order-form input[type="submit"]').on("click",function(e){var n=$(this),a=i.find('.b-review-form .order-form input[name="view_as"]'),r=i.find('.b-review-form .order-form input[name="email"]'),t=i.find('.b-review-form .order-form input[name="main_info"]');Shop.faq.add(a.val(),r.val(),t.val(),function(){a.val(""),r.val(""),t.val(""),n.val("Вопрос добавлен").toggleClass("r2w w2r disabled"),setTimeout(function(){n.val("Отправить").toggleClass("r2w w2r disabled")},2500)})})});
$(".b-order-content.b-review-form").each(function(e){var a=$(this);a.find("form#form-feedback-create").on("submit",function(e){e.preventDefault(),e.stopPropagation()}),a.find('form#form-feedback-create input[type="submit"]').on("click",function(e){var f=$(this),n=a.find('form#form-feedback-create input[name="view_as"]'),t=a.find('form#form-feedback-create input[name="where"]'),r=a.find('form#form-feedback-create input[name="title"]'),i=a.find('form#form-feedback-create input[name="main_info"]');Shop.feedback.add(n.val(),t.val(),r.val(),i.val(),function(){n.val(""),t.val(""),r.val(""),i.val(""),f.val("Отзыв добавлен").toggleClass("r2w w2r disabled"),setTimeout(function(){f.val("Отправить").toggleClass("r2w w2r disabled")},2500)})})});
$(".b-order-header").each(function(e){var i=$(this);i.find(".review-title .add-review").on("click",function(e){e.preventDefault(),$(".b-review-form").jqfeScrollTo({speed:555,diff:0})})});