(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))h(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const c of p.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&h(c)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function h(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();function bt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pe={exports:{}},he={exports:{}},x={},w={};w.__esModule=!0;w.extend=rt;w.indexOf=wt;w.escapeExpression=Mt;w.isEmpty=Et;w.createFrame=xt;w.blockParams=It;w.appendContextPath=Ot;var kt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},Lt=/[&<>"'`=]/g,Ct=/[&<>"'`=]/;function Pt(e){return kt[e]}function rt(e){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],o)&&(e[o]=arguments[t][o]);return e}var Re=Object.prototype.toString;w.toString=Re;var de=function(t){return typeof t=="function"};de(/x/)&&(w.isFunction=de=function(e){return typeof e=="function"&&Re.call(e)==="[object Function]"});w.isFunction=de;var it=Array.isArray||function(e){return e&&typeof e=="object"?Re.call(e)==="[object Array]":!1};w.isArray=it;function wt(e,t){for(var o=0,h=e.length;o<h;o++)if(e[o]===t)return o;return-1}function Mt(e){if(typeof e!="string"){if(e&&e.toHTML)return e.toHTML();if(e==null)return"";if(!e)return e+"";e=""+e}return Ct.test(e)?e.replace(Lt,Pt):e}function Et(e){return!e&&e!==0?!0:!!(it(e)&&e.length===0)}function xt(e){var t=rt({},e);return t._parent=e,t}function It(e,t){return e.path=t,e}function Ot(e,t){return(e?e+".":"")+t}var fe={exports:{}};(function(e,t){t.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function h(d,p){var c=p&&p.loc,u=void 0,i=void 0,l=void 0,a=void 0;c&&(u=c.start.line,i=c.end.line,l=c.start.column,a=c.end.column,d+=" - "+u+":"+l);for(var f=Error.prototype.constructor.call(this,d),n=0;n<o.length;n++)this[o[n]]=f[o[n]];Error.captureStackTrace&&Error.captureStackTrace(this,h);try{c&&(this.lineNumber=u,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:a,enumerable:!0})):(this.column=l,this.endColumn=a))}catch{}}h.prototype=new Error,t.default=h,e.exports=t.default})(fe,fe.exports);var O=fe.exports,z={},me={exports:{}};(function(e,t){t.__esModule=!0;var o=w;t.default=function(h){h.registerHelper("blockHelperMissing",function(d,p){var c=p.inverse,u=p.fn;if(d===!0)return u(this);if(d===!1||d==null)return c(this);if(o.isArray(d))return d.length>0?(p.ids&&(p.ids=[p.name]),h.helpers.each(d,p)):c(this);if(p.data&&p.ids){var i=o.createFrame(p.data);i.contextPath=o.appendContextPath(p.data.contextPath,p.name),p={data:i}}return u(d,p)})},e.exports=t.default})(me,me.exports);var At=me.exports,ge={exports:{}};(function(e,t){t.__esModule=!0;function o(c){return c&&c.__esModule?c:{default:c}}var h=w,d=O,p=o(d);t.default=function(c){c.registerHelper("each",function(u,i){if(!i)throw new p.default("Must pass iterator to #each");var l=i.fn,a=i.inverse,f=0,n="",s=void 0,r=void 0;i.data&&i.ids&&(r=h.appendContextPath(i.data.contextPath,i.ids[0])+"."),h.isFunction(u)&&(u=u.call(this)),i.data&&(s=h.createFrame(i.data));function m(g,y,L){s&&(s.key=g,s.index=y,s.first=y===0,s.last=!!L,r&&(s.contextPath=r+g)),n=n+l(u[g],{data:s,blockParams:h.blockParams([u[g],g],[r+g,null])})}if(u&&typeof u=="object")if(h.isArray(u))for(var v=u.length;f<v;f++)f in u&&m(f,f,f===u.length-1);else if(typeof Symbol=="function"&&u[Symbol.iterator]){for(var S=[],_=u[Symbol.iterator](),b=_.next();!b.done;b=_.next())S.push(b.value);u=S;for(var v=u.length;f<v;f++)m(f,f,f===u.length-1)}else(function(){var g=void 0;Object.keys(u).forEach(function(y){g!==void 0&&m(g,f-1),g=y,f++}),g!==void 0&&m(g,f-1,!0)})();return f===0&&(n=a(this)),n})},e.exports=t.default})(ge,ge.exports);var Nt=ge.exports,ve={exports:{}};(function(e,t){t.__esModule=!0;function o(p){return p&&p.__esModule?p:{default:p}}var h=O,d=o(h);t.default=function(p){p.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new d.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default})(ve,ve.exports);var Bt=ve.exports,_e={exports:{}};(function(e,t){t.__esModule=!0;function o(c){return c&&c.__esModule?c:{default:c}}var h=w,d=O,p=o(d);t.default=function(c){c.registerHelper("if",function(u,i){if(arguments.length!=2)throw new p.default("#if requires exactly one argument");return h.isFunction(u)&&(u=u.call(this)),!i.hash.includeZero&&!u||h.isEmpty(u)?i.inverse(this):i.fn(this)}),c.registerHelper("unless",function(u,i){if(arguments.length!=2)throw new p.default("#unless requires exactly one argument");return c.helpers.if.call(this,u,{fn:i.inverse,inverse:i.fn,hash:i.hash})})},e.exports=t.default})(_e,_e.exports);var Rt=_e.exports,ye={exports:{}};(function(e,t){t.__esModule=!0,t.default=function(o){o.registerHelper("log",function(){for(var h=[void 0],d=arguments[arguments.length-1],p=0;p<arguments.length-1;p++)h.push(arguments[p]);var c=1;d.hash.level!=null?c=d.hash.level:d.data&&d.data.level!=null&&(c=d.data.level),h[0]=c,o.log.apply(o,h)})},e.exports=t.default})(ye,ye.exports);var Dt=ye.exports,Se={exports:{}};(function(e,t){t.__esModule=!0,t.default=function(o){o.registerHelper("lookup",function(h,d,p){return h&&p.lookupProperty(h,d)})},e.exports=t.default})(Se,Se.exports);var Ht=Se.exports,be={exports:{}};(function(e,t){t.__esModule=!0;function o(c){return c&&c.__esModule?c:{default:c}}var h=w,d=O,p=o(d);t.default=function(c){c.registerHelper("with",function(u,i){if(arguments.length!=2)throw new p.default("#with requires exactly one argument");h.isFunction(u)&&(u=u.call(this));var l=i.fn;if(h.isEmpty(u))return i.inverse(this);var a=i.data;return i.data&&i.ids&&(a=h.createFrame(i.data),a.contextPath=h.appendContextPath(i.data.contextPath,i.ids[0])),l(u,{data:a,blockParams:h.blockParams([u],[a&&a.contextPath])})})},e.exports=t.default})(be,be.exports);var Ut=be.exports;z.__esModule=!0;z.registerDefaultHelpers=$t;z.moveHelperToHooks=en;function H(e){return e&&e.__esModule?e:{default:e}}var qt=At,Tt=H(qt),Vt=Nt,Ft=H(Vt),Gt=Bt,Wt=H(Gt),Kt=Rt,zt=H(Kt),Jt=Dt,jt=H(Jt),Qt=Ht,Yt=H(Qt),Xt=Ut,Zt=H(Xt);function $t(e){Tt.default(e),Ft.default(e),Wt.default(e),zt.default(e),jt.default(e),Yt.default(e),Zt.default(e)}function en(e,t,o){e.helpers[t]&&(e.hooks[t]=e.helpers[t],o||delete e.helpers[t])}var De={},ke={exports:{}};(function(e,t){t.__esModule=!0;var o=w;t.default=function(h){h.registerDecorator("inline",function(d,p,c,u){var i=d;return p.partials||(p.partials={},i=function(l,a){var f=c.partials;c.partials=o.extend({},f,p.partials);var n=d(l,a);return c.partials=f,n}),p.partials[u.args[0]]=u.fn,i})},e.exports=t.default})(ke,ke.exports);var tn=ke.exports;De.__esModule=!0;De.registerDefaultDecorators=sn;function nn(e){return e&&e.__esModule?e:{default:e}}var rn=tn,an=nn(rn);function sn(e){an.default(e)}var Le={exports:{}};(function(e,t){t.__esModule=!0;var o=w,h={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(p){if(typeof p=="string"){var c=o.indexOf(h.methodMap,p.toLowerCase());c>=0?p=c:p=parseInt(p,10)}return p},log:function(p){if(p=h.lookupLevel(p),typeof console<"u"&&h.lookupLevel(h.level)<=p){var c=h.methodMap[p];console[c]||(c="log");for(var u=arguments.length,i=Array(u>1?u-1:0),l=1;l<u;l++)i[l-1]=arguments[l];console[c].apply(console,i)}}};t.default=h,e.exports=t.default})(Le,Le.exports);var at=Le.exports,T={},He={};He.__esModule=!0;He.createNewLookupObject=ln;var on=w;function ln(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return on.extend.apply(void 0,[Object.create(null)].concat(t))}T.__esModule=!0;T.createProtoAccessControl=hn;T.resultIsAllowed=dn;T.resetLoggedProperties=mn;function un(e){return e&&e.__esModule?e:{default:e}}var Ve=He,cn=at,pn=un(cn),ee=Object.create(null);function hn(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var o=Object.create(null);return o.__proto__=!1,{properties:{whitelist:Ve.createNewLookupObject(o,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:Ve.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}}function dn(e,t,o){return Fe(typeof e=="function"?t.methods:t.properties,o)}function Fe(e,t){return e.whitelist[t]!==void 0?e.whitelist[t]===!0:e.defaultValue!==void 0?e.defaultValue:(fn(t),!1)}function fn(e){ee[e]!==!0&&(ee[e]=!0,pn.default.log("error",'Handlebars: Access has been denied to resolve the property "'+e+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function mn(){Object.keys(ee).forEach(function(e){delete ee[e]})}x.__esModule=!0;x.HandlebarsEnvironment=Ce;function st(e){return e&&e.__esModule?e:{default:e}}var D=w,gn=O,ne=st(gn),vn=z,_n=De,yn=at,te=st(yn),Sn=T,bn="4.7.8";x.VERSION=bn;var kn=8;x.COMPILER_REVISION=kn;var Ln=7;x.LAST_COMPATIBLE_COMPILER_REVISION=Ln;var Cn={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};x.REVISION_CHANGES=Cn;var re="[object Object]";function Ce(e,t,o){this.helpers=e||{},this.partials=t||{},this.decorators=o||{},vn.registerDefaultHelpers(this),_n.registerDefaultDecorators(this)}Ce.prototype={constructor:Ce,logger:te.default,log:te.default.log,registerHelper:function(t,o){if(D.toString.call(t)===re){if(o)throw new ne.default("Arg not supported with multiple helpers");D.extend(this.helpers,t)}else this.helpers[t]=o},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,o){if(D.toString.call(t)===re)D.extend(this.partials,t);else{if(typeof o>"u")throw new ne.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=o}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,o){if(D.toString.call(t)===re){if(o)throw new ne.default("Arg not supported with multiple decorators");D.extend(this.decorators,t)}else this.decorators[t]=o},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){Sn.resetLoggedProperties()}};var Pn=te.default.log;x.log=Pn;x.createFrame=D.createFrame;x.logger=te.default;var Pe={exports:{}};(function(e,t){t.__esModule=!0;function o(h){this.string=h}o.prototype.toString=o.prototype.toHTML=function(){return""+this.string},t.default=o,e.exports=t.default})(Pe,Pe.exports);var wn=Pe.exports,R={},Ue={};Ue.__esModule=!0;Ue.wrapHelper=Mn;function Mn(e,t){if(typeof e!="function")return e;var o=function(){var d=arguments[arguments.length-1];return arguments[arguments.length-1]=t(d),e.apply(this,arguments)};return o}R.__esModule=!0;R.checkRevision=Nn;R.template=Bn;R.wrapProgram=Z;R.resolvePartial=Rn;R.invokePartial=Dn;R.noop=ot;function En(e){return e&&e.__esModule?e:{default:e}}function xn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}var In=w,A=xn(In),On=O,N=En(On),B=x,Ge=z,An=Ue,We=T;function Nn(e){var t=e&&e[0]||1,o=B.COMPILER_REVISION;if(!(t>=B.LAST_COMPATIBLE_COMPILER_REVISION&&t<=B.COMPILER_REVISION))if(t<B.LAST_COMPATIBLE_COMPILER_REVISION){var h=B.REVISION_CHANGES[o],d=B.REVISION_CHANGES[t];throw new N.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+h+") or downgrade your runtime to an older version ("+d+").")}else throw new N.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}function Bn(e,t){if(!t)throw new N.default("No environment passed to template");if(!e||!e.main)throw new N.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var o=e.compiler&&e.compiler[0]===7;function h(c,u,i){i.hash&&(u=A.extend({},u,i.hash),i.ids&&(i.ids[0]=!0)),c=t.VM.resolvePartial.call(this,c,u,i);var l=A.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),a=t.VM.invokePartial.call(this,c,u,l);if(a==null&&t.compile&&(i.partials[i.name]=t.compile(c,e.compilerOptions,t),a=i.partials[i.name](u,l)),a!=null){if(i.indent){for(var f=a.split(`
`),n=0,s=f.length;n<s&&!(!f[n]&&n+1===s);n++)f[n]=i.indent+f[n];a=f.join(`
`)}return a}else throw new N.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")}var d={strict:function(u,i,l){if(!u||!(i in u))throw new N.default('"'+i+'" not defined in '+u,{loc:l});return d.lookupProperty(u,i)},lookupProperty:function(u,i){var l=u[i];if(l==null||Object.prototype.hasOwnProperty.call(u,i)||We.resultIsAllowed(l,d.protoAccessControl,i))return l},lookup:function(u,i){for(var l=u.length,a=0;a<l;a++){var f=u[a]&&d.lookupProperty(u[a],i);if(f!=null)return u[a][i]}},lambda:function(u,i){return typeof u=="function"?u.call(i):u},escapeExpression:A.escapeExpression,invokePartial:h,fn:function(u){var i=e[u];return i.decorator=e[u+"_d"],i},programs:[],program:function(u,i,l,a,f){var n=this.programs[u],s=this.fn(u);return i||f||a||l?n=Z(this,u,s,i,l,a,f):n||(n=this.programs[u]=Z(this,u,s)),n},data:function(u,i){for(;u&&i--;)u=u._parent;return u},mergeIfNeeded:function(u,i){var l=u||i;return u&&i&&u!==i&&(l=A.extend({},i,u)),l},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function p(c){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],i=u.data;p._setup(u),!u.partial&&e.useData&&(i=Hn(c,i));var l=void 0,a=e.useBlockParams?[]:void 0;e.useDepths&&(u.depths?l=c!=u.depths[0]?[c].concat(u.depths):u.depths:l=[c]);function f(n){return""+e.main(d,n,d.helpers,d.partials,i,a,l)}return f=lt(e.main,f,d,u.depths||[],i,a),f(c,u)}return p.isTop=!0,p._setup=function(c){if(c.partial)d.protoAccessControl=c.protoAccessControl,d.helpers=c.helpers,d.partials=c.partials,d.decorators=c.decorators,d.hooks=c.hooks;else{var u=A.extend({},t.helpers,c.helpers);Un(u,d),d.helpers=u,e.usePartial&&(d.partials=d.mergeIfNeeded(c.partials,t.partials)),(e.usePartial||e.useDecorators)&&(d.decorators=A.extend({},t.decorators,c.decorators)),d.hooks={},d.protoAccessControl=We.createProtoAccessControl(c);var i=c.allowCallsToHelperMissing||o;Ge.moveHelperToHooks(d,"helperMissing",i),Ge.moveHelperToHooks(d,"blockHelperMissing",i)}},p._child=function(c,u,i,l){if(e.useBlockParams&&!i)throw new N.default("must pass block params");if(e.useDepths&&!l)throw new N.default("must pass parent depths");return Z(d,c,e[c],u,0,i,l)},p}function Z(e,t,o,h,d,p,c){function u(i){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],a=c;return c&&i!=c[0]&&!(i===e.nullContext&&c[0]===null)&&(a=[i].concat(c)),o(e,i,e.helpers,e.partials,l.data||h,p&&[l.blockParams].concat(p),a)}return u=lt(o,u,e,c,h,p),u.program=t,u.depth=c?c.length:0,u.blockParams=d||0,u}function Rn(e,t,o){return e?!e.call&&!o.name&&(o.name=e,e=o.partials[e]):o.name==="@partial-block"?e=o.data["partial-block"]:e=o.partials[o.name],e}function Dn(e,t,o){var h=o.data&&o.data["partial-block"];o.partial=!0,o.ids&&(o.data.contextPath=o.ids[0]||o.data.contextPath);var d=void 0;if(o.fn&&o.fn!==ot&&function(){o.data=B.createFrame(o.data);var p=o.fn;d=o.data["partial-block"]=function(u){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return i.data=B.createFrame(i.data),i.data["partial-block"]=h,p(u,i)},p.partials&&(o.partials=A.extend({},o.partials,p.partials))}(),e===void 0&&d&&(e=d),e===void 0)throw new N.default("The partial "+o.name+" could not be found");if(e instanceof Function)return e(t,o)}function ot(){return""}function Hn(e,t){return(!t||!("root"in t))&&(t=t?B.createFrame(t):{},t.root=e),t}function lt(e,t,o,h,d,p){if(e.decorator){var c={};t=e.decorator(t,c,o,h&&h[0],d,p,h),A.extend(t,c)}return t}function Un(e,t){Object.keys(e).forEach(function(o){var h=e[o];e[o]=qn(h,t)})}function qn(e,t){var o=t.lookupProperty;return An.wrapHelper(e,function(h){return A.extend({lookupProperty:o},h)})}var we={exports:{}};(function(e,t){t.__esModule=!0,t.default=function(o){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var h=globalThis.Handlebars;o.noConflict=function(){return globalThis.Handlebars===o&&(globalThis.Handlebars=h),o}},e.exports=t.default})(we,we.exports);var ut=we.exports;(function(e,t){t.__esModule=!0;function o(_){return _&&_.__esModule?_:{default:_}}function h(_){if(_&&_.__esModule)return _;var b={};if(_!=null)for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(b[g]=_[g]);return b.default=_,b}var d=x,p=h(d),c=wn,u=o(c),i=O,l=o(i),a=w,f=h(a),n=R,s=h(n),r=ut,m=o(r);function v(){var _=new p.HandlebarsEnvironment;return f.extend(_,p),_.SafeString=u.default,_.Exception=l.default,_.Utils=f,_.escapeExpression=f.escapeExpression,_.VM=s,_.template=function(b){return s.template(b,_)},_}var S=v();S.create=v,m.default(S),S.default=S,t.default=S,e.exports=t.default})(he,he.exports);var Tn=he.exports,Me={exports:{}};(function(e,t){t.__esModule=!0;var o={helpers:{helperExpression:function(d){return d.type==="SubExpression"||(d.type==="MustacheStatement"||d.type==="BlockStatement")&&!!(d.params&&d.params.length||d.hash)},scopedId:function(d){return/^\.|this\b/.test(d.original)},simpleId:function(d){return d.parts.length===1&&!o.helpers.scopedId(d)&&!d.depth}}};t.default=o,e.exports=t.default})(Me,Me.exports);var ct=Me.exports,J={},Ee={exports:{}};(function(e,t){t.__esModule=!0;var o=function(){var h={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(u,i,l,a,f,n,s){var r=n.length-1;switch(f){case 1:return n[r-1];case 2:this.$=a.prepareProgram(n[r]);break;case 3:this.$=n[r];break;case 4:this.$=n[r];break;case 5:this.$=n[r];break;case 6:this.$=n[r];break;case 7:this.$=n[r];break;case 8:this.$=n[r];break;case 9:this.$={type:"CommentStatement",value:a.stripComment(n[r]),strip:a.stripFlags(n[r],n[r]),loc:a.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:n[r],value:n[r],loc:a.locInfo(this._$)};break;case 11:this.$=a.prepareRawBlock(n[r-2],n[r-1],n[r],this._$);break;case 12:this.$={path:n[r-3],params:n[r-2],hash:n[r-1]};break;case 13:this.$=a.prepareBlock(n[r-3],n[r-2],n[r-1],n[r],!1,this._$);break;case 14:this.$=a.prepareBlock(n[r-3],n[r-2],n[r-1],n[r],!0,this._$);break;case 15:this.$={open:n[r-5],path:n[r-4],params:n[r-3],hash:n[r-2],blockParams:n[r-1],strip:a.stripFlags(n[r-5],n[r])};break;case 16:this.$={path:n[r-4],params:n[r-3],hash:n[r-2],blockParams:n[r-1],strip:a.stripFlags(n[r-5],n[r])};break;case 17:this.$={path:n[r-4],params:n[r-3],hash:n[r-2],blockParams:n[r-1],strip:a.stripFlags(n[r-5],n[r])};break;case 18:this.$={strip:a.stripFlags(n[r-1],n[r-1]),program:n[r]};break;case 19:var m=a.prepareBlock(n[r-2],n[r-1],n[r],n[r],!1,this._$),v=a.prepareProgram([m],n[r-1].loc);v.chained=!0,this.$={strip:n[r-2].strip,program:v,chain:!0};break;case 20:this.$=n[r];break;case 21:this.$={path:n[r-1],strip:a.stripFlags(n[r-2],n[r])};break;case 22:this.$=a.prepareMustache(n[r-3],n[r-2],n[r-1],n[r-4],a.stripFlags(n[r-4],n[r]),this._$);break;case 23:this.$=a.prepareMustache(n[r-3],n[r-2],n[r-1],n[r-4],a.stripFlags(n[r-4],n[r]),this._$);break;case 24:this.$={type:"PartialStatement",name:n[r-3],params:n[r-2],hash:n[r-1],indent:"",strip:a.stripFlags(n[r-4],n[r]),loc:a.locInfo(this._$)};break;case 25:this.$=a.preparePartialBlock(n[r-2],n[r-1],n[r],this._$);break;case 26:this.$={path:n[r-3],params:n[r-2],hash:n[r-1],strip:a.stripFlags(n[r-4],n[r])};break;case 27:this.$=n[r];break;case 28:this.$=n[r];break;case 29:this.$={type:"SubExpression",path:n[r-3],params:n[r-2],hash:n[r-1],loc:a.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:n[r],loc:a.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:a.id(n[r-2]),value:n[r],loc:a.locInfo(this._$)};break;case 32:this.$=a.id(n[r-1]);break;case 33:this.$=n[r];break;case 34:this.$=n[r];break;case 35:this.$={type:"StringLiteral",value:n[r],original:n[r],loc:a.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(n[r]),original:Number(n[r]),loc:a.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:n[r]==="true",original:n[r]==="true",loc:a.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:a.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:a.locInfo(this._$)};break;case 40:this.$=n[r];break;case 41:this.$=n[r];break;case 42:this.$=a.preparePath(!0,n[r],this._$);break;case 43:this.$=a.preparePath(!1,n[r],this._$);break;case 44:n[r-2].push({part:a.id(n[r]),original:n[r],separator:n[r-1]}),this.$=n[r-2];break;case 45:this.$=[{part:a.id(n[r]),original:n[r]}];break;case 46:this.$=[];break;case 47:n[r-1].push(n[r]);break;case 48:this.$=[];break;case 49:n[r-1].push(n[r]);break;case 50:this.$=[];break;case 51:n[r-1].push(n[r]);break;case 58:this.$=[];break;case 59:n[r-1].push(n[r]);break;case 64:this.$=[];break;case 65:n[r-1].push(n[r]);break;case 70:this.$=[];break;case 71:n[r-1].push(n[r]);break;case 78:this.$=[];break;case 79:n[r-1].push(n[r]);break;case 82:this.$=[];break;case 83:n[r-1].push(n[r]);break;case 86:this.$=[];break;case 87:n[r-1].push(n[r]);break;case 90:this.$=[];break;case 91:n[r-1].push(n[r]);break;case 94:this.$=[];break;case 95:n[r-1].push(n[r]);break;case 98:this.$=[n[r]];break;case 99:n[r-1].push(n[r]);break;case 100:this.$=[n[r]];break;case 101:n[r-1].push(n[r]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(u,i){throw new Error(u)},parse:function(u){var i=this,l=[0],a=[null],f=[],n=this.table,s="",r=0,m=0;this.lexer.setInput(u),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var v=this.lexer.yylloc;f.push(v);var S=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function _(){var q;return q=i.lexer.lex()||1,typeof q!="number"&&(q=i.symbols_[q]||q),q}for(var b,g,y,L,k={},C,M,P,E;;){if(g=l[l.length-1],this.defaultActions[g]?y=this.defaultActions[g]:((b===null||typeof b>"u")&&(b=_()),y=n[g]&&n[g][b]),typeof y>"u"||!y.length||!y[0]){var U="";{E=[];for(C in n[g])this.terminals_[C]&&C>2&&E.push("'"+this.terminals_[C]+"'");this.lexer.showPosition?U="Parse error on line "+(r+1)+`:
`+this.lexer.showPosition()+`
Expecting `+E.join(", ")+", got '"+(this.terminals_[b]||b)+"'":U="Parse error on line "+(r+1)+": Unexpected "+(b==1?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(U,{text:this.lexer.match,token:this.terminals_[b]||b,line:this.lexer.yylineno,loc:v,expected:E})}}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+b);switch(y[0]){case 1:l.push(b),a.push(this.lexer.yytext),f.push(this.lexer.yylloc),l.push(y[1]),b=null,m=this.lexer.yyleng,s=this.lexer.yytext,r=this.lexer.yylineno,v=this.lexer.yylloc;break;case 2:if(M=this.productions_[y[1]][1],k.$=a[a.length-M],k._$={first_line:f[f.length-(M||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(M||1)].first_column,last_column:f[f.length-1].last_column},S&&(k._$.range=[f[f.length-(M||1)].range[0],f[f.length-1].range[1]]),L=this.performAction.call(k,s,m,r,this.yy,y[1],a,f),typeof L<"u")return L;M&&(l=l.slice(0,-1*M*2),a=a.slice(0,-1*M),f=f.slice(0,-1*M)),l.push(this.productions_[y[1]][0]),a.push(k.$),f.push(k._$),P=n[l[l.length-2]][l[l.length-1]],l.push(P);break;case 3:return!0}}return!0}},d=function(){var c={EOF:1,parseError:function(i,l){if(this.yy.parser)this.yy.parser.parseError(i,l);else throw new Error(i)},setInput:function(i){return this._input=i,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var l=i.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var l=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l-1),this.offset-=l;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===f.length?this.yylloc.first_column:0)+f[f.length-a.length].length-a[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-l]),this},more:function(){return this._more=!0,this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),l=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+l+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,l,a,f,n;this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length&&(a=this._input.match(this.rules[s[r]]),!(a&&(!l||a[0].length>l[0].length)&&(l=a,f=r,!this.options.flex)));r++);return l?(n=l[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],i=this.performAction.call(this,this.yy,this,s[f],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return typeof i<"u"?i:this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(i){this.begin(i)}};return c.options={},c.performAction=function(i,l,a,f){function n(s,r){return l.yytext=l.yytext.substring(s,l.yyleng-r+s)}switch(a){case 0:if(l.yytext.slice(-2)==="\\\\"?(n(0,1),this.begin("mu")):l.yytext.slice(-1)==="\\"?(n(0,1),this.begin("emu")):this.begin("mu"),l.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(n(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(l.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return l.yytext=n(1,2).replace(/\\"/g,'"'),80;case 32:return l.yytext=n(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return l.yytext=l.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},c.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],c.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},c}();h.lexer=d;function p(){this.yy={}}return p.prototype=h,h.Parser=p,new p}();t.default=o,e.exports=t.default})(Ee,Ee.exports);var Vn=Ee.exports,xe={exports:{}},Ie={exports:{}};(function(e,t){t.__esModule=!0;function o(l){return l&&l.__esModule?l:{default:l}}var h=O,d=o(h);function p(){this.parents=[]}p.prototype={constructor:p,mutating:!1,acceptKey:function(a,f){var n=this.accept(a[f]);if(this.mutating){if(n&&!p.prototype[n.type])throw new d.default('Unexpected node type "'+n.type+'" found when accepting '+f+" on "+a.type);a[f]=n}},acceptRequired:function(a,f){if(this.acceptKey(a,f),!a[f])throw new d.default(a.type+" requires "+f)},acceptArray:function(a){for(var f=0,n=a.length;f<n;f++)this.acceptKey(a,f),a[f]||(a.splice(f,1),f--,n--)},accept:function(a){if(a){if(!this[a.type])throw new d.default("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var f=this[a.type](a);if(this.current=this.parents.shift(),!this.mutating||f)return f;if(f!==!1)return a}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:c,Decorator:c,BlockStatement:u,DecoratorBlock:u,PartialStatement:i,PartialBlockStatement:function(a){i.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:c,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}};function c(l){this.acceptRequired(l,"path"),this.acceptArray(l.params),this.acceptKey(l,"hash")}function u(l){c.call(this,l),this.acceptKey(l,"program"),this.acceptKey(l,"inverse")}function i(l){this.acceptRequired(l,"name"),this.acceptArray(l.params),this.acceptKey(l,"hash")}t.default=p,e.exports=t.default})(Ie,Ie.exports);var pt=Ie.exports;(function(e,t){t.__esModule=!0;function o(a){return a&&a.__esModule?a:{default:a}}var h=pt,d=o(h);function p(){var a=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=a}p.prototype=new d.default,p.prototype.Program=function(a){var f=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var s=a.body,r=0,m=s.length;r<m;r++){var v=s[r],S=this.accept(v);if(S){var _=c(s,r,n),b=u(s,r,n),g=S.openStandalone&&_,y=S.closeStandalone&&b,L=S.inlineStandalone&&_&&b;S.close&&i(s,r,!0),S.open&&l(s,r,!0),f&&L&&(i(s,r),l(s,r)&&v.type==="PartialStatement"&&(v.indent=/([ \t]+$)/.exec(s[r-1].original)[1])),f&&g&&(i((v.program||v.inverse).body),l(s,r)),f&&y&&(i(s,r),l((v.inverse||v.program).body))}}return a},p.prototype.BlockStatement=p.prototype.DecoratorBlock=p.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var f=a.program||a.inverse,n=a.program&&a.inverse,s=n,r=n;if(n&&n.chained)for(s=n.body[0].program;r.chained;)r=r.body[r.body.length-1].program;var m={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:u(f.body),closeStandalone:c((s||f).body)};if(a.openStrip.close&&i(f.body,null,!0),n){var v=a.inverseStrip;v.open&&l(f.body,null,!0),v.close&&i(s.body,null,!0),a.closeStrip.open&&l(r.body,null,!0),!this.options.ignoreStandalone&&c(f.body)&&u(s.body)&&(l(f.body),i(s.body))}else a.closeStrip.open&&l(f.body,null,!0);return m},p.prototype.Decorator=p.prototype.MustacheStatement=function(a){return a.strip},p.prototype.PartialStatement=p.prototype.CommentStatement=function(a){var f=a.strip||{};return{inlineStandalone:!0,open:f.open,close:f.close}};function c(a,f,n){f===void 0&&(f=a.length);var s=a[f-1],r=a[f-2];if(!s)return n;if(s.type==="ContentStatement")return(r||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(s.original)}function u(a,f,n){f===void 0&&(f=-1);var s=a[f+1],r=a[f+2];if(!s)return n;if(s.type==="ContentStatement")return(r||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(s.original)}function i(a,f,n){var s=a[f==null?0:f+1];if(!(!s||s.type!=="ContentStatement"||!n&&s.rightStripped)){var r=s.value;s.value=s.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),s.rightStripped=s.value!==r}}function l(a,f,n){var s=a[f==null?a.length-1:f-1];if(!(!s||s.type!=="ContentStatement"||!n&&s.leftStripped)){var r=s.value;return s.value=s.value.replace(n?/\s+$/:/[ \t]+$/,""),s.leftStripped=s.value!==r,s.leftStripped}}t.default=p,e.exports=t.default})(xe,xe.exports);var Fn=xe.exports,I={};I.__esModule=!0;I.SourceLocation=Kn;I.id=zn;I.stripFlags=Jn;I.stripComment=jn;I.preparePath=Qn;I.prepareMustache=Yn;I.prepareRawBlock=Xn;I.prepareBlock=Zn;I.prepareProgram=$n;I.preparePartialBlock=er;function Gn(e){return e&&e.__esModule?e:{default:e}}var Wn=O,qe=Gn(Wn);function Te(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var o={loc:e.path.loc};throw new qe.default(e.path.original+" doesn't match "+t,o)}}function Kn(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}}function zn(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e}function Jn(e,t){return{open:e.charAt(2)==="~",close:t.charAt(t.length-3)==="~"}}function jn(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function Qn(e,t,o){o=this.locInfo(o);for(var h=e?"@":"",d=[],p=0,c=0,u=t.length;c<u;c++){var i=t[c].part,l=t[c].original!==i;if(h+=(t[c].separator||"")+i,!l&&(i===".."||i==="."||i==="this")){if(d.length>0)throw new qe.default("Invalid path: "+h,{loc:o});i===".."&&p++}else d.push(i)}return{type:"PathExpression",data:e,depth:p,parts:d,original:h,loc:o}}function Yn(e,t,o,h,d,p){var c=h.charAt(3)||h.charAt(2),u=c!=="{"&&c!=="&",i=/\*/.test(h);return{type:i?"Decorator":"MustacheStatement",path:e,params:t,hash:o,escaped:u,strip:d,loc:this.locInfo(p)}}function Xn(e,t,o,h){Te(e,o),h=this.locInfo(h);var d={type:"Program",body:t,strip:{},loc:h};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:d,openStrip:{},inverseStrip:{},closeStrip:{},loc:h}}function Zn(e,t,o,h,d,p){h&&h.path&&Te(e,h);var c=/\*/.test(e.open);t.blockParams=e.blockParams;var u=void 0,i=void 0;if(o){if(c)throw new qe.default("Unexpected inverse block on decorator",o);o.chain&&(o.program.body[0].closeStrip=h.strip),i=o.strip,u=o.program}return d&&(d=u,u=t,t=d),{type:c?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:u,openStrip:e.strip,inverseStrip:i,closeStrip:h&&h.strip,loc:this.locInfo(p)}}function $n(e,t){if(!t&&e.length){var o=e[0].loc,h=e[e.length-1].loc;o&&h&&(t={source:o.source,start:{line:o.start.line,column:o.start.column},end:{line:h.end.line,column:h.end.column}})}return{type:"Program",body:e,strip:{},loc:t}}function er(e,t,o,h){return Te(e,o),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:o&&o.strip,loc:this.locInfo(h)}}J.__esModule=!0;J.parseWithoutProcessing=dt;J.parse=lr;function tr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function ht(e){return e&&e.__esModule?e:{default:e}}var nr=Vn,Oe=ht(nr),rr=Fn,ir=ht(rr),ar=I,sr=tr(ar),or=w;J.parser=Oe.default;var $={};or.extend($,sr);function dt(e,t){if(e.type==="Program")return e;Oe.default.yy=$,$.locInfo=function(h){return new $.SourceLocation(t&&t.srcName,h)};var o=Oe.default.parse(e);return o}function lr(e,t){var o=dt(e,t),h=new ir.default(t);return h.accept(o)}var j={};j.__esModule=!0;j.Compiler=Ae;j.precompile=hr;j.compile=dr;function ft(e){return e&&e.__esModule?e:{default:e}}var ur=O,W=ft(ur),K=w,cr=ct,V=ft(cr),pr=[].slice;function Ae(){}Ae.prototype={compiler:Ae,equals:function(t){var o=this.opcodes.length;if(t.opcodes.length!==o)return!1;for(var h=0;h<o;h++){var d=this.opcodes[h],p=t.opcodes[h];if(d.opcode!==p.opcode||!mt(d.args,p.args))return!1}o=this.children.length;for(var h=0;h<o;h++)if(!this.children[h].equals(t.children[h]))return!1;return!0},guid:0,compile:function(t,o){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=o,this.stringParams=o.stringParams,this.trackIds=o.trackIds,o.blockParams=o.blockParams||[],o.knownHelpers=K.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},o.knownHelpers),this.accept(t)},compileProgram:function(t){var o=new this.compiler,h=o.compile(t,this.options),d=this.guid++;return this.usePartial=this.usePartial||h.usePartial,this.children[d]=h,this.useDepths=this.useDepths||h.useDepths,d},accept:function(t){if(!this[t.type])throw new W.default("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var o=this[t.type](t);return this.sourceNode.shift(),o},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var o=t.body,h=o.length,d=0;d<h;d++)this.accept(o[d]);return this.options.blockParams.shift(),this.isSimple=h===1,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){Ke(t);var o=t.program,h=t.inverse;o=o&&this.compileProgram(o),h=h&&this.compileProgram(h);var d=this.classifySexpr(t);d==="helper"?this.helperSexpr(t,o,h):d==="simple"?(this.simpleSexpr(t),this.opcode("pushProgram",o),this.opcode("pushProgram",h),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,o,h),this.opcode("pushProgram",o),this.opcode("pushProgram",h),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var o=t.program&&this.compileProgram(t.program),h=this.setupFullMustacheParams(t,o,void 0),d=t.path;this.useDecorators=!0,this.opcode("registerDecorator",h.length,d.original)},PartialStatement:function(t){this.usePartial=!0;var o=t.program;o&&(o=this.compileProgram(t.program));var h=t.params;if(h.length>1)throw new W.default("Unsupported number of partial arguments: "+h.length,t);h.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):h.push({type:"PathExpression",parts:[],depth:0}));var d=t.name.original,p=t.name.type==="SubExpression";p&&this.accept(t.name),this.setupFullMustacheParams(t,o,void 0,!0);var c=t.indent||"";this.options.preventIndent&&c&&(this.opcode("appendContent",c),c=""),this.opcode("invokePartial",p,d,c),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){Ke(t);var o=this.classifySexpr(t);o==="simple"?this.simpleSexpr(t):o==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,o,h){var d=t.path,p=d.parts[0],c=o!=null||h!=null;this.opcode("getContext",d.depth),this.opcode("pushProgram",o),this.opcode("pushProgram",h),d.strict=!0,this.accept(d),this.opcode("invokeAmbiguous",p,c)},simpleSexpr:function(t){var o=t.path;o.strict=!0,this.accept(o),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,o,h){var d=this.setupFullMustacheParams(t,o,h),p=t.path,c=p.parts[0];if(this.options.knownHelpers[c])this.opcode("invokeKnownHelper",d.length,c);else{if(this.options.knownHelpersOnly)throw new W.default("You specified knownHelpersOnly, but used the unknown helper "+c,t);p.strict=!0,p.falsy=!0,this.accept(p),this.opcode("invokeHelper",d.length,p.original,V.default.helpers.simpleId(p))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var o=t.parts[0],h=V.default.helpers.scopedId(t),d=!t.depth&&!h&&this.blockParamIndex(o);d?this.opcode("lookupBlockParam",d,t.parts):o?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,h):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var o=t.pairs,h=0,d=o.length;for(this.opcode("pushHash");h<d;h++)this.pushParam(o[h].value);for(;h--;)this.opcode("assignToHash",o[h].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:pr.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var o=V.default.helpers.simpleId(t.path),h=o&&!!this.blockParamIndex(t.path.parts[0]),d=!h&&V.default.helpers.helperExpression(t),p=!h&&(d||o);if(p&&!d){var c=t.path.parts[0],u=this.options;u.knownHelpers[c]?d=!0:u.knownHelpersOnly&&(p=!1)}return d?"helper":p?"ambiguous":"simple"},pushParams:function(t){for(var o=0,h=t.length;o<h;o++)this.pushParam(t[o])},pushParam:function(t){var o=t.value!=null?t.value:t.original||"";if(this.stringParams)o.replace&&(o=o.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",o,t.type),t.type==="SubExpression"&&this.accept(t);else{if(this.trackIds){var h=void 0;if(t.parts&&!V.default.helpers.scopedId(t)&&!t.depth&&(h=this.blockParamIndex(t.parts[0])),h){var d=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",h,d)}else o=t.original||o,o.replace&&(o=o.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,o)}this.accept(t)}},setupFullMustacheParams:function(t,o,h,d){var p=t.params;return this.pushParams(p),this.opcode("pushProgram",o),this.opcode("pushProgram",h),t.hash?this.accept(t.hash):this.opcode("emptyHash",d),p},blockParamIndex:function(t){for(var o=0,h=this.options.blockParams.length;o<h;o++){var d=this.options.blockParams[o],p=d&&K.indexOf(d,t);if(d&&p>=0)return[o,p]}}};function hr(e,t,o){if(e==null||typeof e!="string"&&e.type!=="Program")throw new W.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var h=o.parse(e,t),d=new o.Compiler().compile(h,t);return new o.JavaScriptCompiler().compile(d,t)}function dr(e,t,o){if(t===void 0&&(t={}),e==null||typeof e!="string"&&e.type!=="Program")throw new W.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);t=K.extend({},t),"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var h=void 0;function d(){var c=o.parse(e,t),u=new o.Compiler().compile(c,t),i=new o.JavaScriptCompiler().compile(u,t,void 0,!0);return o.template(i)}function p(c,u){return h||(h=d()),h.call(this,c,u)}return p._setup=function(c){return h||(h=d()),h._setup(c)},p._child=function(c,u,i,l){return h||(h=d()),h._child(c,u,i,l)},p}function mt(e,t){if(e===t)return!0;if(K.isArray(e)&&K.isArray(t)&&e.length===t.length){for(var o=0;o<e.length;o++)if(!mt(e[o],t[o]))return!1;return!0}}function Ke(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}var Ne={exports:{}},Be={exports:{}},F={},ie={},Y={},X={},ze;function fr(){if(ze)return X;ze=1;var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return X.encode=function(t){if(0<=t&&t<e.length)return e[t];throw new TypeError("Must be between 0 and 63: "+t)},X.decode=function(t){var o=65,h=90,d=97,p=122,c=48,u=57,i=43,l=47,a=26,f=52;return o<=t&&t<=h?t-o:d<=t&&t<=p?t-d+a:c<=t&&t<=u?t-c+f:t==i?62:t==l?63:-1},X}var Je;function gt(){if(Je)return Y;Je=1;var e=fr(),t=5,o=1<<t,h=o-1,d=o;function p(u){return u<0?(-u<<1)+1:(u<<1)+0}function c(u){var i=(u&1)===1,l=u>>1;return i?-l:l}return Y.encode=function(i){var l="",a,f=p(i);do a=f&h,f>>>=t,f>0&&(a|=d),l+=e.encode(a);while(f>0);return l},Y.decode=function(i,l,a){var f=i.length,n=0,s=0,r,m;do{if(l>=f)throw new Error("Expected more digits in base 64 VLQ value.");if(m=e.decode(i.charCodeAt(l++)),m===-1)throw new Error("Invalid base64 digit: "+i.charAt(l-1));r=!!(m&d),m&=h,n=n+(m<<s),s+=t}while(r);a.value=c(n),a.rest=l},Y}var ae={},je;function Q(){return je||(je=1,function(e){function t(g,y,L){if(y in g)return g[y];if(arguments.length===3)return L;throw new Error('"'+y+'" is a required argument.')}e.getArg=t;var o=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,h=/^data:.+\,.+$/;function d(g){var y=g.match(o);return y?{scheme:y[1],auth:y[2],host:y[3],port:y[4],path:y[5]}:null}e.urlParse=d;function p(g){var y="";return g.scheme&&(y+=g.scheme+":"),y+="//",g.auth&&(y+=g.auth+"@"),g.host&&(y+=g.host),g.port&&(y+=":"+g.port),g.path&&(y+=g.path),y}e.urlGenerate=p;function c(g){var y=g,L=d(g);if(L){if(!L.path)return g;y=L.path}for(var k=e.isAbsolute(y),C=y.split(/\/+/),M,P=0,E=C.length-1;E>=0;E--)M=C[E],M==="."?C.splice(E,1):M===".."?P++:P>0&&(M===""?(C.splice(E+1,P),P=0):(C.splice(E,2),P--));return y=C.join("/"),y===""&&(y=k?"/":"."),L?(L.path=y,p(L)):y}e.normalize=c;function u(g,y){g===""&&(g="."),y===""&&(y=".");var L=d(y),k=d(g);if(k&&(g=k.path||"/"),L&&!L.scheme)return k&&(L.scheme=k.scheme),p(L);if(L||y.match(h))return y;if(k&&!k.host&&!k.path)return k.host=y,p(k);var C=y.charAt(0)==="/"?y:c(g.replace(/\/+$/,"")+"/"+y);return k?(k.path=C,p(k)):C}e.join=u,e.isAbsolute=function(g){return g.charAt(0)==="/"||o.test(g)};function i(g,y){g===""&&(g="."),g=g.replace(/\/$/,"");for(var L=0;y.indexOf(g+"/")!==0;){var k=g.lastIndexOf("/");if(k<0||(g=g.slice(0,k),g.match(/^([^\/]+:\/)?\/*$/)))return y;++L}return Array(L+1).join("../")+y.substr(g.length+1)}e.relative=i;var l=function(){var g=Object.create(null);return!("__proto__"in g)}();function a(g){return g}function f(g){return s(g)?"$"+g:g}e.toSetString=l?a:f;function n(g){return s(g)?g.slice(1):g}e.fromSetString=l?a:n;function s(g){if(!g)return!1;var y=g.length;if(y<9||g.charCodeAt(y-1)!==95||g.charCodeAt(y-2)!==95||g.charCodeAt(y-3)!==111||g.charCodeAt(y-4)!==116||g.charCodeAt(y-5)!==111||g.charCodeAt(y-6)!==114||g.charCodeAt(y-7)!==112||g.charCodeAt(y-8)!==95||g.charCodeAt(y-9)!==95)return!1;for(var L=y-10;L>=0;L--)if(g.charCodeAt(L)!==36)return!1;return!0}function r(g,y,L){var k=v(g.source,y.source);return k!==0||(k=g.originalLine-y.originalLine,k!==0)||(k=g.originalColumn-y.originalColumn,k!==0||L)||(k=g.generatedColumn-y.generatedColumn,k!==0)||(k=g.generatedLine-y.generatedLine,k!==0)?k:v(g.name,y.name)}e.compareByOriginalPositions=r;function m(g,y,L){var k=g.generatedLine-y.generatedLine;return k!==0||(k=g.generatedColumn-y.generatedColumn,k!==0||L)||(k=v(g.source,y.source),k!==0)||(k=g.originalLine-y.originalLine,k!==0)||(k=g.originalColumn-y.originalColumn,k!==0)?k:v(g.name,y.name)}e.compareByGeneratedPositionsDeflated=m;function v(g,y){return g===y?0:g===null?1:y===null?-1:g>y?1:-1}function S(g,y){var L=g.generatedLine-y.generatedLine;return L!==0||(L=g.generatedColumn-y.generatedColumn,L!==0)||(L=v(g.source,y.source),L!==0)||(L=g.originalLine-y.originalLine,L!==0)||(L=g.originalColumn-y.originalColumn,L!==0)?L:v(g.name,y.name)}e.compareByGeneratedPositionsInflated=S;function _(g){return JSON.parse(g.replace(/^\)]}'[^\n]*\n/,""))}e.parseSourceMapInput=_;function b(g,y,L){if(y=y||"",g&&(g[g.length-1]!=="/"&&y[0]!=="/"&&(g+="/"),y=g+y),L){var k=d(L);if(!k)throw new Error("sourceMapURL could not be parsed");if(k.path){var C=k.path.lastIndexOf("/");C>=0&&(k.path=k.path.substring(0,C+1))}y=u(p(k),y)}return c(y)}e.computeSourceURL=b}(ae)),ae}var se={},Qe;function vt(){if(Qe)return se;Qe=1;var e=Q(),t=Object.prototype.hasOwnProperty,o=typeof Map<"u";function h(){this._array=[],this._set=o?new Map:Object.create(null)}return h.fromArray=function(p,c){for(var u=new h,i=0,l=p.length;i<l;i++)u.add(p[i],c);return u},h.prototype.size=function(){return o?this._set.size:Object.getOwnPropertyNames(this._set).length},h.prototype.add=function(p,c){var u=o?p:e.toSetString(p),i=o?this.has(p):t.call(this._set,u),l=this._array.length;(!i||c)&&this._array.push(p),i||(o?this._set.set(p,l):this._set[u]=l)},h.prototype.has=function(p){if(o)return this._set.has(p);var c=e.toSetString(p);return t.call(this._set,c)},h.prototype.indexOf=function(p){if(o){var c=this._set.get(p);if(c>=0)return c}else{var u=e.toSetString(p);if(t.call(this._set,u))return this._set[u]}throw new Error('"'+p+'" is not in the set.')},h.prototype.at=function(p){if(p>=0&&p<this._array.length)return this._array[p];throw new Error("No element indexed by "+p)},h.prototype.toArray=function(){return this._array.slice()},se.ArraySet=h,se}var oe={},Ye;function mr(){if(Ye)return oe;Ye=1;var e=Q();function t(h,d){var p=h.generatedLine,c=d.generatedLine,u=h.generatedColumn,i=d.generatedColumn;return c>p||c==p&&i>=u||e.compareByGeneratedPositionsInflated(h,d)<=0}function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}return o.prototype.unsortedForEach=function(d,p){this._array.forEach(d,p)},o.prototype.add=function(d){t(this._last,d)?(this._last=d,this._array.push(d)):(this._sorted=!1,this._array.push(d))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(e.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},oe.MappingList=o,oe}var Xe;function _t(){if(Xe)return ie;Xe=1;var e=gt(),t=Q(),o=vt().ArraySet,h=mr().MappingList;function d(p){p||(p={}),this._file=t.getArg(p,"file",null),this._sourceRoot=t.getArg(p,"sourceRoot",null),this._skipValidation=t.getArg(p,"skipValidation",!1),this._sources=new o,this._names=new o,this._mappings=new h,this._sourcesContents=null}return d.prototype._version=3,d.fromSourceMap=function(c){var u=c.sourceRoot,i=new d({file:c.file,sourceRoot:u});return c.eachMapping(function(l){var a={generated:{line:l.generatedLine,column:l.generatedColumn}};l.source!=null&&(a.source=l.source,u!=null&&(a.source=t.relative(u,a.source)),a.original={line:l.originalLine,column:l.originalColumn},l.name!=null&&(a.name=l.name)),i.addMapping(a)}),c.sources.forEach(function(l){var a=l;u!==null&&(a=t.relative(u,l)),i._sources.has(a)||i._sources.add(a);var f=c.sourceContentFor(l);f!=null&&i.setSourceContent(l,f)}),i},d.prototype.addMapping=function(c){var u=t.getArg(c,"generated"),i=t.getArg(c,"original",null),l=t.getArg(c,"source",null),a=t.getArg(c,"name",null);this._skipValidation||this._validateMapping(u,i,l,a),l!=null&&(l=String(l),this._sources.has(l)||this._sources.add(l)),a!=null&&(a=String(a),this._names.has(a)||this._names.add(a)),this._mappings.add({generatedLine:u.line,generatedColumn:u.column,originalLine:i!=null&&i.line,originalColumn:i!=null&&i.column,source:l,name:a})},d.prototype.setSourceContent=function(c,u){var i=c;this._sourceRoot!=null&&(i=t.relative(this._sourceRoot,i)),u!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[t.toSetString(i)]=u):this._sourcesContents&&(delete this._sourcesContents[t.toSetString(i)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},d.prototype.applySourceMap=function(c,u,i){var l=u;if(u==null){if(c.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);l=c.file}var a=this._sourceRoot;a!=null&&(l=t.relative(a,l));var f=new o,n=new o;this._mappings.unsortedForEach(function(s){if(s.source===l&&s.originalLine!=null){var r=c.originalPositionFor({line:s.originalLine,column:s.originalColumn});r.source!=null&&(s.source=r.source,i!=null&&(s.source=t.join(i,s.source)),a!=null&&(s.source=t.relative(a,s.source)),s.originalLine=r.line,s.originalColumn=r.column,r.name!=null&&(s.name=r.name))}var m=s.source;m!=null&&!f.has(m)&&f.add(m);var v=s.name;v!=null&&!n.has(v)&&n.add(v)},this),this._sources=f,this._names=n,c.sources.forEach(function(s){var r=c.sourceContentFor(s);r!=null&&(i!=null&&(s=t.join(i,s)),a!=null&&(s=t.relative(a,s)),this.setSourceContent(s,r))},this)},d.prototype._validateMapping=function(c,u,i,l){if(u&&typeof u.line!="number"&&typeof u.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(c&&"line"in c&&"column"in c&&c.line>0&&c.column>=0&&!u&&!i&&!l)){if(c&&"line"in c&&"column"in c&&u&&"line"in u&&"column"in u&&c.line>0&&c.column>=0&&u.line>0&&u.column>=0&&i)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:c,source:i,original:u,name:l}))}},d.prototype._serializeMappings=function(){for(var c=0,u=1,i=0,l=0,a=0,f=0,n="",s,r,m,v,S=this._mappings.toArray(),_=0,b=S.length;_<b;_++){if(r=S[_],s="",r.generatedLine!==u)for(c=0;r.generatedLine!==u;)s+=";",u++;else if(_>0){if(!t.compareByGeneratedPositionsInflated(r,S[_-1]))continue;s+=","}s+=e.encode(r.generatedColumn-c),c=r.generatedColumn,r.source!=null&&(v=this._sources.indexOf(r.source),s+=e.encode(v-f),f=v,s+=e.encode(r.originalLine-1-l),l=r.originalLine-1,s+=e.encode(r.originalColumn-i),i=r.originalColumn,r.name!=null&&(m=this._names.indexOf(r.name),s+=e.encode(m-a),a=m)),n+=s}return n},d.prototype._generateSourcesContent=function(c,u){return c.map(function(i){if(!this._sourcesContents)return null;u!=null&&(i=t.relative(u,i));var l=t.toSetString(i);return Object.prototype.hasOwnProperty.call(this._sourcesContents,l)?this._sourcesContents[l]:null},this)},d.prototype.toJSON=function(){var c={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(c.file=this._file),this._sourceRoot!=null&&(c.sourceRoot=this._sourceRoot),this._sourcesContents&&(c.sourcesContent=this._generateSourcesContent(c.sources,c.sourceRoot)),c},d.prototype.toString=function(){return JSON.stringify(this.toJSON())},ie.SourceMapGenerator=d,ie}var G={},le={},Ze;function gr(){return Ze||(Ze=1,function(e){e.GREATEST_LOWER_BOUND=1,e.LEAST_UPPER_BOUND=2;function t(o,h,d,p,c,u){var i=Math.floor((h-o)/2)+o,l=c(d,p[i],!0);return l===0?i:l>0?h-i>1?t(i,h,d,p,c,u):u==e.LEAST_UPPER_BOUND?h<p.length?h:-1:i:i-o>1?t(o,i,d,p,c,u):u==e.LEAST_UPPER_BOUND?i:o<0?-1:o}e.search=function(h,d,p,c){if(d.length===0)return-1;var u=t(-1,d.length,h,d,p,c||e.GREATEST_LOWER_BOUND);if(u<0)return-1;for(;u-1>=0&&p(d[u],d[u-1],!0)===0;)--u;return u}}(le)),le}var ue={},$e;function vr(){if($e)return ue;$e=1;function e(h,d,p){var c=h[d];h[d]=h[p],h[p]=c}function t(h,d){return Math.round(h+Math.random()*(d-h))}function o(h,d,p,c){if(p<c){var u=t(p,c),i=p-1;e(h,u,c);for(var l=h[c],a=p;a<c;a++)d(h[a],l)<=0&&(i+=1,e(h,i,a));e(h,i+1,a);var f=i+1;o(h,d,p,f-1),o(h,d,f+1,c)}}return ue.quickSort=function(h,d){o(h,d,0,h.length-1)},ue}var et;function _r(){if(et)return G;et=1;var e=Q(),t=gr(),o=vt().ArraySet,h=gt(),d=vr().quickSort;function p(l,a){var f=l;return typeof l=="string"&&(f=e.parseSourceMapInput(l)),f.sections!=null?new i(f,a):new c(f,a)}p.fromSourceMap=function(l,a){return c.fromSourceMap(l,a)},p.prototype._version=3,p.prototype.__generatedMappings=null,Object.defineProperty(p.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),p.prototype.__originalMappings=null,Object.defineProperty(p.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),p.prototype._charIsMappingSeparator=function(a,f){var n=a.charAt(f);return n===";"||n===","},p.prototype._parseMappings=function(a,f){throw new Error("Subclasses must implement _parseMappings")},p.GENERATED_ORDER=1,p.ORIGINAL_ORDER=2,p.GREATEST_LOWER_BOUND=1,p.LEAST_UPPER_BOUND=2,p.prototype.eachMapping=function(a,f,n){var s=f||null,r=n||p.GENERATED_ORDER,m;switch(r){case p.GENERATED_ORDER:m=this._generatedMappings;break;case p.ORIGINAL_ORDER:m=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var v=this.sourceRoot;m.map(function(S){var _=S.source===null?null:this._sources.at(S.source);return _=e.computeSourceURL(v,_,this._sourceMapURL),{source:_,generatedLine:S.generatedLine,generatedColumn:S.generatedColumn,originalLine:S.originalLine,originalColumn:S.originalColumn,name:S.name===null?null:this._names.at(S.name)}},this).forEach(a,s)},p.prototype.allGeneratedPositionsFor=function(a){var f=e.getArg(a,"line"),n={source:e.getArg(a,"source"),originalLine:f,originalColumn:e.getArg(a,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var s=[],r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",e.compareByOriginalPositions,t.LEAST_UPPER_BOUND);if(r>=0){var m=this._originalMappings[r];if(a.column===void 0)for(var v=m.originalLine;m&&m.originalLine===v;)s.push({line:e.getArg(m,"generatedLine",null),column:e.getArg(m,"generatedColumn",null),lastColumn:e.getArg(m,"lastGeneratedColumn",null)}),m=this._originalMappings[++r];else for(var S=m.originalColumn;m&&m.originalLine===f&&m.originalColumn==S;)s.push({line:e.getArg(m,"generatedLine",null),column:e.getArg(m,"generatedColumn",null),lastColumn:e.getArg(m,"lastGeneratedColumn",null)}),m=this._originalMappings[++r]}return s},G.SourceMapConsumer=p;function c(l,a){var f=l;typeof l=="string"&&(f=e.parseSourceMapInput(l));var n=e.getArg(f,"version"),s=e.getArg(f,"sources"),r=e.getArg(f,"names",[]),m=e.getArg(f,"sourceRoot",null),v=e.getArg(f,"sourcesContent",null),S=e.getArg(f,"mappings"),_=e.getArg(f,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);m&&(m=e.normalize(m)),s=s.map(String).map(e.normalize).map(function(b){return m&&e.isAbsolute(m)&&e.isAbsolute(b)?e.relative(m,b):b}),this._names=o.fromArray(r.map(String),!0),this._sources=o.fromArray(s,!0),this._absoluteSources=this._sources.toArray().map(function(b){return e.computeSourceURL(m,b,a)}),this.sourceRoot=m,this.sourcesContent=v,this._mappings=S,this._sourceMapURL=a,this.file=_}c.prototype=Object.create(p.prototype),c.prototype.consumer=p,c.prototype._findSourceIndex=function(l){var a=l;if(this.sourceRoot!=null&&(a=e.relative(this.sourceRoot,a)),this._sources.has(a))return this._sources.indexOf(a);var f;for(f=0;f<this._absoluteSources.length;++f)if(this._absoluteSources[f]==l)return f;return-1},c.fromSourceMap=function(a,f){var n=Object.create(c.prototype),s=n._names=o.fromArray(a._names.toArray(),!0),r=n._sources=o.fromArray(a._sources.toArray(),!0);n.sourceRoot=a._sourceRoot,n.sourcesContent=a._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=a._file,n._sourceMapURL=f,n._absoluteSources=n._sources.toArray().map(function(L){return e.computeSourceURL(n.sourceRoot,L,f)});for(var m=a._mappings.toArray().slice(),v=n.__generatedMappings=[],S=n.__originalMappings=[],_=0,b=m.length;_<b;_++){var g=m[_],y=new u;y.generatedLine=g.generatedLine,y.generatedColumn=g.generatedColumn,g.source&&(y.source=r.indexOf(g.source),y.originalLine=g.originalLine,y.originalColumn=g.originalColumn,g.name&&(y.name=s.indexOf(g.name)),S.push(y)),v.push(y)}return d(n.__originalMappings,e.compareByOriginalPositions),n},c.prototype._version=3,Object.defineProperty(c.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function u(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}c.prototype._parseMappings=function(a,f){for(var n=1,s=0,r=0,m=0,v=0,S=0,_=a.length,b=0,g={},y={},L=[],k=[],C,M,P,E,U;b<_;)if(a.charAt(b)===";")n++,b++,s=0;else if(a.charAt(b)===",")b++;else{for(C=new u,C.generatedLine=n,E=b;E<_&&!this._charIsMappingSeparator(a,E);E++);if(M=a.slice(b,E),P=g[M],P)b+=M.length;else{for(P=[];b<E;)h.decode(a,b,y),U=y.value,b=y.rest,P.push(U);if(P.length===2)throw new Error("Found a source, but no line and column");if(P.length===3)throw new Error("Found a source and line, but no column");g[M]=P}C.generatedColumn=s+P[0],s=C.generatedColumn,P.length>1&&(C.source=v+P[1],v+=P[1],C.originalLine=r+P[2],r=C.originalLine,C.originalLine+=1,C.originalColumn=m+P[3],m=C.originalColumn,P.length>4&&(C.name=S+P[4],S+=P[4])),k.push(C),typeof C.originalLine=="number"&&L.push(C)}d(k,e.compareByGeneratedPositionsDeflated),this.__generatedMappings=k,d(L,e.compareByOriginalPositions),this.__originalMappings=L},c.prototype._findMapping=function(a,f,n,s,r,m){if(a[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+a[n]);if(a[s]<0)throw new TypeError("Column must be greater than or equal to 0, got "+a[s]);return t.search(a,f,r,m)},c.prototype.computeColumnSpans=function(){for(var a=0;a<this._generatedMappings.length;++a){var f=this._generatedMappings[a];if(a+1<this._generatedMappings.length){var n=this._generatedMappings[a+1];if(f.generatedLine===n.generatedLine){f.lastGeneratedColumn=n.generatedColumn-1;continue}}f.lastGeneratedColumn=1/0}},c.prototype.originalPositionFor=function(a){var f={generatedLine:e.getArg(a,"line"),generatedColumn:e.getArg(a,"column")},n=this._findMapping(f,this._generatedMappings,"generatedLine","generatedColumn",e.compareByGeneratedPositionsDeflated,e.getArg(a,"bias",p.GREATEST_LOWER_BOUND));if(n>=0){var s=this._generatedMappings[n];if(s.generatedLine===f.generatedLine){var r=e.getArg(s,"source",null);r!==null&&(r=this._sources.at(r),r=e.computeSourceURL(this.sourceRoot,r,this._sourceMapURL));var m=e.getArg(s,"name",null);return m!==null&&(m=this._names.at(m)),{source:r,line:e.getArg(s,"originalLine",null),column:e.getArg(s,"originalColumn",null),name:m}}}return{source:null,line:null,column:null,name:null}},c.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(a){return a==null}):!1},c.prototype.sourceContentFor=function(a,f){if(!this.sourcesContent)return null;var n=this._findSourceIndex(a);if(n>=0)return this.sourcesContent[n];var s=a;this.sourceRoot!=null&&(s=e.relative(this.sourceRoot,s));var r;if(this.sourceRoot!=null&&(r=e.urlParse(this.sourceRoot))){var m=s.replace(/^file:\/\//,"");if(r.scheme=="file"&&this._sources.has(m))return this.sourcesContent[this._sources.indexOf(m)];if((!r.path||r.path=="/")&&this._sources.has("/"+s))return this.sourcesContent[this._sources.indexOf("/"+s)]}if(f)return null;throw new Error('"'+s+'" is not in the SourceMap.')},c.prototype.generatedPositionFor=function(a){var f=e.getArg(a,"source");if(f=this._findSourceIndex(f),f<0)return{line:null,column:null,lastColumn:null};var n={source:f,originalLine:e.getArg(a,"line"),originalColumn:e.getArg(a,"column")},s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",e.compareByOriginalPositions,e.getArg(a,"bias",p.GREATEST_LOWER_BOUND));if(s>=0){var r=this._originalMappings[s];if(r.source===n.source)return{line:e.getArg(r,"generatedLine",null),column:e.getArg(r,"generatedColumn",null),lastColumn:e.getArg(r,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},G.BasicSourceMapConsumer=c;function i(l,a){var f=l;typeof l=="string"&&(f=e.parseSourceMapInput(l));var n=e.getArg(f,"version"),s=e.getArg(f,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new o,this._names=new o;var r={line:-1,column:0};this._sections=s.map(function(m){if(m.url)throw new Error("Support for url field in sections not implemented.");var v=e.getArg(m,"offset"),S=e.getArg(v,"line"),_=e.getArg(v,"column");if(S<r.line||S===r.line&&_<r.column)throw new Error("Section offsets must be ordered and non-overlapping.");return r=v,{generatedOffset:{generatedLine:S+1,generatedColumn:_+1},consumer:new p(e.getArg(m,"map"),a)}})}return i.prototype=Object.create(p.prototype),i.prototype.constructor=p,i.prototype._version=3,Object.defineProperty(i.prototype,"sources",{get:function(){for(var l=[],a=0;a<this._sections.length;a++)for(var f=0;f<this._sections[a].consumer.sources.length;f++)l.push(this._sections[a].consumer.sources[f]);return l}}),i.prototype.originalPositionFor=function(a){var f={generatedLine:e.getArg(a,"line"),generatedColumn:e.getArg(a,"column")},n=t.search(f,this._sections,function(r,m){var v=r.generatedLine-m.generatedOffset.generatedLine;return v||r.generatedColumn-m.generatedOffset.generatedColumn}),s=this._sections[n];return s?s.consumer.originalPositionFor({line:f.generatedLine-(s.generatedOffset.generatedLine-1),column:f.generatedColumn-(s.generatedOffset.generatedLine===f.generatedLine?s.generatedOffset.generatedColumn-1:0),bias:a.bias}):{source:null,line:null,column:null,name:null}},i.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(a){return a.consumer.hasContentsOfAllSources()})},i.prototype.sourceContentFor=function(a,f){for(var n=0;n<this._sections.length;n++){var s=this._sections[n],r=s.consumer.sourceContentFor(a,!0);if(r)return r}if(f)return null;throw new Error('"'+a+'" is not in the SourceMap.')},i.prototype.generatedPositionFor=function(a){for(var f=0;f<this._sections.length;f++){var n=this._sections[f];if(n.consumer._findSourceIndex(e.getArg(a,"source"))!==-1){var s=n.consumer.generatedPositionFor(a);if(s){var r={line:s.line+(n.generatedOffset.generatedLine-1),column:s.column+(n.generatedOffset.generatedLine===s.line?n.generatedOffset.generatedColumn-1:0)};return r}}}return{line:null,column:null}},i.prototype._parseMappings=function(a,f){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var s=this._sections[n],r=s.consumer._generatedMappings,m=0;m<r.length;m++){var v=r[m],S=s.consumer._sources.at(v.source);S=e.computeSourceURL(s.consumer.sourceRoot,S,this._sourceMapURL),this._sources.add(S),S=this._sources.indexOf(S);var _=null;v.name&&(_=s.consumer._names.at(v.name),this._names.add(_),_=this._names.indexOf(_));var b={source:S,generatedLine:v.generatedLine+(s.generatedOffset.generatedLine-1),generatedColumn:v.generatedColumn+(s.generatedOffset.generatedLine===v.generatedLine?s.generatedOffset.generatedColumn-1:0),originalLine:v.originalLine,originalColumn:v.originalColumn,name:_};this.__generatedMappings.push(b),typeof b.originalLine=="number"&&this.__originalMappings.push(b)}d(this.__generatedMappings,e.compareByGeneratedPositionsDeflated),d(this.__originalMappings,e.compareByOriginalPositions)},G.IndexedSourceMapConsumer=i,G}var ce={},tt;function yr(){if(tt)return ce;tt=1;var e=_t().SourceMapGenerator,t=Q(),o=/(\r?\n)/,h=10,d="$$$isSourceNode$$$";function p(c,u,i,l,a){this.children=[],this.sourceContents={},this.line=c??null,this.column=u??null,this.source=i??null,this.name=a??null,this[d]=!0,l!=null&&this.add(l)}return p.fromStringWithSourceMap=function(u,i,l){var a=new p,f=u.split(o),n=0,s=function(){var _=g(),b=g()||"";return _+b;function g(){return n<f.length?f[n++]:void 0}},r=1,m=0,v=null;return i.eachMapping(function(_){if(v!==null)if(r<_.generatedLine)S(v,s()),r++,m=0;else{var b=f[n]||"",g=b.substr(0,_.generatedColumn-m);f[n]=b.substr(_.generatedColumn-m),m=_.generatedColumn,S(v,g),v=_;return}for(;r<_.generatedLine;)a.add(s()),r++;if(m<_.generatedColumn){var b=f[n]||"";a.add(b.substr(0,_.generatedColumn)),f[n]=b.substr(_.generatedColumn),m=_.generatedColumn}v=_},this),n<f.length&&(v&&S(v,s()),a.add(f.splice(n).join(""))),i.sources.forEach(function(_){var b=i.sourceContentFor(_);b!=null&&(l!=null&&(_=t.join(l,_)),a.setSourceContent(_,b))}),a;function S(_,b){if(_===null||_.source===void 0)a.add(b);else{var g=l?t.join(l,_.source):_.source;a.add(new p(_.originalLine,_.originalColumn,g,b,_.name))}}},p.prototype.add=function(u){if(Array.isArray(u))u.forEach(function(i){this.add(i)},this);else if(u[d]||typeof u=="string")u&&this.children.push(u);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+u);return this},p.prototype.prepend=function(u){if(Array.isArray(u))for(var i=u.length-1;i>=0;i--)this.prepend(u[i]);else if(u[d]||typeof u=="string")this.children.unshift(u);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+u);return this},p.prototype.walk=function(u){for(var i,l=0,a=this.children.length;l<a;l++)i=this.children[l],i[d]?i.walk(u):i!==""&&u(i,{source:this.source,line:this.line,column:this.column,name:this.name})},p.prototype.join=function(u){var i,l,a=this.children.length;if(a>0){for(i=[],l=0;l<a-1;l++)i.push(this.children[l]),i.push(u);i.push(this.children[l]),this.children=i}return this},p.prototype.replaceRight=function(u,i){var l=this.children[this.children.length-1];return l[d]?l.replaceRight(u,i):typeof l=="string"?this.children[this.children.length-1]=l.replace(u,i):this.children.push("".replace(u,i)),this},p.prototype.setSourceContent=function(u,i){this.sourceContents[t.toSetString(u)]=i},p.prototype.walkSourceContents=function(u){for(var i=0,l=this.children.length;i<l;i++)this.children[i][d]&&this.children[i].walkSourceContents(u);for(var a=Object.keys(this.sourceContents),i=0,l=a.length;i<l;i++)u(t.fromSetString(a[i]),this.sourceContents[a[i]])},p.prototype.toString=function(){var u="";return this.walk(function(i){u+=i}),u},p.prototype.toStringWithSourceMap=function(u){var i={code:"",line:1,column:0},l=new e(u),a=!1,f=null,n=null,s=null,r=null;return this.walk(function(m,v){i.code+=m,v.source!==null&&v.line!==null&&v.column!==null?((f!==v.source||n!==v.line||s!==v.column||r!==v.name)&&l.addMapping({source:v.source,original:{line:v.line,column:v.column},generated:{line:i.line,column:i.column},name:v.name}),f=v.source,n=v.line,s=v.column,r=v.name,a=!0):a&&(l.addMapping({generated:{line:i.line,column:i.column}}),f=null,a=!1);for(var S=0,_=m.length;S<_;S++)m.charCodeAt(S)===h?(i.line++,i.column=0,S+1===_?(f=null,a=!1):a&&l.addMapping({source:v.source,original:{line:v.line,column:v.column},generated:{line:i.line,column:i.column},name:v.name})):i.column++}),this.walkSourceContents(function(m,v){l.setSourceContent(m,v)}),{code:i.code,map:l}},ce.SourceNode=p,ce}var nt;function Sr(){return nt||(nt=1,F.SourceMapGenerator=_t().SourceMapGenerator,F.SourceMapConsumer=_r().SourceMapConsumer,F.SourceNode=yr().SourceNode),F}(function(e,t){t.__esModule=!0;var o=w,h=void 0;try{var d=Sr();h=d.SourceNode}catch{}h||(h=function(u,i,l,a){this.src="",a&&this.add(a)},h.prototype={add:function(i){o.isArray(i)&&(i=i.join("")),this.src+=i},prepend:function(i){o.isArray(i)&&(i=i.join("")),this.src=i+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function p(u,i,l){if(o.isArray(u)){for(var a=[],f=0,n=u.length;f<n;f++)a.push(i.wrap(u[f],l));return a}else if(typeof u=="boolean"||typeof u=="number")return u+"";return u}function c(u){this.srcFile=u,this.source=[]}c.prototype={isEmpty:function(){return!this.source.length},prepend:function(i,l){this.source.unshift(this.wrap(i,l))},push:function(i,l){this.source.push(this.wrap(i,l))},merge:function(){var i=this.empty();return this.each(function(l){i.add(["  ",l,`
`])}),i},each:function(i){for(var l=0,a=this.source.length;l<a;l++)i(this.source[l])},empty:function(){var i=this.currentLocation||{start:{}};return new h(i.start.line,i.start.column,this.srcFile)},wrap:function(i){var l=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return i instanceof h?i:(i=p(i,this,l),new h(l.start.line,l.start.column,this.srcFile,i))},functionCall:function(i,l,a){return a=this.generateList(a),this.wrap([i,l?"."+l+"(":"(",a,")"])},quotedString:function(i){return'"'+(i+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(i){var l=this,a=[];Object.keys(i).forEach(function(n){var s=p(i[n],l);s!=="undefined"&&a.push([l.quotedString(n),":",s])});var f=this.generateList(a);return f.prepend("{"),f.add("}"),f},generateList:function(i){for(var l=this.empty(),a=0,f=i.length;a<f;a++)a&&l.add(","),l.add(p(i[a],this));return l},generateArray:function(i){var l=this.generateList(i);return l.prepend("["),l.add("]"),l}},t.default=c,e.exports=t.default})(Be,Be.exports);var br=Be.exports;(function(e,t){t.__esModule=!0;function o(n){return n&&n.__esModule?n:{default:n}}var h=x,d=O,p=o(d),c=w,u=br,i=o(u);function l(n){this.value=n}function a(){}a.prototype={nameLookup:function(s,r){return this.internalNameLookup(s,r)},depthedLookup:function(s){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(s),")"]},compilerInfo:function(){var s=h.COMPILER_REVISION,r=h.REVISION_CHANGES[s];return[s,r]},appendToBuffer:function(s,r,m){return c.isArray(s)||(s=[s]),s=this.source.wrap(s,r),this.environment.isSimple?["return ",s,";"]:m?["buffer += ",s,";"]:(s.appendToBuffer=!0,s)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(s,r){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",s,",",JSON.stringify(r),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(s,r,m,v){this.environment=s,this.options=r,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!v,this.name=this.environment.name,this.isChild=!!m,this.context=m||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(s,r),this.useDepths=this.useDepths||s.useDepths||s.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||s.useBlockParams;var S=s.opcodes,_=void 0,b=void 0,g=void 0,y=void 0;for(g=0,y=S.length;g<y;g++)_=S[g],this.source.currentLocation=_.loc,b=b||_.loc,this[_.opcode].apply(this,_.args);if(this.source.currentLocation=b,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new p.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),v?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var L=this.createFunctionContext(v);if(this.isChild)return L;var k={compiler:this.compilerInfo(),main:L};this.decorators&&(k.main_d=this.decorators,k.useDecorators=!0);var C=this.context,M=C.programs,P=C.decorators;for(g=0,y=M.length;g<y;g++)M[g]&&(k[g]=M[g],P[g]&&(k[g+"_d"]=P[g],k.useDecorators=!0));return this.environment.usePartial&&(k.usePartial=!0),this.options.data&&(k.useData=!0),this.useDepths&&(k.useDepths=!0),this.useBlockParams&&(k.useBlockParams=!0),this.options.compat&&(k.compat=!0),v?k.compilerOptions=this.options:(k.compiler=JSON.stringify(k.compiler),this.source.currentLocation={start:{line:1,column:0}},k=this.objectLiteral(k),r.srcName?(k=k.toStringWithSourceMap({file:r.destName}),k.map=k.map&&k.map.toString()):k=k.toString()),k},preamble:function(){this.lastContext=0,this.source=new i.default(this.options.srcName),this.decorators=new i.default(this.options.srcName)},createFunctionContext:function(s){var r=this,m="",v=this.stackVars.concat(this.registers.list);v.length>0&&(m+=", "+v.join(", "));var S=0;Object.keys(this.aliases).forEach(function(g){var y=r.aliases[g];y.children&&y.referenceCount>1&&(m+=", alias"+ ++S+"="+g,y.children[0]="alias"+S)}),this.lookupPropertyFunctionIsUsed&&(m+=", "+this.lookupPropertyFunctionVarDeclaration());var _=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&_.push("blockParams"),this.useDepths&&_.push("depths");var b=this.mergeSource(m);return s?(_.push(b),Function.apply(this,_)):this.source.wrap(["function(",_.join(","),`) {
  `,b,"}"])},mergeSource:function(s){var r=this.environment.isSimple,m=!this.forceBuffer,v=void 0,S=void 0,_=void 0,b=void 0;return this.source.each(function(g){g.appendToBuffer?(_?g.prepend("  + "):_=g,b=g):(_&&(S?_.prepend("buffer += "):v=!0,b.add(";"),_=b=void 0),S=!0,r||(m=!1))}),m?_?(_.prepend("return "),b.add(";")):S||this.source.push('return "";'):(s+=", buffer = "+(v?"":this.initializeBuffer()),_?(_.prepend("return buffer + "),b.add(";")):this.source.push("return buffer;")),s&&this.source.prepend("var "+s.substring(2)+(v?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(s){var r=this.aliasable("container.hooks.blockHelperMissing"),m=[this.contextName(0)];this.setupHelperArgs(s,0,m);var v=this.popStack();m.splice(1,0,v),this.push(this.source.functionCall(r,"call",m))},ambiguousBlockValue:function(){var s=this.aliasable("container.hooks.blockHelperMissing"),r=[this.contextName(0)];this.setupHelperArgs("",0,r,!0),this.flushInline();var m=this.topStack();r.splice(1,0,m),this.pushSource(["if (!",this.lastHelper,") { ",m," = ",this.source.functionCall(s,"call",r),"}"])},appendContent:function(s){this.pendingContent?s=this.pendingContent+s:this.pendingLocation=this.source.currentLocation,this.pendingContent=s},append:function(){if(this.isInline())this.replaceStack(function(r){return[" != null ? ",r,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var s=this.popStack();this.pushSource(["if (",s," != null) { ",this.appendToBuffer(s,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(s){this.lastContext=s},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(s,r,m,v){var S=0;!v&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(s[S++])):this.pushContext(),this.resolvePath("context",s,S,r,m)},lookupBlockParam:function(s,r){this.useBlockParams=!0,this.push(["blockParams[",s[0],"][",s[1],"]"]),this.resolvePath("context",r,1)},lookupData:function(s,r,m){s?this.pushStackLiteral("container.data(data, "+s+")"):this.pushStackLiteral("data"),this.resolvePath("data",r,0,!0,m)},resolvePath:function(s,r,m,v,S){var _=this;if(this.options.strict||this.options.assumeObjects){this.push(f(this.options.strict&&S,this,r,m,s));return}for(var b=r.length;m<b;m++)this.replaceStack(function(g){var y=_.nameLookup(g,r[m],s);return v?[" && ",y]:[" != null ? ",y," : ",g]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(s,r){this.pushContext(),this.pushString(r),r!=="SubExpression"&&(typeof s=="string"?this.pushString(s):this.pushStackLiteral(s))},emptyHash:function(s){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(s?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var s=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(s.ids)),this.stringParams&&(this.push(this.objectLiteral(s.contexts)),this.push(this.objectLiteral(s.types))),this.push(this.objectLiteral(s.values))},pushString:function(s){this.pushStackLiteral(this.quotedString(s))},pushLiteral:function(s){this.pushStackLiteral(s)},pushProgram:function(s){s!=null?this.pushStackLiteral(this.programExpression(s)):this.pushStackLiteral(null)},registerDecorator:function(s,r){var m=this.nameLookup("decorators",r,"decorator"),v=this.setupHelperArgs(r,s);this.decorators.push(["fn = ",this.decorators.functionCall(m,"",["fn","props","container",v])," || fn;"])},invokeHelper:function(s,r,m){var v=this.popStack(),S=this.setupHelper(s,r),_=[];m&&_.push(S.name),_.push(v),this.options.strict||_.push(this.aliasable("container.hooks.helperMissing"));var b=["(",this.itemsSeparatedBy(_,"||"),")"],g=this.source.functionCall(b,"call",S.callParams);this.push(g)},itemsSeparatedBy:function(s,r){var m=[];m.push(s[0]);for(var v=1;v<s.length;v++)m.push(r,s[v]);return m},invokeKnownHelper:function(s,r){var m=this.setupHelper(s,r);this.push(this.source.functionCall(m.name,"call",m.callParams))},invokeAmbiguous:function(s,r){this.useRegister("helper");var m=this.popStack();this.emptyHash();var v=this.setupHelper(0,s,r),S=this.lastHelper=this.nameLookup("helpers",s,"helper"),_=["(","(helper = ",S," || ",m,")"];this.options.strict||(_[0]="(helper = ",_.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",_,v.paramsInit?["),(",v.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",v.callParams)," : helper))"])},invokePartial:function(s,r,m){var v=[],S=this.setupParams(r,1,v);s&&(r=this.popStack(),delete S.name),m&&(S.indent=JSON.stringify(m)),S.helpers="helpers",S.partials="partials",S.decorators="container.decorators",s?v.unshift(r):v.unshift(this.nameLookup("partials",r,"partial")),this.options.compat&&(S.depths="depths"),S=this.objectLiteral(S),v.push(S),this.push(this.source.functionCall("container.invokePartial","",v))},assignToHash:function(s){var r=this.popStack(),m=void 0,v=void 0,S=void 0;this.trackIds&&(S=this.popStack()),this.stringParams&&(v=this.popStack(),m=this.popStack());var _=this.hash;m&&(_.contexts[s]=m),v&&(_.types[s]=v),S&&(_.ids[s]=S),_.values[s]=r},pushId:function(s,r,m){s==="BlockParam"?this.pushStackLiteral("blockParams["+r[0]+"].path["+r[1]+"]"+(m?" + "+JSON.stringify("."+m):"")):s==="PathExpression"?this.pushString(r):s==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:a,compileChildren:function(s,r){for(var m=s.children,v=void 0,S=void 0,_=0,b=m.length;_<b;_++){v=m[_],S=new this.compiler;var g=this.matchExistingProgram(v);if(g==null){this.context.programs.push("");var y=this.context.programs.length;v.index=y,v.name="program"+y,this.context.programs[y]=S.compile(v,r,this.context,!this.precompile),this.context.decorators[y]=S.decorators,this.context.environments[y]=v,this.useDepths=this.useDepths||S.useDepths,this.useBlockParams=this.useBlockParams||S.useBlockParams,v.useDepths=this.useDepths,v.useBlockParams=this.useBlockParams}else v.index=g.index,v.name="program"+g.index,this.useDepths=this.useDepths||g.useDepths,this.useBlockParams=this.useBlockParams||g.useBlockParams}},matchExistingProgram:function(s){for(var r=0,m=this.context.environments.length;r<m;r++){var v=this.context.environments[r];if(v&&v.equals(s))return v}},programExpression:function(s){var r=this.environment.children[s],m=[r.index,"data",r.blockParams];return(this.useBlockParams||this.useDepths)&&m.push("blockParams"),this.useDepths&&m.push("depths"),"container.program("+m.join(", ")+")"},useRegister:function(s){this.registers[s]||(this.registers[s]=!0,this.registers.list.push(s))},push:function(s){return s instanceof l||(s=this.source.wrap(s)),this.inlineStack.push(s),s},pushStackLiteral:function(s){this.push(new l(s))},pushSource:function(s){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),s&&this.source.push(s)},replaceStack:function(s){var r=["("],m=void 0,v=void 0,S=void 0;if(!this.isInline())throw new p.default("replaceStack on non-inline");var _=this.popStack(!0);if(_ instanceof l)m=[_.value],r=["(",m],S=!0;else{v=!0;var b=this.incrStack();r=["((",this.push(b)," = ",_,")"],m=this.topStack()}var g=s.call(this,m);S||this.popStack(),v&&this.stackSlot--,this.push(r.concat(g,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var s=this.inlineStack;this.inlineStack=[];for(var r=0,m=s.length;r<m;r++){var v=s[r];if(v instanceof l)this.compileStack.push(v);else{var S=this.incrStack();this.pushSource([S," = ",v,";"]),this.compileStack.push(S)}}},isInline:function(){return this.inlineStack.length},popStack:function(s){var r=this.isInline(),m=(r?this.inlineStack:this.compileStack).pop();if(!s&&m instanceof l)return m.value;if(!r){if(!this.stackSlot)throw new p.default("Invalid stack pop");this.stackSlot--}return m},topStack:function(){var s=this.isInline()?this.inlineStack:this.compileStack,r=s[s.length-1];return r instanceof l?r.value:r},contextName:function(s){return this.useDepths&&s?"depths["+s+"]":"depth"+s},quotedString:function(s){return this.source.quotedString(s)},objectLiteral:function(s){return this.source.objectLiteral(s)},aliasable:function(s){var r=this.aliases[s];return r?(r.referenceCount++,r):(r=this.aliases[s]=this.source.wrap(s),r.aliasable=!0,r.referenceCount=1,r)},setupHelper:function(s,r,m){var v=[],S=this.setupHelperArgs(r,s,v,m),_=this.nameLookup("helpers",r,"helper"),b=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:v,paramsInit:S,name:_,callParams:[b].concat(v)}},setupParams:function(s,r,m){var v={},S=[],_=[],b=[],g=!m,y=void 0;g&&(m=[]),v.name=this.quotedString(s),v.hash=this.popStack(),this.trackIds&&(v.hashIds=this.popStack()),this.stringParams&&(v.hashTypes=this.popStack(),v.hashContexts=this.popStack());var L=this.popStack(),k=this.popStack();(k||L)&&(v.fn=k||"container.noop",v.inverse=L||"container.noop");for(var C=r;C--;)y=this.popStack(),m[C]=y,this.trackIds&&(b[C]=this.popStack()),this.stringParams&&(_[C]=this.popStack(),S[C]=this.popStack());return g&&(v.args=this.source.generateArray(m)),this.trackIds&&(v.ids=this.source.generateArray(b)),this.stringParams&&(v.types=this.source.generateArray(_),v.contexts=this.source.generateArray(S)),this.options.data&&(v.data="data"),this.useBlockParams&&(v.blockParams="blockParams"),v},setupHelperArgs:function(s,r,m,v){var S=this.setupParams(s,r,m);return S.loc=JSON.stringify(this.source.currentLocation),S=this.objectLiteral(S),v?(this.useRegister("options"),m.push("options"),["options=",S]):m?(m.push(S),""):S}},function(){for(var n="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),s=a.RESERVED_WORDS={},r=0,m=n.length;r<m;r++)s[n[r]]=!0}(),a.isValidJavaScriptVariableName=function(n){return!a.RESERVED_WORDS[n]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n)};function f(n,s,r,m,v){var S=s.popStack(),_=r.length;for(n&&_--;m<_;m++)S=s.nameLookup(S,r[m],v);return n?[s.aliasable("container.strict"),"(",S,", ",s.quotedString(r[m]),", ",JSON.stringify(s.source.currentLocation)," )"]:S}t.default=a,e.exports=t.default})(Ne,Ne.exports);var kr=Ne.exports;(function(e,t){t.__esModule=!0;function o(_){return _&&_.__esModule?_:{default:_}}var h=Tn,d=o(h),p=ct,c=o(p),u=J,i=j,l=kr,a=o(l),f=pt,n=o(f),s=ut,r=o(s),m=d.default.create;function v(){var _=m();return _.compile=function(b,g){return i.compile(b,g,_)},_.precompile=function(b,g){return i.precompile(b,g,_)},_.AST=c.default,_.Compiler=i.Compiler,_.JavaScriptCompiler=a.default,_.Parser=u.parser,_.parse=u.parse,_.parseWithoutProcessing=u.parseWithoutProcessing,_}var S=v();S.create=v,r.default(S),S.Visitor=n.default,S.default=S,t.default=S,e.exports=t.default})(pe,pe.exports);var Lr=pe.exports;const yt=bt(Lr),Cr=`<button class="button button__{{appointment}}">
    {{label}}
</button>
`,Pr=`<div class="input">
    <label>
        <input
                name="{{name}}"
                id="{{id}}"
                class="input__element {{appointment}}"
                placeholder=""
                type="{{type}}"
                value="{{defaultValue}}"
                required
        />
        <p class="input__label">{{label}}</p>
        <p class="input__label-error">{{error}}</p>
    </label>
</div>
`,wr=`<div class="chat__item {{appointment}}">
    <img class="chat__item-avatar" src={{imgLink}} width="50" height="50" alt="">
    <div class="chat__item-data">
        <p class="chat__item-name">{{nameUser}}</p>
        <div class="chat__item-message">
            <span>{{sender}}</span>
            <span>{{messageUser}}</span>
        </div>
    </div>
    <div class="chat__item-info">
        <p class="chat__item-message-date">{{dateMessage}}</p>
        <p class="chat__item-unread-value">{{unreadValue}}</p>
    </div>
</div>
`,Mr=`<div class="chat__items">

    {{>ChatItem
            imgLink="/user1.jpg"
            nameUser="Андрей"
            messageUser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="10:49"
            unreadValue="2"
    }}

    {{>ChatItem
            imgLink="/user2.jpg"
            nameUser="Сергей"
            sender="Вы: "
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="08:49"
            unreadValue="42"
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Алёша"
            sender="Вы: "
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="05:13"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user4.jpg"
            nameUser="Киви"
            sender="Вы: "
            messageUser="consetation"
            dateMessage="вт"
            unreadValue="1"
    }}

    {{>ChatItem
            imgLink="/user1.jpg"
            nameUser="Рентген Дмитрий Валерьевич"
            sender="Вы: "
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="ср"
            unreadValue="42"
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Джеймс Хэтфилд"
            sender="Вы: "
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="чт"
            unreadValue="7"
    }}

    {{>ChatItem
            imgLink="/user2.jpg"
            nameUser="Валенок"
            sender=""
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="пт"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user4.jpg"
            nameUser="Чат Вселенной"
            sender="Вы: "
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="пт"
            unreadValue="10"
    }}

    {{>ChatItem
            imgLink="/user1.jpg"
            nameUser="Оби Ван Кеноби"
            sender=""
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="пт"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user2.jpg"
            nameUser="Мистер Твистер"
            sender="Вы: "
            messageUser="consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
            dateMessage="пт"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Мистер Кот"
            sender=""
            messageUser="МЯУ"
            dateMessage="пт"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Мистер Кот"
            sender=""
            messageUser="МЯУ"
            dateMessage="пт"
            unreadValue="33"
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Мистер Кот"
            sender=""
            messageUser="МЯУ"
            dateMessage="пт"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Мистер Кот"
            sender=""
            messageUser="МЯУ"
            dateMessage="пт"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Мистер Кот"
            sender=""
            messageUser="МЯУ"
            dateMessage="пт"
            unreadValue="5"
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Мистер Кот"
            sender=""
            messageUser="МЯУ"
            dateMessage="пт"
            unreadValue=""
    }}

    {{>ChatItem
            imgLink="/user3.jpg"
            nameUser="Мистер Кот"
            sender=""
            messageUser="МЯУ"
            dateMessage="пт"
            unreadValue="7"
    }}

</div>
`,Er=`<div class="chat__message {{appointment}}">
    <div class="message-content">{{content}}</div>
    <div class="message-attachments">{{attachments}}</div>
    <div class="message-info">
        <img class="message-status" src="/message-read-icon.png" alt="" width="10" height="5">
        <p class="message-date">{{date}}</p>
    </div>
</div>
`,xr=`<div class="modal__background"></div>

<div class="modal__control-user">
    <p>{{labelTitle}}</p>
    {{>Input
            appointment="input__control-user"
            type="text"
            label="Логин"
    }}
    {{>Button
            appointment="primary"
            label=textButton
    }}
</div>
`,Ir=`<div class="modal__background"></div>

<div class="modal__load-photo {{appointment}}">
    <p class="modal__load-photo-title">{{labelTitle}}</p>
    <p class="modal__error">{{labelError}}</p>

    <label class="label__load-photo" for="input__photo">
        <span>Выбрать файл на компьютере</span>
    </label>

    <div class="modal__input">
        {{>Input
                name="input__photo"
                id="input__photo"
                appointment="input__load-file"
                type="file"
        }}
    </div>

    <p class="loaded-file-name">{{loadedFile}}</p>

    {{>Button
            appointment="primary"
            label="Поменять"
    }}

    <p class="modal__warning">{{warning}}</p>

</div>
`,Or=Object.freeze(Object.defineProperty({__proto__:null,Button:Cr,ChatItem:wr,ChatsList:Mr,Input:Pr,Message:Er,ModalControlUser:xr,ModalLoadPhoto:Ir},Symbol.toStringTag,{value:"Module"})),Ar=`<ul>
    <li><a href="#" page="chat">chat</a></li>
    <li><a href="#" page="chatAddRemoveUser">chatAddRemoveUser</a></li>
    <li><a href="#" page="chatFunctions">chatFunctions</a></li>
    <li><a href="#" page="chatSearch">chatSearch</a></li>
    <li><a href="#" page="chatSelect">chatSelect</a></li>
    <li><a href="#" page="dialogLoad">dialogLoad</a></li>
    <li><a href="#" page="error404">error404</a></li>
    <li><a href="#" page="error500">error500</a></li>
    <li><a href="#" page="login">login</a></li>
    <li><a href="#" page="profile">profile</a></li>
    <li><a href="#" page="profileChangeData">profileChangeData</a></li>
    <li><a href="#" page="profileChangePassword">profileChangePassword</a></li>
    <li><a href="#" page="profileLoadAvatar">profileLoadAvatar</a></li>
    <li><a href="#" page="signIn">signIn</a></li>
</ul>
`,Nr=`<div class="wrapper">
    <div class="chat__nav">

        <div class="chat__nav-header">
            {{>Button appointment="nav-profile" label="Профиль"}}
            {{>Input appointment="input__nav-search" type="text" label="Поиск"}}
        </div>
        {{>ChatsList}}
    </div>

    <div class="chat__field">

        <div class="chat__header">
            <div class="chat__user-info">
                <img class="chat__item-avatar" src="/user4.jpg" width="50" height="50" alt="">
                <p class="chat__item-name">Мистер Кот</p>
            </div>
            <div class="chat__settings">
                {{>Button appointment="chat-settings"}}
            </div>
        </div>

        <div class="chat__main">

            <p class="chat__date-message">2 августа 2016 г.</p>

            <!--            ПОМЕТКА ДЛЯ РЕВЬЮЕРА!
                            Здесь сообщения представляю как статично, так и с помощью компонентов.
                            Поскольку на 1-м спринте делаем только вёрстку, сообщения от пользователя пишу статично, поскольку
                            у сообщений от пользователя нету галочек о получении/прочтении. Сообщения от клиента делаю с
                            использованием компонента. В дальнейшем все сообщения будут отрефакторены.
            -->

            <div class="chat__message message-user">
                <div class="message-content">
                    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                    попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                    астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                    поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
                    <br>
                    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда
                    и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                    евро.
                </div>
                <div class="message-attachments"></div>
                <div class="message-info">
                    <p class="message-date">13:49</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Круто!"
                    date="13:53"
            }}

            <div class="chat__message message-user">
                <div class="message-content"></div>
                <div class="message-attachments">
                    <img src="/message-image.png" alt="">
                </div>
                <div class="message-info">
                    <p class="message-date">14:37</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    date="15:23"
            }}

            {{>Message
                appointment="message-you"
                content="Lorem ipsum dolor."
                date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

        </div>

        <div class="chat__footer">
            {{>Button appointment="attachment" label=""}}
            {{>Input appointment="input__message" type="text" label="Сообщение"}}
            {{>Button appointment="send-message" label=""}}
        </div>
    </div>
</div>
`,Br=`<div class="wrapper">

    <!--    ПОМЕТКА ДЛЯ РЕВЬЮЕРА!
       Модалка реализована в двух экземплярах. Чтоб не плодить страницы,
       было принято решение разместить их на одной странице.
       Достаточно закомментировать строки 14-17 для отображения первой модалки.
    -->

    {{>ModalControlUser
            labelTitle="Добавить пользователя"
            textButton="Добавить"
    }}

    {{>ModalControlUser
            labelTitle="Удалить пользователя"
            textButton="Удалить"
    }}

    <div class="chat__nav">

        <div class="chat__nav-header">
            {{>Button appointment="nav-profile" label="Профиль"}}
            {{>Input appointment="input__nav-search" type="text" label="Поиск"}}
        </div>
        {{>ChatsList}}
    </div>

    <div class="chat__field">

        <div class="chat__header">
            <div class="chat__user-info">
                <img class="chat__item-avatar" src="/user4.jpg" width="50" height="50" alt="">
                <p class="chat__item-name">Мистер Кот</p>
            </div>
            <div class="chat__settings">
                {{>Button appointment="chat-settings"}}
            </div>
        </div>

        <div class="chat__main">

            <p class="chat__date-message">2 августа 2016 г.</p>

            <!--            ПОМЕТКА ДЛЯ РЕВЬЮЕРА!
                            Здесь сообщения представляю как статично, так и с помощью компонентов.
                            Поскольку на 1-м спринте делаем только вёрстку, сообщения от пользователя пишу статично, поскольку
                            у сообщений от пользователя нету галочек о получении/прочтении. Сообщения от клиента делаю с
                            использованием компонента. В дальнейшем все сообщения будут отрефакторены.
            -->

            <div class="chat__message message-user">
                <div class="message-content">
                    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                    попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                    астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                    поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
                    <br>
                    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда
                    и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                    евро.
                </div>
                <div class="message-attachments"></div>
                <div class="message-info">
                    <p class="message-date">13:49</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Круто!"
                    date="13:53"
            }}

            <div class="chat__message message-user">
                <div class="message-content"></div>
                <div class="message-attachments">
                    <img src="/message-image.png" alt="">
                </div>
                <div class="message-info">
                    <p class="message-date">14:37</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

        </div>

        <div class="chat__footer">
            {{>Button appointment="attachment" label=""}}
            {{>Input appointment="input__message" type="text" label="Сообщение"}}
            {{>Button appointment="send-message" label=""}}
        </div>
    </div>
