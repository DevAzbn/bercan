<?
//<!-- Пустой файл модуля. НЕ УДАЛЯТЬ! -->

$product = &$param['item_lazy'];

$cost_list = $this->FE->DB->dbSelect("SELECT * FROM `".$this->FE->DB->dbtables['t_product_cost']."` WHERE visible = '1' AND product = '{$product['id']}' ORDER BY cost");

$taste_list = $this->FE->DB->dbSelect("SELECT * FROM `".$this->FE->DB->dbtables['t_product_taste']."` WHERE visible = '1' ORDER BY title");

$cat = $this->FE->CMS->getRow('t_productcat', $product['cat']);

$like = $this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$this->FE->DB->dbtables['t_product_liked']."` WHERE product = '{$product['id']}' AND profile='{$_SESSION['profile']['id']}'");
if($like['id']) {
	$liked = 'active';
} else {
	$liked = '';
}
?>
<div class="order-info " data-product_id="<?=$product['id'];?>" >
	
	<div class="info-cont " >
		
		<div class="preview" >
			<?=$product['preview'];?>
		</div>
		
		<div class="boxing" data-product_id="<?=$product['id'];?>" >
			<div class="title" >Упаковка</div>
			
			<?
			if(mysql_num_rows($cost_list)) {
				while($row=mysql_fetch_array($cost_list)) {
			?>
			
			<a class="item " href="#" data-product_boxing="<?=$row['id'];?>" data-boxing_cost="<?=$row['cost'];?>" data-boxing_oldcost="<?=$row['oldcost'];?>" ><?=$row['title'];?></a>
			
			<?
				}
				mysql_data_seek($cost_list,0);
			} else {
			?>
			
			<a class="item active" href="#" data-product_boxing="0" data-boxing_cost="<?=$product['cost'];?>" data-boxing_oldcost="<?=$product['oldcost'];?>" >стандарт</a>
			
			<?
			}
			?>
			
			<!--
			<a class="item active" href="#" data-product_boxing="1" data-boxing_cost="<?=$product['cost'];?>" data-boxing_oldcost="<?=$product['oldcost'];?>" >2275 г.</a>
			<a class="item" href="#" data-product_boxing="2" data-boxing_cost="14 990" data-boxing_oldcost="15 560" >1350 г.</a>
			<a class="item" href="#" data-product_boxing="3" data-boxing_cost="24 990" data-boxing_oldcost="25 560" >1350 г.</a>
			-->
		</div>
		
		<div class="taste" data-product_id="<?=$product['id'];?>" >
			
			<div class="title" >Вкус</div>
			<?
			if(mysql_num_rows($taste_list)) {
				while($row=mysql_fetch_array($taste_list)) {
			?>
			
			<a class="item " href="#" data-product_taste="<?=$row['id'];?>" ><?=$row['title'];?></a>
			
			<?
				}
				mysql_data_seek($taste_list,0);
			}
			?>
			
			<!--
			<a class="item active" href="#" data-product_taste="1" >Ваниль</a>
			<a class="item" href="#" data-product_taste="2" >Шоколад</a>
			<a class="item" href="#" data-product_taste="3" >Печенье</a>
			<a class="item" href="#" data-product_taste="4" >Банан</a>
			<a class="item" href="#" data-product_taste="5" >Апельсин</a>
			<a class="item" href="#" data-product_taste="6" >Вишня</a>
			<a class="item" href="#" data-product_taste="7" >Шоколадный пирог</a>
			-->
		</div>
		
		<div class="cost-cont" data-product_id="<?=$product['id'];?>" data-product_boxing="1" data-product_taste="1" >
			<div class="real" ><span>4 990</span> .-</div>
			<div class="old" ><span>5 560</span></div>
		</div>
		
		<div class="btn-cont" >
			<?
			if($product['count'] > 0) {
				
				if($this->FE->CMS->is_profile()) {
			?>
			<a class="buy-btn on-hover ch-color btn w2r addone-to-cart" href="#addone-to-cart-<?=$product['id'];?>" data-product_id="<?=$product['id'];?>" >Купить</a>
			<?
				} else {
			?>
			<a class="buy-btn on-hover ch-color btn w2r b-modal-btn" href="#modal-login-form" data-product_id="<?=$product['id'];?>" >Купить</a>
			<?
				}
				
			} else {
			?>
			<a class="buy-btn on-hover ch-color btn w2r b-modal-btn" href="#modal-product-subsribe-<?=$product['id'];?>" data-product_id="<?=$product['id'];?>" >Купить</a>
			<?
			}
			?>
			
			
			
			<?
			//$like = $this->FE->CMS->getRow('t_product_liked', $like['id']);
			?>
			<a class="like-btn <?=$liked;?> " href="#like" data-product_id="<?=$product['id'];?>" <?if($like['id']){?>title="Вам понравился товар <?=date('d.m.Y', $like['created_at']);?>"<?}?> >Мне нравится</a>
			
			
			<br />
			
			<a class="one-click-btn b-modal-btn" href="#modal-fastbuy-product-<?=$product['id'];?>" data-product_id="<?=$product['id'];?>" >Купить в 1 клик</a>
			
		</div>
		
		<div class="tag-line" >
			<a href="<?=$this->FE->CMS->genLink($cat, 'productcat', false, true);?>" ><?=$cat['title'];?></a>
			<!--
			<a href="#link" >Dymatize Nutrition</a>
			<a href="#link" >Изоляты</a>
			-->
		</div>
		
	</div>
	
</div>