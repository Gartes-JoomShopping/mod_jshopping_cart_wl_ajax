<?php defined('_JEXEC') or die('Restricted access');?>
<span class="gotocart">
    <a href = "<?php print $go_sef; ?>" target="_top">
    	<?php print JText::_('GO_TO_'.$lang.'')?>
    </a>
    <?php if ($type_view=="1") {?>
        <a href="<?php if ($jshopConfig->shop_user_guest==1){
        print SEFLink('index.php?option=com_jshopping&controller=checkout&task=step2&check_login=1',1, 0, $jshopConfig->use_ssl);
        }else{
        print SEFLink('index.php?option=com_jshopping&controller=checkout&task=step2',1, 0, $jshopConfig->use_ssl);
        } ?>" class="checkout <?php if (($jshopConfig->min_price_order && $cart->getSum(0,1)<$minpriceorder) || ($jshopConfig->max_price_order && $cart->getSum(0,1)>$maxpriceorder)) print 'dnone-force';?>"><?php print _JSHOP_CHECKOUT ?></a>
    <?php } ?>
</span>