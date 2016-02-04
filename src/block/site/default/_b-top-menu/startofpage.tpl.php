<?
// CMS Azbn.ru Публичная версия

?><!DOCTYPE html>
<html>
<head>

<title><?=$param['page_html']['seo']['title'].' - '.$this->fe_config['enginetitle'];?></title>
<meta name="description" content="<?=$param['page_html']['seo']['desc'];?>" />
<meta name="keywords" content="<?=$param['page_html']['seo']['kw'];?>" />

<!--<meta name="viewport" content="width=device-width, initial-scale=1.0" />-->
<meta name="viewport" content="width=1600" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="revisit" content="20" />
<meta name="document-state" content="Dynamic" />
<meta name="resource-type" content="document" />
<meta name="generator" content="CMS Azbn.ru <?=$this->FE->version['number'];?>" />
<meta HTTP-EQUIV="Cache-Control" content="no-cache" />
<meta name="Copyright" content="Зыбинская Пропаганда" lang="ru" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />



<link type="image/x-icon" href="/favicon.ico" rel="shortcut icon" />
<link type="image/x-icon" href="/favicon.ico" rel="icon" />

<link href="/css/bercan/site.css?update=<?=$this->FE->date;?>" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->


<script src="/js/bercan/jquery.min.js" ></script>
<!--<script src="js/fecss.js" ></script>-->
<script src="/js/bercan/storage.js" ></script>

<!--<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>-->

<script src="/js/bercan/jquery-plugin/jquery.jqfeChangeClassEvent.js" ></script>
<script src="/js/bercan/jquery-plugin/jquery.jqfeScrollTo.js" ></script>

<script src="/js/cms.azbn.ru/cmsAPI.js"></script>

<script src="/js/bercan/shop.js" ></script>
<script src="/js/bercan/document-ready.js" ></script>

<script>

$(document).ready(function() {
	
	//cmsAPI.call({service:'online',method:'check',callback:'CheckOnline'});
	
	cmsAPI.UI.OnReady.GetBrowserName();
	//cmsAPI.UI.OnReady.FancyboxConfig();
	//cmsAPI.UI.OnReady.FTSearchFilterOnClick();
	cmsAPI.UI.OnReady.FaqSessionControl();
	cmsAPI.UI.OnReady.FeedbackSessionControl();
	//cmsAPI.UI.OnReady.LiveEditInit();
	//cmsAPI.UI.OnReady.PageHashOnChange();
	
	//$("body").eq(0).jqfeProgressBarPage({});
	
	});

</script>

<?
$this->FE->PluginMng->event('viewer:head:after', $param);
?>

</head>
<body class="fecss full-height fe-dbg  " >

<?=$this->FE->config['metrika_counter'];?>



