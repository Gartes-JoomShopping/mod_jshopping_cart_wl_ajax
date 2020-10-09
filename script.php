<?php
defined('_JEXEC') or die;
class mod_jshopping_cart_wl_ajaxInstallerScript
{
	
	public function postflight($type, $parent) 
	{
		$app = JFactory::getApplication();
		$app->enqueueMessage(JText::_('JSH_CANNOT_INSTALL_PAY'), 'notice');
	}
	
}