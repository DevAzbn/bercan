$(".arrow-slider").each(function(i){var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(".code-editable-block").each(function(e){var o=$(this),t=o.find(".code-name").eq(0),d=o.find(".code-value").eq(0),c=o.find(".code-status").eq(0);$(document.body).on("click.code-editable",".code-editable-block .code-btn.open",function(e){$.get("/pagebuilder/code-editable/open",{name:t.val()},function(e){d.text(e),c.text("opened")})}),$(document.body).on("click.code-editable",".code-editable-block .code-btn.save",function(e){$.post("/pagebuilder/code-editable/save",{name:t.val(),value:d.text()},function(e){c.text(e)})});var n=window.location.hash.substr(1);""!=n&&(t.val(n),o.find(".code-btn.open").trigger("click"))});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});
$(".b-all-post-pagination").each(function(e){var o=$(this);o.find(".go-to-filters").on("click",function(e){e.preventDefault(),$(".b-top-header").jqfeScrollTo({speed:555,diff:0})})});
$(".b-all-product-header").each(function(t){var s=$(this),a=s.find(".product-list-type");a.find(".product-list-type-item").on("click",function(t){t.preventDefault(),t.stopPropagation();var s=$(this);s.hasClass("product-list-type-grid")?$(".b-all-product-catalog .right-cont .product-list").removeClass("as-list"):s.hasClass("product-list-type-list")&&$(".b-all-product-catalog .right-cont .product-list").addClass("as-list"),a.find(".product-list-type-item").removeClass("active"),s.addClass("active")}).eq(0).trigger("click")});
$(".b-contact").each(function(a){function e(){if($("#b-contact-map-cont-map").size()){n=new ymaps.Map("b-contact-map-cont-map",{center:[60.949286,76.61202],zoom:16},{searchControlProvider:"yandex#search"}),n.behaviors.disable("scrollZoom");var a=new ymaps.Placemark([60.949286,76.61202],{hintContent:"Беркан"},{});n.geoObjects.add(a)}}var n;$(this);"undefined"!=typeof ymaps&&ymaps.ready(e)});
$(".modal-after-send-faq").on("click",function(t){t.preventDefault(),t.stopPropagation();$(this);$("#modal-after-send-faq").trigger("setActive")});
$(".b-modal-container").each(function(t){var e,i=$(this),o=i.find(".modal-block").eq(0),n=i.find(".white-container").eq(0),a=i.find(".hide-modal");i.find(".item");i.on("setActive",function(t){i.css({height:$(document).height()+"px"}).addClass("active"),o.css({top:$(document).scrollTop()+50+"px"})}),i.on("setPassive",function(t){i.removeClass("active")}),i.on("click",function(t){a.trigger("click")}),a.on("click",function(t){i.trigger("setPassive")}),n.on("click",function(t){t.stopPropagation()}),$(document.body).on("setActive",".b-modal-container .item",function(t){e=$(".b-modal-container .item.active"),$(".b-modal-container .item").removeClass("active"),$(this).addClass("active"),$(this).closest(".b-modal-container").trigger("setActive")}),$(document.body).on("setPassive",".b-modal-container .item",function(t){$(this).removeClass("active").closest(".b-modal-container").trigger("setPassive"),e.size()&&e.eq(0).trigger("setActive")}),$(document.body).on("click",".b-modal-btn",function(t){t.preventDefault(),t.stopPropagation();var e=$(this),i=e.attr("href"),o=$(".b-modal-container .item").filter(i);o.size()>0?o.trigger("setActive"):o.trigger("setPassive")}),$(".b-modal-hide-btn").on("click",function(t){t.stopPropagation(),$(".b-modal-container .item.active").trigger("setPassive")}),$(document.body).on("click",".b-modal-fastlook",function(t){t.preventDefault(),t.stopPropagation();var e=$(this),i=(e.attr("data-product_id"),$(".b-modal-container .item").filter("#modal-fastlook"));i.size()>0?i.trigger("setActive"):i.trigger("setPassive")})});
$(".b-top-cart").each(function(t){var a=$(this),n=a.find(".position"),e=$(".b-top-header .b-top-cart-counter");a.on("recalc-all-position",function(t){t.preventDefault();var r=0,o=0,c=0;n.each(function(t){var a=$(this),n=parseInt(a.attr("data-count")),e=parseInt(a.attr("data-cost"));r+=n*e,o++,c+=n}),a.attr("data-sum",r),a.attr("data-icount",o),a.attr("data-acount",c),a.find(".sum-cont .sum span").html(r),e.html(o)}),a.trigger("recalc-all-position"),n.each(function(t){var n=$(this),e=n.find(".pos-counter"),r=e.find("a.d"),o=e.find("a.u"),c=e.find("span.c"),i=n.find(".sum span"),l=n.find(".delete a");n.on("add-one-item",function(t){t.preventDefault();var e=parseInt(n.attr("data-count")),r=parseInt(n.attr("data-cost"));e+=1,Shop.cart.set(n.attr("data-product_id"),e,function(t){n.attr("data-count",e),c.html(n.attr("data-count")),i.html(e*r),a.trigger("recalc-all-position")})}),n.on("delete-one-item",function(t){t.preventDefault();var e=parseInt(n.attr("data-count")),r=parseInt(n.attr("data-cost"));e-=1,0>e?(e=0,a.trigger("recalc-all-position")):Shop.cart.set(n.attr("data-product_id"),e,function(t){n.attr("data-count",e),c.html(n.attr("data-count")),i.html(e*r),a.trigger("recalc-all-position")})}),n.on("delete-all-items",function(t){t.preventDefault();var e=0,r=parseInt(n.attr("data-cost"));n.attr("data-count",e),c.html(n.attr("data-count")),i.html(e*r),a.trigger("recalc-all-position")}),o.on("click",function(t){t.preventDefault(),n.trigger("add-one-item")}),r.on("click",function(t){t.preventDefault(),n.trigger("delete-one-item")}),l.on("click",function(t){t.preventDefault(),n.trigger("delete-all-items")})}),a.on("click",function(t){t.preventDefault();$(this)})});
$(".b-top-drd-menu").each(function(i){var e=$(this),n=e.find(".product-item"),t=n.find(".point-block"),a=n.find(".item-variant");e.on("mouseleave",function(i){e.removeClass("active")}),t.find(".point").on("click",function(i){i.preventDefault(),i.stopPropagation();var e=$(this);a.hide(),a.eq(e.index()).fadeIn("fast"),t.find(".point").removeClass("active"),e.addClass("active")}).eq(0).trigger("click")});
$(".b-top-header").each(function(t){var e=$(this),i=e.find(".cart-btn"),a=e.find(".menu-btn");i.on("click",function(t){t.preventDefault();var e=$(this);$(".b-top-menu").trigger("hide-drd-menu"),a.hasClass("active")&&a.trigger("click"),e.toggleClass("active"),$(".b-top-cart").toggleClass("active")}),a.on("click",function(t){t.preventDefault();var e=$(this);$(".b-top-menu").trigger("hide-drd-menu"),i.hasClass("active")&&i.trigger("click"),e.toggleClass("active"),$(".b-drd-menu").toggleClass("active").height($(".b-top-menu .menu-list").height())})});
$(".b-top-menu").each(function(e){var t=$(this),i=t.find(".search-btn"),n=t.find(".search-container .close-search");i.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".menu-list").find(".search-container").toggleClass("active").find(".search-field input").trigger("focus")}),n.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".search-container").toggleClass("active")}),t.on("hide-drd-menu",function(e){e.preventDefault(),e.stopPropagation(),t.find(".b-top-drd-menu.active").removeClass("active")}),t.find(".menu-list .item").each(function(e){var i=$(this),n=i.find(".before"),a=i.find(".after"),o=i.find("a.m-item").width(),s=(i.width()-o)/2;n.css({width:o+"px",left:s+"px"}),i.on("mouseover",function(e){n.addClass("colored"),a.addClass("colored"),t.trigger("hide-drd-menu"),$(i.find("a.m-item").attr("href")).addClass("active")}),i.find("a.m-item").on("click",function(e){e.preventDefault(),e.stopPropagation(),$(".b-top-drd-menu").removeClass("active"),$($(this).attr("href")+".b-top-drd-menu").addClass("active")})})});
$(".fluid-block").each(function(e){var i=$(this);i.on("click",function(e){e.preventDefault();$(this);$(".b-top-menu").trigger("hide-drd-menu")})});
$(".path-cont").each(function(t){var n=$(this),c=n.find("a");c.filter(":last-child").on("click",function(t){t.preventDefault()})});
$(".b-faq-content").each(function(t){var a=$(this);a.find(".faq-load a").on("click",function(t){t.preventDefault();var a=$(this);a.addClass("active"),setTimeout(function(){a.removeClass("active")},2500)}).eq(0).trigger("click")});
$(".b-sale-leader-list").each(function(e){var a=$(this),l=a.find(".menu ul");$(".b-sale-leader-gallery").hide().eq(0).fadeIn("fast"),l.find("li a").on("click",function(e){e.preventDefault();var a=$(this);l.find("li").removeClass("active"),a.parent().addClass("active"),$(".b-sale-leader-gallery").fadeOut("fast"),$(a.attr("href")).fadeIn("fast")}).eq(0).trigger("click")});
$(".b-order-content").each(function(t){var i=$(this);i.find('.order-form .radio-item .item .variant input[type="radio"]').on("click",function(t){t.stopPropagation()}),i.find(".order-form .radio-item .item .variant").on("click",function(t){t.preventDefault();var i=$(this);i.find('input[type="radio"]').trigger("click")}),i.find(".order-form .checkbox-item label").on("click",function(t){t.preventDefault();var i=$(this);i.parent().find('input[type="checkbox"]').trigger("click")}),i.find(".cart-container .position").each(function(t){var i=$(this);i.find(".delete").on("click",function(t){t.preventDefault();$(this);Shop.cart.delete_from_order(i.attr("data-product_id"),function(t){})})})});
$(".b-product-content").each(function(t){var a=$(this);a.find(".photos .other-photos .item").on("click",function(t){t.preventDefault();var a=$(this),i=a.find("img").attr("src");a.closest(".photos").find(".main-photo img").attr("src",i)}),a.find(".main-info .header ul li a").on("click",function(t){t.preventDefault();var a=$(this);$(".main-info .header ul li").removeClass("active"),a.parent().addClass("active"),$(".main-info .info-block").removeClass("active").filter(a.attr("href")).addClass("active")}).eq(0).trigger("click"),a.find(".order-info .btn-cont .like-btn").on("click",function(t){t.preventDefault();var a=$(this);a.attr("data-product_id");a.toggleClass("active")}),a.find(".order-info .boxing a.item").on("click",function(t){t.preventDefault();var i=$(this),o=(i.closest(".boxing").attr("data-product_id"),i.attr("data-product_boxing")),e=i.attr("data-boxing_cost"),n=i.attr("data-boxing_oldcost");a.find(".order-info .cost-cont .real span").html(e),a.find(".order-info .cost-cont .old span").html(n),a.find(".order-info .cost-cont").attr("data-product_boxing",o),a.find(".order-info .boxing a.item").removeClass("active"),i.addClass("active")}).eq(0).trigger("click"),a.find(".order-info .taste a.item").on("click",function(t){t.preventDefault();var i=$(this),o=(i.closest(".taste").attr("data-product_id"),i.attr("data-product_taste"));a.find(".order-info .cost-cont").attr("data-product_taste",o),a.find(".order-info .taste a.item").removeClass("active"),i.addClass("active")}).eq(0).trigger("click")});
$(".b-registration-content").each(function(t){$(this)});
$(".b-review-content").each(function(e){var i=$(this);i.find(".review-load a").on("click",function(e){e.preventDefault();var i=$(this);i.addClass("active"),setTimeout(function(){i.removeClass("active")},2500)}).eq(0).trigger("click")});
$(".b-order-header").each(function(e){var i=$(this);i.find(".review-title .add-review").on("click",function(e){e.preventDefault(),$(".b-review-form").jqfeScrollTo({speed:555,diff:0})})});