<div class="fluid-block b-top-header zi zi-base" >
	
	<div class="adaptive-block grid grid-12 drd-container" >
		<div class="grid-row" >
			
			<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 " >
				<div class="header-list d-t hp100 fluid-block" >
					<div class="d-t-c w240" ><a class="menu-btn" href="#menu" ><span class="bg-icon menu" ></span>Меню</a></div>
					<div class="d-t-c align-center" ><a class="phone-btn" href="tel:+73466424255" ><span class="bg-icon phone" ></span>+7 (3466) 42-42-55</a></div>
					<div class="d-t-c align-center" ><a class="email-btn" href="mailto:info@bercan.ru" ><span class="bg-icon email" ></span>info@bercan.ru</a></div>
					<div class="d-t-c align-center" >
						<a href="http://vk.com/" ><span class="bg-icon vk" ></span></a>
						<a href="http://facebook.com/" ><span class="bg-icon fb" ></span></a>
						<a href="http://instagram.com/" ><span class="bg-icon inst" ></span></a>
						<a href="http://ok.ru/" ><span class="bg-icon ok" ></span></a>
						<a href="http://youtube.com/" ><span class="bg-icon yt" ></span></a>
					</div>
					<div class="d-t-c align-right" >
						<a class="cart-btn" href="#cart" ><span class="bg-icon cart" ></span>Корзина (<span class="b-top-cart-counter" >0</span>)</a>
					</div>
				</div>
			</div>
			
			<div class="clear" ></div>
		
		</div>
		
		
		
		
		
		
		
		
		<!-- //////////////////////////////// -->
		
		<div class="fluid-block zi zi-top b-top-cart" data-sum="0" data-icount="0" data-acount="0" >
			<div class="adaptive-block grid grid-12 " >
				<div class="grid-row" >
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 cart-container" >
						<div class="d-t" >
							
							<div class="d-t-r position" data-cost="2095" data-count="1" data-product_id="1" >
								<div class="d-t-c index" >01</div>
								<div class="d-t-c img" ><img class="image resp" src="/img/bercan/b-top-header-cart-product.png" /></div>
								<div class="d-t-c title" >Dymatize Nutrition ISO-100</div>
								<div class="d-t-c count" >
									<div class="pos-counter" >
										<a class="d" href="" ><span class="arrow bottom" ></span></a>
										<span class="c" >1</span>
										<a class="u" href="" ><span class="arrow top" ></span></a>
									</div>
								</div>
								<div class="d-t-c sum" ><span>2 095</span> .-</div>
								<div class="d-t-c delete" ><a href="" ><img src="/img/bercan/b-top-header-cart-cross.png" /></a></div>
							</div>
							
							<div class="d-t-r position" data-cost="2095" data-count="1" data-product_id="2" >
								<div class="d-t-c index" >02</div>
								<div class="d-t-c img" ><img class="image resp" src="/img/bercan/b-top-header-cart-product.png" /></div>
								<div class="d-t-c title" >Dymatize Nutrition ISO-100</div>
								<div class="d-t-c count" >
									<div class="pos-counter" >
										<a class="d" href="" ><span class="arrow bottom" ></span></a>
										<span class="c" >1</span>
										<a class="u" href="" ><span class="arrow top" ></span></a>
									</div>
								</div>
								<div class="d-t-c sum" ><span>2 095</span> .-</div>
								<div class="d-t-c delete" ><a href="" ><img src="/img/bercan/b-top-header-cart-cross.png" /></a></div>
							</div>
							
						</div>
						
						<div class="border" ></div>
						
						<div class="sum-cont" >
							
							<span class="text" >Итого</span> <span class="sum" ><span>3 695</span> .-</span>
							
							<a class="order" href="#link" >Оформить заказ</a>
							
							<div class="clear" ></div>
						</div>
					</div>
					
					<div class="clear" ></div>
				
				</div>
			</div>
		</div>
		
		<!-- //////////////////////////////// -->
		
		
		
		
		
		
	</div>
	
	
	
	
	
	<!-- //////////////////////////////// -->
	
	
		
	<div class="fluid-block zi zi-top b-drd-menu" >
		<div class="adaptive-block grid grid-15 flex" >
			<div class="grid-row" >
				
				<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box pl1" >
					<ul >
						<li><a class="while-link" href="" >Оплата и доставка</a></li>
						<li><a class="while-link" href="" >Акции и скидки</a></li>
					</ul>
				</div>
				<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box pl2" >
					<ul >
						<li><a class="while-link" href="/faq/" >Онлайн-консультации</a></li>
						<li><a class="while-link" href="/post/" >Полезные статьи</a></li>
					</ul>
				</div>
				<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box pl3" >
					<ul >
						<li><a class="while-link" href="" >О магазине</a></li>
						<li><a class="while-link" href="" >Команда Беркан</a></li>
					</ul>
				</div>
				<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box pl4" >
					<ul >
						<li><a class="while-link" href="" >Отзывы</a></li>
						<li><a class="while-link" href="/contact/" >Контакты</a></li>
					</ul>
				</div>
				<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box " >
					<ul class="login-ul" >
						<li class="login" >
							<?
							if($_SESSION['profile']['id']) {
								?>
								<a class="grey-link " href="/profile/" ><?=$_SESSION['profile']['view_as'];?></a>
								<?
							} else {
								?>
								<a class="grey-link b-modal-btn" href="#modal-login-form" >Войти на сайт</a>
								<?
							}
							?>
						</li>
						<li class="reg" ><a class="grey-link" href="/profile/registration/" >Регистрация</a></li>
					</ul>
				</div>
				
				<div class="clear" ></div>
			
			</div>
		</div>
	</div>
	
	
	
	<!-- //////////////////////////////// -->
	
	
	
	
	
	
	
	
	
</div>




