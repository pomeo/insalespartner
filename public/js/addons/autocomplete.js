!function(t){var e;jQuery&&jQuery.UIkit&&(e=t(jQuery,jQuery.UIkit)),"function"==typeof define&&define.amd&&define("uikit-autocomplete",["uikit"],function(){return e||t(jQuery,jQuery.UIkit)})}(function(t,e){return e.component("autocomplete",{defaults:{minLength:3,param:"search",method:"post",delay:300,loadingClass:"uk-loading",flipDropdown:!1,skipClass:"uk-skip",hoverClass:"uk-active",source:null,renderer:null,template:'<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}"><a>{{$item.value}}</a></li>{{/items}}</ul>'},visible:!1,value:null,selected:null,init:function(){var i=this,s=!1,o=e.Utils.debounce(function(){return s?s=!1:void i.handle()},this.options.delay);this.dropdown=this.find(".uk-dropdown"),this.template=this.find('script[type="text/autocomplete"]').html(),this.template=e.Utils.template(this.template||this.options.template),this.input=this.find("input:first").attr("autocomplete","off"),this.dropdown.length||(this.dropdown=t('<div class="uk-dropdown"></div>').appendTo(this.element)),this.options.flipDropdown&&this.dropdown.addClass("uk-dropdown-flip"),this.input.on({keydown:function(t){if(t&&t.which&&!t.shiftKey)switch(t.which){case 13:s=!0,i.selected&&(t.preventDefault(),i.select());break;case 38:t.preventDefault(),i.pick("prev",!0);break;case 40:t.preventDefault(),i.pick("next",!0);break;case 27:case 9:i.hide()}},keyup:o,blur:function(){setTimeout(function(){i.hide()},200)}}),this.dropdown.on("click",".uk-autocomplete-results > *",function(){i.select()}),this.dropdown.on("mouseover",".uk-autocomplete-results > *",function(){i.pick(t(this))}),this.triggercomplete=o},handle:function(){var t=this,e=this.value;return this.value=this.input.val(),this.value.length<this.options.minLength?this.hide():(this.value!=e&&t.request(),this)},pick:function(t,e){var i=this,s=this.dropdown.find(".uk-autocomplete-results").children(":not(."+this.options.skipClass+")"),o=!1;if("string"==typeof t||t.hasClass(this.options.skipClass)){if("next"==t||"prev"==t)if(this.selected){var n=s.index(this.selected);o=s.eq("next"==t?n+1<s.length?n+1:0:0>n-1?s.length-1:n-1)}else o=s["next"==t?"first":"last"]()}else o=t;if(o&&o.length&&(this.selected=o,s.removeClass(this.options.hoverClass),this.selected.addClass(this.options.hoverClass),e)){var l=o.position().top,a=i.dropdown.scrollTop(),u=i.dropdown.height();(l>u||0>l)&&i.dropdown.scrollTop(a+l)}},select:function(){if(this.selected){var t=this.selected.data();this.trigger("autocomplete-select",[t,this]),t.value&&this.input.val(t.value),this.hide()}},show:function(){return this.visible?void 0:(this.visible=!0,this.element.addClass("uk-open"),this)},hide:function(){return this.visible?(this.visible=!1,this.element.removeClass("uk-open"),this):void 0},request:function(){var e=this,i=function(t){t&&e.render(t),e.element.removeClass(e.options.loadingClass)};if(this.element.addClass(this.options.loadingClass),this.options.source){var s=this.options.source;switch(typeof this.options.source){case"function":this.options.source.apply(this,[i]);break;case"object":if(s.length){var o=[];s.forEach(function(t){t.value&&-1!=t.value.toLowerCase().indexOf(e.value.toLowerCase())&&o.push(t)}),i(o)}break;case"string":var n={};n[this.options.param]=this.value,t.ajax({url:this.options.source,data:n,type:this.options.method,dataType:"json"}).done(function(t){i(t||[])});break;default:i(null)}}else this.element.removeClass(e.options.loadingClass)},render:function(t){return this.dropdown.empty(),this.selected=!1,this.options.renderer?this.options.renderer.apply(this,[t]):t&&t.length&&(this.dropdown.append(this.template({items:t})),this.show(),this.trigger("autocomplete-show")),this}}),e.$doc.on("focus.autocomplete.uikit","[data-uk-autocomplete]",function(){var i=t(this);if(!i.data("autocomplete")){e.autocomplete(i,e.Utils.options(i.attr("data-uk-autocomplete")))}}),e.autocomplete});