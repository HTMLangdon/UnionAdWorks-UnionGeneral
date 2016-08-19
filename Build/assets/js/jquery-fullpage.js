/*!
 * fullPage 2.8.1
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function($){return n($,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function($,e,n,t,o){"use strict";var i="fullpage-wrapper",r="."+i,a="fp-scrollable",l="."+a,s="fp-responsive",c="fp-notransition",d="fp-destroyed",f="fp-enabled",u="fp-viewing",h="active",p="."+h,v="fp-completely",m="."+v,g=".section",S="fp-section",w="."+S,y=w+p,b=w+":first",C=w+":last",T="fp-tableCell",x="."+T,k="fp-auto-height",L=".fp-auto-height",M="fp-normal-scroll",A=".fp-normal-scroll",E="fp-nav",I="#"+E,O="fp-tooltip",B="."+O,H="fp-show-active",R=".slide",D="fp-slide",z="."+D,P=z+p,F="fp-slides",V="."+F,U="fp-slidesContainer",W="."+U,q="fp-table",Y="fp-slidesNav",X="."+Y,N=X+" a",j="fp-controlArrow",K="."+j,Q="fp-prev",G="."+Q,J=j+" "+Q,Z=K+G,_="fp-next",ee="."+_,ne=j+" "+_,te=K+ee,oe=$(e),ie=$(n),re={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,click:!0};$.fn.fullpage=function(a){function l(){a.css3&&(a.css3=bn()),a.scrollBar=a.scrollBar||a.hybrid,A(),j(),Un.setAllowScrolling(!0),Un.setAutoScrolling(a.autoScrolling,"internal");var e=$(y).find(P);e.length&&(0!==$(y).index(w)||0===$(y).index(w)&&0!==e.index())&&In(e),_e(),yn(),"complete"===n.readyState&&Fe(),oe.on("load",Fe)}function L(){oe.on("scroll",ve).on("hashchange",Ve).blur(je).resize($e),ie.keydown(Ue).keyup(qe).on("click touchstart",I+" a",Ke).on("click touchstart",N,Qe).on("click",B,We),$(w).on("click touchstart",K,Ne),a.normalScrollElements&&(ie.on("mouseenter",a.normalScrollElements,function(){Un.setMouseWheelScrolling(!1)}),ie.on("mouseleave",a.normalScrollElements,function(){Un.setMouseWheelScrolling(!0)}))}function A(){var e=Xn.find(a.sectionSelector);a.anchors.length||(a.anchors=e.filter("[data-anchor]").map(function(){return $(this).data("anchor").toString()}).get()),a.navigationTooltips.length||(a.navigationTooltips=e.filter("[data-tooltip]").map(function(){return $(this).data("tooltip").toString()}).get())}function j(){Xn.css({height:"100%",position:"relative"}),Xn.addClass(i),$("html").addClass(f),Nn=oe.height(),Xn.removeClass(d),le(),$(w).each(function(e){var n=$(this),t=n.find(z),o=t.length;_(n,e),ee(n,e),o>0?G(n,t,o):a.verticalCentered&&cn(n)}),a.fixedElements&&a.css3&&$(a.fixedElements).appendTo(Vn),a.navigation&&ce(),fe(),ue(),a.scrollOverflow?("complete"===n.readyState&&de(),oe.on("load",de)):pe()}function G(e,n,t){var o=100*t,i=100/t;n.wrapAll('<div class="'+U+'" />'),n.parent().wrap('<div class="'+F+'" />'),e.find(W).css("width",o+"%"),t>1&&(a.controlArrows&&se(e),a.slidesNavigation&&mn(e,t)),n.each(function(e){$(this).css("width",i+"%"),a.verticalCentered&&cn($(this))});var r=e.find(P);r.length&&(0!==$(y).index(w)||0===$(y).index(w)&&0!==r.index())?In(r):n.eq(0).addClass(h)}function _(e,n){n||0!==$(y).length||e.addClass(h),e.css("height",Nn+"px"),a.paddingTop&&e.css("padding-top",a.paddingTop),a.paddingBottom&&e.css("padding-bottom",a.paddingBottom),"undefined"!=typeof a.sectionsColor[n]&&e.css("background-color",a.sectionsColor[n]),"undefined"!=typeof a.anchors[n]&&e.attr("data-anchor",a.anchors[n])}function ee(e,n){"undefined"!=typeof a.anchors[n]&&e.hasClass(h)&&rn(a.anchors[n],n),a.menu&&a.css3&&$(a.menu).closest(r).length&&$(a.menu).appendTo(Vn)}function le(){$(a.sectionSelector).each(function(){$(this).addClass(S)}),$(a.slideSelector).each(function(){$(this).addClass(D)})}function se(e){e.find(V).after('<div class="'+J+'"></div><div class="'+ne+'"></div>'),"#fff"!=a.controlArrowColor&&(e.find(te).css("border-color","transparent transparent transparent "+a.controlArrowColor),e.find(Z).css("border-color","transparent "+a.controlArrowColor+" transparent transparent")),a.loopHorizontal||e.find(Z).hide()}function ce(){Vn.append('<div id="'+E+'"><ul></ul></div>');var e=$(I);e.addClass(function(){return a.showActiveTooltip?H+" "+a.navigationPosition:a.navigationPosition});for(var n=0;n<$(w).length;n++){var t="";a.anchors.length&&(t=a.anchors[n]);var o='<li><a href="#'+t+'"><span></span></a>',i=a.navigationTooltips[n];"undefined"!=typeof i&&""!==i&&(o+='<div class="'+O+" "+a.navigationPosition+'">'+i+"</div>"),o+="</li>",e.find("ul").append(o)}$(I).css("margin-top","-"+$(I).height()/2+"px"),$(I).find("li").eq($(y).index(w)).find("a").addClass(h)}function de(){$(w).each(function(){var e=$(this).find(z);e.length?e.each(function(){sn($(this))}):sn($(this))}),pe()}function fe(){Xn.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=he($(this).attr("src"));$(this).attr("src",$(this).attr("src")+e+"enablejsapi=1")})}function ue(){Xn.find('iframe[src*="player.vimeo.com/"]').each(function(){var e=he($(this).attr("src"));$(this).attr("src",$(this).attr("src")+e+"api=1")})}function he(e){return/\?/.test(e)?"&":"?"}function pe(){var e=$(y);e.addClass(v),a.scrollOverflowHandler.afterRender&&a.scrollOverflowHandler.afterRender(e),Re(e),De(e),$.isFunction(a.afterLoad)&&a.afterLoad.call(e,e.data("anchor"),e.index(w)+1),$.isFunction(a.afterRender)&&a.afterRender.call(Xn)}function ve(){var e;if(!a.autoScrolling||a.scrollBar){for(var t=oe.scrollTop(),o=ge(t),i=0,r=t+oe.height()/2,l=n.querySelectorAll(w),s=0;s<l.length;++s){var c=l[s];c.offsetTop<=r&&(i=s)}if(me(o)&&($(y).hasClass(v)||$(y).addClass(v).siblings().removeClass(v)),e=$(l).eq(i),!e.hasClass(h)){st=!0;var d=$(y),f=d.index(w)+1,u=an(e),p=e.data("anchor"),m=e.index(w)+1,g=e.find(P);if(g.length)var S=g.data("anchor"),b=g.index();Jn&&(e.addClass(h).siblings().removeClass(h),$.isFunction(a.onLeave)&&a.onLeave.call(d,f,m,u),$.isFunction(a.afterLoad)&&a.afterLoad.call(e,p,m),Re(e),rn(p,m-1),a.anchors.length&&(Qn=p,gn(b,S,p,m))),clearTimeout(rt),rt=setTimeout(function(){st=!1},100)}a.fitToSection&&(clearTimeout(at),at=setTimeout(function(){Jn&&a.fitToSection&&($(y).is(e)&&(jn=!0),Ae($(y)),jn=!1)},a.fitToSectionDelay))}}function me(e){var n=$(y).position().top,t=n+oe.height();return"up"==e?t>=oe.scrollTop()+oe.height():n<=oe.scrollTop()}function ge(e){var n=e>ct?"down":"up";return ct=e,n}function Se(e,n){if(et.m[e]){var t,o;if("down"==e?(t="bottom",o=Un.moveSectionDown):(t="top",o=Un.moveSectionUp),n.length>0){if(!a.scrollOverflowHandler.isScrolled(t,n))return!0;o()}else o()}}function we(e){var n=e.originalEvent;if(!ye(e.target)&&be(n)){a.autoScrolling&&e.preventDefault();var o=$(y),i=a.scrollOverflowHandler.scrollable(o);if(Jn&&!Wn){var r=En(n);ut=r.y,ht=r.x,o.find(V).length&&t.abs(ft-ht)>t.abs(dt-ut)?t.abs(ft-ht)>oe.outerWidth()/100*a.touchSensitivity&&(ft>ht?et.m.right&&Un.moveSlideRight():et.m.left&&Un.moveSlideLeft()):a.autoScrolling&&t.abs(dt-ut)>oe.height()/100*a.touchSensitivity&&(dt>ut?Se("down",i):ut>dt&&Se("up",i))}}}function ye(e,n){n=n||0;var t=$(e).parent();return n<a.normalScrollElementTouchThreshold&&t.is(a.normalScrollElements)?!0:n==a.normalScrollElementTouchThreshold?!1:ye(t,++n)}function be(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function Ce(e){var n=e.originalEvent;if(a.fitToSection&&Fn.stop(),be(n)){var t=En(n);dt=t.y,ft=t.x}}function Te(e,n){for(var o=0,i=e.slice(t.max(e.length-n,1)),r=0;r<i.length;r++)o+=i[r];return t.ceil(o/n)}function xe(n){var o=(new Date).getTime(),i=$(m).hasClass(M);if(a.autoScrolling&&!_n&&!i){n=n||e.event;var r=n.wheelDelta||-n.deltaY||-n.detail,l=t.max(-1,t.min(1,r)),s="undefined"!=typeof n.wheelDeltaX||"undefined"!=typeof n.deltaX,c=t.abs(n.wheelDeltaX)<t.abs(n.wheelDelta)||t.abs(n.deltaX)<t.abs(n.deltaY)||!s;Zn.length>149&&Zn.shift(),Zn.push(t.abs(r)),a.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1);var d=$(y),f=a.scrollOverflowHandler.scrollable(d),u=o-pt;if(pt=o,u>200&&(Zn=[]),Jn){var h=Te(Zn,10),p=Te(Zn,70),v=h>=p;v&&c&&(0>l?Se("down",f):Se("up",f))}return!1}a.fitToSection&&Fn.stop()}function ke(e,n){var t="undefined"==typeof n?$(y):n,o=t.find(V),i=o.find(z).length;if(!(!o.length||Wn||2>i)){var r=o.find(P),l=null;if(l="prev"===e?r.prev(z):r.next(z),!l.length){if(!a.loopHorizontal)return;l="prev"===e?r.siblings(":last"):r.siblings(":first")}Wn=!0,Ze(o,l)}}function Le(){$(P).each(function(){In($(this),"internal")})}function Me(e){var n=e.position(),t=n.top,o=n.top>vt,i=t-Nn+e.outerHeight();return e.outerHeight()>Nn?o||(t=i):(o||jn&&e.is(":last-child"))&&(t=i),vt=t,t}function Ae(e,n,t){if("undefined"!=typeof e){var o=Me(e),i={element:e,callback:n,isMovementUp:t,dtop:o,yMovement:an(e),anchorLink:e.data("anchor"),sectionIndex:e.index(w),activeSlide:e.find(P),activeSection:$(y),leavingSection:$(y).index(w)+1,localIsResizing:jn};if(!(i.activeSection.is(e)&&!jn||a.scrollBar&&oe.scrollTop()===i.dtop&&!e.hasClass(k))){if(i.activeSlide.length)var r=i.activeSlide.data("anchor"),l=i.activeSlide.index();a.autoScrolling&&a.continuousVertical&&"undefined"!=typeof i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=Oe(i)),$.isFunction(a.onLeave)&&!i.localIsResizing&&a.onLeave.call(i.activeSection,i.leavingSection,i.sectionIndex+1,i.yMovement)===!1||(ze(i.activeSection),e.addClass(h).siblings().removeClass(h),Re(e),a.scrollOverflowHandler.onLeave(),Jn=!1,gn(l,r,i.anchorLink,i.sectionIndex),Ee(i),Qn=i.anchorLink,rn(i.anchorLink,i.sectionIndex))}}}function Ee(e){if(a.css3&&a.autoScrolling&&!a.scrollBar){var n="translate3d(0px, -"+e.dtop+"px, 0px)";fn(n,!0),a.scrollingSpeed?ot=setTimeout(function(){He(e)},a.scrollingSpeed):He(e)}else{var t=Ie(e);$(t.element).animate(t.options,a.scrollingSpeed,a.easing).promise().done(function(){a.scrollBar?setTimeout(function(){He(e)},30):He(e)})}}function Ie(e){var n={};return a.autoScrolling&&!a.scrollBar?(n.options={top:-e.dtop},n.element=r):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Oe(e){return e.isMovementUp?$(y).before(e.activeSection.nextAll(w)):$(y).after(e.activeSection.prevAll(w).get().reverse()),On($(y).position().top),Le(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.position().top,e.yMovement=an(e.element),e}function Be(e){e.wrapAroundElements&&e.wrapAroundElements.length&&(e.isMovementUp?$(b).before(e.wrapAroundElements):$(C).after(e.wrapAroundElements),On($(y).position().top),Le())}function He(e){Be(e),e.element.find(".fp-scrollable").mouseover(),$.isFunction(a.afterLoad)&&!e.localIsResizing&&a.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),a.scrollOverflowHandler.afterLoad(),De(e.element),e.element.addClass(v).siblings().removeClass(v),Jn=!0,$.isFunction(e.callback)&&e.callback.call(this)}function Re(e){var e=Pe(e);e.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){$(this).attr("src",$(this).data("src")),$(this).removeAttr("data-src"),$(this).is("source")&&$(this).closest("video").get(0).load()})}function De(e){var e=Pe(e);e.find("video, audio").each(function(){var e=$(this).get(0);e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),e.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=$(this).get(0);/youtube\.com\/embed\//.test($(this).attr("src"))&&e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")})}function ze(e){var e=Pe(e);e.find("video, audio").each(function(){var e=$(this).get(0);e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),e.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=$(this).get(0);/youtube\.com\/embed\//.test($(this).attr("src"))&&!e.hasAttribute("data-keepplaying")&&$(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Pe(e){var n=e.find(P);return n.length&&(e=$(n)),e}function Fe(){var n=e.location.hash.replace("#","").split("/"),t=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);t&&(a.animateAnchor?pn(t,o):Un.silentMoveTo(t,o))}function Ve(){if(!st&&!a.lockAnchors){var n=e.location.hash.replace("#","").split("/"),t=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]),i="undefined"==typeof Qn,r="undefined"==typeof Qn&&"undefined"==typeof o&&!Wn;t.length&&(t&&t!==Qn&&!i||r||!Wn&&Gn!=o)&&pn(t,o)}}function Ue(e){clearTimeout(lt);var n=$(":focus");if(!n.is("textarea")&&!n.is("input")&&!n.is("select")&&"true"!==n.attr("contentEditable")&&""!==n.attr("contentEditable")&&a.keyboardScrolling&&a.autoScrolling){var t=e.which,o=[40,38,32,33,34];$.inArray(t,o)>-1&&e.preventDefault(),_n=e.ctrlKey,lt=setTimeout(function(){Ge(e)},150)}}function We(){$(this).prev().trigger("click")}function qe(e){Kn&&(_n=e.ctrlKey)}function Ye(e){2==e.which&&(mt=e.pageY,Xn.on("mousemove",Je))}function Xe(e){2==e.which&&Xn.off("mousemove")}function Ne(){var e=$(this).closest(w);$(this).hasClass(Q)?et.m.left&&Un.moveSlideLeft(e):et.m.right&&Un.moveSlideRight(e)}function je(){Kn=!1,_n=!1}function Ke(e){e.preventDefault();var n=$(this).parent().index();Ae($(w).eq(n))}function Qe(e){e.preventDefault();var n=$(this).closest(w).find(V),t=n.find(z).eq($(this).closest("li").index());Ze(n,t)}function Ge(e){var n=e.shiftKey;switch(e.which){case 38:case 33:et.k.up&&Un.moveSectionUp();break;case 32:if(n&&et.k.up){Un.moveSectionUp();break}case 40:case 34:et.k.down&&Un.moveSectionDown();break;case 36:et.k.up&&Un.moveTo(1);break;case 35:et.k.down&&Un.moveTo($(w).length);break;case 37:et.k.left&&Un.moveSlideLeft();break;case 39:et.k.right&&Un.moveSlideRight();break;default:return}}function Je(e){Jn&&(e.pageY<mt&&et.m.up?Un.moveSectionUp():e.pageY>mt&&et.m.down&&Un.moveSectionDown()),mt=e.pageY}function Ze(e,n){var o=n.position(),i=n.index(),r=e.closest(w),l=r.index(w),s=r.data("anchor"),c=r.find(X),d=wn(n),f=r.find(P),u=jn;if(a.onSlideLeave){var v=f.index(),m=ln(v,i);if(!u&&"none"!==m&&$.isFunction(a.onSlideLeave)&&a.onSlideLeave.call(f,s,l+1,v,m,i)===!1)return void(Wn=!1)}ze(f),n.addClass(h).siblings().removeClass(h),u||Re(n),!a.loopHorizontal&&a.controlArrows&&(r.find(Z).toggle(0!==i),r.find(te).toggle(!n.is(":last-child"))),r.hasClass(h)&&gn(i,d,s,l);var g=function(){u||$.isFunction(a.afterSlideLoad)&&a.afterSlideLoad.call(n,s,l+1,d,i),De(n),Wn=!1};if(a.css3){var S="translate3d(-"+t.round(o.left)+"px, 0px, 0px)";en(e.find(W),a.scrollingSpeed>0).css(Bn(S)),it=setTimeout(function(){g()},a.scrollingSpeed,a.easing)}else e.animate({scrollLeft:t.round(o.left)},a.scrollingSpeed,a.easing,function(){g()});c.find(p).removeClass(h),c.find("li").eq(i).find("a").addClass(h)}function $e(){if(_e(),qn){var e=$(n.activeElement);if(!e.is("textarea")&&!e.is("input")&&!e.is("select")){var o=oe.height();t.abs(o-gt)>20*t.max(gt,o)/100&&(Un.reBuild(!0),gt=o)}}else clearTimeout(tt),tt=setTimeout(function(){Un.reBuild(!0)},350)}function _e(){var e=a.responsive||a.responsiveWidth,n=a.responsiveHeight,t=e&&oe.outerWidth()<e,o=n&&oe.height()<n;e&&n?Un.setResponsive(t||o):e?Un.setResponsive(t):n&&Un.setResponsive(o)}function en(e){var n="all "+a.scrollingSpeed+"ms "+a.easingcss3;return e.removeClass(c),e.css({"-webkit-transition":n,transition:n})}function nn(e){return e.addClass(c)}function tn(e,n){a.navigation&&($(I).find(p).removeClass(h),e?$(I).find('a[href="#'+e+'"]').addClass(h):$(I).find("li").eq(n).find("a").addClass(h))}function on(e){a.menu&&($(a.menu).find(p).removeClass(h),$(a.menu).find('[data-menuanchor="'+e+'"]').addClass(h))}function rn(e,n){on(e),tn(e,n)}function an(e){var n=$(y).index(w),t=e.index(w);return n==t?"none":n>t?"up":"down"}function ln(e,n){return e==n?"none":e>n?"left":"right"}function sn(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var n=a.scrollOverflowHandler,t=n.wrapContent(),o=e.closest(w),i=n.scrollable(e),r;i.length?r=n.scrollHeight(e):(r=e.get(0).scrollHeight,a.verticalCentered&&(r=e.find(x).get(0).scrollHeight));var l=Nn-parseInt(o.css("padding-bottom"))-parseInt(o.css("padding-top"));r>l?i.length?n.update(e,l):(a.verticalCentered?e.find(x).wrapInner(t):e.wrapInner(t),n.create(e,l)):n.remove(e),e.css("overflow","")}}function cn(e){e.addClass(q).wrapInner('<div class="'+T+'" style="height:'+dn(e)+'px;" />')}function dn(e){var n=Nn;if(a.paddingTop||a.paddingBottom){var t=e;t.hasClass(S)||(t=e.closest(w));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=Nn-o}return n}function fn(e,n){n?en(Xn):nn(Xn),Xn.css(Bn(e)),setTimeout(function(){Xn.removeClass(c)},10)}function un(e){var n=Xn.find(w+'[data-anchor="'+e+'"]');return n.length||(n=$(w).eq(e-1)),n}function hn(e,n){var t=n.find(V),o=t.find(z+'[data-anchor="'+e+'"]');return o.length||(o=t.find(z).eq(e)),o}function pn(e,n){var t=un(e);"undefined"==typeof n&&(n=0),e===Qn||t.hasClass(h)?vn(t,n):Ae(t,function(){vn(t,n)})}function vn(e,n){if("undefined"!=typeof n){var t=e.find(V),o=hn(n,e);o.length&&Ze(t,o)}}function mn(e,n){e.append('<div class="'+Y+'"><ul></ul></div>');var t=e.find(X);t.addClass(a.slidesNavPosition);for(var o=0;n>o;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(h)}function gn(e,n,t,o){var i="";a.anchors.length&&!a.lockAnchors&&(e?("undefined"!=typeof t&&(i=t),"undefined"==typeof n&&(n=e),Gn=n,Sn(i+"/"+n)):"undefined"!=typeof e?(Gn=n,Sn(t)):Sn(t)),yn()}function Sn(n){if(a.recordHistory)location.hash=n;else if(qn||Yn)e.history.replaceState(o,o,"#"+n);else{var t=e.location.href.split("#")[0];e.location.replace(t+"#"+n)}}function wn(e){var n=e.data("anchor"),t=e.index();return"undefined"==typeof n&&(n=t),n}function yn(){var e=$(y),n=e.find(P),t=wn(e),o=wn(n),i=String(t);n.length&&(i=i+"-"+o),i=i.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+u+"-[^\\s]+\\b","g");Vn[0].className=Vn[0].className.replace(r,""),Vn.addClass(u+"-"+i)}function bn(){var t=n.createElement("p"),i,r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(t,null);for(var a in r)t.style[a]!==o&&(t.style[a]="translate3d(1px,1px,1px)",i=e.getComputedStyle(t).getPropertyValue(r[a]));return n.body.removeChild(t),i!==o&&i.length>0&&"none"!==i}function Cn(){n.addEventListener?(n.removeEventListener("mousewheel",xe,!1),n.removeEventListener("wheel",xe,!1),n.removeEventListener("MozMousePixelScroll",xe,!1)):n.detachEvent("onmousewheel",xe)}function Tn(){var t="",i;e.addEventListener?i="addEventListener":(i="attachEvent",t="on");var r="onwheel"in n.createElement("div")?"wheel":n.onmousewheel!==o?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?n[i](t+"MozMousePixelScroll",xe,!1):n[i](t+r,xe,!1)}function xn(){Xn.on("mousedown",Ye).on("mouseup",Xe)}function kn(){Xn.off("mousedown",Ye).off("mouseup",Xe)}function Ln(){if(qn||Yn){var e=An();$(r).off("touchstart "+e.down).on("touchstart "+e.down,Ce),$(r).off("touchmove "+e.move).on("touchmove "+e.move,we)}}function Mn(){if(qn||Yn){var e=An();$(r).off("touchstart "+e.down),$(r).off("touchmove "+e.move)}}function An(){var n;return n=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function En(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Yn&&be(e)&&a.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function In(e,n){Un.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(jn=!0),Ze(e.closest(V),e),"undefined"!=typeof n&&(jn=!1),Un.setScrollingSpeed(nt.scrollingSpeed,"internal")}function On(e){if(a.scrollBar)Xn.scrollTop(e);else if(a.css3){var n="translate3d(0px, -"+e+"px, 0px)";fn(n,!1)}else Xn.css("top",-e)}function Bn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Hn(e,n,t){switch(n){case"up":et[t].up=e;break;case"down":et[t].down=e;break;case"left":et[t].left=e;break;case"right":et[t].right=e;break;case"all":"m"==t?Un.setAllowScrolling(e):Un.setKeyboardScrolling(e)}}function Rn(){On(0),$(I+", "+X+", "+K).remove(),$(w).css({height:"","background-color":"",padding:""}),$(z).css({width:""}),Xn.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),Fn.css({overflow:"",height:""}),$("html").removeClass(f),$.each(Vn.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(u)&&Vn.removeClass(n)}),$(w+", "+z).each(function(){a.scrollOverflowHandler.remove($(this)),$(this).removeClass(q+" "+h)}),nn(Xn),Xn.find(x+", "+W+", "+V).each(function(){$(this).replaceWith(this.childNodes)}),Fn.scrollTop(0);var e=[S,D,U];$.each(e,function(e,n){$("."+n).removeClass(n)})}function Dn(e,n,t){a[e]=n,"internal"!==t&&(nt[e]=n)}function zn(){return $("html").hasClass(f)?void Pn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(a.continuousVertical&&(a.loopTop||a.loopBottom)&&(a.continuousVertical=!1,Pn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),a.scrollBar&&a.scrollOverflow&&Pn("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),a.continuousVertical&&a.scrollBar&&(a.continuousVertical=!1,Pn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),void $.each(a.anchors,function(e,n){var t=ie.find("[name]").filter(function(){return $(this).attr("name")&&$(this).attr("name").toLowerCase()==n.toLowerCase()}),o=ie.find("[id]").filter(function(){return $(this).attr("id")&&$(this).attr("id").toLowerCase()==n.toLowerCase()});(o.length||t.length)&&(Pn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),o.length&&Pn("error",'"'+n+'" is is being used by another element `id` property'),t.length&&Pn("error",'"'+n+'" is is being used by another element `name` property'))}))}function Pn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if($("html").hasClass(f))return void zn();var Fn=$("html, body"),Vn=$("body"),Un=$.fn.fullpage;a=$.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:ae,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:g,slideSelector:R,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},a),zn(),re=$.extend(re,a.scrollOverflowOptions),$.extend($.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),Un.setAutoScrolling=function(e,n){Dn("autoScrolling",e,n);var t=$(y);a.autoScrolling&&!a.scrollBar?(Fn.css({overflow:"hidden",height:"100%"}),Un.setRecordHistory(nt.recordHistory,"internal"),Xn.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&On(t.position().top)):(Fn.css({overflow:"visible",height:"initial"}),Un.setRecordHistory(!1,"internal"),Xn.css({"-ms-touch-action":"","touch-action":""}),On(0),t.length&&Fn.scrollTop(t.position().top))},Un.setRecordHistory=function(e,n){Dn("recordHistory",e,n)},Un.setScrollingSpeed=function(e,n){Dn("scrollingSpeed",e,n)},Un.setFitToSection=function(e,n){Dn("fitToSection",e,n)},Un.setLockAnchors=function(e){a.lockAnchors=e},Un.setMouseWheelScrolling=function(e){e?(Tn(),xn()):(Cn(),kn())},Un.setAllowScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),$.each(n,function(n,t){Hn(e,t,"m")})):e?(Un.setMouseWheelScrolling(!0),Ln()):(Un.setMouseWheelScrolling(!1),Mn())},Un.setKeyboardScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),$.each(n,function(n,t){Hn(e,t,"k")})):a.keyboardScrolling=e},Un.moveSectionUp=function(){var e=$(y).prev(w);e.length||!a.loopTop&&!a.continuousVertical||(e=$(w).last()),e.length&&Ae(e,null,!0)},Un.moveSectionDown=function(){var e=$(y).next(w);e.length||!a.loopBottom&&!a.continuousVertical||(e=$(w).first()),e.length&&Ae(e,null,!1)},Un.silentMoveTo=function(e,n){Un.setScrollingSpeed(0,"internal"),Un.moveTo(e,n),Un.setScrollingSpeed(nt.scrollingSpeed,"internal")},Un.moveTo=function(e,n){var t=un(e);"undefined"!=typeof n?pn(e,n):t.length>0&&Ae(t)},Un.moveSlideRight=function(e){ke("next",e)},Un.moveSlideLeft=function(e){ke("prev",e)},Un.reBuild=function(e){if(!Xn.hasClass(d)){jn=!0,Nn=oe.height(),$(w).each(function(){var e=$(this).find(V),n=$(this).find(z);a.verticalCentered&&$(this).find(x).css("height",dn($(this))+"px"),$(this).css("height",Nn+"px"),a.scrollOverflow&&(n.length?n.each(function(){sn($(this))}):sn($(this))),n.length>1&&Ze(e,e.find(P))});var n=$(y),t=n.index(w);t&&Un.silentMoveTo(t+1),jn=!1,$.isFunction(a.afterResize)&&e&&a.afterResize.call(Xn),$.isFunction(a.afterReBuild)&&!e&&a.afterReBuild.call(Xn)}},Un.setResponsive=function(e){var n=Vn.hasClass(s);e?n||(Un.setAutoScrolling(!1,"internal"),Un.setFitToSection(!1,"internal"),$(I).hide(),Vn.addClass(s)):n&&(Un.setAutoScrolling(nt.autoScrolling,"internal"),Un.setFitToSection(nt.autoScrolling,"internal"),$(I).show(),Vn.removeClass(s))};var Wn=!1,qn=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Yn="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Xn=$(this),Nn=oe.height(),jn=!1,Kn=!0,Qn,Gn,Jn=!0,Zn=[],$n,_n,et={};et.m={up:!0,down:!0,left:!0,right:!0},et.k=$.extend(!0,{},et.m);var nt=$.extend(!0,{},a),tt,ot,it,rt,at,lt;$(this).length&&(l(),L());var st=!1,ct=0,dt=0,ft=0,ut=0,ht=0,pt=(new Date).getTime(),vt=0,mt=0,gt=Nn;Un.destroy=function(e){Un.setAutoScrolling(!1,"internal"),Un.setAllowScrolling(!1),Un.setKeyboardScrolling(!1),Xn.addClass(d),clearTimeout(it),clearTimeout(ot),clearTimeout(tt),clearTimeout(rt),clearTimeout(at),oe.off("scroll",ve).off("hashchange",Ve).off("resize",$e),ie.off("click",I+" a").off("mouseenter",I+" li").off("mouseleave",I+" li").off("click",N).off("mouseover",a.normalScrollElements).off("mouseout",a.normalScrollElements),$(w).off("click",K),clearTimeout(it),clearTimeout(ot),e&&Rn()}},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var ae={refreshId:null,iScrollInstances:[],onLeave:function(){var e=$(y).find(l).data("iscrollInstance");"undefined"!=typeof e&&e&&e.wheelOff()},afterLoad:function(){var e=$(y).find(l).data("iscrollInstance");"undefined"!=typeof e&&e&&e.wheelOn()},create:function(e,n){var t=e.find(l);t.height(n),t.each(function(){var e=jQuery(this),n=e.data("iscrollInstance");n&&$.each(ae.iScrollInstances,function(){$(this).destroy()}),n=new IScroll(e.get(0),re),ae.iScrollInstances.push(n),e.data("iscrollInstance",n)})},isScrolled:function(e,n){var t=n.data("iscrollInstance");return t?"top"===e?t.y>=0&&!n.scrollTop():"bottom"===e?0-t.y+n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0:!1},scrollable:function(e){return e.find(V).length?e.find(P).find(l):e.find(l)},scrollHeight:function(e){return e.find(l).children().first().get(0).scrollHeight},remove:function(e){var n=e.find(l);if(n.length){var t=n.data("iscrollInstance");t.destroy(),n.data("iscrollInstance","undefined")}e.find(l).children().first().children().first().unwrap().unwrap()},update:function(e,n){clearTimeout(ae.refreshId),ae.refreshId=setTimeout(function(){$.each(ae.iScrollInstances,function(){$(this).get(0).refresh()})},150),e.find(l).css("height",n+"px").parent().css("height",n+"px")},wrapContent:function(){return'<div class="'+a+'"><div class="fp-scroller"></div></div>'}}});