<?
if($_SESSION['profile']['id']) {
	
} else {
?>

	
	<div class="b-modal-container " >
		<div class="modal-block" >
			
			<div class="adaptive-block margin-center grid grid-12  " >
				
				<div class="grid-row item" id="modal-login-form" data-title="Форма логина" >
					
					<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 " >
						<div class="content white-container small formed" >
							<a class="hide-modal " href="#close" ></a>
							
							<form action="/profile/start/" method="POST" >
								
								<div class="m-title" >
									Вход на сайт
								</div>
								
								<div class="m-form-cont" >
									
									<div class="input-item email" >
										
										<input name="login" placeholder="Ваш e-mail" />
										
										<span class="icon" ></span>
										
									</div>
									
									<div class="input-item pass" >
										
										<input type="password" name="pass" placeholder="Ваш пароль" />
										
										<span class="icon" ></span>
										
									</div>
									
								</div>
								
								<div class="m-btn-cont" >
									
									<input class="on-hover ch-color btn w2r" type="submit" />
									
								</div>
								
								<div class="m-more-link" >
									
									<a href="/profile/registration/" >Регистрация</a>
									
								</div>
								
							</form>
							
						</div>
					</div>
					
					<div class="clear"></div>
					
				</div>
				
			</div>
			
		</div>
	</div>
	

<?
}
?>




