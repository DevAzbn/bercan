$(".arrow-slider").each(function(i){var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(".code-editable-block").each(function(e){var o=$(this),t=o.find(".code-name").eq(0),d=o.find(".code-value").eq(0),c=o.find(".code-status").eq(0);$(document.body).on("click.code-editable",".code-editable-block .code-btn.open",function(e){$.get("/pagebuilder/code-editable/open",{name:t.val()},function(e){d.text(e),c.text("opened")})}),$(document.body).on("click.code-editable",".code-editable-block .code-btn.save",function(e){$.post("/pagebuilder/code-editable/save",{name:t.val(),value:d.text()},function(e){c.text(e)})});var n=window.location.hash.substr(1);""!=n&&(t.val(n),o.find(".code-btn.open").trigger("click"))});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});
$(".b-contact").each(function(a){function e(){if($("#b-contact-map-cont-map").size()){n=new ymaps.Map("b-contact-map-cont-map",{center:[60.949286,76.61202],zoom:16},{searchControlProvider:"yandex#search"}),n.behaviors.disable("scrollZoom");var a=new ymaps.Placemark([60.949286,76.61202],{hintContent:"Беркан"},{});n.geoObjects.add(a)}}var n;$(this);"undefined"!=typeof ymaps&&ymaps.ready(e)});
$(".b-top-header").each(function(t){var e=$(this),a=e.find(".cart-btn"),i=e.find(".menu-btn");a.on("click",function(t){t.preventDefault();var e=$(this);i.hasClass("active")&&i.trigger("click"),e.toggleClass("active"),$(".b-top-cart").toggleClass("active")}),i.on("click",function(t){t.preventDefault();var e=$(this);a.hasClass("active")&&a.trigger("click"),e.toggleClass("active"),$(".b-drd-menu").toggleClass("active").height($(".b-top-menu .menu-list").height())})});
$(".b-top-menu").each(function(e){var t=$(this),i=t.find(".search-btn"),n=t.find(".search-container .close-search");i.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".menu-list").find(".search-container").toggleClass("active").find(".search-field input").trigger("focus")}),n.on("click",function(e){e.preventDefault();var t=$(this);t.closest(".search-container").toggleClass("active")}),t.find(".menu-list .item").each(function(e){var i=$(this),n=$("<span/>",{"class":"before"}),a=$("<span/>",{"class":"after"});i.hover(function(e){var t=i.find("a.m-item").width(),c=(i.width()-t)/2;n.appendTo(i).css({width:t+"px",left:c+"px"}),a.appendTo(i)},function(e){n.detach(),a.detach()}),i.on("click",function(e){e.preventDefault(),t.find(".menu-list .item").removeClass("active"),$(this).addClass("active").find("a.m-item").trigger("click")}),i.find("a.m-item").on("click",function(e){e.preventDefault(),e.stopPropagation(),$(".b-top-drd-menu").removeClass("active"),$($(this).attr("href")+".b-top-drd-menu").toggleClass("active")})})});
$(".path-cont").each(function(t){var n=$(this),c=n.find("a");c.filter(":last-child").on("click",function(t){t.preventDefault()})});
$(".b-sale-leader-list").each(function(e){var a=$(this),l=a.find(".menu ul");$(".b-sale-leader-gallery").hide().eq(0).fadeIn("fast"),l.find("li a").on("click",function(e){e.preventDefault();var a=$(this);l.find("li").removeClass("active"),a.parent().addClass("active"),$(".b-sale-leader-gallery").fadeOut("fast"),$(a.attr("href")).fadeIn("fast")}).eq(0).trigger("click")});
$(".b-order-content").each(function(i){var t=$(this);t.find('.order-form .radio-item .item .variant input[type="radio"]').on("click",function(i){i.stopPropagation()}),t.find(".order-form .radio-item .item .variant").on("click",function(i){i.preventDefault();var t=$(this);t.find('input[type="radio"]').trigger("click")}),t.find(".order-form .checkbox-item label").on("click",function(i){i.preventDefault();var t=$(this);t.parent().find('input[type="checkbox"]').trigger("click")})});
$(".b-product-content").each(function(t){$(this);$(".photos .other-photos .item").on("click",function(t){t.preventDefault();var i=$(this),e=i.find("img").attr("src");i.closest(".photos").find(".main-photo img").attr("src",e)}),$(".main-info .header ul li a").on("click",function(t){t.preventDefault();var i=$(this);$(".main-info .header ul li").removeClass("active"),i.parent().addClass("active"),$(".main-info .info-block").removeClass("active").filter(i.attr("href")).addClass("active")}).eq(0).trigger("click")});
$(".b-registration-content").each(function(t){$(this)});