</div>
`,Rr=`<div class="wrapper">
    <div class="chat__nav">

        <div class="chat__nav-header">
            {{>Button appointment="nav-profile" label="Профиль"}}
            {{>Input appointment="input__nav-search" type="text" label="Поиск"}}
        </div>
        {{>ChatsList}}
    </div>

    <div class="chat__field">

        <div class="chat__header">
            <div class="chat__user-info">
                <img class="chat__item-avatar" src="/user4.jpg" width="50" height="50" alt="">
                <p class="chat__item-name">Мистер Кот</p>
            </div>
            <div class="chat__settings">
                {{>Button appointment="chat-settings"}}
            </div>

            <div class="chat__settings-menu">
                {{>Button appointment="add-user" label="Добавить пользователя"}}
                {{>Button appointment="remove-user" label="Удалить пользователя"}}
            </div>
        </div>

        <div class="chat__main">

            <p class="chat__date-message">2 августа 2016 г.</p>

            <!--            ПОМЕТКА ДЛЯ РЕВЬЮЕРА!
                            Здесь сообщения представляю как статично, так и с помощью компонентов.
                            Поскольку на 1-м спринте делаем только вёрстку, сообщения от пользователя пишу статично, поскольку
                            у сообщений от пользователя нету галочек о получении/прочтении. Сообщения от клиента делаю с
                            использованием компонента. В дальнейшем все сообщения будут отрефакторены.
            -->

            <div class="chat__message message-user">
                <div class="message-content">
                    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                    попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                    астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                    поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
                    <br>
                    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда
                    и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                    евро.
                </div>
                <div class="message-attachments"></div>
                <div class="message-info">
                    <p class="message-date">13:49</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Круто!"
                    date="13:53"
            }}

            <div class="chat__message message-user">
                <div class="message-content"></div>
                <div class="message-attachments">
                    <img src="/message-image.png" alt="">
                </div>
                <div class="message-info">
                    <p class="message-date">14:37</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

        </div>

        <div class="chat__footer">
            {{>Button appointment="attachment" label=""}}
            {{>Input appointment="input__message" type="text" label="Сообщение"}}
            {{>Button appointment="send-message" label=""}}

            <div class="chat__attach-menu">
                {{>Button appointment="attach-photo" label="Фото или Видео"}}
                {{>Button appointment="attach-file" label="Файл"}}
                {{>Button appointment="attach-location" label="Локация"}}
            </div>

        </div>
    </div>
