import{c as $,a as f,h as g,d as W,r as z,i as M,o as O,e as R,n as ee,f as Y,g as k,l as j,j as I,k as S,w as b,m as ie,p as F,q as te,s as le,t as oe,u as K,v as re,x as Q,y as ae,_ as se,z as ue,P as N,N as ce,A as X,B as de,C as fe,D as V,E as H,F as L,G,H as ve}from"./index.27cb2d97.js";import{_ as he}from"./main_logo.6d5e88de.js";var me=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:n.value},W(d.default))}}),ge=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:n.value,role:"toolbar"},W(d.default))}});function pe(){const e=z(!M.value);return e.value===!1&&O(()=>{e.value=!0}),e}const ne=typeof ResizeObserver!="undefined",J=ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var E=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,o,t={width:-1,height:-1};function s(c){c===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),o){const{offsetWidth:c,offsetHeight:r}=o;(c!==t.width||r!==t.height)&&(t={width:c,height:r},d("resize",t))}}const{proxy:m}=k();if(ne===!0){let c;const r=p=>{o=m.$el.parentNode,o?(c=new ResizeObserver(s),c.observe(o),u()):p!==!0&&Y(()=>{r(!0)})};return O(()=>{r()}),R(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():o&&c.unobserve(o))}),ee}else{let p=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",s,j.passive),r=void 0)},y=function(){p(),o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",s,j.passive),u())};const c=pe();let r;return O(()=>{Y(()=>{o=m.$el,o&&y()})}),R(p),m.trigger=s,()=>{if(c.value===!0)return g("object",{style:J.style,tabindex:-1,type:"text/html",data:J.url,"aria-hidden":"true",onLoad:y})}}}}),ye=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=k(),t=I(F,S);if(t===S)return console.error("QHeader needs to be child of QLayout"),S;const s=z(parseInt(e.heightHint,10)),u=z(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||o.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?s.value:0;const l=s.value-t.scroll.value.position;return l>0?l:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),p=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),y=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),T=f(()=>{const l=t.rows.value.top,_={};return l[0]==="l"&&t.left.space===!0&&(_[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(_[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),_});function v(l,_){t.update("header",l,_)}function x(l,_){l.value!==_&&(l.value=_)}function w({height:l}){x(s,l),v("size",l)}function C(l){p.value===!0&&x(u,!0),n("focusin",l)}b(()=>e.modelValue,l=>{v("space",l),x(u,!0),t.animate()}),b(c,l=>{v("offset",l)}),b(()=>e.reveal,l=>{l===!1&&x(u,e.modelValue)}),b(u,l=>{t.animate(),n("reveal",l)}),b(t.scroll,l=>{e.reveal===!0&&x(u,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const q={};return t.instances.header=q,e.modelValue===!0&&v("size",s.value),v("space",e.modelValue),v("offset",c.value),R(()=>{t.instances.header===q&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const l=ie(d.default,[]);return e.elevated===!0&&l.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(g(E,{debounce:0,onResize:w})),g("header",{class:y.value,style:T.value,onFocusin:C},l)}}}),be=$({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=k(),o=I(F,S);if(o===S)return console.error("QPageContainer needs to be child of QLayout"),S;te(le,!0);const t=f(()=>{const s={};return o.header.space===!0&&(s.paddingTop=`${o.header.size}px`),o.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(s.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:t.value},W(d.default))}}),we=$({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=k(),t=I(F,S);if(t===S)return console.error("QFooter needs to be child of QLayout"),S;const s=z(parseInt(e.heightHint,10)),u=z(!0),m=z(M.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),r=f(()=>t.isContainer.value===!0?t.containerHeight.value:m.value),p=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return u.value===!0?s.value:0;const i=t.scroll.value.position+r.value+s.value-t.height.value;return i>0?i:0}),y=f(()=>e.modelValue!==!0||c.value===!0&&u.value!==!0),T=f(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),v=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),x=f(()=>{const i=t.rows.value.bottom,h={};return i[0]==="l"&&t.left.space===!0&&(h[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(h[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function w(i,h){t.update("footer",i,h)}function C(i,h){i.value!==h&&(i.value=h)}function q({height:i}){C(s,i),w("size",i)}function l(){if(e.reveal!==!0)return;const{direction:i,position:h,inflectionPoint:P}=t.scroll.value;C(u,i==="up"||h-P<100||t.height.value-r.value-h-s.value<300)}function _(i){T.value===!0&&C(u,!0),n("focusin",i)}b(()=>e.modelValue,i=>{w("space",i),C(u,!0),t.animate()}),b(p,i=>{w("offset",i)}),b(()=>e.reveal,i=>{i===!1&&C(u,e.modelValue)}),b(u,i=>{t.animate(),n("reveal",i)}),b([s,t.scroll,t.height],l),b(()=>o.screen.height,i=>{t.isContainer.value!==!0&&C(m,i)});const a={};return t.instances.footer=a,e.modelValue===!0&&w("size",s.value),w("space",e.modelValue),w("offset",p.value),R(()=>{t.instances.footer===a&&(t.instances.footer=void 0,w("size",0),w("offset",0),w("space",!1))}),()=>{const i=oe(d.default,[g(E,{debounce:0,onResize:q})]);return e.elevated===!0&&i.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:v.value,style:x.value,onFocusin:_},i)}}});const _e=[null,document,document.body,document.scrollingElement,document.documentElement];function xe(e,d){let n=re(d);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return _e.includes(n)?window:n}function ze(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Te(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let B;function D(){if(B!==void 0)return B;const e=document.createElement("p"),d=document.createElement("div");K(e,{width:"100%",height:"200px"}),K(d,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),d.appendChild(e),document.body.appendChild(d);const n=e.offsetWidth;d.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=d.clientWidth),d.remove(),B=n-o,B}const{passive:Z}=j,Ce=["both","horizontal","vertical"];var Se=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ce.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,s;b(()=>e.scrollTarget,()=>{c(),m()});function u(){o!==null&&o();const y=Math.max(0,ze(t)),T=Te(t),v={top:y-n.position.top,left:T-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const x=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:y,left:T},n.directionChanged=n.direction!==x,n.delta=v,n.directionChanged===!0&&(n.direction=x,n.inflectionPoint=n.position),d("scroll",{...n})}function m(){t=xe(s,e.scrollTarget),t.addEventListener("scroll",r,Z),r(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",r,Z),t=void 0)}function r(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[T,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{v(T),o=null}}}const{proxy:p}=k();return b(()=>p.$q.lang.rtl,u),O(()=>{s=p.$el.parentNode,m()}),R(()=>{o!==null&&o(),c()}),Object.assign(p,{trigger:r,getPosition:()=>n}),ee}}),Le=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=k(),t=z(null),s=z(o.screen.height),u=z(e.container===!0?0:o.screen.width),m=z({position:0,direction:"down",inflectionPoint:0}),c=z(0),r=z(M.value===!0?0:D()),p=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),T=f(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=f(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function x(a){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};m.value=i,e.onScroll!==void 0&&n("scroll",i)}}function w(a){const{height:i,width:h}=a;let P=!1;s.value!==i&&(P=!0,s.value=i,e.onScrollHeight!==void 0&&n("scrollHeight",i),q()),u.value!==h&&(P=!0,u.value=h),P===!0&&e.onResize!==void 0&&n("resize",a)}function C({height:a}){c.value!==a&&(c.value=a,q())}function q(){if(e.container===!0){const a=s.value>c.value?D():0;r.value!==a&&(r.value=a)}}let l=null;const _={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:s,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>u.value+r.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:m,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,i,h){_[a][i]=h}};if(te(F,_),D()>0){let h=function(){a=null,i.classList.remove("hide-scrollbar")},P=function(){if(a===null){if(i.scrollHeight>o.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(h,300)},A=function(U){a!==null&&U==="remove"&&(clearTimeout(a),h()),window[`${U}EventListener`]("resize",P)},a=null;const i=document.body;b(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),ae(()=>{A("remove")})}return()=>{const a=oe(d.default,[g(Se,{onScroll:x}),g(E,{onResize:w})]),i=g("div",{class:p.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},a);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:t},[g(E,{onResize:C}),g("div",{class:"absolute-full",style:T.value},[g("div",{class:"scroll",style:v.value},[i])])]):i}}});const $e=ue({name:"MainLayout",data(){return{menu_items:[{name:"Home",target:"/"}]}},computed:{copyright(){return"\xA9 "+new Date().getFullYear()+" All Right Reserved"}},methods:{notifyAccept(){N.set("cookiesAccepted","true",{secure:!window.location.href.includes("localhost"),expires:180})},navigateToDataAndPrivacy(){this.$router.push("/privacy")},hasAcceptedCookie(){if(!N.has("cookiesAccepted"))return!1;var e=N.get("cookiesAccepted");return typeof e=="undefined"?!1:e==="true"},cookiePopup(){var e=this;this.hasAcceptedCookie()||ce.create({color:"bg-grey-2",message:'By clicking \u201CAccept\u201D, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. Some of these may be "third party cookies".',timeout:0,actions:[{label:"View Privacy Policy",color:"primary",handler:e.navigateToDataAndPrivacy},{label:"Accept",color:"white",handler:e.notifyAccept}]})}},mounted(){this.cookiePopup()}}),qe={class:"row no-wrap justify-start items-center content-start"},Pe=L("img",{class:"main-logo",alt:"The Chalet Crew Logo",src:he},null,-1),Ve={class:"column no-wrap justify-start items-center content-start"},He=L("div",null," Chalet Vibes, Ski Tribe ",-1),ke=L("div",{class:"bottom-sub-toolbar fit column wrap justify-center items-center content-center text-white"},null,-1),Re={class:"footer row"},Qe={class:"left_footer col-grow"},Be={class:"right_footer"};function Oe(e,d,n,o,t,s){const u=X("router-view"),m=X("router-link");return de(),fe(Le,{view:"lHh Lpr lFf"},{default:V(()=>[H(ye,{elevated:"",class:"text-white"},{default:V(()=>[H(ge,{class:"main-toolbar column no-wrap justify-start items-center content-start"},{default:V(()=>[L("div",qe,[Pe,L("div",Ve,[H(me,null,{default:V(()=>[G(" The Chalet Crew ")]),_:1}),He])])]),_:1})]),_:1}),H(be,null,{default:V(()=>[H(u),ke]),_:1}),H(we,{elevated:"",class:"text-white"},{default:V(()=>[L("div",Re,[L("div",Qe,[H(m,{to:"/privacy",class:"toolbar"},{default:V(()=>[G("Privacy Policy")]),_:1})]),L("div",Be,ve(e.copyright),1)])]),_:1})]),_:1})}var Ae=se($e,[["render",Oe]]);export{Ae as default};
