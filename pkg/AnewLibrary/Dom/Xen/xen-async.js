var W=()=>Object.create(null),E=(q,O,_)=>{if(q)clearTimeout(q);if(O&&_)return setTimeout(O,_)},$=(q)=>class extends(q??class{}){constructor(){super();this._pendingProps=W(),this._props=this._getInitialProps()||W(),this._lastProps=W(),this._state=this._getInitialState()||W(),this._lastState=W()}_getInitialProps(){}_getInitialState(){}_getProperty(O){return this._pendingProps[O]||this._props[O]}_setProperty(O,_){if(this._validator||this._wouldChangeProp(O,_))this._pendingProps[O]=_,this._invalidateProps()}_wouldChangeValue(O,_,z){return O[_]!==z}_wouldChangeProp(O,_){return this._wouldChangeValue(this._props,O,_)}_wouldChangeState(O,_){return this._wouldChangeValue(this._state,O,_)}_setProps(O){Object.assign(this._pendingProps,O),this._invalidateProps()}_invalidateProps(){this._propsInvalid=!0,this._invalidate()}mergeState(O){let _=!1;const z=this._state;for(let G in O){const J=O[G];if(this._wouldChangeState(G,J))_=!0,z[G]=J}if(_)return this._invalidate(),!0}_setState(O){return this.mergeState(O)}_async(O){return Promise.resolve().then(O.bind(this))}asyncTask(O,_){return setTimeout(_,Number(O)||0)}_invalidate(){if(!this._validator)this._validator=this._async(this._validate)}_getStateArgs(){return[this._props,this._state,this._lastProps,this._lastState]}_validate(){const O=this._getStateArgs();try{if(Object.assign(this._props,this._pendingProps),this._propsInvalid)this._willReceiveProps(...O),this._propsInvalid=!1;if(this._shouldUpdate(...O))this._ensureMount(),this._doUpdate(...O)}catch(_){console.error(_)}this._validator=null,this._lastProps=Object.assign(W(),this._props),this._lastState=Object.assign(W(),this._state)}_doUpdate(...O){this._update(...O),this._didUpdate(...O)}_ensureMount(){}_willReceiveProps(){}_shouldUpdate(){return!0}_update(){}_didUpdate(){}_debounce(O,_,z){O=`_debounce_${O}`,this._state[O]=E(this._state[O],_,z!=null?z:16)}};class S{constructor(q){this.cb=q}annotate(q,O,_){return this.notes=O,this.opts=_||0,this.key=this.opts.key||0,O.locator=this._annotateSubtree(q),O}_annotateSubtree(q){let O;for(let _=0,z=q.firstChild,G=null,J;z;_++){const Q=this._annotateNode(z);if(Q)(O=O||{})[_]=Q;if(J=G?G.nextSibling:q.firstChild,J===z)G=z,z=z.nextSibling;else z=J,_--}return O}_annotateNode(q){const O=this.key++,_=this.cb(q,O,this.notes,this.opts),z=this._annotateSubtree(q);if(_||z){const G=Object.create(null);if(G.key=O,z)G.sub=z;return G}}}var D=function(q,O,_){_=_||[];for(let z in O){const G=O[z];if(G){const J=q.childNodes[z];if(_[G.key]=J.nodeType===Node.TEXT_NODE?J.parentElement:J,G.sub)D(J,G.sub,_)}}return _},g=function(q,O,_,z){let G=!1;if(z.annotator&&z.annotator(q,O,_,z))G=!0;switch(q.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:break;case Node.ELEMENT_NODE:return G||y(q,O,_);case Node.TEXT_NODE:return G||h(q,O,_)}return G},h=function(q,O,_){if(T(q,O,_,"textContent",q.textContent))return q.textContent="",!0},y=function(q,O,_){if(q.hasAttributes()){let z=!1;for(let G=q.attributes,J=G.length-1,Q;J>=0&&(Q=G[J]);J--)if(i(q,O,_,Q.name,Q.value)||T(q,O,_,Q.name,Q.value)||v(q,O,_,Q.name,Q.value))q.removeAttribute(Q.name),z=!0;return z}},T=function(q,O,_,z,G){if(G.slice(0,2)==="{{"){if(z==="class")z="className";let J=G.slice(2,-2);const Q=G.includes("=")?"=":":",K=J.split(Q);if(K.length===2)z=K[0],J=K[1];if(F(_,O,"mustaches",z,J),J[0]==="$")F(_,"xlate",J,!0);return!0}},i=function(q,O,_,z,G){if(z.slice(0,3)==="on-"){if(G.slice(0,2)==="{{")G=G.slice(2,-2),console.warn(`Xen: event handler for '${z}' expressed as a mustache, which is not supported. Using literal value '${G}' instead.`);return F(_,O,"events",z.slice(3),G),!0}},v=function(q,O,_,z,G){if(z==="xen:forward")return F(_,O,"events","xen:forward",G),!0},F=function(q,O,_,z,G){const J=q[O]||(q[O]=Object.create(null));(J[_]||(J[_]={}))[z]=G},c=new S(g),u=function(q,O,_){return q._notes||(q._notes=c.annotate(q.content,{},O,_))},L=function(q,O,_){for(let z in q){const G=O[z],J=q[z]&&q[z].events;if(G&&J)for(let Q in J){let K=Q,R=J[K];if(R.includes("="))[K,R]=R.split("=");_(G,K,R)}}},m=function(q,O,_,z){O.addEventListener(_,function(G){if(q[z])return q[z](G,G.detail);else if(q.defaultHandler)return q.defaultHandler(z,G)})},p=function(q,O,_,z){if(_)for(let G in q){const J=O[G];if(J){J.scope=_;const Q=q[G].mustaches;for(let K in Q){const R=Q[K];if(R in _)d(J,K,_[R],z)}}}},d=function(q,O,_,z){const G=O.slice(-1);if(O==="style%"||O==="style"||O==="xen:style")if(typeof _==="string")q.style.cssText=_;else Object.assign(q.style,_);else if(G=="$"){const J=O.slice(0,-1);if(typeof _==="boolean"||_===void 0||_===null)X(q,J,Boolean(_));else q.setAttribute(J,_)}else if(O==="textContent")if(_?.$template||_?.template||Array.isArray(_)||_?.models)s(q,_,z);else{const J=_!==null&&_!==void 0&&typeof _!=="object"&&typeof _!=="function";q.textContent=J?_:""}else if(O==="unsafe-html")q.innerHTML=_||"";else if(O==="value"){if(q.value!==_)q.value=_}else if(O==="focus"&&q.focus&&_)q.focus();else if(O==="src"){const J=_||"";if(q._src!==J)q._src=J,q.src=J}else q[O]=_},X=function(q,O,_){q[(_===void 0?!q.hasAttribute(O):_)?"setAttribute":"removeAttribute"](O,"")},s=function(q,O,_){let{template:z,$template:G,models:J}=O;if(Array.isArray(O))J=O;if(!z){const Q=G||q?.getAttribute("repeat");z=q.getRootNode().querySelector(`template[${Q}]`)}else z=M(z);r(q,_,z,J)},r=function(q,O,_,z){let G=q.firstElementChild,J;if(_&&z)z&&z.forEach((Q,K)=>{if(J=G&&G.nextElementSibling,!G){const R=B(_).events(O);if(G=R.root.firstElementChild,G){if(G._subtreeDom=R,q.appendChild(G),!_._shapeWarning&&R.root.firstElementChild)_._shapeWarning=!0,console.warn("xen-template: subtemplate has multiple root nodes: only the first is used.",_)}}if(G)G._subtreeDom.set(Q),G=J});while(G)J=G.nextElementSibling,G.remove(),G=J},B=function(q,O){q=M(q);const _=u(q,O),z=document.importNode(q.content,!0),G=z.firstElementChild,J=D(z,_.locator);return{root:z,notes:_,map:J,firstElement:G,$(K){return this.root.querySelector(K)},$$(K){return this.root.querySelectorAll(K)},set:function(K){return K&&p(_,J,K,this.controller),this},events:function(K){if(K&&typeof K!=="function")K=m.bind(this,K);if(this.controller=K,K)L(_,J,K);return this},forward:function(){return L(_,J,(K,R,H)=>{K.addEventListener(R,(Z)=>{const V={eventName:R,handlerName:H,detail:Z.detail,target:Z.target};l(K,"xen:forward",V,{bubbles:!0})})}),this},appendTo:function(K){if(this.root)K.appendChild(this.root);else console.warn("Xen: cannot appendTo, template stamped no DOM");return this.root=K,this}}},l=(q,O,_,z)=>{const G=z||{};G.detail=_;const J=new CustomEvent(O,G);return q.dispatchEvent(J),J.detail},M=(q)=>{return typeof q==="string"?A(q):q},A=(q)=>{return Object.assign(document.createElement("template"),{innerHTML:q})},Y={createTemplate:A,setBoolAttribute:X,stamp:B,takeNote:F};var C=(q)=>class extends q{constructor(){super();this._mounted=!1,this._root=this,this.__configureAccessors(),this.__lazyAcquireProps()}get _class(){return this.constructor._class||this.constructor}__configureAccessors(){const O=Object.getPrototypeOf(this);if(!O.hasOwnProperty("__$xenPropsConfigured")){O.__$xenPropsConfigured=!0;const _=this._class.observedAttributes;_&&_.forEach((z)=>{Object.defineProperty(O,z,{get(){return this._getProperty(z)},set(G){this._setProperty(z,G)}})})}}__lazyAcquireProps(){const O=this._class.observedAttributes;O&&O.forEach((_)=>{if(_.toLowerCase()!==_)console.error(`Xen: Mixed-case attributes are not yet supported, "${this.localName}.observedAttributes" contains "${_}".`);if(this.hasOwnProperty(_)){const z=this[_];delete this[_],this[_]=z}else if(this.hasAttribute(_))this._setValueFromAttribute(_,this.getAttribute(_))})}_setValueFromAttribute(O,_){this[O]=_}connectedCallback(){this._mount()}_mount(){if(!this._mounted)this._mounted=!0,this._doMount(),this._didMount()}_doMount(){}_didMount(){}_fire(O,_,z,G){const J=G||{};J.detail=_;const Q=new CustomEvent(O,J);return(z||this).dispatchEvent(Q),Q.detail}};var{HTMLElement:n}=globalThis,P=(q)=>class extends q{get template(){const O=this.constructor.module;return O?O.querySelector("template"):""}get host(){return this.shadowRoot||this.attachShadow({mode:"open"})}_doMount(){this._stamp(),this._invalidate()}_stamp(){if(this.template)this._dom=Y.stamp(this.template).events(this._listener.bind(this)).appendTo(this.host)}_listener(O,_,z){O.addEventListener(_,(G)=>{if(this[z])return this[z](G,G.detail,this._props,this._state)})}_doUpdate(...O){this._update(...O);let _=this._render(...O);if(this._dom){if(Array.isArray(_))_=_.reduce((z,G)=>Object.assign(z,G),Object.create(null));this._dom.set(_)}this._didUpdate(...O),this._didRender(...O)}_render(){}_didRender(){}},N=P(C($(n)));var U=(q,O)=>class extends q{_setProperty(_,z){if(U.level>1){if((_ in this._pendingProps)&&this._pendingProps[_]!==z||this._props[_]!==z)O("props",f({[_]:z}))}return super._setProperty(_,z)}_setState(_){if(typeof _!=="object")return console.warn("Xen::_setState argument must be an object"),!1;if(super._setState(_)){if(U.level>1)if(U.lastFire)O("(fired -->) state",f(_));else O("state",f(_));return!0}}_setImmutableState(_,z){O("state [immutable]",{[_]:z}),super._setImmutableState(_,z)}_fire(_,z,G,J){U.lastFire={name:_,detail:f(z),log:O},O("fire",{[U.lastFire.name]:U.lastFire.detail}),super._fire(_,z,G,J),U.lastFire=null}_doUpdate(..._){if(U.level>2)O("updating...");return super._doUpdate(..._)}_invalidate(){if(U.level>2){if(!this._validator)O("invalidating...")}super._invalidate()}},f=(q,O)=>{if(!q||typeof q!=="object")return q;const _=Object.create(null);for(let z in q){let G=q[z];if(O<1)G=f(q,(O||0)+1);_[z]=G}return _};U.level=0;var a=(q,O,_="log")=>console[_].bind(console,`%c${q}`,`background: ${O}; color: white; padding: 1px 6px 2px 7px; border-radius: 6px;`),x=(q,O,_)=>U.level>0?a(q,O,_):()=>{},I=(q,O)=>{let _=O;if(!_)_={};const z=q||document.body;let G=1,J=z.firstElementChild;while(J){const Q=J.localName;if(customElements.get(Q)){const R=J.shadowRoot,H={node:J,props:J._props,state:J._state},Z=R?I(R):{};if(Z)H.children=Z;let V=`${Q}${J.id?`#${J.id}`:""} (${G++})`;while(_[V])V+="_";_[V]=H}I(J,_),J=J.nextElementSibling}return _};var j=(q,...O)=>{return(q[0]+O.map((_,z)=>_+q[z+1]).join("")).trim()};Y.html=(...q)=>Y.createTemplate(j(...q));var t=(q)=>typeof q==="object"?Object.assign(Object.create(null),q):{},b={State:$,Template:Y,Element:C,BaseMixin:P,Base:N,Debug:U,setBoolAttribute:Y.setBoolAttribute,html:j,walker:I,logFactory:x,clone:t,nob:W,debounce:E};globalThis.Xen=b;var w=b;var k=(q)=>class extends q{set state(O){this._setState(O)}get state(){return this._state}get props(){return this._props}async(O){return this._async(O)}invalidate(O){return this._invalidate(O)}async awaitState(O,_){const z=this._state,G=`_await_${O}`;if(!z[G]){z[G]=!0;const J=await _();this.state={[O]:J,[G]:!1}}}fire(...O){return this._fire(...O)}_getInitialState(){return this.getInitialState&&this.getInitialState()}_update(O,_,z,G){return this.update&&this.update(O,_,z,G)}_render(O,_,z,G){if(this.shouldRender(O,_,z,G))return this.render&&this.render(O,_,z,G)}shouldRender(){return!0}render(O,_){return _}onState(O,_){this._setState({[O.type]:_})}};w.AsyncMixin=k;w.Async=k(w.Base);export{W as nob,E as debounce,$ as XenStateMixin,C as XenElementMixin,P as XenBaseMixin,N as XenBase,k as XenAsyncMixin,w as Xen,Y as Template};

//# debugId=6F5E1FBD625BCCD064756e2164756e21