(function(t){function e(e){for(var o,r,a=e[0],u=e[1],c=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0209":function(t,e,n){},"038a":function(t,e,n){"use strict";var o=n("0209"),i=n.n(o);i.a},"404e":function(t,e,n){},"43f1":function(t,e,n){"use strict";var o=n("404e"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v(" simple flowchart")]),n("div",{staticClass:"tool-wrapper"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.newNodeType,expression:"newNodeType"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newNodeType=e.target.multiple?n:n[0]}}},t._l(t.menu,(function(e,o){return n("option",{key:o,domProps:{value:o}},[t._v(t._s(e.label))])})),0),n("button",{on:{click:function(e){return t.addNode(t.menu[t.newNodeType])}}},[t._v("ADD")])]),n("div",{staticStyle:{padding:"0 100px"}},[n("FlowchartDummyNode",t._b({attrs:{horizontal:"",nodeWidth:150,nodeHeight:80,portSize:20}},"FlowchartDummyNode",t.menu[3],!1,!0))],1),n("div",{on:{wheel:t.zoomEvent}},[n("simple-flowchart",{attrs:{scene:t.scene,horizontal:"",nodeWidth:150,nodeHeight:80,portSize:20,height:800,width:1400,zoom:t.zoom},on:{"update:scene":function(e){t.scene=e},nodeClick:t.nodeClick,nodeDelete:t.nodeDelete,linkBreak:t.linkBreak,linkAdded:t.linkAdded,canvasClick:t.canvasClick,nodeContentDblclick:t.nodeContentDblclick},scopedSlots:t._u([{key:"nodeContent",fn:function(e){return["comparator"===e.nodeContent.node.type?[t._v(" X "),n("span",{domProps:{innerHTML:t._s(e.nodeContent.node.content)}}),t._v(" Y ")]:"constant"===e.nodeContent.node.type?["pH"===e.nodeContent.node.unit?n("span",[t._v("pH ")]):t._e(),n("span",{domProps:{innerHTML:t._s(e.nodeContent.node.content)}}),"pH"!==e.nodeContent.node.unit?n("span",[t._v(t._s(e.nodeContent.node.unit))]):t._e()]:[t._v(" "+t._s(e.nodeContent.node.content)+" ")]]}}])})],1)])},s=[],r=(n("99af"),n("d81d"),n("2909")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowchart-container",style:t.getWrapStyle,on:{mousemove:t.handleMove,mouseup:t.handleUp,mousedown:t.handleDown}},[n("svg",{style:t.getSvgStyle},[n("g",{attrs:{id:"zoomTarget"}},t._l(t.lines,(function(e,o){return n("flowchart-link",t._b({key:"link"+o,on:{deleteLink:function(n){return t.linkDelete(e.id)}}},"flowchart-link",e,!1,!0))})),1)]),t._l(t.scene.nodes,(function(e,o){return n("flowchart-node",t._b({key:"node"+o,attrs:{options:t.nodeOptions,horizontal:t.horizontal,nodeWidth:t.nodeWidth,nodeHeight:t.nodeHeight,portSize:t.portSize},on:{linkingStart:function(n){return t.linkingStart(e.id,n)},linkingStop:function(n){return t.linkingStop(e.id,n)},nodeSelected:function(n){return t.nodeSelected(e.id,n)},nodeContentDblclick:function(n){return t.nodeContentDblclick(e.id,n)}}},"flowchart-node",e,!1,!0),[t._t("nodeContent",null,{slot:"nodeContent",nodeContent:{node:e}})],2)}))],2)},u=[],c=(n("4de4"),n("7db0"),n("c740"),n("c975"),n("a9e3"),n("3835")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",{attrs:{id:"link-"+t.id},on:{mouseover:t.handleMouseOver,mouseleave:t.handleMouseLeave}},[n("path",{style:t.pathStyle,attrs:{d:t.dAttr}}),t.show.delete?n("a",{on:{click:t.deleteLink}},[n("text",{attrs:{"text-anchor":"middle",transform:t.arrowTransform,"font-size":"22"}},[t._v("×")])]):n("path",{style:t.arrowStyle,attrs:{d:"M -1 -1 L 0 1 L 1 -1 z",transform:t.arrowTransform}})])},d=[],p={name:"FlowchartLink",props:{start:{type:Array,default:function(){return[0,0]}},end:{type:Array,default:function(){return[0,0]}},id:Number,curvature:{type:Number,default:0}},data:function(){return{show:{delete:!1}}},methods:{handleMouseOver:function(){this.id&&(this.show.delete=!0)},handleMouseLeave:function(){this.show.delete=!1},caculateCenterPoint:function(){var t=(this.end[0]-this.start[0])/2,e=(this.end[1]-this.start[1])/2;return[this.start[0]+t,this.start[1]+e]},caculateRotation:function(){var t=-Math.atan2(this.end[0]-this.start[0],this.end[1]-this.start[1]),e=180*t/Math.PI;return e<0?e+360:e},deleteLink:function(){this.$emit("deleteLink")}},computed:{pathStyle:function(){return{stroke:"rgb(255, 136, 85)",strokeWidth:2.73205,fill:"none"}},arrowStyle:function(){return{stroke:"rgb(255, 136, 85)",strokeWidth:5.73205,fill:"none"}},arrowTransform:function(){var t=this.caculateCenterPoint(),e=Object(c["a"])(t,2),n=e[0],o=e[1],i=this.caculateRotation();return isNaN(n)||isNaN(o)||isNaN(i)?void 0:"translate(".concat(n,", ").concat(o,") rotate(").concat(i,")")},dAttr:function(){var t=this.start[0],e=this.start[1],n=this.end[0],o=this.end[1],i=t,s=e+this.curvature,r=n,a=o-this.curvature;return"M ".concat(t,", ").concat(e," C ").concat(i,", ").concat(s,", ").concat(r,", ").concat(a,", ").concat(n,", ").concat(o)}}},h=p,f=(n("b7c9"),n("2877")),m=Object(f["a"])(h,l,d,!1,null,"49c4664c",null),g=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowchart-node",class:{selected:t.options.selected===t.id},style:t.nodeStyle,attrs:{width:t.nodeWidth,height:t.nodeHeight,id:"node-"+t.id},on:{mousedown:t.handleMousedown,mouseover:t.handleMouseOver,mouseleave:t.handleMouseLeave}},[t._l(t.inputs.length,(function(e,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.nodesWithoutInput(t.type),expression:"nodesWithoutInput(type)"}],key:t.id+"-input-"+e,staticClass:"node-port node-input",style:t.multiportStyle(o,!0),attrs:{id:"node-"+t.id+"-input-"+e},on:{mousedown:t.inputMouseDown,mouseup:function(n){return t.inputMouseUp(n,e)}}},[t._v(" "+t._s(t.inputs[o].name)+" ")])})),n("div",{staticClass:"node-main"},[n("div",{staticClass:"node-label",style:"background: "+t.color},[t._v(" "+t._s(t.label)+" ")]),n("div",{staticClass:"node-content",on:{dblclick:t.nodeContentDblclick}},[t._t("nodeContent",[t._v(" "+t._s(t.content)+" ")])],2)]),t._l(t.outputs.length,(function(e,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.nodesWithoutOutput(t.type),expression:"nodesWithoutOutput(type)"}],key:t.type+"-"+t.id+"-output-"+e,staticClass:"node-port node-output",style:t.multiportStyle(o,!1),attrs:{id:"node-"+t.id+"-output-"+e},on:{mousedown:function(n){return t.outputMouseDown(n,e)}}},[t._v(" "+t._s(t.outputs[o].name)+" ")])})),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show.delete,expression:"show.delete"}],staticClass:"node-delete",style:"width: "+t.portSize+"; height: "+t.portSize+";"},[t._v("×")])],2)},v=[],k={name:"FlowchartNode",props:{id:{type:[String,Number],default:"undefined",validator:function(t){return"number"===typeof t||"string"===typeof t}},x:{type:Number,default:0,validator:function(t){return"number"===typeof t}},y:{type:Number,default:0,validator:function(t){return"number"===typeof t}},type:{type:String,default:"Default"},label:{type:String,default:"input name"},content:{type:String,default:""},inputs:{type:Array,default:function(){return[{name:"",color:"blue"}]}},outputs:{type:Array,default:function(){return[{name:"",color:"blue"}]}},lineContent:{type:String,default:""},options:{type:Object,default:function(){return{centerX:1024,scale:1,centerY:140,content:""}}},horizontal:{type:Boolean,default:!1},color:{type:String,default:"green"},nodeWidth:{type:Number,default:120},nodeHeight:{type:Number,default:80},portSize:{type:Number,default:20}},data:function(){return{show:{delete:!1}}},mounted:function(){},computed:{nodeStyle:function(){return{top:this.options.centerY+this.y*this.options.scale+"px",left:this.options.centerX+this.x*this.options.scale+"px","min-width":this.nodeWidth+"px","min-height":this.nodeHeight+"px",width:"min-content",height:"min-content"}}},methods:{multiportStyle:function(t,e){return this.inputs.length<=1?{width:this.portSize,height:this.portSize,"background-color":e?this.inputs[0].color:this.outputs[0].color}:0===t?{width:this.portSize,height:this.portSize,"margin-top":-this.portSize+"px","background-color":e?this.inputs[0].color:this.outputs[0].color}:{width:this.portSize,height:this.portSize,"margin-top":this.portSize+"px","background-color":e?this.inputs[1].color:this.outputs[1].color}},handleMousedown:function(t){var e=t.target||t.srcElement;e.className.indexOf("node-input")<0&&e.className.indexOf("node-output")<0&&this.$emit("nodeSelected",t),t.preventDefault()},handleMouseOver:function(){this.show.delete=!0},handleMouseLeave:function(){this.show.delete=!1},outputMouseDown:function(t,e){console.log(t),this.$emit("linkingStart",e),t.preventDefault()},inputMouseDown:function(t){t.preventDefault()},inputMouseUp:function(t,e){console.log(t),this.$emit("linkingStop",e),t.preventDefault()},nodeContentDblclick:function(){this.$emit("nodeContentDblclick")},nodesWithoutInput:function(t){switch(t){case"source":case"timer":return!1}return!0},nodesWithoutOutput:function(t){switch(t){case"alert":case"beeper":case"action":return!1}return!0}}},b=k,w=(n("6f41"),Object(f["a"])(b,y,v,!1,null,"1f96fc21",null)),S=w.exports;function x(t){var e=t.getBoundingClientRect(),n=window.pageYOffset,o=window.pageXOffset,i=e.top+n,s=e.left+o;return{top:Math.round(i),left:Math.round(s)}}function z(t,e){var n=e.pageX||e.clientX+document.documentElement.scrollLeft,o=e.pageY||e.clientY+document.documentElement.scrollTop,i=x(t),s=n-i.left,r=o-i.top;return[s,r]}var _={name:"VueFlowchart",props:{scene:{type:Object,default:function(){return{centerX:1024,scale:1,centerY:140,nodes:[],links:[]}}},height:{type:Number,default:400},width:{type:Number,default:400},horizontal:{type:Boolean,default:!1},nodeWidth:{type:Number,default:120},nodeHeight:{type:Number,default:80},portSize:{type:Number,default:20},zoom:{type:Number,default:1}},data:function(){return{test:{x:0,y:0},action:{linking:!1,dragging:!1,scrolling:!1,selected:0},mouse:{x:0,y:0,lastX:0,lastY:0},draggingLink:null,rootDivOffset:{top:0,left:0}}},components:{FlowchartLink:g,FlowchartNode:S},computed:{getWrapStyle:function(){console.log("tady uvnitř");var t=this.width*(1/this.zoom),e=this.height*(1/this.zoom);return{width:t+"px",height:e+"px",transform:"scale("+this.zoom+")","transform-origin":"0 0"}},getSvgStyle:function(){console.log("tady uvnitř 2");var t=this.width*(1/this.zoom),e=this.height*(1/this.zoom);return{"min-width":t+"px","min-height":e+"px"}},nodeOptions:function(){return{centerY:this.scene.centerY,centerX:this.scene.centerX,scale:this.scene.scale,offsetTop:this.rootDivOffset.top,offsetLeft:this.rootDivOffset.left,selected:this.action.selected}},lines:function(){var t=this,e=[];e[0]=this.horizontal?"right":"bottom",e[1]=this.horizontal?"left":"top";var n=this.scene.links.map((function(n){var o,i,s,r,a,u,l=t.findNodeWithID(n.from.node),d=t.findNodeWithID(n.to.node);o=t.scene.centerX+l.x,i=t.scene.centerY+l.y;var p=t.getPortPosition(e[0],o,i,n.from.output,l.outputs.length),h=Object(c["a"])(p,2);r=h[0],s=h[1],o=t.scene.centerX+d.x,i=t.scene.centerY+d.y;var f=t.getPortPosition(e[1],o,i,n.to.input,d.inputs.length),m=Object(c["a"])(f,2);return a=m[0],u=m[1],{start:[r,s],end:[a,u],id:n.id}}));if(this.draggingLink){var o,i,s,r,a=this.findNodeWithID(this.draggingLink.from.node);o=this.scene.centerX+a.x,i=this.scene.centerY+a.y;var u=this.getPortPosition(e[0],o,i,this.draggingLink.from.output,a.outputs.length),l=Object(c["a"])(u,2);r=l[0],s=l[1],n.push({start:[r,s],end:[this.draggingLink.mx,this.draggingLink.my]})}return n}},mounted:function(){this.rootDivOffset.top=this.$el?this.$el.offsetTop:0,this.rootDivOffset.left=this.$el?this.$el.offsetLeft:0},methods:{findNodeWithID:function(t){return this.scene.nodes.find((function(e){return t===e.id}))},getPortPosition:function(t,e,n,o,i){var s=0;switch(i>1&&(s=1===o?-this.portSize:this.portSize),t){case"top":return[e+this.nodeWidth/2,n];case"bottom":return[e+this.nodeWidth/2,n+this.nodeHeight];case"left":return[e-this.portSize/2,n+this.nodeHeight/2+s];case"right":return[e+this.nodeWidth+this.portSize/2,n+this.nodeHeight/2+s]}},linkingStart:function(t,e){console.log(t,e),this.action.linking=!0,this.draggingLink={from:{node:t,output:e},mx:void 0,my:void 0}},linkingStop:function(t,e){var n=this;if(console.log(t,e),this.draggingLink&&this.draggingLink.from.node!==t){var o=this.scene.links.find((function(o){return o.from.node===n.draggingLink.from.node&&o.to.node===t&&o.to.input===e&&o.from.output===n.draggingLink.from.output}));if(o)console.log("Link already exists!");else{var i=Math.max.apply(Math,[0].concat(Object(r["a"])(this.scene.links.map((function(t){return t.id}))))),s={id:i+1,from:{node:this.draggingLink.from.node,output:this.draggingLink.from.output},to:{node:t,input:e}};console.log(s),this.scene.links.push(s),this.$emit("linkAdded",s)}}this.draggingLink=null},linkDelete:function(t){var e=this.scene.links.find((function(e){return e.id===t}));e&&(this.scene.links=this.scene.links.filter((function(e){return e.id!==t})),this.$emit("linkBreak",e))},nodeSelected:function(t,e){this.action.dragging=t,this.action.selected=t,this.$emit("nodeClick",t),this.mouse.lastX=e.pageX||e.clientX+document.documentElement.scrollLeft,this.mouse.lastY=e.pageY||e.clientY+document.documentElement.scrollTop},handleMove:function(t){if(this.action.linking){var e=z(this.$el,t),n=Object(c["a"])(e,2);this.mouse.x=n[0],this.mouse.y=n[1];var o=[this.mouse.x,this.mouse.y];this.draggingLink.mx=o[0],this.draggingLink.my=o[1]}if(this.action.dragging){this.mouse.x=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouse.y=t.pageY||t.clientY+document.documentElement.scrollTop;var i=this.mouse.x-this.mouse.lastX,s=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.moveSelectedNode(i,s)}if(this.action.scrolling){var r=z(this.$el,t),a=Object(c["a"])(r,2);this.mouse.x=a[0],this.mouse.y=a[1];var u=this.mouse.x-this.mouse.lastX,l=this.mouse.y-this.mouse.lastY;this.mouse.lastX=this.mouse.x,this.mouse.lastY=this.mouse.y,this.scene.centerX+=u,this.scene.centerY+=l}},handleUp:function(t){var e=t.target||t.srcElement;this.$el.contains(e)&&(("string"!==typeof e.className||e.className.indexOf("node-input")<0)&&(this.draggingLink=null),"string"===typeof e.className&&e.className.indexOf("node-delete")>-1&&this.nodeDelete(this.action.dragging)),this.action.linking=!1,this.action.dragging=null,this.action.scrolling=!1},handleDown:function(t){var e=t.target||t.srcElement;if((e===this.$el||e.matches("svg, svg *"))&&1===t.which){this.action.scrolling=!0;var n=z(this.$el,t),o=Object(c["a"])(n,2);this.mouse.lastX=o[0],this.mouse.lastY=o[1],this.action.selected=null}this.$emit("canvasClick",t)},moveSelectedNode:function(t,e){var n=this,o=this.scene.nodes.findIndex((function(t){return t.id===n.action.dragging})),i=this.scene.nodes[o].x+t/this.scene.scale,s=this.scene.nodes[o].y+e/this.scene.scale;this.$set(this.scene.nodes,o,Object.assign(this.scene.nodes[o],{x:i,y:s}))},nodeDelete:function(t){this.scene.nodes=this.scene.nodes.filter((function(e){return e.id!==t})),this.scene.links=this.scene.links.filter((function(e){return e.from.node!==t&&e.to.node!==t})),this.$emit("nodeDelete",t)},nodeContentDblclick:function(t,e){this.$emit("nodeContentDblclick",t,e)}}},O=_,C=(n("038a"),Object(f["a"])(O,a,u,!1,null,"1acdc402",null)),N=C.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowchart-node",style:t.nodeStyle},[t._l(t.inputs.length,(function(e,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.nodesWithoutInput(t.type),expression:"nodesWithoutInput(type)"}],key:t.id+"-input-"+e,staticClass:"node-port node-input",style:t.multiportStyle(o,!0),attrs:{id:"node-"+t.id+"-input-"+e}},[t._v(" "+t._s(t.inputs[o].name)+" ")])})),n("div",{staticClass:"node-main"},[n("div",{staticClass:"node-label",style:"background: "+t.color},[t._v(" "+t._s(t.label)+" ")]),n("div",{staticClass:"node-content",domProps:{textContent:t._s(t.content)}})]),t._l(t.outputs.length,(function(e,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.nodesWithoutOutput(t.type),expression:"nodesWithoutOutput(type)"}],key:t.type+"-"+t.id+"-output-"+e,staticClass:"node-port node-output",style:t.multiportStyle(o,!1),attrs:{id:"node-"+t.id+"-output-"+e}},[t._v(" "+t._s(t.outputs[o].name)+" ")])}))],2)},L=[],T={name:"FlowchartDummyNode",props:{id:{type:[String,Number],default:"undefined",validator:function(t){return"number"===typeof t||"string"===typeof t}},type:{type:String,default:"Default"},label:{type:String,default:"input name"},content:{type:String,default:""},lineContent:{type:String,default:""},options:{type:Object,default:function(){return{scale:1,content:""}}},horizontal:{type:Boolean,default:!1},color:{type:String,default:"green"},nodeWidth:{type:Number,default:120},nodeHeight:{type:Number,default:80},portSize:{type:Number,default:20},inputs:{type:Array,default:function(){return[{name:"",color:"blue"}]}},outputs:{type:Array,default:function(){return[{name:"",color:"blue"}]}}},data:function(){return{show:{delete:!1}}},mounted:function(){},computed:{nodeStyle:function(){return{"min-width":this.nodeWidth+"px","min-height":this.nodeHeight+"px",width:"min-content",height:"min-content"}}},methods:{multiportStyle:function(t,e){return this.inputs.length<=1?{width:this.portSize,height:this.portSize,"background-color":e?this.inputs[0].color:this.outputs[0].color}:0===t?{width:this.portSize,height:this.portSize,"margin-top":-this.portSize+"px","background-color":e?this.inputs[0].color:this.outputs[0].color}:{width:this.portSize,height:this.portSize,"margin-top":this.portSize+"px","background-color":e?this.inputs[1].color:this.outputs[1].color}},nodesWithoutInput:function(t){switch(t){case"source":case"timer":return!1}return!0},nodesWithoutOutput:function(t){switch(t){case"alert":case"beeper":case"action":return!1}return!0}}},M=T,W=(n("43f1"),Object(f["a"])(M,D,L,!1,null,"30189a11",null)),Y=W.exports,j={source:"green",constant:"teal",timer:"red",comparator:"purple",alert:"orange",beeper:"darkpink",action:"red"},X={name:"app",components:{SimpleFlowchart:N,FlowchartDummyNode:Y},data:function(){return{zoom:1,menu:[{id:"teplota",type:"source",label:"Teplota",content:"Aktuální teplota",color:j.source,inputs:[],outputs:[{name:"O",color:"teal"}]},{id:"ph",type:"source",label:"pH sonda",content:"Aktuální hodnota pH sondy 1.",color:j.source,inputs:[],outputs:[{name:"O",color:"teal"}]},{id:"event",type:"source",label:"Událost",content:"Plánovaná událost",color:j.event,inputs:[],outputs:[{name:"O",color:"teal"}]},{id:"comparator",type:"comparator",label:"Komparátor",content:"X > Y",color:j.comparator,inputs:[{name:"I",color:"cyan"},{name:"I",color:"cyan"}],outputs:[{name:"T",color:"green"},{name:"F",color:"red"}]},{id:"alert",type:"alert",label:"Upozornění",content:"Vizuální upozornění",color:j.alert,inputs:[{name:"I",color:"cyan"}],outputs:[]},{id:"beeper",type:"beeper",label:"Upozornění",content:"Akustické upozornění",color:j.beeper,inputs:[{name:"I",color:"cyan"}],outputs:[]},{id:"action",type:"action",label:"Akce",content:"Typ akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akceTyp akce",color:j.action,inputs:[{name:"I",color:"cyan"}],outputs:[]}],scene:{centerX:1024,centerY:140,scale:1,nodes:[{id:1,x:-700,y:-69,type:"source",label:"Teplota",content:"Senzory teploty",color:j.source,inputs:[],outputs:[{name:"O",color:"green"}]},{id:2,x:-357,y:80,type:"comparator",label:"Když",content:"&leq;",color:j.comparator,inputs:[{name:"X",color:"cyan"},{name:"Y",color:"cyan"}],outputs:[{name:"T",color:"green"},{name:"F",color:"red"}]},{id:3,x:-100,y:80,type:"action",label:"Upozornění",content:"Vizuální upozornění",color:j.action,inputs:[{name:"I",color:"cyan"}]},{id:4,x:-700,y:199,type:"constant",label:"Konstanta",content:"37°C",color:j.constant,inputs:[],outputs:[{name:"O",color:"gray"}]}],links:[{id:1,from:{node:1,output:1},to:{node:2,input:1}},{id:2,from:{node:2,output:2},to:{node:3,input:1}},{id:3,from:{node:4,output:1},to:{node:2,input:2}}]},newNodeType:0,newNodeLabel:"",nodeCategory:["source","constant","timer","comparator","alert","beeper","action"]}},methods:{zoomEvent:function(t){console.log("tady venku");var e=.5,n=2,o=.1;t.deltaY<0&&this.zoom<n?this.zoom+=o:t.deltaY>0&&this.zoom>e&&(this.zoom-=o)},canvasClick:function(t){console.log("canvas Click, event:",t)},nodeContentDblclick:function(t){console.log("node content double-click, id:",t)},addNode:function(t){var e=Math.max.apply(Math,[0].concat(Object(r["a"])(this.scene.nodes.map((function(t){return t.id})))));this.scene.nodes.push({id:e+1,x:-20,y:-20,type:t.type,label:t.label?t.label:"Undefined-".concat(e+1),content:t.content,color:t.color,inputs:t.inputs,outputs:t.outputs}),console.log(this.scene.nodes)},nodeClick:function(t){console.log("node click",t)},nodeDelete:function(t){console.log("node delete",t)},linkBreak:function(t){console.log("link break",t)},linkAdded:function(t){console.log("new link added:",t)}}},$=X,P=(n("5c0b"),Object(f["a"])($,i,s,!1,null,null,null)),H=P.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"6f41":function(t,e,n){"use strict";var o=n("b948"),i=n.n(o);i.a},"9c0c":function(t,e,n){},b38d:function(t,e,n){},b7c9:function(t,e,n){"use strict";var o=n("b38d"),i=n.n(o);i.a},b948:function(t,e,n){}});
//# sourceMappingURL=app.dbd9e6f3.js.map