</div>
`,Dr=`<div class="wrapper">
    <div class="chat__nav">

        <div class="chat__nav-header">
            {{>Button appointment="nav-profile" label="Профиль"}}
            {{>Input appointment="input__nav-search" type="text" label="Поиск" defaultValue="Кино"}}
        </div>

        <!--            ПОМЕТКА ДЛЯ РЕВЬЮЕРА!
                            Здесь статично забиты несколько айтемов для примера вёрстки.
                            В дальнейшем, всё будет отображаться через компонент ChatsLists.
            -->

        {{>ChatItem
                imgLink="/user1.jpg"
                nameUser="Кинопоиск"
                sender=""
                messageUser="Lorem lorem bla bla bla"
                dateMessage=""
                unreadValue=""
        }}

        {{>ChatItem
                imgLink="/user4.jpg"
                nameUser="Киноклуб"
                sender=""
                messageUser="Lorem lorem bla bla bla Losdd lorem qwerty ololo dda"
                dateMessage=""
                unreadValue=""
        }}
<!--                {{>ChatsList}}-->
    </div>

    <div class="chat__field">

        <div class="chat__header">
            <div class="chat__user-info">
                <img class="chat__item-avatar" src="/user4.jpg" width="50" height="50" alt="">
                <p class="chat__item-name">Мистер Кот</p>
            </div>
            <div class="chat__settings">
                {{>Button appointment="chat-settings"}}
            </div>
        </div>

        <div class="chat__main">

            <p class="chat__date-message">2 августа 2016 г.</p>

            <!--            ПОМЕТКА ДЛЯ РЕВЬЮЕРА!
                            Здесь сообщения представляю как статично, так и с помощью компонентов.
                            Поскольку на 1-м спринте делаем только вёрстку, сообщения от пользователя пишу статично,
                            поскольку у сообщений от пользователя нету галочек о получении/прочтении.
                            Сообщения от клиента делаю с использованием компонента.
                            В дальнейшем все сообщения будут отрефакторены.
            -->

            <div class="chat__message message-user">
                <div class="message-content">
                    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                    попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                    астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                    поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
                    <br>
                    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда
                    и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                    евро.
                </div>
                <div class="message-attachments"></div>
                <div class="message-info">
                    <p class="message-date">13:49</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Круто!"
                    date="13:53"
            }}

            <div class="chat__message message-user">
                <div class="message-content"></div>
                <div class="message-attachments">
                    <img src="/message-image.png" alt="">
                </div>
                <div class="message-info">
                    <p class="message-date">14:37</p>
                </div>
            </div>

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

            {{>Message
                    appointment="message-you"
                    content="Lorem ipsum dolor."
                    date="15:23"
            }}

        </div>

        <div class="chat__footer">
            {{>Button appointment="attachment" label=""}}
            {{>Input appointment="input__message" type="text" label="Сообщение"}}
            {{>Button appointment="send-message" label=""}}
        </div>
    </div>
