!function(n){window.isEditMode=!1,n(window).on("elementor/frontend/init",function(){window.isEditMode=elementorFrontend.isEditMode()})}(jQuery);!function(t,e,n){"use strict";function o(t,s){var e=this;this.el=t,this.options={},Object.keys(i).forEach(function(t){e.options[t]=i[t]}),Object.keys(s).forEach(function(t){e.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,n&&this.options.stringsElement instanceof n?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()}o.prototype={constructor:o,init:function(){var s=this;s.timeout=setTimeout(function(){for(var t=0;t<s.strings.length;++t)s.sequence[t]=t;s.shuffle&&(s.sequence=s.shuffleArray(s.sequence)),s.typewrite(s.strings[s.sequence[s.arrayPos]],s.strPos)},s.startDelay)},build:function(){var s=this;!0===this.showCursor&&(this.cursor=e.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement&&(this.strings=[],this.stringsElement.style.display="none",Array.prototype.slice.apply(this.stringsElement.children).forEach(function(t){s.strings.push(t.innerHTML)}));this.init()},typewrite:function(o,r){if(!0!==this.stop){var t=Math.round(70*Math.random())+this.typeSpeed,a=this;a.timeout=setTimeout(function(){var t=0,s=o.substr(r);if("^"===s.charAt(0)){var e=1;/^\^\d+/.test(s)&&(e+=(s=/\d+/.exec(s)[0]).length,t=parseInt(s)),o=o.substring(0,r)+o.substring(r+e)}if("html"===a.contentType){var i=o.substr(r).charAt(0);if("<"===i||"&"===i){var n;for(n="<"===i?">":";";o.substr(r+1).charAt(0)!==n&&(o.substr(r).charAt(0),!(++r+1>o.length)););r++,0}}a.timeout=setTimeout(function(){if(r===o.length){if(a.options.onStringTyped(a.arrayPos),a.arrayPos===a.strings.length-1&&(a.options.callback(),a.curLoop++,!1===a.loop||a.curLoop===a.loopCount))return;a.timeout=setTimeout(function(){a.backspace(o,r)},a.backDelay)}else{0===r&&a.options.preStringTyped(a.arrayPos);var t=o.substr(0,r+1);a.attr?a.el.setAttribute(a.attr,t):a.isInput?a.el.value=t:"html"===a.contentType?a.el.innerHTML=t:a.el.textContent=t,r++,a.typewrite(o,r)}},t)},t)}},backspace:function(s,e){if(!0!==this.stop){var t=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===s.substr(e).charAt(0)){for(;"<"!==s.substr(e-1).charAt(0)&&(s.substr(e).charAt(0),!(--e<0)););e--,0}var t=s.substr(0,e);i.attr?i.el.setAttribute(i.attr,t):i.isInput?i.el.value=t:"html"===i.contentType?i.el.innerHTML=t:i.el.textContent=t,e>i.stopNum?(e--,i.backspace(s,e)):e<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],e))},t)}},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)s=t[e=Math.floor(Math.random()*(i+1))],t[e]=t[i],t[i]=s;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},o.new=function(t,i){Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function(t){var s=t._typed,e="object"==typeof i&&i;s&&s.reset(),t._typed=s=new o(t,e),"string"==typeof i&&s[i]()})},n&&(n.fn.typed=function(i){return this.each(function(){var t=n(this),s=t.data("typed"),e="object"==typeof i&&i;s&&s.reset(),t.data("typed",s=new o(this,e)),"string"==typeof i&&s[i]()})}),t.Typed=o;var i={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery),function(i){"use strict";function s(t,s){this.element=i(t),this.settings=i.extend({},n,s),this._defaults=n,this._init()}var e="Morphext",n={animation:"bounceIn",separator:",",speed:2e3,complete:i.noop};s.prototype={_init:function(){var e=this;this.phrases=[],this.element.addClass("morphext"),i.each(this.element.text().split(this.settings.separator),function(t,s){e.phrases.push(i.trim(s))}),this.index=-1,this.animate(),this.start()},animate:function(){this.index=++this.index%this.phrases.length,this.element[0].innerHTML='<span class="animated '+this.settings.animation+'">'+this.phrases[this.index]+"</span>",i.isFunction(this.settings.complete)&&this.settings.complete.call(this)},start:function(){var t=this;this._interval=setInterval(function(){t.animate()},this.settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},i.fn[e]=function(t){return this.each(function(){i.data(this,"plugin_"+e)||i.data(this,"plugin_"+e,new s(this,t))})}}(jQuery);var FancyText=function(t,e){var a=t.find(".eael-fancy-text-container").eq(0),n=void 0!==a.data("fancy-text-id")?a.data("fancy-text-id"):"",o=void 0!==a.data("fancy-text")?a.data("fancy-text"):"",d=void 0!==a.data("fancy-text-transition-type")?a.data("fancy-text-transition-type"):"",i=void 0!==a.data("fancy-text-speed")?a.data("fancy-text-speed"):"",y=void 0!==a.data("fancy-text-delay")?a.data("fancy-text-delay"):"",c="yes"===a.data("fancy-text-cursor"),f=void 0!==a.data("fancy-text-loop")&&"yes"==a.data("fancy-text-loop");o=o.split("|"),"typing"==d&&e("#eael-fancy-text-"+n).typed({strings:o,typeSpeed:i,backSpeed:0,startDelay:300,backDelay:y,showCursor:c,loop:f}),"typing"!=d&&e("#eael-fancy-text-"+n).Morphext({animation:d,separator:", ",speed:y,complete:function(){}}),jQuery(window).on("load",function(){setTimeout(function(){e(".eael-fancy-text-strings",t).css("display","inline-block")},500)}),isEditMode&&setTimeout(function(){e(".eael-fancy-text-strings",t).css("display","inline-block")},800)};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-fancy-text.default",FancyText)});