<?php defined('_JEXEC') or die('Restricted access');?>
<?php if ($jshopConfig->min_price_order){?>
    <span class="min-price-text">
        <?php if ($cart->getSum(0,1)<$minpriceorder && $type_view=="1") {
            print sprintf(_JSHOP_ERROR_MIN_SUM_ORDER, formatprice($minpriceorder));
        } ?>
    </span>
<?php } ?>
<?php if ($jshopConfig->max_price_order){?>
    <span class="max-price-text">
        <?php if ($cart->getSum(0,1)>$maxpriceorder && $type_view=="1") {
            print sprintf(_JSHOP_ERROR_MAX_SUM_ORDER, formatprice($maxpriceorder));
        } ?>
    </span>
<?php } ?>