</div>
`,Hr=`<div class="wrapper">
    <div class="chat__nav">

        <div class="chat__nav-header">
            {{>Button appointment="nav-profile" label="Профиль"}}
            {{>Input appointment="input__nav-search" type="text" label="Поиск"}}
        </div>

        {{>ChatsList}}

    </div>

    <div class="chat__field">
        <p class="chat__field-title">Выберите чат чтобы отправить сообщение</p>
    </div>
</div>
`,Ur=`<div class="wrapper-dialog">

    <div class="dialog">
        <p>1</p>
        {{>ModalLoadPhoto
                appointment="modal__loaded-photo"
                labelTitle="Файл загружен"
                loadedFile="new-avatar.png"
        }}
    </div>

    <div class="dialog">
        <p>2</p>
        {{>ModalLoadPhoto
                labelTitle="Загрузите файл"
                warning="Нужно выбрать файл"
        }}
    </div>

    <div class="dialog">
        <p>3</p>
        {{>ModalLoadPhoto
                labelError="Ошибка, попробуйте ещё раз"
        }}
    </div>

</div>
`,qr=`<div class="error">
    <h1>404</h1>
    <h2>Не туда попали</h2>
</div>

<a href="/">Назад к чатам</a>
`,Tr=`<div class="error">
    <h1>500</h1>
    <h2>Мы уже фиксим</h2>
