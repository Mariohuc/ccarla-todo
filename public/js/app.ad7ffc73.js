(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"016dbeaa"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("ce5b"),s=n.n(r);n("bf40");a["default"].use(s.a);var i={},o=new s.a(i),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},l=[],u=n("2877"),p={},d=Object(u["a"])(p,c,l,!1,null,null,null),f=d.exports,m=(n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Appbar"),n("v-content",[n("v-container",[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",{staticClass:"headline"},[e._v(" Bienvenido a CCARLA ")]),n("v-card-text",{staticClass:"body-2"},[e._v(" Un proyecto diseñado para aprender de manera interactiva los conceptos de funciones en tres dimensiones para el curso de cálculo en varias variables. ")])],1)],1),e._l(e.items,(function(t,a){return n("v-col",{key:a,attrs:{cols:"12",md:"6",sm:"12"}},[n("v-card",{attrs:{color:t.color,dark:"",to:t.link,hover:""}},[n("v-row",[n("v-col",{attrs:{cols:"7"}},[n("v-card-title",{staticClass:"headline",domProps:{textContent:e._s(t.title)}}),n("v-card-subtitle",{staticClass:"body-2 font-weight-light",domProps:{textContent:e._s(t.subtitle)}})],1),n("v-col",{attrs:{cols:"5"}},[n("v-img",{staticClass:"mr-3",attrs:{src:t.src,height:"120"}})],1)],1)],1)],1)}))],2)],1)],1)],1)},v=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{color:"blue",dense:"",dark:"",app:""}},[n("v-toolbar-title",{staticClass:"mr-4"},[e._v("CCARLA")]),n("v-spacer"),n("v-btn",{attrs:{text:"",small:""}},[n("v-icon",{staticClass:"mr-1"},[e._v("mdi-account-plus")]),e._v(" Sign up ")],1),n("v-btn",{attrs:{text:"",small:""}},[n("v-icon",{staticClass:"mr-1"},[e._v("mdi-login")]),e._v(" Sign in ")],1),n("v-btn",{attrs:{text:"",small:""}},[n("v-icon",{staticClass:"mr-1"},[e._v("mdi-logout")]),e._v(" Logout ")],1)],1)},g=[],M={},b=M,y=Object(u["a"])(b,x,g,!1,null,null,null),w=y.exports,_={name:"Home",components:{Appbar:w},data:function(){return{items:[{color:"#1F7087",src:"".concat("/","images/grafunc01.png"),title:"Para una función",subtitle:"Grafique una funcion del tipo z = f(x,y)",link:"/functiongrapher"},{color:"#952175",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlx8UnxVfjW7TU5LNAiVoL3nLJLrOuQgc-wOE_cuCQYUQOjqIk&usqp=CAU",title:"Acerca de",subtitle:"Informacion del autor",link:"/about"}]}}},z=_,C=Object(u["a"])(z,h,v,!1,null,null,null),G=C.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{collapse:!0,"collapse-on-scroll":!1,absolute:"",color:"deep-purple accent-4",dark:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"close-on-click":!1,"nudge-width":"210","max-width":"210","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-app-bar-nav-icon",e._g({},a))]}}]),model:{value:e.menufunc,callback:function(t){e.menufunc=t},expression:"menufunc"}},[n("v-card",{attrs:{color:"grey lighten-2"}},[n("v-row",{attrs:{justify:"center"}},[n("v-expansion-panels",{attrs:{accordion:""}},[n("v-expansion-panel",[n("v-card",{attrs:{color:"blue",elevation:"3",dark:""}},[n("v-expansion-panel-header",{staticClass:"py-0",attrs:{"hide-actions":""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.open;return[e._v(" Función "),n("v-spacer"),n("div",{staticClass:"text-right"},[n("v-icon",a?[e._v(" mdi-arrow-up-drop-circle ")]:[e._v(" mdi-arrow-down-drop-circle ")])],1)]}}])})],1),n("v-expansion-panel-content",[n("v-card",{staticClass:"mt-2",attrs:{flat:""}},[n("v-form",{model:{value:e.validfunction,callback:function(t){e.validfunction=t},expression:"validfunction"}},[n("v-row",[n("v-col",{staticClass:"pt-2 pb-0",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"z = ",placeholder:"f(x,y)",dense:"",rules:e.functionRules,hint:e.function_message,"persistent-hint":""},model:{value:e.zfunction,callback:function(t){e.zfunction=t},expression:"zfunction"}})],1)],1)],1)],1)],1)],1),n("v-expansion-panel",[n("v-card",{attrs:{color:"blue",elevation:"3",dark:""}},[n("v-expansion-panel-header",{staticClass:"py-0",attrs:{"hide-actions":""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.open;return[e._v(" Variables "),n("v-spacer"),n("div",{staticClass:"text-right"},[n("v-icon",a?[e._v(" mdi-arrow-up-drop-circle ")]:[e._v(" mdi-arrow-down-drop-circle ")])],1)]}}])})],1),n("v-expansion-panel-content",[n("v-card",{staticClass:"mt-2",attrs:{flat:""}},[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("v-slider",{staticClass:"align-center",attrs:{max:"0",min:"-20",label:"Min","thumb-label":"always"},model:{value:e.xMinslider,callback:function(t){e.xMinslider=t},expression:"xMinslider"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("v-slider",{staticClass:"align-center",attrs:{max:"20",min:"0",label:"Max","thumb-label":"always"},model:{value:e.xMaxslider,callback:function(t){e.xMaxslider=t},expression:"xMaxslider"}})],1)],1)],1)],1)],1),n("v-expansion-panel",[n("v-card",{attrs:{color:"blue",elevation:"3",dark:""}},[n("v-expansion-panel-header",{staticClass:"py-0",attrs:{"hide-actions":""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.open;return[e._v(" Parámetros "),n("v-spacer"),n("div",{staticClass:"text-right"},[n("v-icon",a?[e._v(" mdi-arrow-up-drop-circle ")]:[e._v(" mdi-arrow-down-drop-circle ")])],1)]}}])})],1),n("v-expansion-panel-content",[n("v-card",{staticClass:"mt-2",attrs:{flat:""}},[n("v-card-text")],1)],1)],1)],1),n("v-card-actions",[n("v-row",{staticClass:"text-center"},[n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"primary",disabled:!e.validfunction,small:"",width:"200"},on:{click:e.replaceGraph}},[n("v-icon",{staticClass:"mr-1",attrs:{size:"16"}},[e._v("mdi-function")]),e._v(" Graficar ")],1)],1),n("v-col",{staticClass:"pt-1 pb-0",attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"secondary",small:"",width:"200"},on:{click:e.resetMainCamera}},[n("v-icon",{staticClass:"mr-1",attrs:{size:"16"}},[e._v("mdi-camera")]),e._v(" Reiniciar camara ")],1)],1)],1)],1)],1)],1)],1)],1),n("div",{staticStyle:{position:"absolute",height:"100%",left:"0px",top:"0px"},attrs:{id:"graph"}},[n("v-btn",{attrs:{color:"red",small:"",dark:"",fixed:"",bottom:"",left:"",fab:""},on:{click:e.goback}},[n("v-icon",[e._v("mdi-keyboard-return")])],1)],1)],1)},k=[],j=n("5530"),O=n("2f62"),S=n("0508"),F=n("5c2b"),D={},A=Object(S["a"])(F["a"],D),I={data:function(){var e=this;return{container:null,menufunc:!1,zfunction:"",function_message:"",validfunction:!0,functionRules:[function(e){return!!e||"La función es requerida"},function(t){return e.validFunction(t)||"Función invalida"}],xMinslider:-10,xMaxslider:10}},computed:Object(j["a"])({},Object(O["d"])("singleFunction",["zFuncText","segments","xMin","xMax","yMin","yMax","zMin","zMax","wireMaterial","plane3D","graphMesh"]),{},Object(O["d"])("scene3D",["scene","camera","renderer","controls"])),watch:{xMinslider:function(e){this.setXMin(e),this.updateGraph(this.scene)},xMaxslider:function(e){this.setXMax(e),this.updateGraph(this.scene)},xMin:function(e){this.xMinslider=e},xMax:function(e){this.xMaxslider=e}},mounted:function(){var e=this;this.container=document.getElementById("graph"),this.createDefaultWireMaterial(),this.init(this.container).then((function(){e.createPlane3D(e.scene),e.zfunction=e.zFuncText,e.setFirstGraphtoScene(e.scene).then((function(){e.resetCameraforSF({xMax:e.xMax,yMax:e.yMax,zMax:e.zMax}),e.xMinslider=e.xMin,e.xMaxslider=e.xMax,e.animate()})).catch((function(t){alert(t),e.resetCameraforSF({xMax:10,yMax:10,zMax:1}),e.animate()}))}))},methods:Object(j["a"])({},Object(O["c"])("singleFunction",["setZFuncText","setOneParameter","setXMin","setXMax","createDefaultWireMaterial"]),{},Object(O["b"])("singleFunction",["setFirstGraphtoScene","createGraph","updateGraph","createPlane3D"]),{},Object(O["b"])("scene3D",["init","resetCameraforSF"]),{animate:function(){requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)},goback:function(){q.go(-1)},replaceGraph:function(){var e=this;this.setZFuncText(this.zfunction),this.createGraph(this.scene).then((function(){e.function_message="Gráfico listo!",setTimeout((function(){return e.function_message=""}),3e3)}))},resetMainCamera:function(){this.resetCameraforSF({xMax:this.xMax,yMax:this.yMax,zMax:this.zMax})},validFunction:function(e){try{var t=A.parser();return t.evaluate("f(x,y) = ".concat(e)),t.set("a",1),t.set("b",1),t.set("c",1),t.set("d",1),t.set("e",1),t.evaluate("f(1,1)"),!0}catch(n){return!1}}})},T=I,R=Object(u["a"])(T,P,k,!1,null,null,null),N=R.exports;a["default"].use(m["a"]);var E=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/functiongrapher",name:"FunctionGrapher",component:N}],L=new m["a"]({mode:"history",base:"/",routes:E}),q=L,B=(n("d81d"),n("38cf"),n("ade3")),Z=n("5a89"),W={},V=Object(S["a"])(F["a"],W),X={namespaced:!0,state:{zFuncText:"sin(sqrt(a*x^2  + b*y^2))",segments:40,xMin:-10,xMax:10,yMin:-10,yMax:10,zMin:-10,zMax:10,parameters:{a:1,b:1,c:1,d:1,e:1},axesItem:{number_size:.2,number_height:.05,font:void 0,axis_size:25},plane3D:null,graphGeometry:null,wireMaterial:null,graphMesh:null,parser:V.parser()},mutations:{setZFuncText:function(e,t){e.zFuncText=t},setSegments:function(e,t){e.segments=t},setXMin:function(e,t){e.xMin=t},setXMax:function(e,t){e.xMax=t},setYMin:function(e,t){e.yMin=t},setYMax:function(e,t){e.yMax=t},setZMin:function(e,t){e.zMin=t},setZMax:function(e,t){e.zMax=t},setAxesFont:function(e,t){e.axesItem.font=t},setGraphGeometry:function(e,t){e.graphGeometry=t},setWireMaterial:function(e,t){e.wireMaterial=t},createDefaultWireMaterial:function(e){if(!this.wireMaterial){var t=(new Z["w"]).load("".concat("/","images/square.png"));t.wrapS=t.wrapT=Z["q"],t.repeat.set(e.segments,e.segments),e.wireMaterial=new Z["k"]({map:t,vertexColors:!0,side:Z["d"]})}},setGraphMesh:function(e,t){e.graphMesh=t},setOneParameter:function(e,t){var n=t.param,a=t.newval,r=e.parameters;void 0!==r[n]&&(r=Object.assign(r,Object(B["a"])({},n,a))),e.parameters=r},setParameters:function(e,t){e.parameters=t}},getters:{xRange:function(e){return e.xMax-e.xMin},yRange:function(e){return e.yMax-e.yMin},zRange:function(e){return e.zMax-e.zMin}},actions:{setFirstGraphtoScene:function(e,t){var n=e.dispatch,a=e.state;return new Promise((function(e,r){a.graphMesh?(t.add(a.graphMesh),e()):n("createGraph",t).then((function(){return e()})).catch((function(e){return r(e)}))}))},createGraph:function(e,t){var n=e.dispatch,a=e.commit,r=e.state,s=e.getters;return new Promise((function(e,i){n("resetParameters").then((function(o){var c=function(e,t,n){e=s.xRange*e+r.xMin,t=s.yRange*t+r.yMin;var a=o(e,t);isNaN(a)?n.set(0,0,0):n.set(e,t,a)};a("setGraphGeometry",new Z["m"](c,r.segments,r.segments)),r.graphGeometry.computeBoundingBox(),a("setZMin",r.graphGeometry.boundingBox.min.z),a("setZMax",r.graphGeometry.boundingBox.max.z),r.wireMaterial?n("setVertexColors").then((function(){r.graphMesh&&t.remove(r.graphMesh),r.wireMaterial.map.repeat.set(r.segments,r.segments),a("setGraphMesh",new Z["j"](r.graphGeometry,r.wireMaterial)),r.graphMesh.doubleSided=!0,t.add(r.graphMesh),e()})).catch((function(e){return i(e)})):i("WireMaterial es nulo")})).catch((function(e){return i(e)}))}))},updateGraph:function(e,t){var n=e.dispatch,a=e.commit,r=e.state,s=e.getters;return new Promise((function(e,i){r.graphMesh||i();var o=r.parser.get("f"),c=function(e,t,n){e=s.xRange*e+r.xMin,t=s.yRange*t+r.yMin;var a=o(e,t);isNaN(a)?n.set(0,0,0):n.set(e,t,a)};a("setGraphGeometry",new Z["m"](c,r.segments,r.segments)),r.graphGeometry.computeBoundingBox(),a("setZMin",r.graphGeometry.boundingBox.min.z),a("setZMax",r.graphGeometry.boundingBox.max.z),n("setVertexColors").then((function(){r.graphMesh&&t.remove(r.graphMesh),r.wireMaterial.map.repeat.set(r.segments,r.segments),a("setGraphMesh",new Z["j"](r.graphGeometry,r.wireMaterial)),r.graphMesh.doubleSided=!0,t.add(r.graphMesh),e()})).catch((function(e){return i(e)}))}))},setVertexColors:function(e){var t=e.state,n=e.getters;return new Promise((function(e,a){t.graphGeometry||a();for(var r,s=t.graphGeometry.getAttribute("position"),i=[],o=0;o<s.count;o++)r=new Z["c"](255),r.setHSL(.7*(t.zMax-s.getZ(o))/n.zRange,1,.5),i.push(r.r,r.g,r.b);t.graphGeometry.setAttribute("color",new Z["f"](i,3)),e()}))},resetParameters:function(e){var t=e.state;return new Promise((function(e){t.parser.clear(),t.parser.evaluate("f(x,y) = ".concat(t.zFuncText)),t.parser.set("a",1),t.parser.set("b",1),t.parser.set("c",1),t.parser.set("d",1),t.parser.set("e",1);var n=V.abs(t.parser.evaluate("f(10,10)")),a=V.abs(t.parser.evaluate("f(-10,-10)")),r=n>a?n:a;r>=100?(t.xMax=t.yMax=3,t.xMin=t.yMin=-3):r>=50&&(t.xMax=t.yMax=6,t.xMin=t.yMin=-6),e(t.parser.get("f"))}))},createPlane3D:function(e,t){var n=e.state,a=e.dispatch;n.plane3D||(n.plane3D=new Z["h"],a("createAxes"),a("createAxesNumbers")),t.add(n.plane3D)},createAxes:function(e){var t=e.state;if(t.plane3D){var n=new Z["a"](t.axesItem.axis_size),a=new Z["a"](t.axesItem.axis_size),r=new Z["a"](t.axesItem.axis_size);a.rotation.x=Math.PI,a.rotation.y=Math.PI,r.rotation.x=Math.PI,t.plane3D.add(n),t.plane3D.add(a),t.plane3D.add(r)}},createAxesNumbers:function(e){var t=e.dispatch,n=e.commit,a=e.state;if(a.plane3D){var r=new Z["g"];r.load("".concat("/","assets/fonts3d/helvetiker_regular.typeface.json"),(function(e){n("setAxesFont",e),t("createPoint",{x:0,y:0,z:0,color:16711680}).then((function(e){return a.plane3D.add(e)}));var r=a.axesItem.axis_size-a.axesItem.axis_size%5,s=-r;while(r>=s)0!==r?(t("createPoint",{x:r,y:0,z:0,color:16711680}).then((function(e){return a.plane3D.add(e)})),t("createNumber",{x:r,y:0,z:-(a.axesItem.number_size+.05),text:String(r),color:16711680}).then((function(e){return a.plane3D.add(e)})),r-=5):r-=5;r=-s;while(r>=s)0!==r?(t("createPoint",{x:0,y:r,z:0,color:65280}).then((function(e){return a.plane3D.add(e)})),t("createNumber",{x:0,y:r,z:-(a.axesItem.number_size+.05),text:String(r),color:65280,forma:2}).then((function(e){return a.plane3D.add(e)})),r-=5):r-=5;r=-s;while(r>=s)0!==r?(t("createPoint",{x:0,y:0,z:r,color:255}).then((function(e){return a.plane3D.add(e)})),t("createNumber",{x:0,y:.1,z:r,text:String(r),color:255,forma:2}).then((function(e){return a.plane3D.add(e)})),r-=5):r-=5}))}},createNumber:function(e,t){var n=e.state,a=t.x,r=t.y,s=t.z,i=t.text,o=t.color,c=t.forma,l=void 0===c?1:c;return new Promise((function(e,t){var c,u;n.plane3D||t(),u=new Z["v"](i,{font:n.axesItem.font,size:n.axesItem.number_size,height:n.axesItem.number_height}),u=(new Z["b"]).fromGeometry(u),c=new Z["j"](u,new Z["l"]({color:o})),c.position.set(a,r,s),c.rotation.x=Math.PI/2,1===l?c.rotation.y=Math.PI:2===l&&(c.rotation.y=Math.PI/2),e(c)}))},createPoint:function(e,t){var n=e.state;return new Promise((function(e,a){n.plane3D||a();var r=new Z["s"](.06),s=new Z["l"]({color:t.color}),i=new Z["j"](r,s);i.position.set(t.x,t.y,t.z),e(i)}))}}},H=n("4721"),U={namespaced:!0,state:{scene:null,camera:null,renderer:null,controls:null},actions:{init:function(e,t){var n=e.state;return new Promise((function(e,a){t||a(),n.scene=new Z["r"];var r=window.innerWidth,s=window.innerHeight;n.renderer=new Z["z"]({antialias:!0}),n.renderer.setSize(r,s);var i=new Z["o"](16777215);i.position.set(0,0,250);var o=new Z["o"](16777215);o.position.set(0,0,-250),n.scene.add(i),n.scene.add(o),n.renderer.setClearColor(13421772,1),t.appendChild(n.renderer.domElement),e()}))},resetCameraforSF:function(e,t){var n=e.state,a=t.xMax,r=t.yMax,s=t.zMax;if(!n.camera){var i=window.innerWidth,o=window.innerHeight,c=45,l=i/o,u=.1,p=2e4;n.camera=new Z["n"](c,l,u,p),n.scene.add(n.camera)}n.camera.position.set(1.5*a,1.5*r,s<2?4*s:4),n.camera.up=new Z["y"](0,0,1),n.camera.lookAt(n.scene.position),n.controls=new H["a"](n.camera,n.renderer.domElement)}}};a["default"].use(O["a"]);var $=new O["a"].Store({state:{},mutations:{},actions:{},modules:{singleFunction:X,scene3D:U}});a["default"].config.productionTip=!1,new a["default"]({vuetify:o,router:q,store:$,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.ad7ffc73.js.map