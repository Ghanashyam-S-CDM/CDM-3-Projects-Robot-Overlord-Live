(this["webpackJsonprobot-overlord-react"]=this["webpackJsonprobot-overlord-react"]||[]).push([[0],[,,,,,function(e,t){e.exports={x:{position:[0,11.32,0],axis:[0,1,0],angles:{home:0,min:-120,max:120},objs:["2_Shoulder.obj"]},y:{position:[0,7.524,0],axis:[0,0,1],angles:{home:-90,min:-170,max:0},objs:["3_Bicep.obj"],parent:"x"},z:{position:[0,35.796,0],axis:[0,0,1],angles:{home:0,min:-83.369,max:86},objs:["4_Forearm.obj"],parent:"y"},u:{position:[29.207,6.406,0],axis:[1,0,0],angles:{home:0,min:-175,max:175},objs:["5_TuningFork.obj"],parent:"z"},v:{position:[9.513,.04,-.034],axis:[0,0,1],angles:{home:0,min:-120,max:120},objs:["6_PicassoBox.obj"],parent:"u"},w:{position:[5.423,-.004,.031],axis:[1,0,0],angles:{home:0,min:-170,max:170},objs:["7_Hand.obj"],parent:"v"},t:{position:[.489,0,0],axis:[0,0,0],angles:{home:180,min:10,max:180},objs:["8_ClampBase.obj"],parent:"w"},t_l:{position:[10.145,0,-4.05],axis:[0,0,0],angles:{home:0,min:0,max:0},objs:["9_Clamp_Left_Fixed.obj"],parent:"t"},t_r:{position:[10.145,0,4.05],axis:[0,0,0],angles:{home:0,min:0,max:0},objs:["9_Clamp_Right_Fixed.obj"],parent:"t"}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(92)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./1_Anchor.obj":73,"./2_Shoulder.obj":74,"./3_Bicep.obj":75,"./4_Forearm.obj":76,"./5_TuningFork.obj":77,"./6_PicassoBox.obj":78,"./7_Hand.obj":79,"./8_ClampBase.obj":80,"./9_Clamp_Left_Fixed.obj":81,"./9_Clamp_Right_Fixed.obj":82};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=72},function(e,t,n){e.exports=n.p+"static/media/1_Anchor.05a3563c.obj"},function(e,t,n){e.exports=n.p+"static/media/2_Shoulder.67fa005d.obj"},function(e,t,n){e.exports=n.p+"static/media/3_Bicep.6eb28d2f.obj"},function(e,t,n){e.exports=n.p+"static/media/4_Forearm.bab2fed0.obj"},function(e,t,n){e.exports=n.p+"static/media/5_TuningFork.69d3d423.obj"},function(e,t,n){e.exports=n.p+"static/media/6_PicassoBox.78e539c9.obj"},function(e,t,n){e.exports=n.p+"static/media/7_Hand.bfb064cf.obj"},function(e,t,n){e.exports=n.p+"static/media/8_ClampBase.d515e25f.obj"},function(e,t,n){e.exports=n.p+"static/media/9_Clamp_Left_Fixed.45fe70fc.obj"},function(e,t,n){e.exports=n.p+"static/media/9_Clamp_Right_Fixed.1e1f6339.obj"},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(36),i=n.n(r),c=n(15),s=(n(48),n(3)),l=(n(49),n(12)),m=(n(50),n(14)),u=n(7),d=n.n(u),p=n(37),f=n.n(p),h=n(11),E=n(1),v=n(38),b=n(22),g=n.n(b),S=n(39),x=n(40),w=(n(70),n(5)),N=n.n(w),j=(n(71),new(n(41).a));function y(e,t,n,a){var o=e/t;n.setSize(e,t),n.setPixelRatio(window.devicePixelRatio),a.fov=45*(o>1?1:Math.atan(1/o)/E.l.DEG2RAD/45),a.aspect=o,a.updateProjectionMatrix()}var _,T=new E.z({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),O=T.domElement;O.id="PoseToImgCanvas",document.body.appendChild(O);var A={},k=new E.p;k.position.set(100,100,-100),k.lookAt(0,30,0),y(320,240,T,k);var P,C,H,R,I,F={};function L(e){var t=e.pose,n=e.cache,r=Object(a.useContext)(re).state,i=F[t];if(r.isPoseToImgReady&&!i){var c=JSON.parse(t);d.a.forIn(A,(function(e,t){return e.rotateSection(c[t])})),T.render(_,k),i=O.toDataURL(),!1!==n&&(F[t]=i)}return o.a.createElement("img",Object.assign({src:i},d.a.omit(e,["pose","cache"]),{"data-pose":t,alt:""}))}var M={},J={},D=(new E.y(90,90,-90),["1_Anchor.obj"].concat(Object(m.a)(Object.values(N.a).flatMap((function(e){return e.objs})))).filter((function(e){return e}))),z=Promise.all(D.map((function(e){return t=n(72)("./"+e),new Promise((function(e,n){try{j.load(t,(function(t){return e(t)}),null,null,null)}catch(a){n(a)}}));var t}))).then((function(e){e.forEach((function(e,t){return M[D[t]]=e}))}));function B(){return P=Object(a.useRef)(),Object(a.useEffect)((function(){Object(S.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C=new E.z({antialias:!0,canvas:P.current,alpha:!0,preserveDrawingBuffer:!0}),H=new E.u,(R=new E.p).position.set(90,90,-90),R.lookAt(0,30,0),(I=new x.a(R,C.domElement)).enableDamping=!0,I.enablePan=!1,I.dampingFactor=.1,I.rotateSpeed=.5,I.maxPolarAngle=Math.PI/2,I.target.set(0,30,0),G(),window.addEventListener("resize",G,!0),(t=new E.q).position.set(0,100,0),H.add(t),(n=new E.a).intensity=.25,H.add(n),e.next=22,z;case 22:a=H.clone(),o=d.a.mapValues(M,(function(e){return e.clone()})),q(_=a,o,A),console.log("isPoseToImgReady"),$(["SET_STATE",{isPoseToImgReady:!0}]),q(H,M,J),W();case 25:case"end":return e.stop()}var a,o}),e)})))()}),[]),o.a.createElement("canvas",{id:"SimRobot",ref:P})}function G(){y(P.current.offsetWidth,P.current.offsetHeight,C,R)}function q(e,t,n){d.a.forIn(N.a,(function(e,a){return n[a]=function(e,t,n,a){var o,r=Object(v.a)(E.y,Object(m.a)(e.axis)),i=new E.o;i.name="section-"+t,(o=i.position).set.apply(o,Object(m.a)(e.position)),i.setRotationFromAxisAngle(r,e.angles.home*E.l.DEG2RAD);var c=new E.o;i.add(c),c.name="section-"+t+"-inner",e.objs.map((function(e){return c.add(n[e])})),i.sectionName=t,i.inner=c,i.axis=r,i.rotateSection=function(t){t=E.l.clamp(t,e.angles.min,e.angles.max),i.sectionAngle!==t&&(i.sectionAngle=t,c.setRotationFromAxisAngle(r,-t*E.l.DEG2RAD))},i.rotateSection(e.angles.home),e.parent&&a[e.parent].inner.add(i);return i}(e,a,t,n)}));var a=n.t.inner,o=a.children[1].inner,r=a.children[2].inner;n.t.rotateSection=function(e){var t=(e-N.a.t.angles.max)/N.a.t.angles.max*.7;o.position.z=t*N.a.t_l.position[2],r.position.z=t*N.a.t_r.position[2]},e.add(t["1_Anchor.obj"]),e.add(n.x)}function W(){requestAnimationFrame(W),I.update(),I.object.position,C.render(H,R)}var U;n(83);function K(){var e=Object(a.useContext)(re),t=e.state,n=e.dispatch,r=t.historySeekPos,i=t.poseHistory,c=t.simPose,s=t.historyApplyAttachment;return r===i.length&&(U=JSON.stringify(c)),o.a.createElement("div",{id:"HistoryTimeline"},o.a.createElement("div",{className:"row f-center spc-4 spc-x-8"},o.a.createElement("div",{className:"fa fa-history"}),o.a.createElement("div",{className:"mr-auto"},"History Timeline"),o.a.createElement("div",null,"Apply Attachment State",o.a.createElement("input",{className:"ml-8",type:"checkbox",checked:s,onChange:function(e){var t=e.target;n(["SET_STATE",{historyApplyAttachment:t.checked}])}})),o.a.createElement("div",{className:"fa fa-minus",onClick:function(){return n(["SET_STATE",{showHistoryTimeline:!1}])}})),o.a.createElement("div",{className:"seekbar f-center",style:{height:"30px"}},o.a.createElement("div",{className:"text-center h7"},"Seekbar"),i.length>=1?o.a.createElement("input",{type:"range",min:"0",max:i.length,step:".1",value:r,onChange:function(e){var t=e.target.valueAsNumber;return n(["HISTORY_SEEK",t])},style:{width:136*i.length+"px"}}):void 0),o.a.createElement("div",{className:"row spc-8"},i.map((function(e,t){return o.a.createElement(L,{key:t,pose:e,onClick:function(){return n(["HISTORY_SEEK",t])}})})),o.a.createElement("div",{className:"col-extrude p-8 current"},o.a.createElement(L,{cache:!1,pose:U,onClick:function(){return n(["HISTORY_SEEK",i.length])}}))))}var V,Y,$,Q={},X=function(e,t){var n=Object(l.a)(t,2),a=n[0],o=n[1];return"false"===(Q=function e(t,n,a){var o;switch(n){case"SET_STATE":return Object(h.a)(Object(h.a)({},t),a);case"SET_SIM_ANGLES":for(var r in a)a[r]=E.l.clamp(+a[r].toFixed(3),N.a[r].angles.min,N.a[r].angles.max),J[r].rotateSection(a[r]);return Object(h.a)(Object(h.a)({},t),{},{simPose:a});case"GO":return o=JSON.stringify(t.simPose),V!==o&&(t.poseHistory.push(o),t.historySeekPos=t.poseHistory.length,V=o),Object(h.a)({},t);case"HISTORY_SEEK":var i=Math.floor(a),c=Math.ceil(a),s=+(a%1).toFixed(1),l=JSON.parse(U);i=i>=t.poseHistory.length?l:JSON.parse(t.poseHistory[i]),c=c>=t.poseHistory.length?l:JSON.parse(t.poseHistory[c]);var m=d.a.mapValues(l,(function(e,t){return E.l.lerp(i[t],c[t],s)}));return t.historyApplyAttachment||(m.t=l.t),Object(h.a)(Object(h.a)({},e(t,"SET_SIM_ANGLES",m)),{},{historySeekPos:a});default:return t}}(e,a,o)).isPolling&&(Q.isPolling=!1),"true"===Q.isPolling&&(Q.isPolling=!0),Y!==(e.showHistoryTimeline||e.showSequenceControl)&&(console.log("Bottom drawer changed"),window.setTimeout(G,0),Y=e.showHistoryTimeline||e.showSequenceControl),"SET_SIM_ANGLES"===a&&(Q.historySeekPos=e.poseHistory.length),Q};var Z,ee,te=JSON.stringify(d.a.mapValues(N.a,(function(e){return e.angles.home}))),ne=JSON.parse(te),ae=JSON.parse(te),oe=JSON.stringify({isPolling:!0,IP:"",simPose:JSON.parse(te),status:"Offline",camFeedState:"searching",camFeedMaximize:!1,isPoseToImgReady:!1,showHistoryTimeline:!1,showSequenceControl:!1,showLibrary:!1,poseHistory:[],historySeekPos:0,historyApplyAttachment:!1}),re=Object(a.createContext)(JSON.parse(oe)),ie=["IP","isPolling"],ce=!1,se=Object(s.e)((function(e){var t,n=e.children,r=e.location,i=e.history,c=Object(a.useReducer)(X,JSON.parse(oe)),s=Object(l.a)(c,2);return t=s[0],$=s[1],Object(a.useEffect)((function(){console.log("componentDidMount");var e=d.a.pick(Object.fromEntries(new URLSearchParams(r.search)),ie);$(["SET_STATE",e]),window.setInterval((function(){Q.isPolling&&f.a.get("http://".concat(Q.IP,":7878/live")).then((function(e){ne=e.position,ae=e.target,$(["SET_STATE",{status:"Online"}])})).catch((function(e){return $(["SET_STATE",{status:"Offline"}])}))}),1e3)}),[]),Object(a.useEffect)((function(){console.log("stateToUrl"),ce?i.replace(r.pathname+"?"+new URLSearchParams(d.a.pick(t,ie)).toString()):(i.replace("/login?"+new URLSearchParams(d.a.pick(t,ie)).toString()),ce=!0)}),[].concat(Object(m.a)(ie.map((function(e){return t[e]}))),[r.pathname])),Object(a.useEffect)((function(){var e=Q.IP;$(["SET_STATE",{camFeedState:"searching"}]),fetch("http://".concat(e,":8081/?action=snapshot")).then((function(){Q.IP===e&&$(["SET_STATE",{camFeedState:"found"}])})).catch((function(t){console.error(t),Q.IP===e&&$(["SET_STATE",{camFeedState:"not found"}])}))}),[t.IP]),o.a.createElement(re.Provider,{value:{state:t,dispatch:$}},n)})),le=Object(s.e)((function(e){var t=e.history,n=Object(a.useContext)(re),r=n.state,i=n.dispatch,c=Object(a.useState)(!1),s=Object(l.a)(c,2),m=s[0],u=s[1];return Object(a.useEffect)((function(){return u(!0)}),[]),o.a.createElement("form",Object.assign({id:"Login",className:m?"active":void 0},{onSubmit:function(e){e.preventDefault(),u(!1),window.setTimeout((function(){return t.push("/")}),500)}}),o.a.createElement("section",null,m?o.a.createElement("style",null,"#cam-feed, #cam-feed:hover:not(.active){ z-index: 1; transform: scale(1,1); right: calc(50% - 320px); bottom: calc(50% - 213px); border-radius: 6px; transition: opacity .5s; }"):void 0,o.a.createElement("div",{className:"cam-feed-container"}),o.a.createElement("div",{className:"row spc-12 f-center"},o.a.createElement("label",{htmlFor:"login-ip"},"Robot IP Address"),o.a.createElement("input",{id:"login-ip",className:"col",type:"text",name:"Robot IP",value:r.IP,onChange:function(e){var t=e.target;return i(["SET_STATE",{IP:t.value}])}}),o.a.createElement("button",{className:"outline"},"Go"))))})),me=n(2);n(88),n(89);function ue(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],i=n[1];return o.a.createElement(a.Fragment,null,o.a.createElement("div",{id:e.id,className:(e.className||"")+" accordion"+(r?" expanded":""),onClick:function(){return i(!r)}},e.head),o.a.createElement("div",{style:{maxHeight:e.maxHeight}},e.children))}function de(){var e=Object(a.useContext)(re);return Z=e.state,ee=e.dispatch,o.a.createElement("div",{id:"RightSidebar",className:"row f-vert f-nowrap spc-12 scroll-y"},o.a.createElement("div",{className:"accordion-container"},o.a.createElement(ue,{head:"Arm Angles",maxHeight:"176 px"},["x","y","z"].map((function(e){return o.a.createElement(pe,Object.assign({i:e},{key:e}))})))),o.a.createElement("div",{className:"accordion-container"},o.a.createElement(ue,{head:"Wrist Angles",maxHeight:"176 px"},["u","v","w"].map((function(e){return o.a.createElement(pe,Object.assign({i:e},{key:e}))})))),o.a.createElement("div",{className:"accordion-container"},o.a.createElement(ue,{head:"Attachment State",maxHeight:"64 px"},["t"].map((function(e){return o.a.createElement(pe,Object.assign({i:e},{key:e}))})))),o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["SET_SIM_ANGLES",JSON.parse(te)])}},o.a.createElement("div",{className:"icon-home super-center"}),o.a.createElement("div",{className:"col text-center"},"Load Home Pose")),o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["SET_SIM_ANGLES",ne])}},o.a.createElement("div",{className:"icon-joystick super-center"}),o.a.createElement("div",{className:"col text-center"},"Load Real World Pose")),o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["SET_SIM_ANGLES",ae])}},o.a.createElement("div",{className:"icon-node_link_direction super-center"}),o.a.createElement("div",{className:"col text-center"},"Load Target Pose")),o.a.createElement("div",{className:"f-grow-1"}),o.a.createElement("div",{className:"col-extrude row spc-12 f-center"},o.a.createElement("div",{className:"h7 ml-auto mt-12"},Z.isPolling?Z.status:void 0)),o.a.createElement("div",{className:"button outline col-12 row f-center"},o.a.createElement("div",{className:"icon-stop super-center",style:{fontSize:"11px"}}),o.a.createElement("div",{className:"col text-center"},"Emergency Stop")),o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["GO"])}},o.a.createElement("div",{className:"icon-play super-center"}),o.a.createElement("div",{className:"col text-center"},"Go")),Z.showSequenceControl?o.a.createElement("div",{className:"button outline col-12 row f-center"},o.a.createElement("div",{className:"fa fa-forward super-center"}),o.a.createElement("div",{className:"col text-center"},"Play Sequence")):void 0)}function pe(e){var t=e.i,n=N.a[t],r=Object(a.useState)(!1),i=Object(l.a)(r,2),c=i[0],s=i[1];return o.a.createElement("div",{className:"p-8 pt-2"},o.a.createElement("div",{className:"row mt-0"},o.a.createElement("label",{className:"uppercase"},t),o.a.createElement("div",{className:"col",style:{height:"30px"}},o.a.createElement("input",Object.assign({type:"range",min:n.angles.min,max:n.angles.max,value:Z.simPose[t]},{onChange:m},{step:".1"})))),o.a.createElement("div",{className:"trim sliding-row"},o.a.createElement("div",{className:"row f-nowrap mt-0"+(c?" active":"")},o.a.createElement("div",{className:"col-6 row mr-8"},o.a.createElement("div",{className:"button outline super-center icon-reply p-0",title:"Reset",onClick:function(){return s(!0)}}),o.a.createElement("div",{className:"pl-10 col row f-justify-space-between"},o.a.createElement("div",{className:"col text-muted h7"},n.angles.min),o.a.createElement("input",Object.assign({className:"text-center py-2",type:"number",value:Z.simPose[t]},{onChange:m})),o.a.createElement("div",{className:"col text-muted h7 text-right"},n.angles.max),o.a.createElement("div",{className:"row-breaker"}))),o.a.createElement("div",{className:"col-6 row mr-8 f-center"},o.a.createElement("div",{className:"button outline super-center icon-cross_mark",onClick:function(){return s(!1)}}),o.a.createElement("div",{className:"mr-auto ml-8"},"Reset to:"),o.a.createElement("button",{title:"Home angle",className:"outline ml-8 h8 icon-home",style:{height:"22px"},onClick:function(){return m({target:{valueAsNumber:JSON.parse(te)[t]}})}}),o.a.createElement("button",{title:"Actual angle",className:"outline ml-8 h8 icon-joystick",style:{height:"22px"},onClick:function(){return m({target:{valueAsNumber:ne[t]}})}}),o.a.createElement("button",{title:"Target angle",className:"outline ml-8 h8 icon-node_link_direction",style:{height:"22px"},onClick:function(){return m({target:{valueAsNumber:ae[t]}})}})))));function m(e){var n=e.target.valueAsNumber;ee(["SET_SIM_ANGLES",Object(h.a)(Object(h.a)({},Z.simPose),{},Object(me.a)({},t,n))])}}n(90);function fe(){var e=Object(a.useContext)(re),t=e.state,n=e.dispatch;return o.a.createElement("div",{id:"BottomDrawer"},!1===(t.showHistoryTimeline||t.showSequenceControl)?o.a.createElement("style",null,":root{ --bottomDrawerHeight: 46px }"):void 0,o.a.createElement("div",{id:"taskbar",className:"row spc-8 f-end"},o.a.createElement("div",{className:"button outline row f-center",onClick:function(){return n(["SET_STATE",{showHistoryTimeline:!t.showHistoryTimeline}])}},o.a.createElement("div",{className:"fa fa-history super-center"}),o.a.createElement("div",{className:"col text-center"},"History Timeline")),o.a.createElement("div",{className:"button outline row f-center",onClick:function(){return n(["SET_STATE",{showSequenceControl:!t.showSequenceControl}])}},o.a.createElement("div",{className:"icon-layout_directed super-center"}),o.a.createElement("div",{className:"col text-center"},"Sequence Controls")),o.a.createElement("div",{className:"button outline row f-center",onClick:function(){return n(["SET_STATE",{showLibrary:!t.showLibrary}])}},o.a.createElement("div",{className:"fa fa-bookmark super-center"}),o.a.createElement("div",{className:"col text-center"},"Library")),o.a.createElement("div",{className:"ml-auto h7"},"App Version: 0.1.0")),t.showHistoryTimeline?o.a.createElement(K,null):void 0)}n(91);function he(e){e.className,e.children;var t=Object(a.useContext)(re),n=t.state,r=t.dispatch;return o.a.createElement(a.Fragment,null,o.a.createElement("style",null,"#cam-feed{","found"!==n.camFeedState?"opacity: 0":void 0,"}"),o.a.createElement("img",{id:"cam-feed",className:n.camFeedMaximize?"active":"",src:"http://".concat(n.IP,":8081/?action=stream"),alt:"Cam feed",onClick:function(){return r(["SET_STATE",{camFeedMaximize:!n.camFeedMaximize}])}}))}var Ee=Object(s.e)((function(){return o.a.createElement("div",{id:"App"},o.a.createElement("div",{className:"pos-rel"},o.a.createElement(B,null)),o.a.createElement(de,null),o.a.createElement(he,null),o.a.createElement(fe,null),o.a.createElement(s.a,{path:"/login",component:le}))})),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(c.a,null,o.a.createElement(se,null,o.a.createElement(Ee,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()}],[[43,1,2]]]);
//# sourceMappingURL=main.b66839ae.chunk.js.map