</div>

<a href="/">Назад к чатам</a>
`,Vr=`<form class="form">
    <div class="form-data">
        <p class="form-data__title">Вход</p>
        {{> Input label="Логин" type="text" appointment="input__form" error="Неверный логин"}}
        {{> Input label="Пароль" type="password" appointment="input__form"}}
        {{> Button label="Забыли пароль?" type="forgot-password" }}
    </div>

    <div class="form-control">
        {{> Button appointment="primary" label="Авторизоваться" }}
        {{> Button appointment="secondary" label="Нет аккаунта?" }}
    </div>
</form>
`,Fr=`<div class="wrapper">

    {{>Button appointment="profile-back"}}

    <div class="profile__field">

        <div class="profile__main-data">
            <img class="profile__avatar" src="/avatar-plug.png" width="130" height="130" alt="">
            <p class="profile__avatar-change">Поменять аватар</p>
            <p class="profile__name">Иван</p>
        </div>

        <div class="profile__data">
            <p>Почта</p>
            <p>pochta@yandex.ru</p>
        </div>
        <div class="profile__data">
            <p>Логин</p>
            <p>ivanivanov</p>
        </div>
        <div class="profile__data">
            <p>Имя</p>
            <p>Иван</p>
        </div>
        <div class="profile__data">
            <p>Фамилия</p>
            <p>Иванов</p>
        </div>
        <div class="profile__data">
            <p>Имя в чате</p>
            <p>Иваныч</p>
        </div>
        <div class="profile__data">
            <p>Телефон</p>
            <p>+7 (123) 456 78 90</p>
        </div>

        <div class="profile__control">
            {{>Button appointment="profile-main" label="Изменить данные"}}
            {{>Button appointment="profile-main" label="Изменить пароль"}}
            {{>Button appointment="profile-secondary" label="Выйти"}}
        </div>

    </div>

