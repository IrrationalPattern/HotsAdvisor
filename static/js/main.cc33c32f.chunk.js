(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(368)},168:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),s=a.n(o),c=(a(168),a(46)),i=a.n(c),l=a(65),m=a(16),u=a(17),p=a(27),h=a(26),f=a(28),d=a(160),g=a.n(d),E=a(66),b=a.n(E),j=a(14),y=a.n(j),v=a(161),O=a.n(v),S=a(2),C=a.n(S),k=a(13),w=a(68),x=a.n(w),I=(a(218),{apiKey:"AIzaSyB-CIUYchFCjQxzgu9lNNwMLZjnHz_LJj8",authDomain:"hots-advisor.firebaseapp.com",databaseURL:"https://hots-advisor.firebaseio.com",projectId:"hots-advisor",storageBucket:"hots-advisor.appspot.com",messagingSenderId:"969304311955"}),N=function(){function e(){Object(m.a)(this,e),x.a.apps.length||x.a.initializeApp(I),this.database=x.a.database()}return Object(u.a)(e,[{key:"read",value:function(e){return this.database.ref(e)}}]),e}(),B=r.a.createContext(null),H=a(150),T=a.n(H),z=a(370),M=a(373),A={BASE:"https://hotsapi.net/api/v1"},W=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,null,[{key:"groupByClasses",value:function(e){return console.log(e),Object(z.a)(Object(M.a)("role"))(e)}},{key:"getHeroes",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat(A.BASE,"/heroes"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),L=a(371),P=a(372),_=a(374),J=a(369),R=a(159),D=a.n(R),F=a(152),G=a.n(F),U=a(153),K=a.n(U),Q=a(154),Y=a.n(Q),Z=Object(k.withStyles)({hero:{},heroImage:{height:"80px"}})(function(e){return r.a.createElement(C.a,{container:!0,direction:"row",align:"center",justify:"space-around",className:e.classes.hero,spacing:0},r.a.createElement(C.a,{item:!0,container:!0,alignItems:"center",spacing:0,xs:2},r.a.createElement(C.a,{item:!0,className:e.classes.heroImage},r.a.createElement("img",{className:e.classes.heroImage,src:e.icon_url["92x93"],alt:"".concat(e.name," icon")}))),r.a.createElement(C.a,{item:!0,container:!0,direction:"column",alignItems:"flex-start",xs:!0},r.a.createElement(C.a,{item:!0},r.a.createElement(y.a,{align:"left",variant:"h5",gutterBottom:!0},e.name)),r.a.createElement(C.a,{item:!0},r.a.createElement(y.a,{align:"left"},"Role: ",e.role)),r.a.createElement(C.a,{item:!0},r.a.createElement(y.a,{align:"left"},"Type: ",e.type))))}),$=function(){return r.a.createElement(y.a,{align:"center",color:"textSecondary",gutterBottom:!0},"Pick Hero")},q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.onSlotClick(a.props.teamName,a.props.id)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.hero;return r.a.createElement(G.a,{className:t.heroSlot,onClick:this.handleClick},r.a.createElement(K.a,null,r.a.createElement(Y.a,{className:a?t.slotContent:t.slotContentSelected},a?r.a.createElement(Z,a):r.a.createElement($,null))))}}]),t}(n.Component),V=Object(k.withStyles)({heroSlot:{width:"100%",height:"80px"},slotContent:{padding:"0"},slotContentSelected:{padding:"27.5px"}})(q),X=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.team.slots.map(function(t){return r.a.createElement("div",{className:e.props.classes.heroSlotWrapper,key:t.id},r.a.createElement(V,Object.assign({teamName:e.props.team.name,onSlotClick:e.props.onSlotClick},t)))}))}}]),t}(n.Component),ee=Object(k.withStyles)({heroSlotWrapper:{marginBottom:"10px"}})(X),te=a(156),ae=a.n(te),ne=a(155),re=a.n(ne),oe=a(157),se=a.n(oe),ce=a(158),ie=a.n(ce),le=a(97),me=a.n(le),ue=a(47),pe=a.n(ue),he=a(96),fe=a.n(he),de=Object(k.withStyles)({hero:{cursor:"pointer"}})(function(e){return r.a.createElement(C.a,{container:!0,direction:"column",align:"center",onClick:function(){return e.onHeroSelect(e)},className:e.classes.hero},r.a.createElement(C.a,{item:!0},r.a.createElement("img",{src:e.icon_url["92x93"],alt:"".concat(e.name," icon")})),r.a.createElement(C.a,{item:!0},r.a.createElement(y.a,null,e.name)))});var ge=Object(k.withStyles)({heroList:{padding:"10px"},heroesTitleWrapper:{margin:"20px"},heroCard:{width:"100px",margin:"10px"}})(function(e){var t=e.classes;return r.a.createElement(me.a,{elevation:1},r.a.createElement(pe.a,{container:!0,className:t.heroList},r.a.createElement(pe.a,{item:!0,className:t.heroesTitleWrapper},r.a.createElement(fe.a,{variant:"h6",color:"inherit"},e.groupName)),r.a.createElement(pe.a,{item:!0,container:!0,direction:"row"},e.heroes.map(function(a){return r.a.createElement(pe.a,{item:!0,key:a.name,className:t.heroCard},r.a.createElement(de,Object.assign({},a,{onHeroSelect:e.onHeroSelect})))}))))});function Ee(e){return r.a.createElement(re.a,Object.assign({direction:"up"},e))}var be=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(ae.a,{fullScreen:!0,open:this.props.open,onClose:this.props.onCloseButtonClick,TransitionComponent:Ee},r.a.createElement(b.a,null,r.a.createElement(C.a,{container:!0,alignItems:"center",justify:"space-between"},r.a.createElement(C.a,{item:!0},r.a.createElement(y.a,{variant:"h5",color:"inherit"},"Select a Hero")),r.a.createElement(C.a,{item:!0},r.a.createElement(se.a,{color:"inherit",onClick:this.props.onCloseButtonClick,"aria-label":"Close"},r.a.createElement(ie.a,null))))),r.a.createElement(C.a,{container:!0,direction:"column",justify:"space-between",spacing:32,className:t.content},Object.keys(this.props.heroes).map(function(t){return r.a.createElement(C.a,{item:!0,key:t},r.a.createElement(ge,{groupName:t,heroes:e.props.heroes[t],onHeroSelect:e.props.onHeroSelect}))})))}}]),t}(n.Component),je=Object(k.withStyles)({content:{padding:"25px"}})(be),ye=a(98),ve=a.n(ye),Oe=a(99),Se=a.n(Oe),Ce=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(C.a,{container:!0,spacing:8,className:e.suggestions},r.a.createElement(C.a,{item:!0,xs:6,className:e.colsSeprator},r.a.createElement(y.a,{align:"center",className:e.title},"To synergize"),r.a.createElement(ve.a,{cellHeight:50},this.props.synergizes.map(function(e){return r.a.createElement(Se.a,null,r.a.createElement(y.a,{align:"center"},e))}))),r.a.createElement(C.a,{item:!0,xs:6},r.a.createElement(y.a,{align:"center",className:e.title},"To counter"),r.a.createElement(ve.a,{cellHeight:50},this.props.counters.map(function(e){return r.a.createElement(Se.a,null,r.a.createElement(y.a,{align:"center"},e))}))))}}]),t}(n.Component),ke=Object(k.withStyles)({suggestions:{marginTop:"30px"},colsSeprator:{borderRight:"1px solid gray",minHeight:"300px"},title:{marginBottom:"20px"}})(Ce);function we(){return new Array(5).fill({}).map(function(e,t){return{id:t}})}var xe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleModalClose=function(){a.toggleModal(!1)},a.handleSlotClick=function(e,t){a.setState(function(){return{selectedSlot:{team:e,slotId:t}}}),a.toggleModal(!0)},a.handleHeroSelect=function(e){a.fillSlot(e),a.toggleModal(!1)},a.toggleModal=function(e){a.setState(function(){return{open:e}})},a.fillSlot=function(e){var t=a.state.selectedSlot,n=a.state[t.team],r={};r[t.team]={name:t.team,slots:L.a(t.slotId,P.a(n.slots[t.slotId],{hero:e}),n.slots)};var o=r[t.team].slots.map(M.a("hero")).filter(function(e){return!!e}).map(M.a("short_name")),s=_.a(o.map(function(e){return a.props.draftInfo.filter(function(t){return t.heroName===e})})),c=J.a(_.a(s.map(M.a("synergizes")))),i=J.a(_.a(s.map(M.a("counters"))));r[t.team].synergizes=c,r[t.team].counters=i,console.log(r),a.setState(function(){return r})},console.log(a.props),a.state={open:!1,selectedSlot:{},firstTeam:{name:"firstTeam",slots:we(),synergizes:[],counters:[]},secondTeam:{name:"secondTeam",slots:we(),synergizes:[],counters:[]},heroesByGroups:W.groupByClasses(a.props.heroesInfo)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(C.a,{container:!0,className:e.draftPage,justify:"space-between",alignItems:"stretch"},r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(ee,{team:this.state.firstTeam,onSlotClick:this.handleSlotClick}),r.a.createElement(ke,{synergizes:this.state.firstTeam.synergizes,counters:this.state.secondTeam.counters})),r.a.createElement(C.a,{item:!0,container:!0,xs:1,justify:"center",alignItems:"center"},r.a.createElement(C.a,{item:!0},r.a.createElement(D.a,{fontSize:"large"}))),r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(ee,{team:this.state.secondTeam,onSlotClick:this.handleSlotClick}),r.a.createElement(ke,{synergizes:this.state.secondTeam.synergizes,counters:this.state.firstTeam.counters})),r.a.createElement(je,{heroes:this.state.heroesByGroups,open:this.state.open,onCloseButtonClick:this.handleModalClose,onHeroSelect:this.handleHeroSelect}))}}]),t}(n.Component),Ie=Object(k.withStyles)({draftPage:{padding:"25px"}})(xe),Ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={firebaseInst:new N,heroesInfo:null,draftInfo:null},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getHeroes();case 2:t=e.sent,this.state.firebaseInst.read("/heroesInfo/data").once("value").then(function(e){a.setState(function(){return{draftInfo:e.val(),heroesInfo:t}})});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B.Provider,{value:this.state.firebaseInst},r.a.createElement(C.a,{container:!0,className:e.appContainer},r.a.createElement(g.a,{position:"static",color:"default"},r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"h6",color:"inherit"},"Hots Advisor"))),r.a.createElement(C.a,{item:!0,container:!0},this.state.heroesInfo?r.a.createElement(Ie,{heroesInfo:this.state.heroesInfo,draftInfo:this.state.draftInfo}):r.a.createElement(C.a,{item:!0,className:e.progress},r.a.createElement(O.a,{color:"secondary",size:100,thickness:4})))))}}]),t}(n.Component),Be=Object(k.withStyles)(function(e){return{appContainer:{height:"100%"},progress:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})(Ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,2,1]]]);
//# sourceMappingURL=main.cc33c32f.chunk.js.map