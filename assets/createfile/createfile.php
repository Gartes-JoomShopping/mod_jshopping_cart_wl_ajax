<?php defined( '_JEXEC' ) or die;
class JFormFieldCreatefile extends JFormField{
	//protected $type = 'Createfile';
	
    public function getInput(){
		jimport('joomla.application.component.model');
		jimport( 'joomla.filesystem.file' );
		require_once (JPATH_SITE.'/components/com_jshopping/lib/factory.php'); 
		require_once (JPATH_SITE.'/components/com_jshopping/lib/functions.php');
		JSFactory::loadCssFiles();
		JSFactory::loadLanguageFile();
		$app = JFactory::getApplication();
		$user = JFactory::getUser();
		$formData=$this->form->getData();
		$jsd=json_decode($formData);
		$create_file=$jsd->params->create_file;
		$combine_file=$jsd->params->combine_file;
		if ($app->isAdmin() && $user->get('isRoot') && $create_file=="1"){
			$jshopConfig = JSFactory::getConfig();			
			$minpriceorder=$jshopConfig->min_price_order * $jshopConfig->currency_value; 
			$maxpriceorder=$jshopConfig->max_price_order * $jshopConfig->currency_value;
			$dcount=$jshopConfig->decimal_count;
			$tseparator=$jshopConfig->thousand_separator;
			JModelLegacy::addIncludePath(JPATH_SITE.'/components/com_jshopping/models');
			$cart = JModelLegacy::getInstance('cart', 'jshop');
			$product = JTable::getInstance('product', 'jshop');
			$type_view=$jsd->params->type_view;
			$bs_version=$jsd->params->bs_version;
			$off_ajax=$jsd->params->off_ajax;
			$iclass_ok = $jsd->params->iclass_ok;
			
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
			//if ($off_ajax=='1'){
				//$controller = JRequest::getVar('controller', null);
			//}
			if ($bs_version=="1"){
				$bsv="bs2";
			} elseif ($bs_version=="2") {
				$bsv="bs3";
			} else {
				$bsv="bs4";
			}
			$f_name="js_".$obj_postfix.".js";
			$file=dirname(__FILE__) . '/../js/'.$f_name.'';
			$buf='//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_'.$obj_postfix.'='.json_encode($jsd->params).';
				mod_ajax_data={
				"data_uri":"'.JURI::root().'",
				"data_ilp":"'.$jshopConfig->image_product_live_path.'",
				"data_cc":"'.$jshopConfig->currency_code.'",
				"data_sp":"'.SEFLink('index.php?option=com_jshopping&controller=product&task=view',1).'",
				"data_bsv":"'.$bsv.'",
				"data_dcount":"'.$dcount.'",
				"data_tseparator":"'.$tseparator.'",
				"data_lps":"'.JText::_('PRODUCTS_SUMM_MINI').'",
				"data_dt":"'. _JSHOP_DELETE .'",
				"data_dtf":"'.JText::_('PRODUCT_REMOVE_FROM_'.$lang.'_MINI').'",
				"data_rel":"'._JSHOP_RELATED_PRODUCTS.' &dArr;",
				"data_rabattv":"'. _JSHOP_RABATT_VALUE. '",
				"data_rabatt":"'. _JSHOP_RABATT. '",
				"data_rabatta":"'. _JSHOP_RABATT_ACTIVE. '",
				"data_pp":"'.JText::_('PRODUCT_PARAMS_CART_MINI').'",
				"data_pef":"'.JText::_('PRODUCT_EF_CART_MINI').'",
				"data_minpo":"'.$minpriceorder.'",
				"data_maxpo":"'.$maxpriceorder.'",
				"data_minpotxt":"'.sprintf(_JSHOP_ERROR_MIN_SUM_ORDER, htmlspecialchars(formatprice($minpriceorder))).'",
				"data_maxpotxt":"'.sprintf(_JSHOP_ERROR_MAX_SUM_ORDER, htmlspecialchars(formatprice($maxpriceorder))).'"
				};
				mod_ajax_data_'.$obj_postfix.'={
				"data_ect":"'.JText::_('EMPTY_'.$lang.'').'",
				"data_et":"'.JText::_('MINI_'.$lang.'_EXTERN').'",
				"data_lp":"'.JText::_('PRODUCT_AT_'.$lang.'_MINI') .'",
				"data_lpwlv":"'.JText::_('PRODUCT_AT_WISHLIST_MINI') .'",
				"data_lpcv":"'.JText::_('PRODUCT_AT_CART_MINI') .'",
				"data_lpc":"'.JText::_('PRODUCTS_AT_'.$lang.'_MINI').'", 
				"data_lpm":"'.JText::_('PRODUCTS_AT_'.$lang.'_MINI_EXT').'", 
				"data_lpe":"'.JText::_('MINI_'.$lang.'').'", 
				"data_classok":"'.$iclass_ok.'",
				"data_sd":"'.SEFLink('index.php?option=com_jshopping&controller='.$del_sef.'&task=delete',1).'"
				};';
			if ($combine_file!="1"){
				JFile::write($file, $buf); 
			} else {
				$copy_file=dirname(__FILE__) . '/../js/ajax.min.js';
				$new_filedirname=dirname(__FILE__) . '/../js/ajax_combine.js';
				if ($type_view=="1") {
					JFile::copy($copy_file, $new_filedirname);
					JFile::append($new_filedirname, $buf);
				} else {
					JFile::append($new_filedirname, $buf);
				}
			}
		}
	}
}