</div>
`,Gr=`<div class="wrapper">

    {{>Button appointment="profile-back"}}

    <div class="profile__field">

        <div class="profile__main-data">
            <img class="profile__avatar" src="/avatar-plug.png" width="130" height="130" alt="">
            <p class="profile__avatar-change">Поменять аватар</p>
        </div>

        <div class="profile__data">
            <p>Почта</p>
            {{>Input appointment="input__profile-data" type="text" label="pochta@yandex.ru"}}
        </div>
        <div class="profile__data">
            <p>Логин</p>
            {{>Input appointment="input__profile-data" type="text" label="ivanivanov"}}
        </div>
        <div class="profile__data">
            <p>Имя</p>
            {{>Input appointment="input__profile-data" type="text" label="Иван"}}
        </div>
        <div class="profile__data">
            <p>Фамилия</p>
            {{>Input appointment="input__profile-data" type="text" label="Иванов"}}
        </div>
        <div class="profile__data">
            <p>Имя в чате</p>
            {{>Input appointment="input__profile-data" type="text" label="Иван"}}
        </div>
        <div class="profile__data">
            <p>Телефон</p>
            {{>Input appointment="input__profile-data" type="text" label="+7 (123) 456 78 90"}}
        </div>

        <div class="profile__control">
            {{>Button appointment="primary-profile" label="Сохранить"}}
        </div>

    </div>

