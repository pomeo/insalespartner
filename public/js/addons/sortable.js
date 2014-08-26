!function(t){var e;jQuery&&jQuery.UIkit&&(e=t(jQuery,jQuery.UIkit)),"function"==typeof define&&define.amd&&define("uikit-sortable",["uikit"],function(){return e||t(jQuery,jQuery.UIkit)})}(function(t,e){"use strict";function n(t,e){var n=t.parentNode;if(e.parentNode!=n)return!1;for(var o=t.previousSibling;o&&9!==o.nodeType;){if(o===e)return!0;o=o.previousSibling}return!1}function o(t,e){var n=e;if(n==t)return null;for(;n;){if(n.parentNode===t)return n;if(n=n.parentNode,!n||!n.ownerDocument||11===n.nodeType)break}return null}function a(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}var s,r,i,d,l,u="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,p=!u&&function(){var t=document.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t}();return p=!1,e.component("sortable",{defaults:{warp:!1,animation:150,threshold:10,childClass:"uk-sortable-item",placeholderClass:"uk-sortable-placeholder",overClass:"uk-sortable-over",draggingClass:"uk-sortable-dragged",dragMovingClass:"uk-sortable-moving",dragCustomClass:"",handleClass:!1,stop:function(){},start:function(){},change:function(){}},init:function(){function e(e){return function(n){var a=u&&n.touches&&n.touches[0]||{},s=a.target||n.target;if(u&&document.elementFromPoint&&(s=document.elementFromPoint(n.pageX-document.body.scrollLeft,n.pageY-document.body.scrollTop)),t(s).hasClass(f.options.childClass))e.apply(s,[n]);else if(s!==v){var r=o(v,s);r&&e.apply(r,[n])}}}function n(){p||(u?v.addEventListener("touchmove",L,!1):(v.addEventListener("mouseover",E,!1),v.addEventListener("mouseout",y,!1)),v.addEventListener(u?"touchend":"mouseup",w,!1),document.addEventListener(u?"touchend":"mouseup",D,!1),document.addEventListener("selectstart",a,!1))}function h(){p||(u?v.removeEventListener("touchmove",L,!1):(v.removeEventListener("mouseover",E,!1),v.removeEventListener("mouseout",y,!1)),v.removeEventListener(u?"touchend":"mouseup",w,!1),document.removeEventListener(u?"touchend":"mouseup",D,!1),document.removeEventListener("selectstart",a,!1))}var c,f=this,v=this.element[0],m=null,g=null;p?this.element.children().attr("draggable","true"):this.element.on("mousedown touchstart","a[href]",function(){d=t(this)}).on("click","a[href]",function(e){return d=t(this),e.stopImmediatePropagation(),!1});var C=e(function(e){r=!1,i=!1;{var o=t(e.target);f.element.children()}if(u||2!=e.button){if(f.options.handleClass){var a=o.hasClass(f.options.handleClass)?o:o.closest("."+f.options.handleClass,v);if(!a.length)return}e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("Text","*")),m=this,s&&s.remove();var d=t(m),h=d.offset();l={pos:{x:e.pageX,y:e.pageY},threshold:f.options.threshold,apply:function(){s=t('<div class="'+[f.options.draggingClass,f.options.dragCustomClass].join(" ")+'"></div>').css({display:"none",top:h.top,left:h.left,width:d.width(),height:d.height(),padding:d.css("padding")}).data("mouse-offset",{left:h.left-parseInt(e.pageX,10),top:h.top-parseInt(e.pageY,10)}).append(d.html()).appendTo("body"),s.$current=d,s.$sortable=f,n(),f.options.start(this,m),f.trigger("sortable-start",[f,m]),l=!1}},p||e.preventDefault()}}),b=e(function(t){return m?(t.preventDefault&&t.preventDefault(),!1):!0}),E=e(t.UIkit.Utils.debounce(function(){if(!m||m===this)return!0;var e=f.dragenterData(this);return f.dragenterData(this,e+1),0===e&&(t(this).addClass(f.options.overClass),f.options.warp||f.moveElementNextTo(m,this)),!1}),40),y=e(function(){var e=f.dragenterData(this);f.dragenterData(this,e-1),f.dragenterData(this)||(t(this).removeClass(f.options.overClass),f.dragenterData(this,!1))}),w=e(function(t){if("drop"===t.type&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()),i){if(f.options.warp){var e=m.nextSibling;this.parentNode.insertBefore(m,this),this.parentNode.insertBefore(this,e)}f.options.change(this,m),f.trigger("sortable-change",[f,m])}}),D=function(){m=null,g=null,f.element.children().each(function(){1===this.nodeType&&(t(this).removeClass(f.options.overClass).removeClass(f.options.placeholderClass).removeClass(f.options.childClass),f.dragenterData(this,!1))}),t("html").removeClass(f.options.dragMovingClass),h(),f.options.stop(this),f.trigger("sortable-stop",[f]),s.remove(),s=null},L=e(function(e){return m&&m!==this&&g!==this?(c.removeClass(f.options.overClass),g=this,f.options.warp?t(this).addClass(f.options.overClass):f.moveElementNextTo(m,this),a(e)):!0});p?(v.addEventListener("dragstart",C,!1),v.addEventListener("dragenter",E,!1),v.addEventListener("dragleave",y,!1),v.addEventListener("drop",w,!1),v.addEventListener("dragover",b,!1),v.addEventListener("dragend",D,!1)):v.addEventListener(u?"touchstart":"mousedown",C,!1)},dragenterData:function(e,n){return e=t(e),1==arguments.length?parseInt(e.attr("data-child-dragenter"),10)||0:void(n?e.attr("data-child-dragenter",Math.max(0,n)):e.removeAttr("data-child-dragenter"))},moveElementNextTo:function(o,a){i=!0;var s=this,r=t(o).parent().css("min-height",""),d=n(o,a)?a:a.nextSibling,l=r.children(),u=l.length;return s.options.warp||!s.options.animation?(a.parentNode.insertBefore(o,d),void e.Utils.checkDisplay(s.element)):(r.css("min-height",r.height()),l.stop().each(function(){var e=t(this),n=e.position();n.width=e.width(),e.data("offset-before",n)}),a.parentNode.insertBefore(o,d),l=r.children().each(function(){var e=t(this);e.data("offset-after",e.position())}).each(function(){var e=t(this),n=e.data("offset-before");e.css({position:"absolute",top:n.top,left:n.left,"min-width":n.width})}),void l.each(function(){var n=t(this),o=(n.data("offset-before"),n.data("offset-after"));n.css("pointer-events","none").width(),setTimeout(function(){n.animate({top:o.top,left:o.left},s.options.animation,function(){n.css({position:"",top:"",left:"","min-width":"","pointer-events":""}).removeClass(s.options.overClass).attr("data-child-dragenter",""),u--,u||(r.css("min-height",""),e.Utils.checkDisplay(n))})},0)}))}}),e.ready(function(n){t("[data-uk-sortable]",n).each(function(){var n=t(this);if(!n.data("sortable")){e.sortable(n,e.Utils.options(n.attr("data-uk-sortable")))}})}),e.$doc.on("mousemove touchmove",function(e){if(l&&(Math.abs(e.pageX-l.pos.x)>l.threshold||Math.abs(e.pageY-l.pos.y)>l.threshold)&&l.apply(),s){r||(r=!0,s.show(),s.$current.addClass(s.$sortable.options.placeholderClass),s.$sortable.element.children().addClass(s.$sortable.options.childClass),t("html").addClass(s.$sortable.options.dragMovingClass));var n=s.data("mouse-offset"),o=parseInt(e.originalEvent.pageX,10)+n.left,a=parseInt(e.originalEvent.pageY,10)+n.top;s.css({left:o,top:a})}}),e.$doc.on("mouseup touchend",function(){!r&&d&&(location.href=d.attr("href")),l=d=!1}),e.sortable});