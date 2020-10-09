<?php
/**
* @version      3.7.2 21.03.2019
* @author       Brooksus
* @package      JoomShopping
* @copyright    Copyright (C) 2016 Brooksite.ru. All rights reserved.
* @license      2016. Brooksite.ru (http://brooksite.ru/litsenzionnoe-soglashenie.html).
*/

defined('_JEXEC') or die('Restricted access');

if (!file_exists(JPATH_SITE.'/components/com_jshopping/jshopping.php')){
    JError::raiseError(500,"Please install component \"joomshopping\"");
}

jimport('joomla.application.component.model');

JLoader::register('mod_jshopping_cart_wl_ajaxHelper', __DIR__ . '/helper.php');
require_once (JPATH_SITE.'/components/com_jshopping/lib/factory.php'); 
require_once (JPATH_SITE.'/components/com_jshopping/lib/functions.php');
JSFactory::loadCssFiles();
JSFactory::loadLanguageFile();

//jimport( 'joomla.application.module.helper' );
//$module = JModuleHelper::getModule('mod_jshopping_cart_wl_ajax');

//PARAMS
$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));
$layout = $params->get('layout', 'default');
$color = $params->get('cart_color', 1);
$type_view = $params->get('type_view',1);
$highlight_attr = $params->get('highlight_attr',1);
$show_added_to_cart = $params->get('show_added_to_cart',1);
$show_added_to_cart_icon = $params->get('show_added_to_cart_icon',0);
$show_added_to_cart_icon_prod = $params->get('show_added_to_cart_icon_prod',0);
$show_qtty = $params->get('show_qtty',0);
$show_qttylist = $params->get('show_qttylist',0);
$show_quantity_buttons = $params->get('show_quantity_buttons',0);
$show_rabatt = $params->get('show_rabatt',0);
$show_fixed = $params->get('show_fixed',0);
$show_onclick = $params->get('show_onclick',0);
$show_ef = $params->get('show_ef',0);
$modal_type = $params->get('modal_type',2);
$modal_dop = $params->get('modal_dop',0);
$off_ajax = $params->get('off_ajax',1);
$clone_mw = $params->get('clone_mw',0);
$bs_version=$params->get('bs_version', 1);
$clone_selector = $params->get('clone_selector','.footer');
$include_font = $params->get('include_font', 1);
$iclass_cart = $params->get('iclass_cart','fa fa-shopping-cart');
$iclass_wl = $params->get('iclass_wl','fa fa-heart');
$iclass_ok = $params->get('iclass_ok','fa fa-check');
$extselectorcart=$params->get('extselector_cart','.extselectorcart');
$create_file=$params->get('create_file',0);
$combine_file=$params->get('combine_file',0);

$jshopConfig = JSFactory::getConfig(); 
$minpriceorder=$jshopConfig->min_price_order * $jshopConfig->currency_value; 
$maxpriceorder=$jshopConfig->max_price_order * $jshopConfig->currency_value;
$dcount=$jshopConfig->decimal_count;
$tseparator=$jshopConfig->thousand_separator;
JModelLegacy::addIncludePath(JPATH_SITE.'/components/com_jshopping/models');
$cart = JModelLegacy::getInstance('cart', 'jshop');
$product = JTable::getInstance('product', 'jshop');
if ($type_view=="1"){
	$lang="CART";
	$obj_postfix="cart_view";	
	$cart->load("cart");
	$cart->addLinkToProducts(1,$type="cart");
	$go_sef=SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1);
	$del_sef="cart";
} else {
	$lang="WISHLIST";
	$obj_postfix="wishlist_view";
	$cart->load("wishlist");
	$cart->addLinkToProducts(1,$type="wishlist");
	$go_sef=SEFLink('index.php?option=com_jshopping&controller=wishlist&task=view',1);
	$del_sef="wishlist";
}
if ($off_ajax=='1'){
	$controller = JRequest::getVar('controller', null);
}
if ($bs_version=="1"){
	$bsv="bs2";
} elseif ($bs_version=="2") {
	$bsv="bs3";
} else {
	$bsv="bs4";
}

////Add Style Script
$document = JFactory::getDocument(); 
$document->addStyleSheet(JURI::base().'modules/mod_jshopping_cart_wl_ajax/assets/css/default.min.css');
if ($include_font=="1"){
	$document->addStyleSheet(JURI::base().'modules/mod_jshopping_cart_wl_ajax/assets/css/font-awesome.min.css');
}

//AJAX
$f_name="js_".$obj_postfix.".js";
$fileurl=JURI::root().'modules/mod_jshopping_cart_wl_ajax/assets/js/'.$f_name.'';
if ($combine_file!="1"){
	$document->addScript(JURI::base().'modules/mod_jshopping_cart_wl_ajax/assets/js/ajax.min.js','text/javascript', true, false);
	if ($create_file=="1" && file_exists('modules/mod_jshopping_cart_wl_ajax/assets/js/'.$f_name.'')) {
		$document->addScript($fileurl,'text/javascript', true, false);
		mod_jshopping_cart_wl_ajaxHelper::ajaxDataInCArt2($controller, $document);
	} else {
		mod_jshopping_cart_wl_ajaxHelper::ajaxDataInCArt($jshopConfig, $controller, $del_sef, $lang, $bsv, $dcount, $tseparator, $module, $document,$obj_postfix, $iclass_ok, $minpriceorder, $maxpriceorder);
	}
} else {
		$document->addScript(JURI::base().'modules/mod_jshopping_cart_wl_ajax/assets/js/ajax_combine.js','text/javascript', true, false);
		mod_jshopping_cart_wl_ajaxHelper::ajaxDataInCArt2($controller, $document);
}

$noimage = "noimage.gif";
require(JModuleHelper::getLayoutPath('mod_jshopping_cart_wl_ajax',$layout)); ?>