<?
// ЦМС
//$this->FE->CMS->getRow($table = 't_sysopt', $id = 0, $field = false)
//$author = $this->FE->CMS->getRow('t_profile', $param['item_id']['profile']);

$this->FE->Viewer->lazy_p($param['item_id']);
//$param['item_lazy'] = &$param['item_id'];

$param['item_id']['liked'] = $this->FE->DB->dbSelectFirstRow("SELECT COUNT(*) as cnt FROM `".$this->FE->DB->dbtables['t_product_liked']."` WHERE product = '{$param['item_id']['id']}'");
$param['item_id']['liked'] = $this->FE->as_int($param['item_id']['liked']['cnt']);
?>

<div class="fluid-block b-product-header " >
	
	<?
	$this->FE->Viewer->f_path(array(
		'/product/' => 'Каталог товаров',
		$this->FE->CMS->genLink($param['cat_id'], 'productcat', false, true) => $param['cat_id']['title'],
		$this->FE->CMS->genLink($param['item_id'], 'product', false, true) => $param['item_id']['title'],
	));
	?>
	
		<div class="adaptive-block grid grid-12 " >
		<div class="grid-row" >
			
			<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 product-title " >
				
				<div class="back-to-shop" >
					<a class="all-product-btn on-hover ch-color btn r2w" href="/product/" >Вернуться в магазин</a>
				</div>
				
				<div class="title" >
					<span class="value" ><?=$param['item_id']['title'];?></span>
					<!--
					<span class="internet-only active" ></span>
					<span class="recommend active" ></span>
					-->
				</div>
				
				
			</div>
			
			<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 product-liked " >
				
				<span class="liked" ><span class="count" ><?=$param['item_id']['liked'];?></span> человек оценили этот товар</span>
				
			</div>
			
			<div class="clear" ></div>
		
		</div>
	</div>
	
</div>

<div class="fluid-block b-product-content " data-product_id="<?=$param['item_id']['id'];?>" >
	
	<div class="adaptive-block grid grid-12 " >
		<div class="grid-row" >
			
			
			
			
			
			<div class="clmn-12 clmn-xs-4 clmn-sm-4 clmn-md-4 clmn-lg-4 left-cont" >
				
				<div class="photos" >
					
					<div class="main-photo" >
						<img src="<?=$param['item_id']['img'];?>_product" />
					</div>
					
					<?
					$other_photos = $this->FE->DB->dbSelect("SELECT * FROM `".$this->FE->DB->dbtables['t_galleryitem']."` WHERE visible = '1' AND gal IN ('{$product['gal']}') ORDER BY rating, id");
					if(mysql_num_rows($other_photos)) {
					?>
					<div class="adaptive-block grid grid-12 other-photos" >
						<div class="grid-row" >
							
							<?
							while($row=mysql_fetch_array($other_photos)) {
							?>
							
							<div class="clmn-12 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 " >
								<a class="item" href="#photo-<?=$row['id'];?>" ><img src="<?=$row['img'];?>" /></a>
							</div>
							
							<?
							}
							mysql_data_seek($other_photos,0);
							?>
							
							<!--
							<div class="clmn-12 clmn-xs-3 clmn-sm-3 clmn-md-3 clmn-lg-3 " >
								<a class="item" href="#link" ><img src="<?=$param['item_id']['img'];?>?1" /></a>
							</div>
							-->
							
							<div class="clear" ></div>
						</div>
					</div>
					<?
					}
					?>
					
				</div>
				
				<?
				$param['mdl']['news/last2'] = 'news/last2';
				$this->FE->Viewer->module_live('news/last2', $param);
				?>
				
				<?
				$param['mdl']['product/viewed2'] = 'product/viewed2';
				$this->FE->Viewer->module_live('product/viewed2', $param);
				?>
				
				<div class="clear" ></div>
				
			</div>
			
			
			
			
			
			<div class="clmn-12 clmn-xs-8 clmn-sm-8 clmn-md-8 clmn-lg-8 right-cont" >
				
				<div class="fluid-block grid grid-12 " >
					<div class="grid-row" >
						
						<div class="clmn-12 clmn-xs-7 clmn-sm-7 clmn-md-7 clmn-lg-7 " >
							
							<?
							$param['item_lazy'] = &$param['item_id'];
							$param['mdl']['product/order-info'] = 'product/order-info';
							$this->FE->Viewer->module_live('product/order-info', $param);
							?>
							
							<div class="clear" ></div>
						</div>
						
						<div class="clmn-12 clmn-xs-5 clmn-sm-5 clmn-md-5 clmn-lg-5 " >
							
							<?
							$param['mdl']['product/meta-info'] = 'product/meta-info';
							$this->FE->Viewer->module_live('product/meta-info', $param);
							?>
							
							<div class="clear" ></div>
						</div>
						
						<div class="clear" ></div>
					
					</div>
				</div>
				
				<div class="fluid-block grid grid-12 " >
					<div class="grid-row" >
						
						<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 " >
							
							<?
							$param['mdl']['product/main-info'] = 'product/main-info';
							$this->FE->Viewer->module_live('product/main-info', $param);
							?>
							
							<div class="clear" ></div>
						</div>
						
						<div class="clear" ></div>
					
					</div>
				</div>
				
				
				
				
				
				<div class="clear" ></div>
			</div>
			
			
			
			
			
			<div class="clear" ></div>
		
		</div>
	</div>
	
</div>

<!--
<div class="fluid-block b-product-satellite b-sale-leader-list b-white-bg " >
	
	<div class="adaptive-block grid grid-12 " >
		<div class="grid-row" >
			
			<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 " >
				<div class="menu hidden" >
					<ul >
						<li><a href="#link1" ></a></li>
					</ul>
				</div>
				<div class="b-title" >с этим товаром используют</div>
			</div>
			
			<div class="clear" ></div>
		
		</div>
	</div>
	
</div>
-->

<?

$param['mdl']['product/order-cert'] = 'product/order-cert';
$this->FE->Viewer->module_live('product/order-cert', $param);

$param['mdl']['product/leaders'] = 'product/leaders';
$this->FE->Viewer->module_live('product/leaders', $param);