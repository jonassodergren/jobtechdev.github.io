if (self.CavalryLogger) { CavalryLogger.start_js(["BKJbg"]); }

__d("StickerConstants",[],(function a(b,c,d,e,f,g){f.exports={MOBILE_LIKE_STICKER_PACK_ID:"227877430692340",GRAVEYARD_PACK_ID:"604597256247273",LIKE_STICKER_ID:"227878347358915",HOT_LIKE_SMALL_STICKER_ID:"369239263222822",HOT_LIKE_MEDIUM_STICKER_ID:"369239343222814",HOT_LIKE_LARGE_STICKER_ID:"369239383222810",MRU_STICKER_PACK:"599061016853145",SEARCH_PACK_ID:"680229632032514",OZ_PACK_ID:"1456625217993235",SPRITE_PADDING:"24",PayloadSource:{VIEW_ACTION:"view-action"},EMOTICON_PACK_ID:"1471127876485636",DEFAULT_FRAME_RATE:83,TRAY_SIZE:64,THREAD_SIZE:120};}),null);
__d("TranslationTrigger",[],(function a(b,c,d,e,f,g){f.exports={SEE_TRANSLATION:"see_translation",AUTO_TRANSLATION:"auto_translation",SEE_CONVERSION:"see_conversion",TRANSLATE_ALL:"translate_all",LOGGED_OUT_AUTO_TRANSLATION:"logged_out_auto_translation",NONE:"none"};}),null);
__d('CenteredContainer.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=(this.props.vertical?"_3bwv":'')+(this.props.horizontal?' '+"_3bww":''),n=c('React').Children.map(this.props.children,function(p){return c('React').createElement('div',{className:"_3bwx"},p);}),o=c('joinClasses')(this.props.className,this.props.fullHeight?"_5bpf":'');return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:o}),c('React').createElement('div',{className:m},c('React').createElement('div',{className:"_3bwy"},n)));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fullHeight:k.bool,vertical:k.bool,horizontal:k.bool};l.defaultProps={fullHeight:false,vertical:false,horizontal:true};f.exports=l;}),null);
__d('Newline.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return c('React').createElement('br',this.props);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('Text.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return c('React').createElement('span',this.props,this.props.children);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('BaseTextWithEntities.react',['Newline.react','React','ReactFragment','Text.react','UnicodeUtils'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;function k(o,p){return o.offset-p.offset;}var l=/(\r\n|[\r\n])/,m=j.shape({length:j.number.isRequired,offset:j.number.isRequired});h=babelHelpers.inherits(n,c('React').Component);i=h&&h.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=i.constructor).call.apply(o,[this].concat(r)),this.$BaseTextWithEntities1=function(){return [].concat(this.props.ranges,this.props.aggregatedRanges,this.props.imageRanges,this.props.metaRanges,this.props.inlineStyleRanges).filter(function(t){return t!=null;}).sort(k);}.bind(this),this.$BaseTextWithEntities2=function(t){var u=t.split(l),v={};for(var w=0;w<u.length;w++){var x=u[w];if(x){var y='text'+w;if(w%2===1){v[y]=c('React').createElement(c('Newline.react'),null);}else v[y]=this.props.textRenderer(u[w]);}}return c('ReactFragment').create(v);}.bind(this),p;}n.prototype.render=function(){var o=0,p=this.props.text,q=this.$BaseTextWithEntities1(),r={},s=q.length;for(var t=0,u=s;t<u;t++){var v=q[t];if(v.offset<o)continue;if(v.offset>o)r['text'+t]=this.$BaseTextWithEntities2(c('UnicodeUtils').substring(p,o,v.offset));var w=c('UnicodeUtils').substr(p,v.offset,v.length);r['range'+t]=this.props.rangeRenderer(w,v);o=v.offset+v.length;}if(p.length>o)r.end=this.$BaseTextWithEntities2(c('UnicodeUtils').substr(p,o));return c('React').createElement(c('Text.react'),{className:this.props.className,style:this.props.style},c('ReactFragment').create(r));};n.propTypes={aggregatedRanges:j.array,imageRanges:j.array,inlineStyleRanges:j.array,metaRanges:j.array,rangeRenderer:j.func.isRequired,ranges:j.arrayOf(m),text:j.string.isRequired,textRenderer:j.func.isRequired};f.exports=n;}),null);
__d('BaseTextWithDecoration.react',['React','ReactFragment'],(function a(b,c,d,e,f,g){'use strict';var h,i;function j(l,m,n,o){var p=l[m];if(!p){o.push(n);return;}p(n,function(q){o.push(q);},function(q){j(l,m+1,q,o);});}h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){var l=this.props,m=l.decorators,n=l.text,o=[],p={};j(m,0,n,o);o.forEach(function(q,r){p['i'+r]=q;});return c('React').createElement('span',null,c('ReactFragment').create(p));};function k(){h.apply(this,arguments);}f.exports=k;}),null);
__d('AbstractFBEmoji.react',['cx','Image.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=function j(k){var l=k.children,m=k.size,n=k.src,o=k.title;return c('React').createElement('span',{className:"_47e3 _5mfr",title:o},c('React').createElement(c('Image.react'),{height:m,src:n,role:'presentation',width:m}),c('React').createElement('span',{'aria-hidden':!!o||null,className:"_7oe"},l));};f.exports=i;}),null);
__d('FBEmoji.react',['cx','AbstractFBEmoji.react','EmojiImageURL','FBEmojiUtils','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=function j(k){var l=k.codepoints,m=k.size,n=c('FBEmojiUtils').getSupportedKey(l),o=l.join('');if(!n)return c('React').createElement('span',{className:"_4ay8"+(m===16?' '+"_3kkw":'')+(m===18?' '+"_366d":'')+(m===20?' '+"_366e":'')+(m===24?' '+"_48cb":'')+(m===28?' '+"_5-0n":'')+(m===30?' '+"_5-0o":'')+(m===32?' '+"_5-0p":'')+(m===36?' '+"_2oah":'')},o);return c('React').createElement(c('AbstractFBEmoji.react'),{size:m,src:c('EmojiImageURL').getFBEmojiURL(n,m)},o);};f.exports=i;}),null);
__d('FBEmoticon.react',['fbt','AbstractFBEmoji.react','EmojiImageURL','EmoticonsList','React','SupportedFBEmoji'],(function a(b,c,d,e,f,g,h){'use strict';var i=function j(k){var l=k.emoticon,m=k.name,n=k.size,o=c('EmoticonsList').emoji[m];if(!o)return c('React').createElement('span',null,l);var p=h._("{emoticonName} emoticon",[h.param('emoticonName',m)]);return c('React').createElement(c('AbstractFBEmoji.react'),{size:n,src:c('SupportedFBEmoji')[o]?c('EmojiImageURL').getFBEmojiURL(o,n):c('EmojiImageURL').getFBEmojiExtendedURL(o,n),title:p},l);};f.exports=i;}),null);
__d('iterateEmoji',['EmojiRenderer'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k){var l=0,m=c('EmojiRenderer').parse(i);m.forEach(function(n){var o=n.offset;if(o>l)k(i.substr(l,o-l));j(n.emoji);l=o+n.length;});k(i.substr(l,i.length-l));}f.exports=h;}),null);
__d('iterateEmoticons',['EmoticonsList'],(function a(b,c,d,e,f,g){function h(i,j,k){var l,m,n,o;while(i){var p=c('EmoticonsList').regexp.exec(i);if(p){l=p.index+p[1].length;m=i.substr(0,l);n=p[2];o=i.substr(l+n.length);k(m);j(n,c('EmoticonsList').emotes[n]);i=o;}else break;}k(i);}f.exports=h;}),null);
__d("memoizeWithArgs",[],(function a(b,c,d,e,f,g){var h=Object.prototype.hasOwnProperty;function i(j,k){var l=void 0;return function(){if(!l)l={};var m=k.apply(this,arguments);if(!h.call(l,m))l[m]=j.apply(this,arguments);return l[m];};}f.exports=i;}),null);
__d('TextWithEmoticons.react',['BaseTextWithDecoration.react','FBEmoji.react','FBEmoticon.react','FbtResultBase','React','iterateEmoji','iterateEmoticons','memoizeWithArgs'],(function a(b,c,d,e,f,g){'use strict';var h,i;function j(p,q){return c('React').createElement(c('FBEmoji.react'),{codepoints:p,size:q});}function k(p,q,r){return c('React').createElement(c('FBEmoticon.react'),{emoticon:p,name:q,size:r});}function l(p){return function(q,r,s){c('iterateEmoji')(q,function(t){return r(j(t,p));},s);};}function m(p){return function(q,r,s){c('iterateEmoticons')(q,function(t,u){return r(k(t,u,p));},s);};}var n=c('memoizeWithArgs')(function(p,q,r){if(p&&q){return [l(r),m(r)];}else if(q){return [m(r)];}else return [l(r)];},function(p,q,r){return p.toString()+'_'+q.toString()+'_'+r;});h=babelHelpers.inherits(o,c('React').Component);i=h&&h.prototype;o.prototype.shouldComponentUpdate=function(p){return p.text!==this.props.text;};o.prototype.render=function(){var p=this.props.text;if(p instanceof c('FbtResultBase'))return c('React').createElement('span',null,p);return c('React').createElement(c('BaseTextWithDecoration.react'),babelHelpers['extends']({},this.props,{decorators:n(this.props.renderEmoji,this.props.renderEmoticons,this.props.size)}));};function o(){h.apply(this,arguments);}o.defaultProps={renderEmoji:true,renderEmoticons:true,size:16};f.exports=o;}),null);
__d('TextWithEntities.react',['BaseTextWithEntities.react','Link.react','React','TextWithEmoticons.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;function j(l){return l.replace(/<3\b|&hearts;/g,'\u2665');}h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$TextWithEntities1=function(q){if(this.props.renderEmoticons||this.props.renderEmoji){return c('React').createElement(c('TextWithEmoticons.react'),{text:q,renderEmoticons:this.props.renderEmoticons,renderEmoji:this.props.renderEmoji});}else return j(q);}.bind(this),this.$TextWithEntities2=function(q,r){if(this.props.interpolator){return this.props.interpolator(q,r);}else if(r.entity){return c('React').createElement(c('Link.react'),{href:r.entity},q);}else return q;}.bind(this),m;}k.prototype.render=function(){return c('React').createElement(c('BaseTextWithEntities.react'),babelHelpers['extends']({},this.props,{textRenderer:this.$TextWithEntities1,rangeRenderer:this.$TextWithEntities2,ranges:this.props.ranges,imageRanges:this.props.imageRanges,aggregatedRanges:this.props.aggregatedRanges,metaRanges:this.props.metaRanges,text:this.props.text}));};f.exports=k;}),null);
__d('XUIDialogOkayButton.react',['cx','fbt','React','XUIDialogButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';return c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_2z1w"),action:this.props.action,label:i._("OK")}));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={action:l.oneOf(['confirm','cancel','button']).isRequired};f.exports=m;}),null);
__d('LayerAutoFocusReact',['focusWithinLayer'],(function a(b,c,d,e,f,g){'use strict';function h(i){this._layer=i;this._subscription=null;}h.prototype.enable=function(){if(this._layer.containsReactComponent)this._subscription=this._layer.subscribe('reactshow',this._focus.bind(this));};h.prototype.disable=function(){if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._focus=function(){var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;}),null);
__d('LayerDestroyOnHide',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';var i=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe('hide',function(){setTimeout(i,0);});};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('LayerFadeOnHide',['CSSFade','Layer','UserAgent_DEPRECATED','emptyFunction','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';if(c('UserAgent_DEPRECATED').ie()<9)return;this._subscription=this._layer.subscribe('starthide',this._handleStartHide.bind(this));};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._getDuration=function(){'use strict';return 150;};h.prototype._handleStartHide=function(){'use strict';var i=true,j=c('Layer').subscribe('show',function(){j.unsubscribe();i=false;});c('setTimeoutAcrossTransitions')(function(){j.unsubscribe();j=null;var k=function(){this._layer.finishHide();}.bind(this);if(i){this._animate(k);}else k();}.bind(this),0);return false;};h.prototype._animate=function(i){'use strict';var j=this._layer.getRoot();c('CSSFade').hide(j,{callback:function k(){i();},duration:this._getDuration()/1000});};h.forDuration=function(i){var j,k;'use strict';j=babelHelpers.inherits(l,h);k=j&&j.prototype;function l(){j.apply(this,arguments);}l.prototype._getDuration=c('emptyFunction').thatReturns(i);return l;};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('SimpleXUIDialog',['cx','DialogX','LayerAutoFocusReact','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','LayerRefocusOnHide','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','uniqueID'],(function a(b,c,d,e,f,g,h){'use strict';var i=445,j={show:function k(l,m,n,o){var p=c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',use:'confirm'});return this.showEx(l,m,p,n,o);},showConfirm:function k(l,m,n,o){var p=false,q=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:function s(){p=false;}}),c('React').createElement(c('XUIDialogOkayButton.react'),{action:'cancel',className:o&&o.autofocusConfirm?"autofocus":'',use:'confirm',onClick:function s(){p=true;}}));function r(){n(p);}return this.showEx(l,m,q,r,o);},showEx:function k(l,m,n,o,p){p=p||{};var q=[c('LayerDestroyOnHide'),c('LayerFadeOnShow'),c('LayerFadeOnHide'),c('LayerHideOnEscape'),c('LayerRefocusOnHide')];if(p.hideOnBlur!==false)q.push(c('LayerHideOnBlur'));if(p.useReactFocusBehavior)q.push(c('LayerAutoFocusReact'));var r={width:p.width||i,xui:true,addedBehaviors:q,causalElement:p.causalElement};if(m){var s=c('uniqueID')();r.titleID=s;m=c('React').createElement(c('XUIDialogTitle.react'),{showCloseButton:p.showCloseButton!==false,id:s},m);}if(n)n=c('React').createElement(c('XUIDialogFooter.react'),{'data-testid':'simple_xui_dialog_footer',leftContent:p.leftContent},n);var t=c('React').createElement('div',null,m,c('React').createElement(c('XUIDialogBody.react'),null,l),n),u=new (c('DialogX'))(r,t);if(o)u.subscribe('hide',o);u.show();return u;}};f.exports=j;}),null);
__d('XUIGrayText.react',['cx','React','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props,n=m.shade,o=babelHelpers.objectWithoutProperties(m,['shade']),p=(n==='light'?"_50f8":'')+(n==='medium'?' '+"_c24":'')+(n==='dark'?' '+"_50f9":'');return c('React').createElement(c('XUIText.react'),babelHelpers['extends']({},o,{className:c('joinClasses')(this.props.className,p)}),this.props.children);};function l(){'use strict';i.apply(this,arguments);}l.propTypes={shade:k.oneOf(['light','medium','dark'])};l.defaultProps={shade:'light'};f.exports=l;}),null);
__d('ProvideTranslationDialog.react',['cx','ContentTranslationStrings','Layout.react','React','XUIGrayText.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('Layout.react').Column,l=c('Layout.react').FillColumn,m=c('React').PropTypes;i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;n.prototype.render=function(){var o=this.props,p=o.onTranslationTextChange,q=o.defaultText,r=o.children;return c('React').createElement('div',null,c('React').createElement(c('Layout.react'),null,c('React').createElement(k,{className:"_1isa"},c('React').createElement(c('XUIGrayText.react'),{style:{verticalAlign:'-10px'},size:'small',shade:'medium',weight:'bold'},c('ContentTranslationStrings').ORIGINAL_TEXT)),c('React').createElement(l,null,c('React').createElement(c('XUIGrayText.react'),{display:'block',size:'small'},r))),c('React').createElement(c('Layout.react'),{className:"_2pid"},c('React').createElement(k,{className:"_1isa"},c('React').createElement(c('XUIGrayText.react'),{className:"_2pir",size:'small',shade:'medium',weight:'bold'},c('ContentTranslationStrings').YOUR_TRANSLATION)),c('React').createElement(l,null,c('React').createElement('textarea',{className:"_5d_f",defaultValue:q,onChange:p}))));};function n(){i.apply(this,arguments);}n.propTypes={onTranslationTextChange:m.func,defaultText:m.string};f.exports=n;}),null);
__d('MessengerEnvironment',['CurrentEnvironment'],(function a(b,c,d,e,f,g){'use strict';var h=babelHelpers['extends']({},c('CurrentEnvironment'),{messengerui:false,setMessengerUI:function i(j){this.messengerui=j;}});f.exports=h;}),null);
__d('Badge.react',['BadgeHelper','React'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){'use strict';var l=c('BadgeHelper').getAlt(this.props.type),m=l?c('React').createElement('span',{className:'accessible_elem'},l):null;return c('React').createElement('span',{className:c('BadgeHelper').getClasses(this.props.size,this.props.type)},m);};function k(){'use strict';h.apply(this,arguments);}k.propTypes={size:j.oneOf(c('BadgeHelper').sizes),type:j.oneOf(c('BadgeHelper').types)};k.defaultProps={size:'xsmall',type:'verified'};f.exports=k;}),null);
__d('Middot.react',['React'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){return c('React').createElement('span',babelHelpers['extends']({},this.props,{role:'presentation','aria-hidden':true}),' \u00B7 ');};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('cssVar',[],(function a(b,c,d,e,f,g){function h(i){throw new Error('cssVar'+'("'+i+'"): Unexpected class transformation.');}f.exports=h;}),18);
__d('ReactComponentWithPureRenderMixin',['shallowCompare'],(function a(b,c,d,e,f,g){'use strict';var h={shouldComponentUpdate:function i(j,k){return c('shallowCompare')(this,j,k);}};f.exports=h;}),18);
__d('isValidUniqueID',[],(function a(b,c,d,e,f,g){function h(i){return i!==null&&i!==undefined&&i!==''&&(typeof i==='string'||typeof i==='number');}f.exports=h;}),null);
__d('SearchableEntry',['invariant','FbtResultBase','HTML','isValidUniqueID'],(function a(b,c,d,e,f,g,h){function i(k){if(!k){return '';}else if(typeof k==='string'){return k;}else if(k instanceof c('FbtResultBase')){return k.toString();}else if(typeof k==='object'){var l=c('HTML').replaceJSONWrapper(k);if(c('HTML').isHTML(l)){var m=l.getRootNode();return m.textContent||m.innerText||'';}else return '';}else return '';}function j(k){'use strict';c('isValidUniqueID')(k.uniqueID)||h(0);this.$SearchableEntry8=k.uniqueID+'';if(k.title instanceof c('FbtResultBase'))k.title=k.title.toString();k.title!=null&&typeof k.title==='string'||h(0);this.$SearchableEntry6=k.title;this.$SearchableEntry3=k.order||0;this.$SearchableEntry5=i(k.subtitle);this.$SearchableEntry2=k.keywordString||'';this.$SearchableEntry4=k.photo||'';this.$SearchableEntry9=k.uri||'';this.$SearchableEntry7=k.type||'';var l=k.auxiliaryData||{};this.$SearchableEntry1=l;}j.prototype.getUniqueID=function(){'use strict';return this.$SearchableEntry8;};j.prototype.getOrder=function(){'use strict';return this.$SearchableEntry3;};j.prototype.getTitle=function(){'use strict';return this.$SearchableEntry6;};j.prototype.getSubtitle=function(){'use strict';return this.$SearchableEntry5;};j.prototype.getKeywordString=function(){'use strict';return this.$SearchableEntry2;};j.prototype.getPhoto=function(){'use strict';return this.$SearchableEntry4;};j.prototype.getURI=function(){'use strict';return this.$SearchableEntry9;};j.prototype.getType=function(){'use strict';return this.$SearchableEntry7;};j.prototype.getAuxiliaryData=function(){'use strict';return this.$SearchableEntry1;};j.prototype.toPlainObject=function(){'use strict';return {auxiliaryData:this.$SearchableEntry1,keywordString:this.$SearchableEntry2,order:this.$SearchableEntry3,photo:this.$SearchableEntry4,subtitle:this.$SearchableEntry5,title:this.$SearchableEntry6,type:this.$SearchableEntry7,uniqueID:this.$SearchableEntry8,uri:this.$SearchableEntry9};};f.exports=j;}),null);
__d("TypeaheadNavigation",[],(function a(b,c,d,e,f,g){var h={moveUp:function i(j,k,l){var m=j.indexOf(k),n=m==-1?j.length-1:m-1;l(n==-1?null:j[n]);},moveDown:function i(j,k,l){var m=j.indexOf(k)+1;l(m==j.length?null:j[m]);}};f.exports=h;}),null);
__d("XTranslationCrowdsourcingSubmitAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/language_technology\/translation\/submit\/",{content_id:{type:"FBID",required:true},source_dialect:{type:"String",required:true},target_dialect:{type:"String",required:true},translation:{type:"String",required:true}});}),null);