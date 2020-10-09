<?php
defined('_JEXEC') or die('Restricted access');
?>
<?php if (count($cart->products) >= 1) {?> 
  <div class="extern_wrap <?php if ($show_fixed=='1') print "dblock";?> <?php if ($show_onclick=='1') print "dnone";?>">	<div class="span9 col-md-9 mycart_mini_txt extern <?php print str_replace("_:","",$layout); ?> <?php if ($color=="1"){print "green";} if ($color=="2"){print "grey";} if ($color=="3"){print "dark";} if ($color=="4"){print "red";} if ($color=="5"){print "orange";} if ($color=="6"){print "blue";}?>"  title="<?php if ($cart->count_product) print JText::_('MINI_CART_EXTERN') ?>">
            <!-- <?php // print $compare_name; ?> -  -->
            <p class="closes1">
			<a class="close1" onclick="quickOrder.closeForm(this)" title="Закрыть">Х</a>
			</p>
</div>
  	<div class="extern_content">

  <?php 
  $countprod = 0;
  $array_products = array();
  foreach($cart->products as $key_id=>$value){
    $array_products [$countprod] = $value;
  ?> 
    <div class="extern_row <?php  if ( ($countprod + 2) % 2 > 0) { print 'odd'; } else { print 'even'; }  ?>">
    	<div class="desription-top">54554554
         <div class="pict"><span class="pict"><img src="<?php print $jshopConfig->image_product_live_path?>/<?php if ($array_products [$countprod]["thumb_image"]!='') print $array_products [$countprod]["thumb_image"]; else print $noimage ?>"/></span></div><div class="desription-top-middle">
         <div class="name"><span data-id="<?php print $array_products [$countprod]["product_id"]?>" data-qtty-<?php print $array_products [$countprod]["product_id"]; ?>="<?php print $value["quantity"]; ?>" class="name"><a href="<?php print $array_products [$countprod]['href']?>"><?php print $array_products [$countprod]["product_name"]; ?></a></span></div>
         <div class="quantity block"><span class="qtty"><?php if ($show_quantity_buttons=="1" && $type_view=="1") {?><span class="minus_quantity" data-minus-key="quantity[<?php print $key_id;?>]" data-minus-val="<?php print $value["quantity"];?>">-</span><span class="plus_quantity" data-plus-key="quantity[<?php print $key_id;?>]" data-plus-val="<?php print $value["quantity"];?>">+</span><input type="text" value="<?php print $value["quantity"];?>" class="input_quantity" data-input-key="quantity[<?php print $key_id;?>]" data-input-val="<?php print $value["quantity"];?>" /><?php } else {print $array_products [$countprod]["quantity"];}?> x </span>
         		<div class="price"><span class="summ"><?php print formatprice($array_products [$countprod]["price"]); ?></span></div>
         </div>
         </div>
         <div class="delete"><span class="delete"><a href="<?php print $array_products [$countprod]["href_delete"];?>&ajax=1"  title="<?php echo _JSHOP_DELETE ?>">X</a></span></div>
      </div>
      <div class="desription-bottom block">
         <span class="minicart_attr_wrap <?php if (!$array_products [$countprod]['attributes_value']) print "attr_length_0";?>"><?php if ($array_products [$countprod]['attributes_value']) print JText::_('PRODUCT_PARAMS_CART_MINI'); ?><?php print mod_jshopping_cart_wl_ajaxHelper::sprintAtributeInCartMy($array_products [$countprod]['attributes_value']);?></span>
         <?php if ($show_ef=='1'){ ?>
         <span class="minicart_ef_wrap <?php if (!$array_products [$countprod]['extra_fields']) print "ef_length_0";?>"><?php if ($array_products [$countprod]['extra_fields']) print JText::_('PRODUCT_EF_CART_MINI');;?><?php print mod_jshopping_cart_wl_ajaxHelper::sprintFreeExtraFiledsInCartMy($array_products [$countprod]['extra_fields']);?></span>
         <?php } ?>
      </div>
	  </div>
  <div class="clear"></div>     
  <?php $countprod++; ?>
<?php } ?>
			</div>
  <div class="extern_bottom"> 
   <span class="total"><?php print JText::_('PRODUCTS_AT_'.$lang.'_MINI');?> <span class="total_qtty"><?php print $cart->count_product;?></span> <?php print JText::_('PRODUCTS_SUMM_MINI') ?>
   <span class="text_summ_total"></span> <span class = "summ_total"><?php print formatprice($cart->getSum(0,1))?></span>
   <?php if ($type_view=="1" && $show_rabatt=="1"){?>
   <span class="dblock rabatt-block">
   <span class="text_summ_rabatt"><?php print _JSHOP_RABATT_VALUE;?> - </span> <span class="summ_rabatt"><?php print formatprice($cart->rabatt_summ); ?></span>
   <?php if ($controller!="cart"){?>
   <span class="row-fluid jshop">
        <span class = "span12 col-md-12">
            <input type = "text" class = "inputbox rabatt-code" name = "rabatt-form" value = "" placeholder="<?php print _JSHOP_RABATT ?>" />
            <input type = "button" class = "button btn list-btn rabatt-submit" value = "<?php print _JSHOP_RABATT_ACTIVE ?>" />
        </span>
    </span>
  </span>
		<?php }} ?>
  </span>
  
<!--GoToCart-->
<?php require JModuleHelper::getLayoutPath('mod_jshopping_cart_wl_ajax', '__gotocart');?>
<!--End GoToCart-->

<!--MinMaxPriceOrder-->
<?php require JModuleHelper::getLayoutPath('mod_jshopping_cart_wl_ajax', '__minmaxprice');?>
<!--End MinMaxPriceOrder-->
    
 </div>  
</div>
<?php } else { ?>
<div class="extern_wrap <?php if ($show_fixed=='1') print "dblock";?> <?php if ($show_onclick=='1') print "dnone";?>">
  	<div class="extern_content">
	<div class="span9 col-md-9 mycart_mini_txt extern <?php print str_replace("_:","",$layout); ?> <?php if ($color=="1"){print "green";} if ($color=="2"){print "grey";} if ($color=="3"){print "dark";} if ($color=="4"){print "red";} if ($color=="5"){print "orange";} if ($color=="6"){print "blue";}?>"  title="<?php if ($cart->count_product) print JText::_('MINI_CART_EXTERN') ?>">

		 <p class="closes1">
			<a class="close1" onclick="quickOrder.closeForm(this)" title="Закрыть">Х</a>
			</p>
</div>
<span class="extern_empty"><?php print JText::_('EMPTY_'.$lang.'') ?></span>
  </div>
   <div class="extern_bottom empty_cart"> 
   <span class="total"><?php print JText::_('PRODUCTS_AT_'.$lang.'_MINI') ?> <span class="total_qtty"><?php print $cart->count_product;?> </span><?php print JText::_('PRODUCTS_SUMM_MINI') ?>
   <span class="text_summ_total"></span> <span class = "summ_total"><?php print formatprice($cart->getSum(0,1))?></span>
  </span>
  
<!--GoToCart-->
<?php require JModuleHelper::getLayoutPath('mod_jshopping_cart_wl_ajax', '__gotocart');?>
<!--End GoToCart-->
  
<!--MinMaxPriceOrder-->
<?php require JModuleHelper::getLayoutPath('mod_jshopping_cart_wl_ajax', '__minmaxprice');?>
<!--End MinMaxPriceOrder-->
    
  </div>  
</div>
<?php } ?>