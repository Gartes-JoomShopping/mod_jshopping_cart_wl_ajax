jQuery(function(){"use strict";function t(t){"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?jQuery(t).addClass("touch-device"):jQuery(t).addClass("notouch-device")}function e(t){"cart_view"===jQuery.trim(t)?(K=mod_params_cart_view,V=mod_ajax_data_cart_view):"wishlist_view"===jQuery.trim(t)&&(K=mod_params_wishlist_view,V=mod_ajax_data_wishlist_view),wt=V.data_sd.indexOf("?")!==-1?"&number_id=":"?number_id="}function a(t,e){"cart_view"===jQuery.trim(e)&&(0!==parseInt(Nt)&&(parseInt(t.price_product)-parseInt(t.rabatt_summ)<parseInt(Nt)?jQuery("span.min-price-text").html(Pt):parseInt(t.price_product)-parseInt(t.rabatt_summ)>=parseInt(Nt)&&jQuery("span.min-price-text").html("")),0!==parseInt(Lt)&&(parseInt(t.price_product)-parseInt(t.rabatt_summ)>parseInt(Lt)?jQuery("span.max-price-text").html(Ft):parseInt(t.price_product)-parseInt(t.rabatt_summ)<=parseInt(Lt)&&jQuery("span.max-price-text").html("")),jQuery("span.min-price-text").html()||jQuery("span.max-price-text").html()?jQuery(".gotocart .checkout, .modal_checkout").addClass("dnone-force"):jQuery(".gotocart .checkout, .modal_checkout").removeClass("dnone-force"))}function r(t){e(t),ut=V.data_lp,lt=V.data_lpc,pt=V.data_lpe,mt=V.data_lpm,_t=V.data_et,yt=V.data_ect}function o(){jQuery(".clone_mw").remove(),jQuery(".cart_view .mycart_wrapp:not('.emptycart')").clone().appendTo(L).addClass("clone_mw").removeAttr("id"),jQuery(".clone_mw .extern_wrap").remove()}function n(t,e){if(rt="",Z="","1"===C||"1"===W||"1"===S||"1"===N&&!jQuery(".mycart_mini_txt.extern").length){for(var a in t)if("products"===a&&t.hasOwnProperty(a))for(var r in t[a])if(t[a].hasOwnProperty(r))for(var o in t[a][r])t[a][r].hasOwnProperty(o)&&("product_id"===o&&(Z=t[a][r][o]),"product_name"===o&&(rt+="<span data-id='"+Z+"' class='name'></span>"));jQuery(".prod_data_id").html(rt)}}function i(){if(jQuery(".atcart").remove(),jQuery(".atwl").remove(),$)var t=parseInt(jQuery("input#product_id").val());var e=jQuery(".cart_view [id^='jshop_module_cart_mini_'] span.name").map(function(){return jQuery(this).data("id")}),a=jQuery(".wishlist_view [id^='jshop_module_cart_mini_'] span.name").map(function(){return jQuery(this).data("id")});jQuery.each(jQuery.unique(e),function(e,a){jQuery(".productitem_"+a+" .button_buy").addClass("fullcart"),"1"===S&&jQuery(".productitem_"+a+" .button_buy").after(" <a rel='tooltip' data-placement='top' class='atcart btn list-btn satci' href='"+jQuery(".cart_view .gotocart a:first").attr("href")+"' title='"+Qt+". "+jQuery(".cart_view .gotocart a:first").text()+"'><i class='"+P+"'></i></a> "),$&&"1"===N&&t===a&&jQuery("*[onclick=\"jQuery('#to').val('cart');\"]").after(" <a rel='tooltip' data-placement='top' class='atcart btn list-btn satcip' href='"+jQuery(".cart_view .gotocart a:first").attr("href")+"' title='"+Qt+". "+jQuery(".cart_view .gotocart a:first").text()+"'><i class='"+P+"'></i></a> ")}),jQuery.each(jQuery.unique(a),function(e,a){jQuery(".productitem_"+a+" .product-button-wishlist").addClass("fullcart"),"1"===C&&jQuery(".productitem_"+a+" .product-button-wishlist").after(" <a rel='tooltip' data-placement='top' class='atwl btn list-btn' href='"+jQuery(".wishlist_view .gotocart a:first").attr("href")+"' title='"+Ot+". "+jQuery(".wishlist_view .gotocart a:first").text()+"'><i class='"+P+"'></i></a> "),$&&"1"===W&&t===a&&jQuery("*[onclick=\"jQuery('#to').val('wishlist');\"]").after(" <a rel='tooltip' data-placement='top' class='atwl btn list-btn' href='"+jQuery(".wishlist_view .gotocart a:first").attr("href")+"' title='"+Ot+". "+jQuery(".wishlist_view .gotocart a:first").text()+"'><i class='"+P+"'></i></a> ")})}function c(){var t;if(jQuery(".qttyobj").remove(),$)var e=parseInt(jQuery("input#product_id").val());var a=jQuery(".cart_view [id^='jshop_module_cart_mini_'] span.name").map(function(){return jQuery(this).data("id")});jQuery.each(jQuery.unique(a),function(a,r){var o=0,n=jQuery(".cart_view [id^='jshop_module_cart_mini_'] span.name").map(function(){return jQuery(this).data("qtty-"+r)});jQuery.each(n,function(t,e){o+=parseInt(this)||0}),"1"===I&&(t="1"===S?".satci":".button_buy",jQuery(".productitem_"+r+" "+t).after(" <a rel='tooltip' data-placement='top' class='atcart btn list-btn qttyobj' href='"+jQuery(".cart_view .gotocart a:first").attr("href")+"' title='"+gt+". "+jQuery(".cart_view .gotocart a:first").text()+"'>"+o+"</a> ")),$&&"1"===D&&e===r&&(t="1"===N?".satcip":"*[onclick=\"jQuery('#to').val('cart');\"]",jQuery(t).after(" <a rel='tooltip' data-placement='top' class='atcart btn list-btn qttyobj' href='"+jQuery(".cart_view .gotocart a:first").attr("href")+"' title='"+gt+". "+jQuery(".cart_view .gotocart a:first").text()+"'>"+o+"</a> "))})}function s(t){jQuery("."+t+".modal_header").text(jQuery("."+t+".modal_header").data("header")),jQuery("."+t+".modal_pretext").text(jQuery("."+t+".modal_pretext").data("modal-text")),jQuery("."+t+".modal_summ_text").text(jQuery("."+t+".modal_summ_text").data("modal-summ-text")),jQuery("."+t+".closeDOMWindow").text(jQuery("."+t+".closeDOMWindow").data("modal-close-btn")),jQuery("."+t+".modal_delete").text(jQuery("."+t+".modal_delete").data("delete"))}function d(t,e,a,r,o){jQuery.openDOMWindow({anchoredClassName:e,windowSourceID:a+t,height:r,width:o,overlayOpacity:5,windowBGColor:"#fff",borderColor:"#555555"})}function u(t,e,a){s(e),"1"===K.show_added_to_cart?(jQuery(".prod_buttons").length?a.parents(".prod_buttons").prepend("<span class='was_added_to_cart'>"+ut+"</span>"):a.parent("div").prepend("<span class='was_added_to_cart'>"+ut+"</span>"),setTimeout(function(){jQuery(".was_added_to_cart").fadeOut(3e3)},1e3)):"2"===K.show_added_to_cart&&(jQuery(".modal_quantity").html(t.count_product),jQuery(".modal_summ").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),"2"===K.modal_type?jQuery("#inlineContent_minicart_"+e).modal():(d(e,"defaultDOMWindow","#inlineContent_minicart_",160,350),jQuery(".modal.dop .modal_to_cart, .modal.dop .modal_checkout, .modal.dop .modal_text").removeClass("dnone"))),setTimeout(function(){jQuery("a").removeClass("was_clicked")},3500),"1"!==C&&"1"!==W&&"1"!==S&&"1"!==N||i(),"1"!==D&&"1"!==I||c()}function l(t,e,a){rt="",y(t,e),"1"===K.modal_dop&&(w(t,e),j(t,e),h(t,e),v(t,e)),jQuery("."+e+".modal-bottom").html(rt),jQuery(".modal.dop").css({"max-height":function(){return.8*jQuery(window).height()+"px"},"overflow-y":"auto"}),jQuery(".modal_to_cart, .modal_checkout, .modal_text").removeClass("dnone")}function p(t,e,a){s(e),jQuery(".ajaxloaddingcart_mini").remove(),jQuery.each(t,function(t,e){jQuery(".modal_err").html(e.message)}),"2"===K.modal_type?jQuery("#error_inlineContent_minicart_"+e).modal():d(e,"errorDOMWindow","#error_inlineContent_minicart_",160,350)}function m(t,e,a,r,o){var n="выберите параметры",i=101,c=102;"2"===K.modal_type?jQuery.each(t,function(t,s){s.message.search(n)===-1&&s.code!==i&&s.code!==c||!J||(a.popover({placement:"top",html:!0,content:s.message+"<span style='cursor:pointer; padding-left:10px;'>X</span>"}).popover("show"),jQuery(".productitem_"+o+" .attrib").is(":hidden")&&jQuery(".productitem_"+o+" .attrib").show(),jQuery(".popover-content span, .popover-body span").css("color","#ff0000"),jQuery(".popover-content span, .popover-body span, .attrib").click(function(){"bs4"===It?a.popover("dispose"):a.popover("destroy")})),((s.message===n||s.code===i||s.code===c)&&!J||(s.message===n||s.code===i||s.code===c)&&J&&a.is(".dop_products a.button_buy"))&&window.location.assign(r),s.message!==n&&s.code!==i&&s.code!==c&&(jQuery(".modal_err").html(s.message),jQuery("#error_inlineContent_minicart_"+e).modal())}):jQuery.each(t,function(t,s){s.message!==n&&s.code!==i&&s.code!==c||!J||(jQuery(".modal_err").html(s.message),jQuery(".productitem_"+o+" .attrib").is(":hidden")&&jQuery(".productitem_"+o+" .attrib").show(),d(e,"errorDOMWindow","#error_inlineContent_minicart_","100%",350)),((s.message===n||s.code===i||s.code===c)&&!J||(s.message===n||s.code===i||s.code===c)&&J&&a.is(".dop_products a.button_buy"))&&window.location.assign(r),s.message!==n&&s.code!==i&&s.code!==c&&(jQuery(".modal_err").html(s.message),d(e,"errorDOMWindow","#error_inlineContent_minicart_","100%",350))})}function _(t){var e="выберите параметры",a=101,r=102;jQuery.each(t,function(t,o){"cart"!==A&&"wishlist"!==A||o.message.search(e)!==-1||o.code===a||o.code===r||setTimeout(function(){location.reload()},1500)})}function y(t,e){rt="",tt="";var a,r,o,n,i;for(a in t)if("products"===a&&t.hasOwnProperty(a))for(r in t[a])if(t[a].hasOwnProperty(r)){rt+="<div class='extern_row'>",ot="<span class='delete'><a href='"+V.data_sd+wt+r+"&ajax=1'>X</a></span>";for(o in t[a][r])if(t[a][r].hasOwnProperty(o)){if("quantity"===o&&("1"===H&&"wishlist_view "!==e?(st="<span class='qtty'><span class='minus_quantity' data-minus-key='quantity["+r+"]' data-minus-val='"+t[a][r][o]+"'>-</span><span class='plus_quantity' data-plus-key='quantity["+r+"]' data-plus-val='"+t[a][r][o]+"'>+</span><input type='text' value='"+t[a][r][o]+"' class='input_quantity' data-input-key='quantity["+r+"]' data-input-val='"+t[a][r][o]+"' /> x </span>",at=t[a][r][o]):(st="<span class='qtty'>"+t[a][r][o]+" x </span>",at=t[a][r][o])),"thumb_image"===o&&(nt=t[a][r][o]?"<span class='pict'><img src='"+Mt+"/"+t[a][r][o]+"' /></span>":"<span class='pict'><img src='"+Mt+"/"+Ht+"' /></span>"),"category_id"===o&&(dt=t[a][r][o]),"product_id"===o&&(Z=t[a][r][o]),"product_name"===o&&(ct="<span data-id='"+Z+"' data-qtty-"+Z+"='"+at+"' class='name'><a href='"+St+ft+dt+"&product_id="+Z+"'>"+t[a][r][o]+"</a></span>"),"attributes_value"===o){tt="",tt+="<span class='minicart_attr_wrap attr_length_"+t[a][r][o].length+"'>"+ht+"<span class='minicart_attr_list'>";for(n in t[a][r][o])if(t[a][r][o].hasOwnProperty(n)){for(i in t[a][r][o][n])t[a][r][o][n].hasOwnProperty(i)&&("attr"===i&&(tt+="<span class='minicart_attr_name'>"+t[a][r][o][n][i]+":</span>"),"value"===i&&(tt+="<span class='minicart_attr_value'>"+t[a][r][o][n][i]+"</span>"));tt+="<br/>"}tt+="</span></span>"}if("extra_fields"===o&&(et="","1"===F&&""!=t[a][r][o])){et+="<span class='minicart_ef_wrap ef_length_1'>"+jt+"<span class='minicart_ef_list'>";for(n in t[a][r][o])if(t[a][r][o].hasOwnProperty(n)){for(i in t[a][r][o][n])t[a][r][o][n].hasOwnProperty(i)&&("name"===i&&(et+="<span class='minicart_ef_name'>"+t[a][r][o][n][i]+":</span>"),"value"===i&&(et+="<span class='minicart_ef_value'>"+t[a][r][o][n][i]+"</span>"));et+="<br/>"}et+="</span></span>"}"price"===o&&(it="<span class='summ'>"+accounting.formatNumber(t[a][r][o].toFixed(2),Tt,qt)+" "+Dt+"</span>")}rt+="<div class='desription-top'><div class='pict'>"+nt+"</div><div class='desription-top-middle'><div class='name'>"+ct+"</div><div class='quantity block'>"+st+"<div class='price'>"+it+"</div></div></div><div class='delete'>"+ot+"</div></div><div class='desription-bottom block'>"+tt+et+"</div></div><div class='clear'></div>"}}function f(t,e){jQuery("."+e+".mycart_mini_txt.extern.externtwo,."+e+".mycart_mini_txt.extern.externbootstrap,."+e+".mycart_mini_txt.extern.externright,."+e+".mycart_mini_txt.extern.extern").length&&(jQuery("."+e+"span.externtwo_text").not(jQuery(".min_view."+e+"span.externbootstrap_text")).html(mt+" "+t.count_product+" "+vt+" "+accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("."+e+"span.externbootstrap_text").not(jQuery(".min_view."+e+"span.externbootstrap_text")).html(mt+" "+t.count_product+"<br/> "+vt+" "+accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery(".min_view."+e+"span.externbootstrap_text").html(t.count_product),jQuery("."+e+".mycart_mini_txt.extern.externtwo,."+e+".mycart_mini_txt.extern.externbootstrap").attr("title",_t),"1"===T&&t.type_cart>="cart"&&(jQuery(".rabatt-block").length||"cart"===A?jQuery("span.summ_rabatt").html(accounting.formatNumber(t.rabatt_summ.toFixed(2),Tt,qt)+" "+Dt):jQuery(".extern_bottom .total").append("<span class='dblock rabatt-block'><span class='text_summ_rabatt'>"+kt+" - </span><span class='summ_rabatt'>"+accounting.formatNumber(t.rabatt_summ.toFixed(2),Tt,qt)+" "+Dt+"</span><span class='row-fluid jshop'><span class = 'span12 col-md-12'><input type = 'text' class = 'inputbox rabatt-code' name = 'rabatt-form' value = '' placeholder='"+Ct+"' /><input type = 'button' class = 'button btn list-btn rabatt-submit' value = '"+Wt+"' /></span></span></span>")),jQuery("."+e+".mycart_mini_txt.extern.externtwo").attr("title",_t),jQuery("."+e+".mycart_mini_txt.extern.externbootstrap").attr("title",_t))}function w(t,e){jQuery("."+e+".mycart_mini_txt.default").length&&jQuery("."+e+".mycart_mini_txt").attr("title",lt+" "+t.count_product+" "+vt+" "+accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),K.modal_dop&&(jQuery(".modal-body .modal_quantity").html(t.count_product+" "),jQuery(".modal-body .modal_summ").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt))}function h(t,e){jQuery("."+e+".mycart_mini_txt.midileft").length&&(jQuery("."+e+"span.midileft_text").html(lt+" "+t.count_product+" "+vt+" "+accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("."+e+"span.midileft_text,."+e+"span.gotocart").removeClass("empty_cart"),jQuery("."+e+"span.midileft_text",window.parent.document).html(lt+" "+t.count_product+" "+vt+" "+accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("."+e+"span.midileft_text,."+e+"span.gotocart",window.parent.document).removeClass("empty_cart")),K.modal_dop&&(jQuery(".modal-body .modal_quantity").html(t.count_product+" "),jQuery(".modal-body .modal_summ").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt))}function j(t,e){jQuery("."+e+".mycart_mini_txt.midiright").length&&(jQuery("."+e+"span.midiright_text").html(lt+" "+t.count_product+" "+vt+" "+accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("."+e+"span.midiright_text,."+e+"span.gotocart").removeClass("empty_cart")),K.modal_dop&&(jQuery(".modal-body .modal_quantity").html(t.count_product+" "),jQuery(".modal-body .modal_summ").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt))}function v(t,e){jQuery("."+e+".mycart_mini_txt.extern").length&&(jQuery(e+".extern_row").remove(),y(t,e),jQuery("."+e+".extern_content").html(rt),jQuery("."+e+".extern_wrap .total_qtty, ."+e+" .modal_quantity").html(t.count_product+" "),jQuery("."+e+".extern_wrap .summ_total, ."+e+" .modal_summ").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("."+e+".extern_wrap .extern_bottom").removeClass("empty_cart"),jQuery("."+e+".extern_content").removeClass("extern_empty_jq")),K.modal_dop&&(jQuery(".modal-body .modal_quantity").html(t.count_product+" "),jQuery(".modal-body .modal_summ").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt)),jQuery("."+e+"span.delete a").attr("title",bt)}function b(t,e){var a=e.closest(jQuery(".attrib").data("wrapclass")).find(".attrforprodid_"+t+" select, .attrforprodid_"+t+" input:radio").serializeArray();jQuery(".attr_link_buy").empty(),jQuery.each(a,function(t,e){var a,r=e.name.split("-")[1];a=null===r||void 0===r?e.name:r,jQuery(".attr_link_buy").append("&"+a+"="+e.value)})}function x(t){var e=jQuery(window).width(),a=jQuery(window).height(),r=jQuery(document).scrollTop(),o=jQuery(document).scrollLeft(),n=jQuery("."+t),i=n.offset(),c=n.height(),s=n.width(),d=r,u=r+a,l=o,p=o+e;return i.top>d&&i.top+c<u&&i.left>l&&i.left+s<p}function g(t,e,a){function r(){return".new-clone-img"}var o,n=e,i=z+"/modules/mod_jshopping_cart_wl_ajax/assets/img/cart_ok.png";jQuery(".jshop_list_product").length&&jQuery(".image_block img").length&&(o=jQuery(".productitem_"+t+" .image_block img").not(".product_label img").attr("src")),jQuery(".productfull").length&&!e.closest(".list_related").length&&(o=jQuery("img[id^='main_image_']:visible").eq(0).attr("src"),(jQuery(".productfull.rp-brooksite").length||jQuery(".productfull .btn.list-btn.wl").length)&&(n=e.parent())),n.parents(".dop_products").length&&(n=e,o=n.parents(".dop_products .modopprod_item, .dop_products .item").not(".dop_products.vertical .modopprod_item").find("a img").attr("src")),n.parents(".ajaxcart-on").length&&(n=e,o=n.parents(".ajaxcart-on .block_item, .ajaxcart-on .image_block").find("a img").attr("src"));var c;c=!jQuery(".cart-bottom-bar").length&&!jQuery(".wl-bottom-bar").length||x(a)?jQuery("."+a):jQuery("."+a.split("_")[0]+"-bottom-bar");var s=n.offset(),d=s.top,u=s.left,l=c.offset(),p=l.left,m=l.top;o?jQuery("body").append("<img class='new-clone-img' src='"+o+"'/>"):jQuery("body").append("<img class='new-clone-img' src='"+i+"'/>"),jQuery(".new-clone-img").css({position:"absolute","z-index":"9999","max-width":75,"max-height":75,"min-width":30,"min-height":30,top:d-20+"px",left:u+"px"}).stop().animate({opacity:.6,top:m,left:p+25,width:0,height:0,minWidth:0,minHeight:0},1500,function(){jQuery(r()).remove()})}function Q(){var t;t=jQuery(".offcanvas-cart-wrapp").length?"":"<div class='offcanvas-cart-wrapp'></div>",jQuery(".offcanvas-cart").toggleClass("showin_cart").append(t),jQuery(".prepend-cart-text").length||(r("cart_view"),jQuery(".offcanvas-cart .extern_wrap").prepend("<div class='offcanvas-cart-close'>X</div><p class='prepend-cart-text'>"+pt+"</p>")),jQuery("body").toggleClass("offcanvas-on")}function O(){var t;t=jQuery(".offcanvas-wl-wrapp").length?"":"<div class='offcanvas-wl-wrapp'></div>",jQuery(".offcanvas-wl").toggleClass("showin_wl").append(t),jQuery(".prepend-wl-text").length||(r("wishlist_view"),jQuery(".offcanvas-wl .extern_wrap").prepend("<div class='offcanvas-wl-close'>X</div><p class='prepend-wl-text'>"+pt+"</p>")),jQuery("body").toggleClass("offcanvas-on")}var k,C,W,M,D,I,T,q,S,N,L,P,F,H,R,U=jQuery(".type_view.wishlist_view").length,E=jQuery(".type_view.cart_view").length,z=mod_ajax_data.data_uri;U&&(k=mod_params_wishlist_view.highlight_attr,C=mod_params_wishlist_view.show_added_to_cart_icon,W=mod_params_wishlist_view.show_added_to_cart_icon_prod,P=mod_params_wishlist_view.iclass_ok,F=mod_params_wishlist_view.show_ef,H=mod_params_wishlist_view.show_quantity_buttons),E&&(M=mod_params_cart_view.highlight_attr,D=mod_params_cart_view.show_qtty,I=mod_params_cart_view.show_qttylist,T=mod_params_cart_view.show_rabatt,q=mod_params_cart_view.clone_mw,S=mod_params_cart_view.show_added_to_cart_icon,N=mod_params_cart_view.show_added_to_cart_icon_prod,L=mod_params_cart_view.clone_selector,P=mod_params_cart_view.iclass_ok,F=mod_params_cart_view.show_ef,H=mod_params_cart_view.show_quantity_buttons,R=mod_params_cart_view.extselector_cart);var A;A=void 0!==mod_ajax_data2?mod_ajax_data2.data_controller:mod_ajax_data.data_controller;var B,G,X='<div class="ajaxloaddingcart_mini"></div>',Y=jQuery("#system-message-container, #system-message"),$=jQuery(".jshop.productfull").length,J=jQuery(".attrib").length;U&&E?(B=".buttons a.button_buy:not('.modal.large .buttons a.button_buy, .not_ajax .buttons a.button_buy'), a.button_buy:not('.modal.large a.button_buy, .not_ajax a.button_buy'), a.product-button-wishlist, .compare_table a.button_buy",G="*[onclick=\"jQuery('#to').val('cart');\"], *[onclick=\"jQuery('#quick-view #to').val('cart');\"], *[onclick=\"jQuery('#to').val('wishlist');\"], *[onclick=\"jQuery('#quick-view #to').val('wishlist');\"]",G+=","+R):!U&&E?(B=".buttons a.button_buy:not('.modal.large .buttons a.button_buy, .not_ajax .buttons a.button_buy'), a.button_buy:not('.modal.large a.button_buy, .not_ajax a.button_buy'), .compare_table a.button_buy",G="*[onclick=\"jQuery('#to').val('cart');\"], *[onclick=\"jQuery('#quick-view #to').val('cart');\"]",G+=","+R):(B="a.product-button-wishlist",G="*[onclick=\"jQuery('#to').val('wishlist');\"], *[onclick=\"jQuery('#quick-view #to').val('wishlist');\"]");var K,V,Z,tt,et,at,rt,ot,nt,it,ct,st,dt,ut,lt,pt,mt,_t,yt,ft,wt,ht=mod_ajax_data.data_pp,jt=mod_ajax_data.data_pef,vt=mod_ajax_data.data_lps,bt=mod_ajax_data.data_dt,xt=mod_ajax_data.data_dtf,gt=mod_ajax_data_cart_view.data_lpc,Qt=mod_ajax_data_cart_view.data_lpcv,Ot=mod_ajax_data_cart_view.data_lpwlv,kt=(mod_ajax_data.data_rel,mod_ajax_data.data_rabattv),Ct=mod_ajax_data.data_rabatt,Wt=mod_ajax_data.data_rabatta,Mt=mod_ajax_data.data_ilp,Dt=mod_ajax_data.data_cc,It=mod_ajax_data.data_bsv,Tt=mod_ajax_data.data_dcount,qt=mod_ajax_data.data_tseparator,St=mod_ajax_data.data_sp,Nt=mod_ajax_data.data_minpo,Lt=mod_ajax_data.data_maxpo,Pt=mod_ajax_data.data_minpotxt,Ft=mod_ajax_data.data_maxpotxt,Ht=(jQuery(".product-button-wishlist").attr("title"),"noimage.gif");if(ft=mod_ajax_data.data_sp.indexOf("?")!==-1?"&category_id=":"?category_id=","bs3"!==It&&"bs4"!==It||jQuery(".type_view .modal.fade").removeClass("collapse"),"1"===q&&o(),jQuery("body").on("click",B,function(t){t.preventDefault();var e,i,c,s,d=jQuery(this);e=d;var y=d.attr("href");e.is(".buttons a.button_buy, a.button_buy, a.button_buy i")&&(c="cart_view ",i=parseInt(y.split("product_id=")[1]),jQuery(".productitem_"+i+" .attrib").is(":hidden")&&jQuery(document).ajaxStop(function(){jQuery(".productitem_"+i+" .attrib").show()})),e.is("a.product-button-wishlist, a.product-button-wishlist i")&&(c="wishlist_view ",i=parseInt(y.split("product_id=")[1])),s=jQuery(".productitem_"+i+" .name a").length?jQuery(".productitem_"+i+" .name a").attr("href"):St+"?"+y.split("?")[1];jQuery(".productitem_"+i+" div.attrib");return d.addClass("was_clicked"),Y.remove(),J&&(e.find(".attr_link_buy").length||e.append("<div class='attr_link_buy' style='display:none'></div>"),d.closest(jQuery(".attrib").data("wrapclass")).find(".attrforprodid_"+i+" select, .attrforprodid_"+i+" input:radio").change(b(i,d)),b(i,d)),jQuery("."+c+".mycart_mini_txt").append(X),jQuery(this).css("position","relative").append(X),r(c),jQuery.ajax({cache:!1,url:y+e.find(".attr_link_buy").text()+"&ajax=1",dataType:"json",success:function(t){jQuery(".ajaxloaddingcart_mini").remove(),jQuery(".mycart_wrapp").removeClass("emptycart"),t||window.location.assign(y),t.type_cart>="cart"||t.type_cart>="wishlist"?(jQuery("."+c+".mycart_mini_txt a").html(t.count_product),w(t,c),h(t,c),j(t,c),f(t,c),n(t,c),v(t,c),a(t,c),"1"===q&&(jQuery(".mycart_wrapp").removeClass("emptycart"),o()),u(t,c,e),l(t,c,e),"3"===K.show_added_to_cart&&g(i,e,c)):m(t,c,e,y,i),_(t,y)},error:function(t){p(t,c,e)}}),!1}),jQuery("body").on("click",G,function(t){t.preventDefault();var e,i,c=jQuery(t.target),s=c.position();if((c.is("*[onclick=\"jQuery('#to').val('cart');\"]")||c.parents().is("*[onclick=\"jQuery('#to').val('cart');\"]")||c.is("*[onclick=\"jQuery('#quick-view #to').val('cart');\"]")||c.parents().is("*[onclick=\"jQuery('#quick-view #to').val('cart');\"]")||c.is(R))&&(e="cart_view "),(c.is("*[onclick=\"jQuery('#to').val('wishlist');\"]")||c.parents().is("*[onclick=\"jQuery('#to').val('wishlist');\"]")||c.is("*[onclick=\"jQuery('#quick-view #to').val('wishlist');\"]")||c.parents().is("*[onclick=\"jQuery('#quick-view #to').val('wishlist');\"]"))&&(e="wishlist_view "),i=jQuery("input#product_id").val(),"cart"===jQuery("#to").val()||"wishlist"===jQuery("#to").val()){var d=jQuery('form[name="product"]').serialize();return jQuery("."+e+".mycart_mini_txt").append(X),c.closest(".buttons").css("position","relative").append(X),jQuery(".ajaxloaddingcart_mini").css("left",s.left),Y.remove(),r(e),jQuery.ajax({cache:!1,url:z+"index.php?option=com_jshopping&controller=cart&task=add&"+d+"&ajax=1",dataType:"json",ifModified:!0,success:function(t){jQuery(".ajaxloaddingcart_mini").remove(),jQuery(".mycart_wrapp").removeClass("emptycart"),t.type_cart>="cart"||t.type_cart>="wishlist"?(jQuery("."+e+".mycart_mini_txt a").html(t.count_product),jQuery("."+e+".mycart_mini_txt a",window.parent.document).html(t.count_product),w(t,e),h(t,e),j(t,e),f(t,e),n(t,e),v(t,e),a(t,e),"1"===q&&(jQuery(".mycart_wrapp").removeClass("emptycart"),o()),u(t,e,c),l(t,e,c),"3"===K.show_added_to_cart&&g(i,c,e)):p(t,e,c)},error:function(){jQuery(".ajaxloaddingcart_mini").remove(),location.reload()}}),!1}}),jQuery("body").on("click",".extern_row .delete a",function(t){t.preventDefault();var e=jQuery(this),n=e.parents(".type_view").data("cart-view"),s=e.attr("href");return e.closest(".extern_row").append(X),r(n),jQuery.ajax({cache:!1,url:s+"&ajax=1",dataType:"json",success:function(t){jQuery(".ajaxloaddingcart_mini").remove(),t.type_cart>="cart"||t.type_cart>="wishlist"?(jQuery(".modal.dop .modal_header").text(xt),jQuery("."+n+".mycart_mini_txt a").html(t.count_product),jQuery("."+n+".mycart_mini_txt a",window.parent.document).html(t.count_product),jQuery(".list-btn.button_buy").removeClass("fullcart"),f(t,n),l(t,n,_t),y(t,n),jQuery("."+n+".extern_content").html(rt),jQuery("."+n+".extern_wrap .total_qtty").html(t.count_product+" "),a(t,n),jQuery("."+n+"span.delete a").attr("title",bt),0===t.count_product&&(jQuery(".modal.dop .modal_header").text(yt),jQuery(".modal.dop .modal_to_cart, .modal.dop .modal_checkout, .modal.dop .modal_text").addClass("dnone"),jQuery(".mycart_wrapp").addClass("emptycart"),jQuery("."+n+"span.externtwo_text,."+n+"span.externbootstrap_text").not(jQuery(".min_view."+n+"span.externbootstrap_text")).html(pt),jQuery("."+n+".mycart_mini_txt.extern.externtwo,."+n+".mycart_mini_txt.extern.externbootstrap").attr("title",""),jQuery("."+n+".extern_wrap .extern_bottom").addClass("empty_cart"),jQuery("."+n+".extern_content").html("<span class='extern_empty_jq'>"+yt+"</span>")),jQuery(".modal_quantity").html(t.count_product),jQuery(".modal_summ").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("."+n+".extern_wrap .summ_total").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),"1"!==C&&"1"!==W&&"1"!==S&&"1"!==N||i(),"1"!==D&&"1"!==I||c(),"1"===q&&o()):p(t,n),"cart"!==A&&"wishlist"!==A||setTimeout(function(){location.reload()},1500)},error:function(){jQuery(".ajaxloaddingcart_mini").remove(),location.reload()}}),!1}),jQuery("body").on("click",".extern_row .minus_quantity",function(t){t.preventDefault();var e,n=jQuery(this),i=n.parents(".type_view").data("cart-view"),s=n.attr("data-minus-key"),d=n.attr("data-minus-val"),u=parseFloat(d)-1;return e=0!==u?s+"="+u:s+"="+d,n.closest(".extern_row").append(X),r(i),jQuery.ajax({cache:!1,url:z+"index.php?option=com_jshopping&controller=cart&task=refresh&"+e+"&ajax=1",dataType:"json",ifModified:!0,success:function(t){t.type_cart>="cart"?(jQuery("."+i+".mycart_mini_txt a").html(t.count_product),jQuery("."+i+".mycart_mini_txt a",window.parent.document).html(t.count_product),f(t,i),l(t,i,_t),v(t,i),a(t,i),"1"!==D&&"1"!==I||c(),"1"===q&&(jQuery(".mycart_wrapp").removeClass("emptycart"),o())):p(t,i),"cart"!==A&&"wishlist"!==A||setTimeout(function(){location.reload()},1500)},error:function(){jQuery(".ajaxloaddingcart_mini").remove(),location.reload()}}),!1}),jQuery("body").on("click",".extern_row .plus_quantity",function(t){t.preventDefault();var e=jQuery(this),n="cart_view ",i=e.attr("data-plus-key"),s=e.attr("data-plus-val"),d=parseFloat(s)+1,u=i+"="+d;return e.closest(".extern_row").append(X),r(n),jQuery.ajax({cache:!1,url:z+"index.php?option=com_jshopping&controller=cart&task=refresh&"+u+"&ajax=1",dataType:"json",ifModified:!0,success:function(t){jQuery(".ajaxloaddingcart_mini").remove(),t.type_cart>="cart"||t.type_cart>="wishlist"?(jQuery("."+n+".mycart_mini_txt a").html(t.count_product),jQuery("."+n+".mycart_mini_txt a",window.parent.document).html(t.count_product),f(t,n),l(t,n,_t),v(t,n),a(t,n),"1"!==D&&"1"!==I||c(),"1"===q&&(jQuery(".mycart_wrapp").removeClass("emptycart"),o())):p(t,n),"cart"!==A&&"wishlist"!==A||setTimeout(function(){location.reload()},1500)},error:function(){jQuery(".ajaxloaddingcart_mini").remove(),location.reload()}}),!1}),jQuery("body").on("keyup",".extern_row .input_quantity",function(t){t.preventDefault();var e=jQuery(this),n=e.parents(".type_view").data("cart-view"),i=e.attr("data-input-key"),s=(e.attr("data-input-val"),e.val());if(0==s)return!1;var d=i+"="+s;e.closest(".extern_row").append(X),r(n),jQuery.ajax({cache:!1,url:z+"index.php?option=com_jshopping&controller=cart&task=refresh&"+d+"&ajax=1",dataType:"json",ifModified:!0,success:function(t){jQuery(".ajaxloaddingcart_mini").remove(),t.type_cart>="cart"||t.type_cart>="wishlist"?(jQuery("."+n+".mycart_mini_txt a").html(t.count_product),jQuery("."+n+".mycart_mini_txt a",window.parent.document).html(t.count_product),f(t,n),l(t,n,_t),v(t,n),a(t,n),"1"!==D&&"1"!==I||c(),"1"===q&&(jQuery(".mycart_wrapp").removeClass("emptycart"),o())):p(t,n),"cart"!==A&&"wishlist"!==A||setTimeout(function(){location.reload()},1500)},error:function(){jQuery(".ajaxloaddingcart_mini").remove(),location.reload()}})}),jQuery("body").on("click",".rabatt-submit",function(t){var e=jQuery(this),a=z+"index.php?option=com_jshopping&controller=cart&task=discountsave&rabatt="+jQuery("input.rabatt-code").val()+"&ajax=1",o="cart_view ";e.closest(".extern_bottom").css("position","relative").append(X),r(o),jQuery.ajax({cache:!1,url:a,dataType:"json",success:function(t){jQuery(".ajaxloaddingcart_mini").remove(),t.type_cart>="cart"?(jQuery("."+o+".extern_wrap .summ_total").html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("."+o+".extern_wrap .summ_total",window.parent.document).html(accounting.formatNumber((t.price_product-t.rabatt_summ).toFixed(2),Tt,qt)+" "+Dt),jQuery("span.summ_rabatt").html(accounting.formatNumber(t.rabatt_summ.toFixed(2),Tt,qt)+" "+Dt),f(t,o)):alert(t[0].message)},error:function(){jQuery(".ajaxloaddingcart_mini").remove()}}),t.preventDefault()}),jQuery("body").on("click",".cart_view .mycart_mini_txt.extern, .cart_view .down-click, .offcanvas-cart-close, .offcanvas-cart-wrapp, .clone_mw",function(t){t.preventDefault(),jQuery(".cart_view .extern_wrap").fadeToggle(),Q()}),jQuery("body").on("click",".wishlist_view .mycart_mini_txt.extern, .wishlist_view .down-click, .offcanvas-wl-close, .offcanvas-wl-wrapp",function(t){t.preventDefault(),jQuery(".wishlist_view .extern_wrap").fadeToggle(),O()}),jQuery(".js-event-prevent .cart-bottom-bar").click(function(){jQuery(".offcanvas-cart .cart_view .extern_wrap").fadeIn(),Q()}),jQuery(".js-event-prevent .wishlist-bottom-bar").click(function(){jQuery(".offcanvas-wl .wishlist_view .extern_wrap").fadeIn(),O()}),jQuery(".mycart_wrapp").on("click",".minicart_attr_wrap",function(t){t.preventDefault(),jQuery(".minicart_attr_list",this).slideToggle("slow")}),jQuery(".mycart_wrapp").on("click",".minicart_ef_wrap",function(t){t.preventDefault(),jQuery(".minicart_ef_list",this).slideToggle("slow")}),"1"!==C&&"1"!==W&&"1"!==S&&"1"!==N||i(),"1"!==D&&"1"!==I||c(),"1"!==k&&"1"!==M||!jQuery("#system-message, .system-message").is(":contains('выберите параметры')")||(jQuery("div.jshop_prod_attributes").addClass("highlight"),jQuery("html,body").scrollTop(jQuery("#system-message, .system-message").offset().top)),jQuery("body").on("click",".clone_mw",function(t){if(jQuery(".type_view.cart_view:not('.clone_mw')").is(":hidden")||!jQuery(".type_view.cart_view:not('.clone_mw') .extern_wrap").length){var e;e=jQuery(".type_view.cart_view:not('.clone_mw') .extern_wrap").length?jQuery(".type_view.cart_view:not('.clone_mw') .gotocart a").attr("href"):jQuery(".mycart_mini_txt a").attr("href"),window.location.assign(e)}else jQuery(".type_view.cart_view:not('.clone_mw')").is(":visible")&&jQuery(".type_view.cart_view:not('.clone_mw') .extern_wrap").length&&!jQuery(".offcanvas-cart .extern_wrap").length&&jQuery("html, body").animate({scrollTop:jQuery(".type_view.cart_view:not('.clone_mw')").offset().top},{complete:function(){jQuery(".cart_view .extern_wrap:not('.clone_mw, .offcanvas-cart .extern_wrap')").show()}},2e3)}),jQuery(".min_view.cart_view .mycart_wrapp").length){var Rt=jQuery(".min_view.cart_view .mycart_wrapp"),Ut=jQuery(".min_view.cart_view .extern_wrap"),Et=Ut.outerWidth(),zt=Rt.offset(),At=zt.left,Bt=jQuery(window).outerWidth()-At,Gt=Rt.outerWidth();
Ut.css({left:-(Et/2-Gt/2)}),At<Et/2-Gt/2&&Ut.css({left:-At}),Bt<Et/2-Gt/2&&Ut.css({left:-Et+Bt})}if(jQuery(".min_view.wishlist_view .mycart_wrapp").length){var Xt=jQuery(".min_view.wishlist_view .mycart_wrapp"),Yt=jQuery(".min_view.wishlist_view .extern_wrap"),$t=Yt.outerWidth(),Jt=Xt.offset(),Kt=Jt.left,Vt=jQuery(window).outerWidth()-Kt,Zt=Xt.outerWidth();Yt.css({left:-($t/2-Zt/2)}),Kt<$t/2-Zt/2&&Yt.css({left:-Kt}),Vt<$t/2-Zt/2&&Yt.css({left:-$t+Vt})}t(".extern_wrap")}),function(t){t.fn.closeDOMWindow=function(e){e||(e={});var a=function(a){if(e.anchoredClassName)t("."+e.anchoredClassName).fadeOut("fast",function(){});else{var r=t("#DOMWindowOverlay"),o=t("#DOMWindow");r.fadeOut("fast",function(){r.trigger("unload").unbind().remove()}),o.fadeOut("fast",function(){t.fn.draggable&&e.draggable?o.draggable("destroy").trigger("unload").remove():o.trigger("unload").remove()}),t(window).unbind("scroll.DOMWindow"),t(window).unbind("resize.DOMWindow"),t.fn.openDOMWindow.isIE6&&t("#DOMWindowIE6FixIframe").remove()}e.functionCallOnClose&&e.functionCallAfterClose()};return e.eventType?this.each(function(r){t(this).bind(e.eventType,function(){return a(this),!1})}):void a()},t.closeDOMWindow=function(e){t.fn.closeDOMWindow(e)},t.fn.openDOMWindow=function(e){var a=t.fn.openDOMWindow;a.defaultsSettings={anchoredClassName:"",anchoredSelector:"",borderColor:"#ccc",borderSize:"4",draggable:0,eventType:null,fixedWindowY:100,functionCallOnOpen:null,functionCallOnClose:null,height:500,loader:0,loaderHeight:0,loaderImagePath:"",loaderWidth:0,modal:0,overlay:1,overlayColor:"#000",overlayOpacity:"85",positionLeft:0,positionTop:0,positionType:"centered",width:500,windowBGColor:"#fff",windowBGImage:null,windowHTTPType:"get",windowPadding:10,windowSource:"inline",windowSourceID:"",windowSourceURL:"",windowSourceAttrURL:"href"};var r=t.extend({},t.fn.openDOMWindow.defaultsSettings,e||{});a.viewPortHeight=function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},a.viewPortWidth=function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},a.scrollOffsetHeight=function(){return self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},a.scrollOffsetWidth=function(){return self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft},a.isIE6="undefined"==typeof document.body.style.maxHeight;var o=function(){var e=t("#DOMWindowOverlay");a.isIE6?e.css({height:document.documentElement.offsetHeight+document.documentElement.scrollTop-4+"px",width:document.documentElement.offsetWidth-21+"px"}):e.css({height:"100%",width:"100%",position:"fixed"})},n=function(){var e=document.documentElement.offsetHeight+document.documentElement.scrollTop-4,a=document.documentElement.offsetWidth-21;t("#DOMWindowIE6FixIframe").css({height:e+"px",width:a+"px"})},i=function(){var e=t("#DOMWindow");r.height+50>a.viewPortHeight()?e.css("left",Math.round(a.viewPortWidth()/2)+a.scrollOffsetWidth()-Math.round(e.outerWidth()/2)):(e.css("left",Math.round(a.viewPortWidth()/2)+a.scrollOffsetWidth()-Math.round(e.outerWidth()/2)),e.css("top",Math.round(a.viewPortHeight()/2)+a.scrollOffsetHeight()-Math.round(e.outerHeight()/2)))},c=function(){var e=t("#DOMWindowLoader");a.isIE6?(e.css({left:Math.round(a.viewPortWidth()/2)+a.scrollOffsetWidth()-Math.round(e.innerWidth()/2),position:"absolute"}),e.css({top:Math.round(a.viewPortHeight()/2)+a.scrollOffsetHeight()-Math.round(e.innerHeight()/2),position:"absolute"})):e.css({left:"50%",top:"50%",position:"fixed"})},s=function(){var e=t("#DOMWindow");e.css("left",r.positionLeft+a.scrollOffsetWidth()),e.css("top",+r.positionTop+a.scrollOffsetHeight())},d=function(e){e?(t("."+e+" #DOMWindowLoader").remove(),t("."+e+" #DOMWindowContent").fadeIn("fast",function(){r.functionCallOnOpen&&r.functionCallOnOpen()}),t("."+e+".closeDOMWindow").click(function(){return t.closeDOMWindow(),!1})):(t("#DOMWindowLoader").remove(),t("#DOMWindow").fadeIn("fast",function(){r.functionCallOnOpen&&r.functionCallOnOpen()}),t("#DOMWindow .closeDOMWindow").click(function(){return t.closeDOMWindow(),!1}))},u=function(t){var e={};return t.replace(/b([^&=]*)=([^&=]*)b/g,function(t,a,r){e[a]="undefined"!=typeof e[a]?e[a]+(","+r):r}),e},l=function(e){r.windowSourceID=t(e).attr("href")||r.windowSourceID,r.windowSourceURL=t(e).attr(r.windowSourceAttrURL)||r.windowSourceURL,r.windowBGImage=r.windowBGImage?"background-image:url("+r.windowBGImage+")":"";var l;if("anchored"==r.positionType)switch(l=t(r.anchoredSelector).position(),e=l.left+r.positionLeft,l=l.top+r.positionTop,t("body").append('<div class="'+r.anchoredClassName+'" style="'+r.windowBGImage+";background-repeat:no-repeat;padding:"+r.windowPadding+"px;overflow:auto;position:absolute;top:"+l+"px;left:"+e+"px;height:"+r.height+"px;width:"+r.width+"px;background-color:"+r.windowBGColor+";border:"+r.borderSize+"px solid "+r.borderColor+';z-index:10001"><div id="DOMWindowContent" style="display:none"></div></div>'),r.loader&&""!==r.loaderImagePath&&t("."+r.anchoredClassName).append('<div id="DOMWindowLoader" style="width:'+r.loaderWidth+"px;height:"+r.loaderHeight+'px;"><img src="'+r.loaderImagePath+'" /></div>'),t.fn.draggable&&r.draggable&&t("."+r.anchoredClassName).draggable({cursor:"move"}),r.windowSource){case"inline":t("."+r.anchoredClassName+" #DOMWindowContent").append(t(r.windowSourceID).children()),t("."+r.anchoredClassName).unload(function(){t("."+r.windowSourceID).append(t("."+r.anchoredClassName+" #DOMWindowContent").children())}),d(r.anchoredClassName);break;case"iframe":t("."+r.anchoredClassName+" #DOMWindowContent").append('<iframe frameborder="0" hspace="0" wspace="0" src="'+r.windowSourceURL+'" name="DOMWindowIframe'+Math.round(1e3*Math.random())+'" style="width:100%;height:100%;border:none;background-color:#fff;" class="'+r.anchoredClassName+'Iframe" ></iframe>'),t("."+r.anchoredClassName+"Iframe").load(d(r.anchoredClassName));break;case"ajax":"post"==r.windowHTTPType?(-1!==r.windowSourceURL.indexOf("?")?(e=r.windowSourceURL.substr(0,r.windowSourceURL.indexOf("?")),l=u(r.windowSourceURL)):(e=r.windowSourceURL,l={}),t("."+r.anchoredClassName+" #DOMWindowContent").load(e,l,function(){d(r.anchoredClassName)})):(-1==r.windowSourceURL.indexOf("?")&&(r.windowSourceURL+="?"),t("."+r.anchoredClassName+" #DOMWindowContent").load(r.windowSourceURL+"&random="+(new Date).getTime(),function(){d(r.anchoredClassName)}))}else{r.overlay&&(t("body").append('<div id="DOMWindowOverlay" style="z-index:10000;display:none;position:absolute;top:0;left:0;background-color:'+r.overlayColor+";filter:alpha(opacity="+r.overlayOpacity+");-moz-opacity: 0."+r.overlayOpacity+";opacity: 0."+r.overlayOpacity+';"></div>'),a.isIE6&&(t("body").append('<iframe id="DOMWindowIE6FixIframe"  src="blank.html"  style="width:100%;height:100%;z-index:9999;position:absolute;top:0;left:0;filter:alpha(opacity=0);"></iframe>'),n()),o(),e=t("#DOMWindowOverlay"),e.fadeIn("fast"),r.modal||e.click(function(){t.closeDOMWindow()})),r.loader&&""!==r.loaderImagePath&&(t("body").append('<div id="DOMWindowLoader" style="z-index:10002;width:'+r.loaderWidth+"px;height:"+r.loaderHeight+'px;"><img src="'+r.loaderImagePath+'" /></div>'),c()),t("body").append('<div id="DOMWindow" style="background-repeat:no-repeat;'+r.windowBGImage+";overflow:auto;padding:"+r.windowPadding+"px;display:none;height:"+r.height+"px;width:"+r.width+"px;background-color:"+r.windowBGColor+";border:"+r.borderSize+"px solid "+r.borderColor+'; position:absolute;z-index:10001"></div>');var p=t("#DOMWindow");switch(r.positionType){case"centered":i(),r.height+50>a.viewPortHeight()&&p.css("top",r.fixedWindowY+a.scrollOffsetHeight()+"px");break;case"absolute":p.css({top:r.positionTop+a.scrollOffsetHeight()+"px",left:r.positionLeft+a.scrollOffsetWidth()+"px"}),t.fn.draggable&&r.draggable&&p.draggable({cursor:"move"});break;case"fixed":s();break;case"anchoredSingleWindow":l=t(r.anchoredSelector).position(),e=l.left+r.positionLeft,l=l.top+r.positionTop,p.css({top:l+"px",left:e+"px"})}switch(t(window).bind("scroll.DOMWindow",function(){r.overlay&&o(),a.isIE6&&n(),"centered"==r.positionType&&i(),"fixed"==r.positionType&&s()}),t(window).bind("resize.DOMWindow",function(){a.isIE6&&n(),r.overlay&&o(),"centered"==r.positionType&&i()}),r.windowSource){case"inline":p.append(t(r.windowSourceID).children()),p.unload(function(){t(r.windowSourceID).append(p.children())}),d();break;case"iframe":p.append('<iframe frameborder="0" hspace="0" wspace="0" src="'+r.windowSourceURL+'" name="DOMWindowIframe'+Math.round(1e3*Math.random())+'" style="width:100%;height:100%;border:none;background-color:#fff;" id="DOMWindowIframe" ></iframe>'),t("#DOMWindowIframe").load(d());break;case"ajax":"post"==r.windowHTTPType?(-1!==r.windowSourceURL.indexOf("?")?(e=r.windowSourceURL.substr(0,r.windowSourceURL.indexOf("?")),l=u(r.windowSourceURL)):(e=r.windowSourceURL,l={}),p.load(e,l,function(){d()})):(-1==r.windowSourceURL.indexOf("?")&&(r.windowSourceURL+="?"),p.load(r.windowSourceURL+"&random="+(new Date).getTime(),function(){d()}))}}};return r.eventType?this.each(function(e){t(this).bind(r.eventType,function(){return l(this),!1})}):void l()},t.openDOMWindow=function(e){t.fn.openDOMWindow(e)}}(jQuery),function(t,e){function a(t){return!!(""===t||t&&t.charCodeAt&&t.substr)}function r(t){return l?l(t):"[object Array]"===p.call(t)}function o(t){return"[object Object]"===p.call(t)}function n(t,e){var a,t=t||{},e=e||{};for(a in e)e.hasOwnProperty(a)&&null==t[a]&&(t[a]=e[a]);return t}function i(t,e,a){var r,o,n=[];if(!t)return n;if(u&&t.map===u)return t.map(e,a);for(r=0,o=t.length;r<o;r++)n[r]=e.call(a,t[r],r,t);return n}function c(t,e){return t=Math.round(Math.abs(t)),isNaN(t)?e:t}function s(t){var e=d.settings.currency.format;return"function"==typeof t&&(t=t()),a(t)&&t.match("%v")?{pos:t,neg:t.replace("-","").replace("%v","-%v"),zero:t}:t&&t.pos&&t.pos.match("%v")?t:a(e)?d.settings.currency.format={pos:e,neg:e.replace("%v","-%v"),zero:e}:e}var d={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},u=Array.prototype.map,l=Array.isArray,p=Object.prototype.toString,m=d.unformat=d.parse=function(t,e){if(r(t))return i(t,function(t){return m(t,e)});if(t=t||0,"number"==typeof t)return t;var e=e||".",a=RegExp("[^0-9-"+e+"]",["g"]),a=parseFloat((""+t).replace(/\((.*)\)/,"-$1").replace(a,"").replace(e,"."));return isNaN(a)?0:a},_=d.toFixed=function(t,e){var e=c(e,d.settings.number.precision),a=Math.pow(10,e);return(Math.round(d.unformat(t)*a)/a).toFixed(e)},y=d.formatNumber=d.format=function(t,e,a,s){if(r(t))return i(t,function(t){return y(t,e,a,s)});var t=m(t),u=n(o(e)?e:{precision:e,thousand:a,decimal:s},d.settings.number),l=c(u.precision),p=0>t?"-":"",f=parseInt(_(Math.abs(t||0),l),10)+"",w=3<f.length?f.length%3:0;return p+(w?f.substr(0,w)+u.thousand:"")+f.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+u.thousand)+(l?u.decimal+_(Math.abs(t),l).split(".")[1]:"")},f=d.formatMoney=function(t,e,a,u,l,p){if(r(t))return i(t,function(t){return f(t,e,a,u,l,p)});var t=m(t),_=n(o(e)?e:{symbol:e,precision:a,thousand:u,decimal:l,format:p},d.settings.currency),w=s(_.format);return(0<t?w.pos:0>t?w.neg:w.zero).replace("%s",_.symbol).replace("%v",y(Math.abs(t),c(_.precision),_.thousand,_.decimal))};d.formatColumn=function(t,e,u,l,p,_){if(!t)return[];var f=n(o(e)?e:{symbol:e,precision:u,thousand:l,decimal:p,format:_},d.settings.currency),w=s(f.format),h=w.pos.indexOf("%s")<w.pos.indexOf("%v"),j=0,t=i(t,function(t){return r(t)?d.formatColumn(t,f):(t=m(t),t=(0<t?w.pos:0>t?w.neg:w.zero).replace("%s",f.symbol).replace("%v",y(Math.abs(t),c(f.precision),f.thousand,f.decimal)),t.length>j&&(j=t.length),t)});return i(t,function(t){return a(t)&&t.length<j?h?t.replace(f.symbol,f.symbol+Array(j-t.length+1).join(" ")):Array(j-t.length+1).join(" ")+t:t})},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=d),exports.accounting=d):"function"==typeof define&&define.amd?define([],function(){return d}):(d.noConflict=function(a){return function(){return t.accounting=a,d.noConflict=e,d}}(t.accounting),t.accounting=d)}(this);//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_cart_view={"type_view":"1","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из корзины",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_cart_view={
				"data_ect":"Ваша корзина пуста",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в корзину",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в корзине", 
				"data_lpm":"Товаров", 
				"data_lpe":"Моя корзина", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=cart&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:default","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrap","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externright","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrap","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:extern","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externright","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externtwo","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:midiright","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:midileft","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"3","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs4",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"1","modal_dop":"1","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"1","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"0","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/test/",
				"data_ilp":"https://pro-spec.ru/test/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/test/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/test/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"5000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 5 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"15000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 15 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"3","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"0","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"15000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 15 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"0","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:default","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"p",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"15000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 15 000 p",
				"data_maxpotxt":"Максимальная сумма заказа - 0 p"
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"3","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"1","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"3","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"3","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"2","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"0","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:default","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"1","show_added_to_cart":"3","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"0","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:default","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs2",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"3","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"0","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:default","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};//AJAX PARAMS
			var mod_ajax_data, mod_ajax_data2, mod_ajax_data_wishlist_view,  mod_ajax_data_cart_view;
				var mod_params_wishlist_view={"type_view":"2","bs_version":"2","show_added_to_cart":"3","modal_type":"2","modal_dop":"0","show_added_to_cart_icon":"0","show_added_to_cart_icon_prod":"0","show_qttylist":"0","show_qtty":"0","include_font":"0","iclass_ok":"fa fa-check","iclass_cart":"fa fa-shopping-cart","iclass_wl":"fa fa-heart","show_quantity_buttons":"1","show_rabatt":"1","show_ef":"0","show_fixed":"0","show_onclick":"1","highlight_attr":"0","off_ajax":"1","clone_mw":"0","clone_selector":".footer","extselector_cart":".extselectorcart","create_file":"1","combine_file":"1","cart_color":"5","layout":"_:externbootstrapdop-min","moduleclass_sfx":"","cache":"0","cache_time":"900","cachemode":"itemid","module_tag":"div","bootstrap_size":"2","header_tag":"h3","header_class":"","style":"0"};
				mod_ajax_data={
				"data_uri":"https://pro-spec.ru/",
				"data_ilp":"https://pro-spec.ru/components/com_jshopping/files/img_products",
				"data_cc":"pуб.",
				"data_sp":"/index.php?option=com_jshopping&amp;controller=product&amp;task=view&amp;Itemid=559",
				"data_bsv":"bs3",
				"data_dcount":"0",
				"data_tseparator":" ",
				"data_lps":"на сумму",
				"data_dt":"Удалить",
				"data_dtf":"Товар удален из списка пожеланий",
				"data_rel":"Сопутствующие товары &dArr;",
				"data_rabattv":"Скидка",
				"data_rabatt":"Введите дисконтный код",
				"data_rabatta":"Активировать",
				"data_pp":"Параметры &dArr;",
				"data_pef":"Характеристики &dArr;",
				"data_minpo":"2000",
				"data_maxpo":"0",
				"data_minpotxt":"Минимальная сумма заказа - 2 000 pуб.",
				"data_maxpotxt":"Максимальная сумма заказа - 0 pуб."
				};
				mod_ajax_data_wishlist_view={
				"data_ect":"Ваш список пожеланий пуст",
				"data_et":"Показать/скрыть подробности",
				"data_lp":"Товар добавлен в список пожеланий",
				"data_lpwlv":"Товар добавлен в список пожеланий",
				"data_lpcv":"Товар добавлен в корзину",
				"data_lpc":"Товаров в списке пожеланий", 
				"data_lpm":"Товаров", 
				"data_lpe":"Список пожеланий", 
				"data_classok":"fa fa-check",
				"data_sd":"/index.php?option=com_jshopping&amp;controller=wishlist&amp;task=delete&amp;Itemid=559"
				};