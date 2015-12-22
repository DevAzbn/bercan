/*

$(document).ready(function() {

src/block/fecss/_fecss/.document-ready.js

src/block/fecss/_page-loader/.document-ready.js

src/block/fecss/_scrollto/.document-ready.js

src/block/fecss/_arrow-slider/.document-ready.js

src/block/fecss/_can-close/.document-ready.js



$(window).on('resize',function(event){
	
	block/fecss/.fecss/.window-resize.js
	
}).trigger('resize');



});

*/

$(document).ready(function() {


$(".arrow-slider").each(function(i){event.preventDefault();var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(".code-editable-block").each(function(e){var o=$(this),t=o.find(".code-name").eq(0),d=o.find(".code-value").eq(0),c=o.find(".code-status").eq(0);$(document.body).on("click.code-editable",".code-editable-block .code-btn.open",function(e){$.get("/pagebuilder/code-editable/open",{name:t.val()},function(e){d.text(e),c.text("opened")})}),$(document.body).on("click.code-editable",".code-editable-block .code-btn.save",function(e){$.post("/pagebuilder/code-editable/save",{name:t.val(),value:d.text()},function(e){c.text(e)})});var n=window.location.hash.substr(1);""!=n&&(t.val(n),o.find(".code-btn.open").trigger("click"))});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){event.preventDefault();var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});
$(".b-contact").each(function(a){function e(){if($("#b-contact-map-cont-map").size()){n=new ymaps.Map("b-contact-map-cont-map",{center:[60.949286,76.61202],zoom:16},{searchControlProvider:"yandex#search"}),n.behaviors.disable("scrollZoom");var a=new ymaps.Placemark([60.949286,76.61202],{hintContent:"Беркан"},{});n.geoObjects.add(a)}}event.preventDefault();var n;$(this);"undefined"!=typeof ymaps&&ymaps.ready(e)});
$(".b-top-header").each(function(t){event.preventDefault();var e=$(this),a=e.find(".cart-btn"),i=e.find(".menu-btn");a.on("click",function(t){t.preventDefault();var e=$(this);i.hasClass("active")&&i.trigger("click"),e.toggleClass("active"),$(".b-top-cart").toggleClass("active")}),i.on("click",function(t){t.preventDefault();var e=$(this);a.hasClass("active")&&a.trigger("click"),e.toggleClass("active"),$(".b-drd-menu").toggleClass("active").height($(".b-top-menu .menu-list").height())})});
$(".b-top-menu").each(function(e){event.preventDefault();var t=$(this),n=t.find(".search-btn"),i=t.find(".search-container .close-search");n.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".menu-list").find(".search-container").toggleClass("active").find(".search-field input").trigger("focus")}),i.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".search-container").toggleClass("active")}),t.find(".menu-list .item").each(function(e){var n=$(this),i=$("<span/>",{"class":"before"}),a=$("<span/>",{"class":"after"});n.hover(function(e){var t=n.find("a.m-item").width(),c=(n.width()-t)/2;i.appendTo(n).css({width:t+"px",left:c+"px"}),a.appendTo(n)},function(e){i.detach(),a.detach()}),n.on("click",function(e){e.preventDefault(),t.find(".menu-list .item").removeClass("active"),$(this).addClass("active").find("a.m-item").trigger("click")}),n.find("a.m-item").on("click",function(e){e.preventDefault(),e.stopPropagation(),$(".b-top-drd-menu").removeClass("active"),$($(this).attr("href")+".b-top-drd-menu").toggleClass("active")})})});
$(".path-cont").each(function(t){event.preventDefault();var e=$(this),n=e.find("a");n.filter(":last-child").on("click",function(t){t.preventDefault()})});
$(".b-sale-leader-list").each(function(e){event.preventDefault();var a=$(this),l=a.find(".menu ul");$(".b-sale-leader-gallery").hide().eq(0).fadeIn("fast"),l.find("li a").on("click",function(e){e.preventDefault();var a=$(this);l.find("li").removeClass("active"),a.parent().addClass("active"),$(".b-sale-leader-gallery").fadeOut("fast"),$(a.attr("href")).fadeIn("fast")}).eq(0).trigger("click")});
$(".b-product-content").each(function(t){$(this);$(".photos .other-photos .item").on("click",function(t){t.preventDefault();var i=$(this),e=i.find("img").attr("src");i.closest(".photos").find(".main-photo img").attr("src",e)}),$(".main-info .header ul li a").on("click",function(t){t.preventDefault();var i=$(this);$(".main-info .header ul li").removeClass("active"),i.parent().addClass("active"),$(".main-info .info-block").removeClass("active").filter(i.attr("href")).addClass("active")}).eq(0).trigger("click")});


$(window).on('resize',function(event){
	
	
	$(function(){var w={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s="window-width",d=$(window).outerWidth(!0),i=$("body.fecss").eq(0);d<w.xs.max&&(i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-xs"),d>w.sm.min&&d<w.sm.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-sm"),d>w.md.min&&d<w.md.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-md"),d>w.lg.min&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),s="window-width-lg"),$("body.fecss").eq(0).addClass(s)});

	
	
}).trigger('resize');


$(window).on('scroll',function(){

	
	$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?200>a&&o.removeClass("active"):a>200&&o.addClass("active")});

	

}).trigger('scroll');


$('body').on('changeClass',function(){
	
	
	$(".line-gallery").each(function(a){event.preventDefault();var t=$(this),s=$("body").eq(0),i=3;s.hasClass("window-width-xs")?i=t.attr("data-xs-vis")||1:s.hasClass("window-width-sm")?i=t.attr("data-sm-vis")||2:s.hasClass("window-width-md")?i=t.attr("data-md-vis")||3:s.hasClass("window-width-lg")&&(i=t.attr("data-lg-vis")||3);for(var d=t.find(".img-block .item").hide(),e=0;i>e;e++)d.eq(e).fadeIn("fast")});

	
});


	


});