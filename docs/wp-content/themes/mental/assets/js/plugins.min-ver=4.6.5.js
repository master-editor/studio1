!function(t){"use strict";!function(){for(var t,i=function(){},e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=e.length,n=window.console=window.console||{};o--;)t=e[o],n[t]||(n[t]=i)}(),function(t,i,e,o){function n(i,e){this._name=s,this.element=i,this.options=t.extend({},a,e),this.$element=t(i),this.$main_block=t(this.options.main_block),this.init()}var s="mental_menu_bar",a={always_show_after_threshold:t("body").hasClass("menu-bar-opened-big")&&!t("body").hasClass("menu-bar-ontop")&&!t("body").hasClass("menu-bar-push"),container_960_threshold:1300,container_1170_threshold:1300,load_closed_below:768,main_block:"#main"};n.prototype={init:function(){var o=this;this.current_threshold=t("body").hasClass("cont-960")?this.options.container_960_threshold:this.options.container_1170_threshold,this.$element.hover(function(){o.show()},function(){i.innerWidth<o.current_threshold&&o.hide()}),t("#main").hover(function(){(!o.options.always_show_after_threshold||i.innerWidth<o.current_threshold)&&o.hide()}),this.$element.find(".mb-toggler").click(function(t){t.preventDefault(),o.toggle()}),this.options.always_show_after_threshold&&t(i).resize(function(){i.innerWidth<o.current_threshold&&o.is_opened()?o.hide():i.innerWidth>o.current_threshold&&!o.is_opened()&&o.show()}).resize(),t(e).click(function(e){var n=o.$element;n.is(e.target)||0!==n.has(e.target).length||t(".mb-toggler").is(e.target)||0!==t(".mb-toggler").has(e.target).length||(!o.options.always_show_after_threshold||i.innerWidth<o.current_threshold)&&o.hide()}),t(i).load(function(){Modernizr.touch&&setTimeout(function(){o.hide()},1e3)}),i.innerWidth<this.options.load_closed_below&&this.is_opened()&&(this.sw_off_transitions(),o.hide(),setTimeout(function(){o.sw_on_transitions()},500))},hide:function(){t("body").removeClass("menu-bar-opened")},show:function(){t("body").addClass("menu-bar-opened")},toggle:function(){t("body").toggleClass("menu-bar-opened")},sw_off_transitions:function(){this.$main_block.css({"transition-property":"none","-moz-transition-property":"none","-webkit-transition-property":"none","-o-transition-property":"none"}),this.$element.css({"transition-property":"none","-moz-transition-property":"none","-webkit-transition-property":"none","-o-transition-property":"none"})},sw_on_transitions:function(){this.$main_block.css({"transition-property":"","-moz-transition-property":"","-webkit-transition-property":"","-o-transition-property":""}),this.$element.css({"transition-property":"","-moz-transition-property":"","-webkit-transition-property":"","-o-transition-property":""})},is_opened:function(){return t("body").hasClass("menu-bar-opened")}},t.fn[s]=function(i){var e=[].slice.call(arguments,1);return this.each(function(){t.data(this,"plugin_"+s)?t.isFunction(n.prototype[i])&&t.data(this,"plugin_"+s)[i].apply(t.data(this,"plugin_"+s),e):t.data(this,"plugin_"+s,new n(this,i))})}}(jQuery,window,document),function(t,i,e,o){function n(i,e){this.element=i,this.$element=t(i),this.options=t.extend({},a,e),this._name=s,this.init()}var s="mental_menu",a={easing:"easeOutBack",speed:"slow",accordion_type:!0};n.prototype={init:function(){var i=this;this.options.accordion_type=this.$element.find(">div").hasClass("menu-accordion-type")||this.$element.find(">div >ul").hasClass("menu-accordion-type"),this.$element.find("li:has(ul)").each(function(){t(this).append('<a class="submenu-toggler" href="#"><i class="fa fa-plus"></i></a>')}),this.$element.find(".submenu-toggler").click(function(e){e.preventDefault(),i.toggle_sub(t(this).closest("ul"),t(this).siblings("ul"),t(this).find("i.fa"))})},toggle_sub:function(t,i,e){e.hasClass("fa-plus")?e.removeClass("fa-plus").addClass("fa-minus"):e.removeClass("fa-minus").addClass("fa-plus"),i.slideToggle(this.options.speed,this.options.easing),this.options.accordion_type&&t.find("> li > ul").not(i).slideUp(this.options.speed,this.options.easing).closest("li").find("> a > i.fa").removeClass("fa-minus").addClass("fa-plus")}},t.fn[s]=function(i){var e=[].slice.call(arguments,1);return this.each(function(){t.data(this,"plugin_"+s)?t.isFunction(n.prototype[i])&&t.data(this,"plugin_"+s)[i].apply(t.data(this,"plugin_"+s),e):t.data(this,"plugin_"+s,new n(this,i))})}}(jQuery,window,document),function(t,i,e,o){function n(i,e){this._name=a,this.element=i,this.$element=t(i);var o=s(this.$element.data("options"));this.options=t.extend({},l,e),this.options=t.extend({},this.options,o),this.init()}function s(t){if(t===o)return[];var i=[];return t.split(";").forEach(function(t){var e=t.split(":");2==e.length&&(i[e[0].trim()]=e[1].trim())}),i}var a="mental_gallery",l={ajaxurl:mental_vars.ajaxurl||"/wp-admin/admin-ajax.php",category:"",type:"expanding",ajax_action:"mental_gallery",screen_sm:768,screen_md:992,screen_lg:1200,debug:!1};n.prototype={init:function(){var i=this;return t.fn.isotope?(this.$gallery=this.$element,this.id=this.$gallery.attr("id"),this.$last_clicked_item=t(),this.$gl_items=i.$gallery.find(".gl-item:not(.gl-preview):visible"),this.items_per_page=this.$gallery.data("items-per-page"),this.columns=this.calc_columns(),this.$gallery_filters=t('.gallery-filters[data-gallery-id="'+this.id+'"]'),this.$load_more=t('a[data-gallery-id="'+this.id+'"]'),this.$load_more_onscroll=this.$gallery.next(".lmb-on-scroll"),"expanding"==this.options.type?(this.init_isotope_preview(),this.init_preview()):this.init_isotope_masonry(),this.init_filters(),this.init_load_more(),void t("#menu-bar").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i.$gallery.isotope("layout")})):(console.log("Mental_gallery: Isotope is not loaded"),!1)},init_isotope_preview:function(){this.debug("init_isotope_preview"),this.refresh_items_order_data(),this.$gallery.isotope({itemSelector:".gl-item",resizable:!1,layoutMode:"masonry",sortBy:"custom",getSortData:{custom:function(i){return t(i).data("order")}}}),this.process_images_load()},init_isotope_masonry:function(){this.debug("init_isotope_masonry"),this.$gallery.isotope({itemSelector:".gl-item",resizable:!1,layoutMode:"masonry"}),this.process_images_load()},init_filters:function(){this.debug("init_filters");var i=this;this.$gallery_filters.on("click","> li > a",function(e){e.preventDefault(),i.remove_preview(),i.$gl_items=i.$gallery.find(".gl-item:not(.gl-preview):visible"),i.$last_clicked_item=t(),i.$gallery_filters.find("> li").removeClass("active"),t(this).closest("li").addClass("active");var o=t(this).attr("data-filter");i.$gallery.isotope({filter:function(){return"*"==o?!0:-1!=t.inArray(o,t(this).data("category").toString().split(/[\s,]+/))}})})},init_load_more:function(){this.debug("init_load_more");var e=this;this.$load_more.on("click",function(i){t(this);i.preventDefault(),e.remove_preview(),e.load_more(e.$load_more.closest(".load-more-block"))}),this.$load_more_onscroll.length&&t(i).scroll(function(){if(!e.$load_more_onscroll.hasClass("loading")){var o=t(i).scrollTop()+t(i).height();o>e.$load_more_onscroll.offset().top&&e.load_more(e.$load_more_onscroll)}})},init_preview:function(){this.debug("init_preview");var e=this;this.$gallery.on("click",".gl-item:not(.gl-preview) > a",function(i){i.preventDefault();var o=t(this).parent();e.remove_preview(),e.$last_clicked_item.is(o)?e.$last_clicked_item=t():e.show_preview(o)}),this.$gallery.on("click",".glp-close",function(i){i.preventDefault(),e.remove_preview(),e.$last_clicked_item=t()}),t(i).resize(function(){e.columns=e.calc_columns(),e.update_all_previews()})},init_intense_zoom_image:function(t){this.debug("init_intense_zoom_image"),Intense!=o&&t.find(".glp-zoom").each(function(){Intense(this)})},load_more:function(i){this.debug("load_more");var e=this;i.hasClass("no-more-items")||i.hasClass("loading")||(i.addClass("loading"),t.ajax({type:"POST",url:e.options.ajaxurl,data:{action:e.options.ajax_action,offset:e.$gallery.find(".gl-item:not(.gl-preview)").length,options:e.options},success:function(o){var n=t("<div>"+o+"</div>").find(".gl-item");e.$gallery.append(n),e.refresh_items_order_data(),e.$gallery.isotope("appended",n),0==n.length&&i.addClass("no-more-items"),e.process_images_load()},complete:function(){i.removeClass("loading")},error:function(t,i){console.log(i)}}))},calc_columns:function(){var t=i.innerWidth<this.options.screen_sm?1:i.innerWidth<this.options.screen_md?2:i.innerWidth<this.options.screen_lg?3:this.$gallery.hasClass("gl-cols-3")?3:this.$gallery.hasClass("gl-cols-4")?4:this.$gallery.hasClass("gl-cols-5")?5:4;return t},process_images_load:function(){var i=this;this.$gallery.find(".gl-loading img").one("load",function(){var e=t(this),o=new Image;o.src=e.attr("src"),o.onload=function(){var t=o.width/o.height;!isNaN(t)&&1>t&&e.addClass("img-vertical")},t(this).closest(".gl-loading").removeClass("gl-loading"),i.$gallery.isotope()}).each(function(){this.complete&&t(this).load()})},refresh_items_order_data:function(){this.$gl_items=this.$gallery.find(".gl-item:not(.gl-preview):visible").each(function(){t(this).attr("data-order",10*(t(this).index()+1))})},scroll_to_preview:function(e){setTimeout(function(){t("html, body").animate({scrollTop:e.offset().top-(i.innerHeight-e.outerHeight(!0))/2},500)},500)},remove_preview:function(){var t=this.$gallery.find("> .gl-preview");t.length&&this.$gallery.isotope("remove",t).isotope("layout")},show_preview:function(t){var i=this,e=t.siblings(":not(.gl-preview):visible").andSelf().index(t),o=this.insert_preview(t,e);this.set_arrow(e,o),setTimeout(function(){i.$gallery.isotope("layout")},10),this.scroll_to_preview(o),this.carousel_fix(o.find(".carousel")),this.video_audio_init(o),this.init_intense_zoom_image(o),this.$last_clicked_item=t},update_all_previews:function(){var i=this;this.$gallery.find("> .gl-preview").each(function(){i.update_preview(t(this))}),this.$gallery.isotope("updateSortData").isotope({sortBy:"custom"})},update_preview:function(t){var i=t.data("item_index"),e=this.get_preview_order(i);t.data("order",e),this.set_arrow(i,t)},get_preview_order:function(t){var i=Math.floor(t/this.columns),e=(i+1)*this.columns,o=this.$gallery.find("> .gl-item:not(.gl-preview):visible");e>o.length-1&&(e=o.length);var n=o.eq(e-1).data("order"),s=n+1;return s},insert_preview:function(e,o){var n=this,s=e.find(".gl-preview"),a=this.get_preview_order(o),l=t('<li class="gl-item gl-preview" data-category="'+e.data("category")+'" data-order="'+a+'">'+s.html()+"</li>");return l.find("img").css({"max-height":i.innerHeight-45+"px"}),l.data("item_index",o),this.$gallery.append(l.show()),this.$gallery.isotope("insert",l),l.find("img").one("load",function(){n.$gallery.isotope("layout")}),l},set_arrow:function(t,i){var e=Math.floor(t/this.columns),o=t-((e+1)*this.columns-this.columns);i.find(".glp-arrow").css({left:(o+1)*(100/this.columns)-100/this.columns/2+"%"})},carousel_fix:function(t){var i=t.attr("id")+"-a";t.attr("id",i),t.find(".carousel-control").attr("href","#"+i),t.find(".carousel-indicators li").attr("data-target","#"+i),t.carousel()},video_audio_init:function(i){var e={};"undefined"!=typeof _wpmejsSettings&&(e.pluginPath=_wpmejsSettings.pluginPath),t.fn.mediaelementplayer&&i.find(".wp-audio-shortcode-preview, .wp-video-shortcode-preview").mediaelementplayer(e),i.find(".wp-playlist-preview").each(function(){return t(this).addClass("wp-playlist"),new WPPlaylistView({el:this})})},debug:function(t){this.options.debug&&console.log(t)}},t.fn[a]=function(i){var e=[].slice.call(arguments,1);return this.each(function(){t.data(this,"plugin_"+a)?t.isFunction(n.prototype[i])&&t.data(this,"plugin_"+a)[i].apply(t.data(this,"plugin_"+a),e):t.data(this,"plugin_"+a,new n(this,i))})}}(jQuery,window,document),function(t,i,e,o){function n(i,e){this.element=i,this.$element=t(i);var o=s(this.$element.data("options"));this.options=t.extend({},l,e),this.options=t.extend({},this.options,o),this._name=a,this.init()}function s(t){if(t===o)return[];var i=[];return t.split(";").forEach(function(t){var e=t.split(":");2==e.length&&(i[e[0].trim()]=e[1].trim())}),i}var a="mental_blog",l={ajaxurl:mental_vars.ajaxurl||"/wp-admin/admin-ajax.php",type:"vertical"};n.prototype={init:function(){var i=this;return t.fn.isotope?("full"==this.options.type&&(this.options.type="vertical"),this.id=this.$element.attr("id"),this.$load_more_onscroll=this.$element.next(".lmb-on-scroll"),this.$load_more=t('a[data-blog-id="'+this.id+'"]'),this.$element.isotope({itemSelector:".isotope-item",resizable:!1,layoutMode:this.options.type,vertical:{horizontalAlignment:.5}}),this.init_load_more(),this.process_images_load(),void setTimeout(function(){i.$element.isotope("layout")},500)):(console.log("Mental_blog: Isotope is not loaded"),!1)},init_load_more:function(){var e=this;this.$load_more.on("click",function(t){t.preventDefault(),e.load_more(e.$load_more.closest(".load-more-block"))}),this.$load_more_onscroll.length&&t(i).scroll(function(){if(!e.$load_more_onscroll.hasClass("loading")){var o=t(i).scrollTop()+t(i).height();o>e.$load_more_onscroll.offset().top&&e.load_more(e.$load_more_onscroll)}})},load_more:function(i){var e=this;i.hasClass("no-more-items")||i.hasClass("loading")||(i.addClass("loading"),t.ajax({type:"POST",url:e.options.ajaxurl,data:{action:"mental_blog",offset:e.$element.find(".blog-item").length,options:e.options},success:function(o){var n=t("<div>"+o+"</div>").find(".blog-item"),s=e.$element.append(n).isotope("appended",n);s.imagesLoaded().progress(function(){s.isotope("layout")}),0==n.length&&i.addClass("no-more-items"),e.process_images_load(),e.carousel_init(n),e.video_audio_init(n)},complete:function(){i.removeClass("loading")},error:function(t,i){console.log(i)}}))},process_images_load:function(){var i=this;this.$element.find("img").one("load",function(){i.$element.isotope()}).each(function(){this.complete&&t(this).load()})},carousel_init:function(t){t.find(".carousel").carousel()},video_audio_init:function(i){var e={};"undefined"!=typeof _wpmejsSettings&&(e.pluginPath=_wpmejsSettings.pluginPath),t.fn.mediaelementplayer&&i.find(".wp-audio-shortcode, .wp-video-shortcode").mediaelementplayer(e),"undefined"!=typeof WPPlaylistView&&i.find(".wp-playlist").each(function(){return new WPPlaylistView({el:this})}),this.$element.isotope("layout")}},t.fn[a]=function(i){var e=[].slice.call(arguments,1);return this.each(function(){t.data(this,"plugin_"+a)?t.isFunction(n.prototype[i])&&t.data(this,"plugin_"+a)[i].apply(t.data(this,"plugin_"+a),e):t.data(this,"plugin_"+a,new n(this,i))})}}(jQuery,window,document),(window.onpopstate=function(){var t,i=/\+/g,e=/([^&=]+)=?([^&]*)/g,o=function(t){return decodeURIComponent(t.replace(i," "))},n=window.location.search.substring(1);for(window.urlParams={};t=e.exec(n);)urlParams[o(t[1])]=o(t[2])})()}(jQuery);