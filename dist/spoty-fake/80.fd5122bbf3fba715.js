"use strict";(self.webpackChunkSpotyFake=self.webpackChunkSpotyFake||[]).push([[80],{80:(Tn,ut,c)=>{c.r(ut),c.d(ut,{SubscriptionModule:()=>xn});var g=c(808),o=c(223);function ge(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"div",1)(1,"h2"),o._uU(2,"Logo"),o.qZA(),o.TgZ(3,"div",2)(4,"h3",3),o._uU(5),o.qZA(),o.TgZ(6,"p",4),o._uU(7),o.qZA(),o._UZ(8,"i",5),o.TgZ(9,"h5",4),o._uU(10),o.qZA(),o.TgZ(11,"button",6),o.NdJ("click",function(){const s=o.CHM(t).$implicit;return o.oxw().sendSub(s)}),o._uU(12,"BUY"),o.qZA()()()}if(2&n){const t=e.$implicit;o.xp6(5),o.Oqu(t.subName),o.xp6(2),o.Oqu(t.subDescription),o.xp6(3),o.Oqu(t.subPrice)}}let _e=(()=>{class n{constructor(){this.subscriptions=[],this.subEmitter=new o.vpe}ngOnInit(){}sendSub(t){this.subEmitter.emit(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-card"]],inputs:{subscriptions:"subscriptions"},outputs:{subEmitter:"subEmitter"},decls:1,vars:1,consts:[["class","card","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"fa","fa-info-circle","text-warning"],[1,"btn","btn-primary",3,"click"]],template:function(t,r){1&t&&o.YNc(0,ge,13,3,"div",0),2&t&&o.Q6J("ngForOf",r.subscriptions)},directives:[g.sg],styles:[""]}),n})();var ye=c(76),ve=c(306),Ce=c(742),Ve=c(421),be=c(669),Ae=c(403),Me=c(268),De=c(810),Fe=c(4);let ct=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends ct{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Ne={provide:h,useExisting:(0,o.Gpc)(()=>F),multi:!0},Se=new o.OlP("CompositionEventMode");let F=(()=>{class n extends ct{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function we(){const n=(0,g.q)()?(0,g.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Se,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ne]),o.qOj]}),n})();const l=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function Vt(n){return null!=n}function bt(n){const e=(0,o.QGY)(n)?(0,ye.D)(n):n;return(0,o.CqO)(e),e}function At(n){let e={};return n.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function Mt(n,e){return e.map(t=>t(n))}function Dt(n){return n.map(e=>function xe(n){return!n.validate}(e)?e:t=>e.validate(t))}function R(n){return null!=n?function Et(n){if(!n)return null;const e=n.filter(Vt);return 0==e.length?null:function(t){return At(Mt(t,e))}}(Dt(n)):null}function q(n){return null!=n?function Ft(n){if(!n)return null;const e=n.filter(Vt);return 0==e.length?null:function(t){return function Ee(...n){const e=(0,be.jO)(n),{args:t,keys:r}=(0,Ce.D)(n),i=new ve.y(s=>{const{length:a}=t;if(!a)return void s.complete();const d=new Array(a);let C=a,b=a;for(let U=0;U<a;U++){let lt=!1;(0,Ve.Xf)(t[U]).subscribe((0,Ae.x)(s,Bn=>{lt||(lt=!0,b--),d[U]=Bn},()=>C--,void 0,()=>{(!C||!lt)&&(b||s.next(r?(0,De.n)(r,d):d),s.complete())}))}});return e?i.pipe((0,Me.Z)(e)):i}(Mt(t,e).map(bt)).pipe((0,Fe.U)(At))}}(Dt(n)):null}function Ot(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Nt(n){return n._rawValidators}function wt(n){return n._rawAsyncValidators}function j(n){return n?Array.isArray(n)?n:[n]:[]}function N(n,e){return Array.isArray(n)?n.includes(e):n===e}function St(n,e){const t=j(e);return j(n).forEach(i=>{N(t,i)||t.push(i)}),t}function Gt(n,e){return j(e).filter(t=>!N(n,t))}class xt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=R(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class m extends xt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class u extends xt{get formDirective(){return null}get path(){return null}}class Bt{constructor(e){this._cd=e}is(e){var t,r,i;return"submitted"===e?!!(null===(t=this._cd)||void 0===t?void 0:t.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[e])}}let Tt=(()=>{class n extends Bt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),kt=(()=>{class n extends Bt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function A(n,e){L(n,e),e.valueAccessor.writeValue(n.value),function qe(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&It(n,e)})}(n,e),function He(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function je(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&It(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Re(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function G(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),B(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function x(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function L(n,e){const t=Nt(n);null!==e.validator?n.setValidators(Ot(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=wt(n);null!==e.asyncValidator?n.setAsyncValidators(Ot(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();x(e._rawValidators,i),x(e._rawAsyncValidators,i)}function B(n,e){let t=!1;if(null!==n){if(null!==e.validator){const i=Nt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.validator);s.length!==i.length&&(t=!0,n.setValidators(s))}}if(null!==e.asyncValidator){const i=wt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.asyncValidator);s.length!==i.length&&(t=!0,n.setAsyncValidators(s))}}}const r=()=>{};return x(e._rawValidators,r),x(e._rawAsyncValidators,r),t}function It(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function z(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const M="VALID",T="INVALID",V="PENDING",D="DISABLED";function J(n){return(k(n)?n.validators:n)||null}function jt(n){return Array.isArray(n)?R(n):n||null}function Q(n,e){return(k(e)?e.asyncValidators:n)||null}function Ht(n){return Array.isArray(n)?q(n):n||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const Zt=n=>n instanceof y,X=n=>n instanceof P;function Lt(n){return Zt(n)?n.value:n.getRawValue()}function Yt(n,e){const t=X(n),r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function $t(n,e){X(n),n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})}class K{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=jt(this._rawValidators),this._composedAsyncValidatorFn=Ht(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===T}get pending(){return this.status==V}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=jt(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=Ht(e)}addValidators(e){this.setValidators(St(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(St(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Gt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Gt(e,this._rawAsyncValidators))}hasValidator(e){return N(this._rawValidators,e)}hasAsyncValidator(e){return N(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=M,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===V)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const t=bt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){return function $e(n,e,t){if(null==e||(Array.isArray(e)||(e=e.split(t)),Array.isArray(e)&&0===e.length))return null;let r=n;return e.forEach(i=>{r=X(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:(n=>n instanceof We)(r)&&r.at(i)||null}),r}(this,e,".")}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(T)?T:M}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){k(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class y extends K{constructor(e=null,t,r){super(J(t),Q(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(t)&&t.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){z(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){z(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class P extends K{constructor(e,t,r){super(J(t),Q(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){$t(this,e),Object.keys(e).forEach(r=>{Yt(this,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=Lt(t),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const t of Object.keys(this.controls)){const r=this.controls[t];if(this.contains(t)&&e(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class We extends K{constructor(e,t,r){super(J(t),Q(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[e]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){$t(this,e),e.forEach((r,i)=>{Yt(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>Lt(e))}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}let Xt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const et=new o.OlP("NgModelWithFormControlWarning"),on={provide:u,useExisting:(0,o.Gpc)(()=>I)};let I=(()=>{class n extends u{constructor(t,r){super(),this.validators=t,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(B(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return A(r,t),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){G(t.control||null,t,!1),z(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function qt(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(G(r||null,t),Zt(i)&&(A(i,t),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function Ut(n,e){L(n,e)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function Ze(n,e){return B(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){L(this.form,this),this._oldForm&&B(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([on]),o.qOj,o.TTD]}),n})();const ln={provide:m,useExisting:(0,o.Gpc)(()=>ot)};let ot=(()=>{class n extends m{constructor(t,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function $(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===F?t=s:function Ye(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||t||null}(0,s)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function Y(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function S(n,e){return[...e.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10),o.Y36(h,10),o.Y36(et,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([ln]),o.qOj,o.TTD]}),n})(),Mn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[te]]}),n})(),Dn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:et,useValue:t.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Mn]}),n})(),En=(()=>{class n{constructor(){this.userEmitter=new o.vpe}ngOnInit(){this.myForm=new P({firstName:new y,lastName:new y,email:new y,cardNumber:new y,cvv:new y})}onSubmit(){this.user=this.myForm.value,this.userEmitter.emit(this.user)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-form"]],outputs:{userEmitter:"userEmitter"},decls:27,vars:1,consts:[[3,"formGroup","ngSubmit"],[1,"row","mb-4"],[1,"col"],[1,"form-outline"],["for","firstName",1,"form-label"],["type","text","id","firstName","formControlName","firstName",1,"form-control"],["for","lastName",1,"form-label"],["type","text","id","lastName","formControlName","lastName",1,"form-control"],[1,"form-outline","mb-4"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email",1,"form-control"],["for","cardNumber",1,"form-label"],["type","text","id","cardNumber","formControlName","cardNumber",1,"form-control"],["for","cvv",1,"form-label"],["type","text","id","cvv","formControlName","cvv",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block","mb-4"]],template:function(t,r){1&t&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return r.onSubmit()}),o.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),o._uU(5,"First name"),o.qZA(),o._UZ(6,"input",5),o.qZA()(),o.TgZ(7,"div",2)(8,"div",3)(9,"label",6),o._uU(10,"Last name"),o.qZA(),o._UZ(11,"input",7),o.qZA()()(),o.TgZ(12,"div",8)(13,"label",9),o._uU(14,"Email address"),o.qZA(),o._UZ(15,"input",10),o.qZA(),o.TgZ(16,"div",8)(17,"label",11),o._uU(18,"Card number"),o.qZA(),o._UZ(19,"input",12),o.qZA(),o.TgZ(20,"div",8)(21,"label",13),o._uU(22,"CVV"),o.qZA(),o._UZ(23,"input",14),o.qZA(),o.TgZ(24,"div")(25,"button",15),o._uU(26,"Sign up"),o.qZA()()()),2&t&&o.Q6J("formGroup",r.myForm)},directives:[Xt,kt,I,F,Tt,ot],styles:[""]}),n})();function Fn(n,e){if(1&n){const t=o.EpF();o.TgZ(0,"div",3)(1,"div",4)(2,"app-form",5),o.NdJ("userEmitter",function(i){return o.CHM(t),o.oxw().getUser(i)}),o.qZA()(),o.TgZ(3,"div",0)(4,"h5"),o._uU(5,"Summary"),o.qZA(),o.TgZ(6,"ul",6)(7,"li",7),o._uU(8),o.qZA(),o.TgZ(9,"li",8),o._uU(10),o.qZA(),o.TgZ(11,"li",8),o._uU(12),o.qZA(),o.TgZ(13,"li",8),o._uU(14),o.qZA(),o.TgZ(15,"li",8),o._uU(16),o.qZA(),o.TgZ(17,"li",8),o._uU(18),o.qZA(),o.TgZ(19,"li",8),o._uU(20),o.qZA()()()()}if(2&n){const t=o.oxw();o.xp6(8),o.hij("Subscription ",null==t.subscription?null:t.subscription.subName,""),o.xp6(2),o.hij("$ ",null==t.subscription?null:t.subscription.subPrice," / month"),o.xp6(2),o.Oqu(null==t.user?null:t.user.firstName),o.xp6(2),o.Oqu(null==t.user?null:t.user.lastName),o.xp6(2),o.Oqu(null==t.user?null:t.user.email),o.xp6(2),o.Oqu(null==t.user?null:t.user.cardNumber),o.xp6(2),o.Oqu(null==t.user?null:t.user.cvv)}}let On=(()=>{class n{constructor(){this.subscriptions=[{id:1,subName:"Base",subPrice:9.99,subDescription:"Base plan"},{id:2,subName:"Premium",subPrice:14.99,subDescription:"Premium plan"},{id:3,subName:"Diamond",subPrice:19.99,subDescription:"Diamond plan"}],this.isSubscribe=!1}ngOnInit(){}openForm(t){this.subscription=Object.assign({},t),this.isSubscribe=!0}getUser(t){this.user=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-subscription"]],decls:5,vars:2,consts:[[1,"p-5"],[1,"d-flex","justify-content-between",3,"subscriptions","subEmitter"],["class","d-flex p-5",4,"ngIf"],[1,"d-flex","p-5"],[1,"w-50"],[3,"userEmitter"],[1,"list-group","list-group-light"],[1,"list-group-item","px-3","border-0","rounded-3","list-group-item-danger","mb-2"],[1,"list-group-item","px-3","border-0","rounded-3","list-group-item-dark","mb-2"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"h2"),o._uU(2,"Subscription"),o.qZA(),o.TgZ(3,"app-card",1),o.NdJ("subEmitter",function(s){return r.openForm(s)}),o.qZA()(),o.YNc(4,Fn,21,7,"div",2)),2&t&&(o.xp6(3),o.Q6J("subscriptions",r.subscriptions),o.xp6(1),o.Q6J("ngIf",r.isSubscribe))},directives:[_e,g.O5,En],styles:[""]}),n})();var Nn=c(86);let wn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[g.ez]]}),n})(),Sn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[g.ez,Dn]]}),n})();const Gn=[{path:"",component:On}];let xn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[g.ez,Nn.Bz.forChild(Gn),wn,Sn]]}),n})()}}]);