</div>
`,Wr=`<div class="wrapper">

    {{>Button appointment="profile-back"}}

    <div class="profile__field">

        <div class="profile__main-data">
            <img class="profile__avatar" src="/avatar-plug.png" width="130" height="130" alt="">
            <p class="profile__avatar-change">Поменять аватар</p>
        </div>

        <div class="profile__data">
            <p>Старый пароль</p>
            {{>Input appointment="input__profile-data" type="password" label="******"}}
        </div>
        <div class="profile__data">
            <p>Новый пароль</p>
            {{>Input appointment="input__profile-data" type="password" label="********"}}
        </div>
        <div class="profile__data">
            <p>Повторите новый пароль</p>
            {{>Input appointment="input__profile-data" type="password" label="********"}}
        </div>

        <div class="profile__control">
            {{>Button appointment="primary-profile" label="Сохранить"}}
        </div>

    </div>

</div>
`,Kr=`<div class="wrapper">

    {{>ModalLoadPhoto
            labelTitle="Загрузите файл"
    }}

    {{>Button appointment="profile-back"}}

    <div class="profile__field">

        <div class="profile__main-data">
            <img class="profile__avatar" src="/avatar-plug.png" width="130" height="130" alt="">
            <p class="profile__avatar-change">Поменять аватар</p>
            <p class="profile__name">Иван</p>
        </div>

        <div class="profile__data">
            <p>Почта</p>
            <p>pochta@yandex.ru</p>
        </div>
        <div class="profile__data">
            <p>Логин</p>
            <p>ivanivanov</p>
        </div>
        <div class="profile__data">
            <p>Имя</p>
            <p>Иван</p>
        </div>
        <div class="profile__data">
            <p>Фамилия</p>
            <p>Иванов</p>
        </div>
        <div class="profile__data">
            <p>Имя в чате</p>
            <p>Иваныч</p>
        </div>
        <div class="profile__data">
            <p>Телефон</p>
            <p>+7 (123) 456 78 90</p>
        </div>

        <div class="profile__control">
            {{>Button appointment="profile-main" label="Изменить данные"}}
            {{>Button appointment="profile-main" label="Изменить пароль"}}
            {{>Button appointment="profile-secondary" label="Выйти"}}
        </div>

    </div>