<div class="fluid-block b-top-menu zi zi-base " >
	
	<div class="adaptive-block grid grid-12 drd-menu-container" >
		<div class="grid-row" >
			
			<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 " >
				<div class="menu-list d-t hp100" >
					<div class="d-t-c w260 pd40" >
						<a class="" href="/" ><img class="image resp " src="/img/bercan/b-top-menu-logo.png" /></a>
					</div>
					<div class="d-t-c align-center pd40 item" >
						<a class="m-item" href="#sport-pit" >Спортивное питание</a>
						<span class="before" ><span class="after" ></span></span>
						
					</div>
					<div class="d-t-c align-center pd40 item" >
						<a class="m-item" href="#accessuar" >Аксессуары</a>
						<span class="before" ><span class="after" ></span></span>
						
					</div>
					<div class="d-t-c align-center pd40 item" >
						<a class="m-item" href="#ekip" >Экипировка</a>
						<span class="before" ><span class="after" ></span></span>
						
					</div>
					<div class="d-t-c align-center pd40 item" >
						<a class="m-item" href="#odezh" >Одежда</a>
						<span class="before" ><span class="after" ></span></span>
						
					</div>
					<div class="d-t-c align-center pd40 item" >
						<a class="m-item" href="#proizv" >Производители</a>
						<span class="before" ><span class="after" ></span></span>
						
					</div>
					<div class="d-t-c search-icon wp005 align-right " >
						<div class="search-block" ></div>
						<a class="search-btn" href="#" ><img class="image " src="/img/bercan/b-top-menu-search-icon.png" /></a>
					</div>
					<form class="search-container" method="GET" action="/search/fulltext/" >
						<div class="search-field" >
							<input type="text" name="text" value="<?=$param['ftsearch']['text'];?>" placeholder="Что вы ищете?" />
						</div>
						<a class="close-search" href="#close" ></a>
					</form>
				</div>
			</div>
			
			<div class="clear" ></div>
		
		</div>
		
			
	<div id="sport-pit" class="zi zi-top b-top-drd-menu" >
		
		<div class="" >
			<div class="grid grid-2 flex" >
				<div class="grid-row" >
					
					<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box " >
						<ul>
							<li><a href="" >Все категории</a></li>
							<li><a href="" >Протеины</a></li>
							<li><a href="" >Гейнеры</a></li>
							<li><a href="" >Аминокислоты</a></li>
							<li><a href="" >Креатин</a></li>
							<li><a href="" >Для суставов и связок</a></li>
							<li><a href="" >Энергетики</a></li>
							<li><a href="" >Л-карнитин</a></li>
							<li><a href="" >Витамины и минералы</a></li>
						</ul>
					</div>
					<div class="clmn-4 clmn-xs-4 clmn-sm-4 clmn-md-4 clmn-lg-4 f-box " >
						<ul>
							<li><a href="" >Предтренировочные комплексы</a></li>
							<li><a href="" >Жирные кислоты</a></li>
							<li><a href="" >Интратренировочные комплексы</a></li>
							<li><a href="" >Донаторы азота</a></li>
							<li><a href="" >Батончики, джемы, печенья, чипсы</a></li>
							<li><a href="" >Повышение тестостерона</a></li>
							<li><a href="" >Послетренировочные комплексы</a></li>
							<li><a href="" >Для сна и здоровья</a></li>
							<li><a href="" >Жиросжигатели</a></li>
						</ul>
					</div>
					<div class="clmn-5 clmn-xs-5 clmn-sm-5 clmn-md-5 clmn-lg-5 f-box product-item" >
						<div class="title" >Товары недели</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-100</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-110</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-120</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="point-block" >
							<a class="point " href="#point" ></a><!--active-->
							<a class="point " href="#point" ></a>
							<a class="point " href="#point" ></a>
						</div>
					</div>
					
					<div class="clear" ></div>
				
				</div>
			</div>
		</div>
		
	</div>
	
		
			
	<div id="accessuar" class="zi zi-top b-top-drd-menu" >
		
		<div class="" >
			<div class="grid grid-2 flex" >
				<div class="grid-row" >
					
					<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box " >
						<ul>
							<li><a href="" >Все категории</a></li>
							<li><a href="" >Протеины</a></li>
							<li><a href="" >Гейнеры</a></li>
							<li><a href="" >Аминокислоты</a></li>
							<li><a href="" >Креатин</a></li>
							<li><a href="" >Для суставов и связок</a></li>
							<li><a href="" >Энергетики</a></li>
							<li><a href="" >Л-карнитин</a></li>
							<li><a href="" >Витамины и минералы</a></li>
						</ul>
					</div>
					<div class="clmn-4 clmn-xs-4 clmn-sm-4 clmn-md-4 clmn-lg-4 f-box " >
						<ul>
							<li><a href="" >Предтренировочные комплексы</a></li>
							<li><a href="" >Жирные кислоты</a></li>
							<li><a href="" >Интратренировочные комплексы</a></li>
							<li><a href="" >Донаторы азота</a></li>
							<li><a href="" >Батончики, джемы, печенья, чипсы</a></li>
							<li><a href="" >Повышение тестостерона</a></li>
							<li><a href="" >Послетренировочные комплексы</a></li>
							<li><a href="" >Для сна и здоровья</a></li>
							<li><a href="" >Жиросжигатели</a></li>
						</ul>
					</div>
					<div class="clmn-5 clmn-xs-5 clmn-sm-5 clmn-md-5 clmn-lg-5 f-box product-item" >
						<div class="title" >Товары недели</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-100</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-110</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-120</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="point-block" >
							<a class="point " href="#point" ></a><!--active-->
							<a class="point " href="#point" ></a>
							<a class="point " href="#point" ></a>
						</div>
					</div>
					
					<div class="clear" ></div>
				
				</div>
			</div>
		</div>
		
	</div>
	
		
			
	<div id="ekip" class="zi zi-top b-top-drd-menu" >
		
		<div class="" >
			<div class="grid grid-2 flex" >
				<div class="grid-row" >
					
					<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box " >
						<ul>
							<li><a href="" >Все категории</a></li>
							<li><a href="" >Протеины</a></li>
							<li><a href="" >Гейнеры</a></li>
							<li><a href="" >Аминокислоты</a></li>
							<li><a href="" >Креатин</a></li>
							<li><a href="" >Для суставов и связок</a></li>
							<li><a href="" >Энергетики</a></li>
							<li><a href="" >Л-карнитин</a></li>
							<li><a href="" >Витамины и минералы</a></li>
						</ul>
					</div>
					<div class="clmn-4 clmn-xs-4 clmn-sm-4 clmn-md-4 clmn-lg-4 f-box " >
						<ul>
							<li><a href="" >Предтренировочные комплексы</a></li>
							<li><a href="" >Жирные кислоты</a></li>
							<li><a href="" >Интратренировочные комплексы</a></li>
							<li><a href="" >Донаторы азота</a></li>
							<li><a href="" >Батончики, джемы, печенья, чипсы</a></li>
							<li><a href="" >Повышение тестостерона</a></li>
							<li><a href="" >Послетренировочные комплексы</a></li>
							<li><a href="" >Для сна и здоровья</a></li>
							<li><a href="" >Жиросжигатели</a></li>
						</ul>
					</div>
					<div class="clmn-5 clmn-xs-5 clmn-sm-5 clmn-md-5 clmn-lg-5 f-box product-item" >
						<div class="title" >Товары недели</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-100</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-110</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-120</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="point-block" >
							<a class="point " href="#point" ></a><!--active-->
							<a class="point " href="#point" ></a>
							<a class="point " href="#point" ></a>
						</div>
					</div>
					
					<div class="clear" ></div>
				
				</div>
			</div>
		</div>
		
	</div>
	
		
			
	<div id="odezh" class="zi zi-top b-top-drd-menu" >
		
		<div class="" >
			<div class="grid grid-2 flex" >
				<div class="grid-row" >
					
					<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box " >
						<ul>
							<li><a href="" >Все категории</a></li>
							<li><a href="" >Протеины</a></li>
							<li><a href="" >Гейнеры</a></li>
							<li><a href="" >Аминокислоты</a></li>
							<li><a href="" >Креатин</a></li>
							<li><a href="" >Для суставов и связок</a></li>
							<li><a href="" >Энергетики</a></li>
							<li><a href="" >Л-карнитин</a></li>
							<li><a href="" >Витамины и минералы</a></li>
						</ul>
					</div>
					<div class="clmn-4 clmn-xs-4 clmn-sm-4 clmn-md-4 clmn-lg-4 f-box " >
						<ul>
							<li><a href="" >Предтренировочные комплексы</a></li>
							<li><a href="" >Жирные кислоты</a></li>
							<li><a href="" >Интратренировочные комплексы</a></li>
							<li><a href="" >Донаторы азота</a></li>
							<li><a href="" >Батончики, джемы, печенья, чипсы</a></li>
							<li><a href="" >Повышение тестостерона</a></li>
							<li><a href="" >Послетренировочные комплексы</a></li>
							<li><a href="" >Для сна и здоровья</a></li>
							<li><a href="" >Жиросжигатели</a></li>
						</ul>
					</div>
					<div class="clmn-5 clmn-xs-5 clmn-sm-5 clmn-md-5 clmn-lg-5 f-box product-item" >
						<div class="title" >Товары недели</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-100</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-110</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-120</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="point-block" >
							<a class="point " href="#point" ></a><!--active-->
							<a class="point " href="#point" ></a>
							<a class="point " href="#point" ></a>
						</div>
					</div>
					
					<div class="clear" ></div>
				
				</div>
			</div>
		</div>
		
	</div>
	
		
			
	<div id="proizv" class="zi zi-top b-top-drd-menu" >
		
		<div class="" >
			<div class="grid grid-2 flex" >
				<div class="grid-row" >
					
					<div class="clmn-3 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 f-box " >
						<ul>
							<li><a href="" >Все категории</a></li>
							<li><a href="" >Протеины</a></li>
							<li><a href="" >Гейнеры</a></li>
							<li><a href="" >Аминокислоты</a></li>
							<li><a href="" >Креатин</a></li>
							<li><a href="" >Для суставов и связок</a></li>
							<li><a href="" >Энергетики</a></li>
							<li><a href="" >Л-карнитин</a></li>
							<li><a href="" >Витамины и минералы</a></li>
						</ul>
					</div>
					<div class="clmn-4 clmn-xs-4 clmn-sm-4 clmn-md-4 clmn-lg-4 f-box " >
						<ul>
							<li><a href="" >Предтренировочные комплексы</a></li>
							<li><a href="" >Жирные кислоты</a></li>
							<li><a href="" >Интратренировочные комплексы</a></li>
							<li><a href="" >Донаторы азота</a></li>
							<li><a href="" >Батончики, джемы, печенья, чипсы</a></li>
							<li><a href="" >Повышение тестостерона</a></li>
							<li><a href="" >Послетренировочные комплексы</a></li>
							<li><a href="" >Для сна и здоровья</a></li>
							<li><a href="" >Жиросжигатели</a></li>
						</ul>
					</div>
					<div class="clmn-5 clmn-xs-5 clmn-sm-5 clmn-md-5 clmn-lg-5 f-box product-item" >
						<div class="title" >Товары недели</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-100</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-110</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="fluid-block item-variant" >
							<div class="w-045" >
								<a href="#product" ><img class="image resp" src="/img/bercan/b-top-drd-menu-product-item-image.png" /></a>
							</div>
							<div class="w-055" >
								<a class="product-title" href="#product" >Dymatize Nutrition ISO-120</a>
								<a class="product-cat" href="#product-cat" >Протеины</a>
								<span class="product-cost" >5 470 .-</span>
								<a class="more" href="#product-cat" >Посмотреть</a>
							</div>
						</div>
						<div class="point-block" >
							<a class="point " href="#point" ></a><!--active-->
							<a class="point " href="#point" ></a>
							<a class="point " href="#point" ></a>
						</div>
					</div>
					
					<div class="clear" ></div>
				
				</div>
			</div>
		</div>
		
	</div>
	
		
	</div>
	
</div>