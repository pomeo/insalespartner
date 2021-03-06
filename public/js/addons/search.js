!function(e){var s;jQuery&&jQuery.UIkit&&(s=e(jQuery,jQuery.UIkit)),"function"==typeof define&&define.amd&&define("uikit-search",["uikit"],function(){return s||e(jQuery,jQuery.UIkit)})}(function(e,s){"use strict";s.component("search",{defaults:{msgResultsHeader:"Search Results",msgMoreResults:"More Results",msgNoResults:"No results found",template:'<ul class="uk-nav uk-nav-search uk-autocomplete-results">                                      {{#msgResultsHeader}}<li class="uk-nav-header uk-skip">{{msgResultsHeader}}</li>{{/msgResultsHeader}}                                      {{#items && items.length}}                                          {{~items}}                                          <li data-url="{{!$item.url}}">                                              <a href="{{!$item.url}}">                                                  {{{$item.title}}}                                                  {{#$item.text}}<div>{{{$item.text}}}</div>{{/$item.text}}                                              </a>                                          </li>                                          {{/items}}                                          {{#msgMoreResults}}                                              <li class="uk-nav-divider uk-skip"></li>                                              <li class="uk-search-moreresults" data-moreresults="true"><a href="#" onclick="jQuery(this).closest(\'form\').submit();">{{msgMoreResults}}</a></li>                                          {{/msgMoreResults}}                                      {{/end}}                                      {{^items.length}}                                        {{#msgNoResults}}<li class="uk-skip"><a>{{msgNoResults}}</a></li>{{/msgNoResults}}                                      {{/end}}                                  </ul>',renderer:function(e){var s=this.options;this.dropdown.append(this.template({items:e.results||[],msgResultsHeader:s.msgResultsHeader,msgMoreResults:s.msgMoreResults,msgNoResults:s.msgNoResults})),this.show()}},init:function(){var e=this;this.autocomplete=s.autocomplete(this.element,this.options),this.autocomplete.dropdown.addClass("uk-dropdown-search"),this.autocomplete.input.on("keyup",function(){e.element[e.autocomplete.input.val()?"addClass":"removeClass"]("uk-active")}).closest("form").on("reset",function(){e.value="",e.element.removeClass("uk-active")}),this.on("autocomplete-select",function(e,s){s.url?location.href=s.url:s.moreresults&&this.autocomplete.input.closest("form").submit()}),this.element.data("search",this)}}),s.$doc.on("focus.search.uikit","[data-uk-search]",function(){var t=e(this);if(!t.data("search")){s.search(t,s.Utils.options(t.attr("data-uk-search")))}})});