</div>
`,zr=`<form class="form">
    <div class="form-data">
        <p class="form-data__title">Регистрация</p>
        {{> Input label="Почта" type="text" appointment="input__form"}}
        {{> Input label="Логин" type="text" appointment="input__form"}}
        {{> Input label="Имя" type="text" appointment="input__form"}}

        {{> Input label="Фамилия" type="text" appointment="input__form"}}
        {{> Input label="Телефон" type="text" appointment="input__form"}}
        {{> Input label="Пароль" type="password" appointment="input__form input__form-errPwd"}}
        {{> Input label="Пароль (ещё раз)" type="password" appointment="input__form input__form-errPwd" error="Пароли не совпадают!" }}
    </div>

    <div class="form-control">
        {{> Button appointment="primary" label="Зарегистрироваться" }}
        {{> Button appointment="secondary" label="Войти" }}
    </div>
</form>
`,Jr={nav:[Ar],chat:[Nr],chatAddRemoveUser:[Br],chatFunctions:[Rr],chatSearch:[Dr],chatSelect:[Hr],dialogLoad:[Ur],error404:[qr],error500:[Tr],login:[Vr],profile:[Fr],profileChangeData:[Gr],profileChangePassword:[Wr],profileLoadAvatar:[Kr],signIn:[zr]};Object.entries(Or).forEach(([e,t])=>{yt.registerPartial(e,t)});function St(e){const[t,o]=Jr[e],h=document.getElementById("app");h.innerHTML=yt.compile(t)(o)}document.addEventListener("DOMContentLoaded",()=>St("nav"));document.addEventListener("click",e=>{const t=e.target.getAttribute("page");t&&(St(t),e.preventDefault(),e.stopImmediatePropagation())});
