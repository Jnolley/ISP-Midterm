"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1630],{1630:(B,v,s)=>{s.r(v),s.d(v,{ion_menu:()=>A,ion_menu_button:()=>I,ion_menu_toggle:()=>L});var l=s(467),i=s(2468),x=s(700),_=s(6490),w=s(7906),h=s(2355),c=s(9803),a=s(6998),o=s(1531),d=s(9668),b=s(7791);s(5309),s(518);const C='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',A=class{constructor(e){(0,i.r)(this,e),this.ionWillOpen=(0,i.d)(this,"ionWillOpen",7),this.ionWillClose=(0,i.d)(this,"ionWillClose",7),this.ionDidOpen=(0,i.d)(this,"ionDidOpen",7),this.ionDidClose=(0,i.d)(this,"ionDidClose",7),this.ionMenuChange=(0,i.d)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=_.G.createBlocker({disableScroll:!0}),this.didLoad=!1,this.operationCancelled=!1,this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=t=>{const n=(0,a.o)(document);n&&!n.contains(this.el)||this.trapKeyboardFocus(t,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.contentId=void 0,this.menuId=void 0,this.type=void 0,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(e,t){const n=this.contentEl;n&&(void 0!==t&&n.classList.remove(`menu-content-${t}`),n.classList.add(`menu-content-${e}`),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=(0,h.p)(this.side),this.animation=void 0}swipeGestureChanged(){this.updateState()}connectedCallback(){var e=this;return(0,l.A)(function*(){typeof customElements<"u"&&null!=customElements&&(yield customElements.whenDefined("ion-menu")),void 0===e.type&&(e.type=o.c.get("menuType","overlay"));const t=void 0!==e.contentId?document.getElementById(e.contentId):null;null!==t?(e.el.contains(t)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),e.contentEl=t,t.classList.add("menu-content"),e.typeChanged(e.type,void 0),e.sideChanged(),c.m._register(e),e.menuChanged(),e.gesture=(yield Promise.resolve().then(s.bind(s,472))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:n=>e.canStart(n),onWillStart:()=>e.onWillStart(),onStart:()=>e.onStart(),onMove:n=>e.onMove(n),onEnd:n=>e.onEnd(n)}),e.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')})()}componentWillLoad(){this.inheritedAttributes=(0,h.i)(this.el)}componentDidLoad(){var e=this;return(0,l.A)(function*(){e.didLoad=!0,e.menuChanged(),e.updateState()})()}menuChanged(){this.didLoad&&this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}disconnectedCallback(){var e=this;return(0,l.A)(function*(){yield e.close(!1),e.blocker.destroy(),c.m._unregister(e),e.animation&&e.animation.destroy(),e.gesture&&(e.gesture.destroy(),e.gesture=void 0),e.animation=void 0,e.contentEl=void 0})()}onSplitPaneChanged(e){const{target:t}=e;t===this.el.closest("ion-split-pane")&&(this.isPaneVisible=e.detail.isPane(this.el),this.updateState())}onBackdropClick(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())}onKeydown(e){"Escape"===e.key&&this.close()}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(e=!0){return this.setOpen(!0,e)}close(e=!0){return this.setOpen(!1,e)}toggle(e=!0){return this.setOpen(!this._isOpen,e)}setOpen(e,t=!0){return c.m._setOpen(this,e,t)}focusFirstDescendant(){const{el:e}=this,t=e.querySelector(C);t?t.focus():e.focus()}focusLastDescendant(){const{el:e}=this,t=Array.from(e.querySelectorAll(C)),n=t.length>0?t[t.length-1]:null;n?n.focus():e.focus()}trapKeyboardFocus(e,t){const n=e.target;n&&(this.el.contains(n)?this.lastFocus=n:(this.focusFirstDescendant(),this.lastFocus===t.activeElement&&this.focusLastDescendant()))}_setOpen(e,t=!0){var n=this;return(0,l.A)(function*(){return!(!n._isActive()||n.isAnimating||e===n._isOpen||(n.beforeAnimation(e),yield n.loadAnimation(),yield n.startAnimation(e,t),n.operationCancelled?(n.operationCancelled=!1,1):(n.afterAnimation(e),0)))})()}loadAnimation(){var e=this;return(0,l.A)(function*(){const t=e.menuInnerEl.offsetWidth,n=(0,h.p)(e.side);if(t===e.width&&void 0!==e.animation&&n===e.isEndSide)return;e.width=t,e.isEndSide=n,e.animation&&(e.animation.destroy(),e.animation=void 0);const r=e.animation=yield c.m._createAnimation(e.type,e);o.c.getBoolean("animated",!0)||r.duration(0),r.fill("both")})()}startAnimation(e,t){var n=this;return(0,l.A)(function*(){const r=!e,m=(0,o.b)(n),p="ios"===m?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",u="ios"===m?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",f=n.animation.direction(r?"reverse":"normal").easing(r?u:p);t?yield f.play():f.play({sync:!0}),"reverse"===f.getDirection()&&f.direction("normal")})()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(e){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!c.m._getOpenSync()&&H(window,e.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,h.o)(!1,"isAnimating has to be true")}onMove(e){if(!this.isAnimating||!this.animation)return void(0,h.o)(!1,"isAnimating has to be true");const n=O(e.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-n:n)}onEnd(e){if(!this.isAnimating||!this.animation)return void(0,h.o)(!1,"isAnimating has to be true");const t=this._isOpen,n=this.isEndSide,r=O(e.deltaX,t,n),m=this.width,p=r/m,u=e.velocityX,f=m/2,z=u>=0&&(u>.2||e.deltaX>f),W=u<=0&&(u<-.2||e.deltaX<-f),g=t?n?z:W:n?W:z;let j=!t&&g;t&&!g&&(j=!0),this.lastOnEnd=e.currentTime;let E=g?.001:-.001;E+=(0,x.g)([0,0],[.4,0],[.6,1],[1,1],(0,h.l)(0,p<0?.01:p,.9999))[0]||0;const Q=this._isOpen?!g:g;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(j),{oneTimeCallback:!0}).progressEnd(Q?1:0,this._isOpen?1-E:E,300)}beforeAnimation(e){(0,h.o)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(M),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(S),this.contentEl&&(this.contentEl.classList.add(P),this.contentEl.setAttribute("aria-hidden","true")),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(e){var t;this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?(this.ionDidOpen.emit(),(null===(t=document.activeElement)||void 0===t?void 0:t.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.classList.remove(M),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(P),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(S),this.animation&&this.animation.stop(),this.ionDidClose.emit(),document.removeEventListener("focus",this.handleFocus,!0))}updateState(){const e=this._isActive();this.gesture&&this.gesture.enable(e&&this.swipeGesture),e||(this.isAnimating&&(this.operationCancelled=!0),this.afterAnimation(!1))}render(){const{type:e,disabled:t,isPaneVisible:n,inheritedAttributes:r,side:m}=this,p=(0,o.b)(this);return(0,i.h)(i.H,{key:"c6bf01fd87e31cda09c0c35900cb01ea19d61781",onKeyDown:(0,w.shouldUseCloseWatcher)()?null:this.onKeydown,role:"navigation","aria-label":r["aria-label"]||"menu",class:{[p]:!0,[`menu-type-${e}`]:!0,"menu-enabled":!t,[`menu-side-${m}`]:!0,"menu-pane-visible":n}},(0,i.h)("div",{key:"6d818a470a74c11c10554d45d8586436a51f961e",class:"menu-inner",part:"container",ref:u=>this.menuInnerEl=u},(0,i.h)("slot",{key:"3512e444ec6c6bf2a719b1dd713be9a7652f77c9"})),(0,i.h)("ion-backdrop",{key:"618a5316462406fa47929e4dcd5a8e8c9057a418",ref:u=>this.backdropEl=u,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return(0,i.f)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},O=(e,t,n)=>Math.max(0,t!==n?-e:e),H=(e,t,n,r)=>n?t>=e.innerWidth-r:t<=r,M="show-menu",S="show-backdrop",P="menu-content-open";A.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{left:unset;right:unset;left:auto;right:0}}}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{left:unset;right:unset;left:0;right:auto}}}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{left:unset;right:unset;left:auto;right:0}}}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{left:unset;right:unset;left:0;right:auto}}}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const D=function(){var e=(0,l.A)(function*(t){const n=yield c.m.get(t);return!(!n||!(yield n.isActive()))});return function(n){return e.apply(this,arguments)}}(),I=class{constructor(e){var t=this;(0,i.r)(this,e),this.inheritedAttributes={},this.onClick=(0,l.A)(function*(){return c.m.toggle(t.menu)}),this.visible=!1,this.color=void 0,this.disabled=!1,this.menu=void 0,this.autoHide=!0,this.type="button"}componentWillLoad(){this.inheritedAttributes=(0,h.i)(this.el)}componentDidLoad(){this.visibilityChanged()}visibilityChanged(){var e=this;return(0,l.A)(function*(){e.visible=yield D(e.menu)})()}render(){const{color:e,disabled:t,inheritedAttributes:n}=this,r=(0,o.b)(this),m=o.c.get("menuIcon","ios"===r?b.u:b.v),p=this.autoHide&&!this.visible,u={type:this.type},f=n["aria-label"]||"menu";return(0,i.h)(i.H,{key:"2fd7130b8d28695162f7efebbd2131e5e9e4f330",onClick:this.onClick,"aria-disabled":t?"true":null,"aria-hidden":p?"true":null,class:(0,d.c)(e,{[r]:!0,button:!0,"menu-button-hidden":p,"menu-button-disabled":t,"in-toolbar":(0,d.h)("ion-toolbar",this.el),"in-toolbar-color":(0,d.h)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},(0,i.h)("button",Object.assign({key:"fa6b1fb9291df812b04065b4b0ebdfd28e5217eb"},u,{disabled:t,class:"button-native",part:"native","aria-label":f}),(0,i.h)("span",{key:"88106a08070ebff7457c581301efe649829aded2",class:"button-inner"},(0,i.h)("slot",{key:"e3edfb89e5705b2c08c66f3d3452457667de3657"},(0,i.h)("ion-icon",{key:"24678e9c3bb2f1f3db113a2ae0ec93e407a7de0c",part:"icon",icon:m,mode:r,lazy:!1,"aria-hidden":"true"}))),"md"===r&&(0,i.h)("ion-ripple-effect",{type:"unbounded"})))}get el(){return(0,i.f)(this)}};I.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const L=class{constructor(e){(0,i.r)(this,e),this.onClick=()=>c.m.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}visibilityChanged(){var e=this;return(0,l.A)(function*(){e.visible=yield D(e.menu)})()}render(){const e=(0,o.b)(this),t=this.autoHide&&!this.visible;return(0,i.h)(i.H,{key:"5b75baade530bf9e7ed9165a5db3e513975e22f2",onClick:this.onClick,"aria-hidden":t?"true":null,class:{[e]:!0,"menu-toggle-hidden":t}},(0,i.h)("slot",{key:"65dea458274b685125c22af54aa153cf4977113c"}))}};L.style=":host(.menu-toggle-hidden){display:none}"},9668:(B,v,s)=>{s.d(v,{c:()=>x,g:()=>w,h:()=>i,o:()=>c});var l=s(467);const i=(a,o)=>null!==o.closest(a),x=(a,o)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},o):o,w=a=>{const o={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(a).forEach(d=>o[d]=!0),o},h=/^[a-z][a-z0-9+\-.]*:/,c=function(){var a=(0,l.A)(function*(o,d,b,k){if(null!=o&&"#"!==o[0]&&!h.test(o)){const y=document.querySelector("ion-router");if(y)return null!=d&&d.preventDefault(),y.push(o,b,k)}return!1});return function(d,b,k,y){return a.apply(this,arguments)}}()}}]);