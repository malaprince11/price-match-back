(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(19),c=a.n(r),o=a(11),i=a(6),s=a(7),m=a(9),u=a(8),h=a(20),d=a.n(h),p=d.a.create({baseURL:"https://matchprice.herokuapp.com",withCredentials:!0});function g(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var E=function(e){return p.post("/api/auth/signup",e).then((function(e){return e.data})).catch(g)},v=function(e){return p.post("/api/auth/signin",e).then((function(e){return e.data})).catch(g)},b=function(){return p.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(g)},f=function(){return p.get("/api/auth/logout").then((function(e){return e.data})).catch(g)},y=function(e){return p.patch("/user/me",e).then((function(e){return e.data})).catch(g)},N=function(e){return p.post("/contact/send",e).then((function(e){return e.data})).catch(g)},x=l.a.createContext(),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){console.log(t),e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return l.a.createElement(x.Provider,{value:e},this.props.children)}}]),a}(n.Component),w=a(10),k=function(e){return function(t){return l.a.createElement(x.Consumer,null,(function(a){return l.a.createElement(e,Object.assign({},t,{context:a}))}))}},C=a(30),j=a(50),S=(a(81),k((function(e){var t=e.context;return l.a.createElement("nav",{className:"nav"},l.a.createElement("input",{type:"checkbox",id:"check"}),l.a.createElement("label",{htmlFor:"check",className:"checkbtn"},l.a.createElement(C.a,{size:44,color:"  rgba(252, 192, 82, 0.932)"})),l.a.createElement(o.c,{exact:!0,to:"/"},l.a.createElement("label",{id:"price-title",className:"logo"},"Price",l.a.createElement("span",null,"Match"))),l.a.createElement("ul",{className:"nav-list"},t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"a-nav"},l.a.createElement(o.c,{to:"/profile"},t.user&&t.user.email)),l.a.createElement("li",{className:"a-nav"},l.a.createElement(o.c,{to:"/dashboard"},"Dashboard")),l.a.createElement("li",{className:"a-nav"},l.a.createElement(o.c,{to:"/contact"},"Contact")),l.a.createElement("li",{className:"a-nav"},l.a.createElement("p",{onClick:function(){f().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))}}," ",l.a.createElement(j.a,{size:44,color:"  rgba(252, 192, 82, 0.932)"})))),!t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"a-nav"},l.a.createElement(o.c,{to:"/signin"},"Log in")),l.a.createElement("li",{className:"a-nav"},l.a.createElement(o.c,{to:"/signup"},"Create account")),l.a.createElement("li",{className:"a-nav"},l.a.createElement(o.c,{to:"/contact"},"Contact")))))}))),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"header1"},l.a.createElement("div",{className:"brand-box"}),l.a.createElement("div",{className:"header-title"},l.a.createElement("p",null,"Always be at the best price"),l.a.createElement("h1",null,"PriceMatch"),l.a.createElement("a",{href:"/contact",className:"btn"},"Contact")),l.a.createElement("div",{className:"img-header"},l.a.createElement("img",{src:"/image/chart-main.png",alt:"diagram"}))))}}]),a}(n.Component),L=function(e){return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("section",{className:"article"},l.a.createElement("div",{className:"zone-text"},l.a.createElement("h2",null,"Empowering smarter revenue and distribution decisions"),l.a.createElement("p",null,"Providing the most complete and user-friendly revenue and distribution management tech stack to hotel partners. Powered with real-time historical, current and future-looking datasets to drive business growth.")),l.a.createElement("div",{className:"div_photo"},l.a.createElement("img",{src:"/image/ecrou.png",alt:"hotel"}))),l.a.createElement("h2",null,"OUR GOAL"),l.a.createElement("hr",{className:"new1"}),l.a.createElement("section",{className:"zone-icon"},l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("img",{src:"/image/chart-test.png",alt:"Avatar"})),l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,l.a.createElement("b",null,"add your competitor")),l.a.createElement("p",null,"Engineer"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("img",{src:"/image/chart-test2.png",alt:"Avatar"})),l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,l.a.createElement("b",null,"Welcome more people")),l.a.createElement("p",null,"With us your will be able to know and match the price with your competitor"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("img",{src:"/image/chart-test3.png",alt:"Avatar"})),l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,l.a.createElement("b",null,"Know more about your competitor")),l.a.createElement("p",null,"You can now know more about your competitor"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("img",{src:"/image/chart-test4.png",alt:"Avatar"})),l.a.createElement("div",{className:"container"},l.a.createElement("h4",null,l.a.createElement("b",null,"Match with the market")),l.a.createElement("p",null,"With us your will be able to know and match the price with your competitor")))),l.a.createElement("h2",null,"WE HELP YOU TO DEVELOPPE YOUR BUSINESS"),l.a.createElement("hr",{className:"new1"}),l.a.createElement("section",{className:"zone-iconing"},l.a.createElement("div",{className:"iconing"},l.a.createElement("h3",null,"Developpez vos besoin"),l.a.createElement("img",{src:"/image/human-orange.png",alt:"icon"}),l.a.createElement("p",null,"pour vous aidez a developer vos revenue")),l.a.createElement("div",{className:"iconing"},l.a.createElement("h3",null,"Developpez vos besoin"),l.a.createElement("img",{src:"/image/human-orange3.png",alt:"icon"}),l.a.createElement("p",null,"pour vous aidez a developer vos revenue"))),l.a.createElement("section",{className:"zone-iconing"},l.a.createElement("div",{className:"iconing"},l.a.createElement("h3",null,"Developpez vos besoin"),l.a.createElement("img",{src:"/image/human-orange2.png",alt:"icon"}),l.a.createElement("p",null,"pour vous aidez a developer vos revenue")),l.a.createElement("div",{className:"iconing"},l.a.createElement("h3",null,"Developpez vos besoin"),l.a.createElement("img",{src:"/image/chart-orange.png",alt:"icon"}),l.a.createElement("p",null,"pour vous aidez a developer vos revenue"))),l.a.createElement("h2",null,"THEY CHOSE US "),l.a.createElement("hr",{className:"new1"}),l.a.createElement("section",{className:"hotel"},l.a.createElement("div",null,l.a.createElement("img",{src:"/image/RBH.png",alt:"hotel"})),l.a.createElement("div",null,l.a.createElement("img",{src:"/image/icon-wyndham.png",alt:"hotel"})),l.a.createElement("div",null,l.a.createElement("img",{src:"/image/radison.png",alt:"hotel"})),l.a.createElement("div",null,l.a.createElement("img",{src:"/image/icon-HG.png",alt:"hotel"})),l.a.createElement("div",null,l.a.createElement("img",{src:"/image/RBH.png",alt:"hotel"})),l.a.createElement("div",null,l.a.createElement("img",{src:"/image/radison.png",alt:"hotel"}))))},A=a(21),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){var a=t.target.name,n="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(A.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),v(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/dashboard")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"register-wrapper"},l.a.createElement("div",{className:"register-block"},l.a.createElement("h3",{className:"register-title"},"LogIn"),l.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,style:{display:"flex",flexDirection:"column",width:300,marginLeft:"auto",marginRight:"auto"}},l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"email",id:"email",name:"email"}),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",id:"password",name:"password"}),l.a.createElement("button",null,"Submit"))))}}]),a}(n.Component);H.contextType=x;var U=Object(w.g)(H),M=function(e){return l.a.createElement(U,null)},z=a(24),I=a.n(z),F=[{label:"Hotel Marguerite",value:"g187129-d615325"},{label:"Hotel Campanile Gare",value:"g187129-d229787"},{label:"Hotel des Cedres",value:"g187129-d572198"},{label:"Hotel Ibis Gare",value:"g187129-d233286"},{label:"Grand Hotel",value:"g187129-d243818"},{label:"Hotel Saint Aignan",value:"g187129-d636351"},{label:"Appart City",value:"g187129-d5217993"},{label:"Escale Oceania",value:"g187129-d261850"},{label:"Hotel Abeille",value:"g187129-d1119754"}],P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password1:"",password2:"",firstName:"",lastName:"",hotelName:"",phoneNumber:"",address:"",competitors:[]},e.handleChange=function(t){var a="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,n=t.target.name;e.setState(Object(A.a)({},n,a)),console.log(e.state.selected)},e.handleSubmit=function(t){console.log("clicked"),t.preventDefault(),e.state.password1===e.state.password2&&E(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/dashboard")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.competitors;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"register-wrapper"},l.a.createElement("div",{className:"register-block"},l.a.createElement("h3",{className:"register-title"},"Create a account"),l.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,style:{display:"flex",flexDirection:"column",width:300,marginLeft:"auto",marginRight:"auto"}},l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"email",id:"email",name:"email"}),l.a.createElement("label",{htmlFor:"password1"},"Password:"),l.a.createElement("input",{type:"password",id:"password1",name:"password1"}),l.a.createElement("label",{htmlFor:"password2"},"Confirm password:"),l.a.createElement("input",{type:"password",id:"password2",name:"password2"}),l.a.createElement("label",null,"First name:"),l.a.createElement("input",{type:"text",id:"firstName",name:"firstName"}),l.a.createElement("label",null,"Last name:"),l.a.createElement("input",{type:"text",id:"lastName",name:"lastName"}),l.a.createElement("label",null,"Hotel name:"),l.a.createElement("input",{type:"text",id:"hotelName",name:"hotelName"}),l.a.createElement("label",null,"Phone number:"),l.a.createElement("input",{type:"text",id:"phoneNumber",name:"phoneNumber"}),l.a.createElement("label",null,"Address:"),l.a.createElement("input",{type:"text",id:"address",name:"address"}),l.a.createElement("label",null,"Competitors:"),l.a.createElement(I.a,{options:F,selected:t,onSelectedChanged:function(t){return e.setState({competitors:t})}}),l.a.createElement("button",null,"Submit")))))}}]),a}(n.Component);P.contextType=x;var _=Object(w.g)(P),Y=function(e){return l.a.createElement(_,null)},R=a(26);function T(){return l.a.createElement("div",{className:"ironhackers"},l.a.createElement("div",null,"Created by :"),l.a.createElement("a",{href:"https://www.linkedin.com/in/SpyrosKyritsis/"},"Spyros Kyritsis |",l.a.createElement(R.a,{size:25,color:"grey"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/chakib-bachir/"},"Chakib Bachir |",l.a.createElement(R.a,{size:25,color:"grey"})," "),l.a.createElement("a",{href:"https://www.linkedin.com/in/malamine-bah-219781196/"},"Malamine Bah |",l.a.createElement(R.a,{size:25,color:"grey"})))}var G=a(56),V=k((function(e){var t=e.component,a=e.context,n=Object(G.a)(e,["component","context"]);return a.isLoading?null:a.isLoggedIn?l.a.createElement(w.b,Object.assign({},n,{render:function(e){return l.a.createElement(t,e)}})):l.a.createElement(w.a,{to:"/signin"})})),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log(this.context)}},{key:"render",value:function(){return null===this.context.user.firtName?l.a.createElement("div",null,"Loading"):l.a.createElement("div",null,l.a.createElement("div",{className:"cardo"},l.a.createElement("h1",null,"Hello ",this.context.user.firstName),l.a.createElement("h3",null,this.context.user.lastName),l.a.createElement("p",{className:"title"},this.context.user.hotelName),l.a.createElement("p",null,this.context.user.email),l.a.createElement("p",null,this.context.user.phoneNumber),l.a.createElement("h3",null,"Competitors :"),l.a.createElement("p",null,this.context.user.competitors),l.a.createElement("p",null," ",l.a.createElement(o.b,{className:"link",to:"/profile/settings"},"Edit profile"))))}}]),a}(n.Component);B.contextType=x;var W=B,K=a(55),J=a(57),Z=a(58),q=a(33),Q=a.n(q),X=function(e){for(var t=[],a=[],n=0;n<e.length;n++)for(var l=0;l<8;l++){var r=Q()().add(l,"days").format("YYYY-MM-DD"),c=Q()().add(l+1,"days").format("YYYY-MM-DD");a.push(d.a.get("https://data.xotelo.com/api/rates?hotel_key=".concat(e[n],"&chk_in=").concat(r,"&chk_out=").concat(c,"&nocache=true")).then((function(e){t.push(e.data.result)})))}return Promise.all(a).then((function(){return t}))},$=a(54),ee=a(120),te=a(116),ae=a(117),ne=a(118),le=a(119),re=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(ee.a,{isOpen:this.props.isOpen},l.a.createElement(te.a,null," Details"),l.a.createElement(ae.a,null,l.a.createElement("div",null,l.a.createElement("p",null,this.props.date),l.a.createElement("p",null,this.props.title),l.a.createElement("p",null,this.props.description))),l.a.createElement(ne.a,null,l.a.createElement(le.a,{color:"primary"},l.a.createElement(o.b,{to:"/db"},"See prices")),l.a.createElement(le.a,{color:"secondary",onClick:this.props.handleClose,style:{backgroundColor:"rgba(252,192,82,0.932"}},"Cancel")))}}]),a}(l.a.Component),ce=k(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hotels:[],today:new Date,modal:!1,event:{title:"",description:"",date:new Date},isLoading:!0},e.getHotelName=function(e){var t=e.substring(64),a=t.substring(0,t.length-5);"-"===a.charAt(0)&&(a=a.replace("-",""));return a=a.replace(/_/gi," ")},e.handleEventClick=function(t,a){e.setState({modal:!e.state.modal}),e.setState({date:t.event.date}),e.setState({title:t.event.title}),e.setState({description:t.event.extendedProps.description}),console.log("this state event date",e.state.date),console.log("this state event",t)},e.isLoading=function(){},e.EventDetail=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{textAlign:"justify",fontSize:"10px",backgroundColor:"rgba(252, 192, 82, 0.932)",color:"black"}},e.event.title),l.a.createElement("p",{style:{textAlign:"center",backgroundColor:"white",color:"black"}},e.event.extendedProps.description))},e.closeModal=function(){e.setState({modal:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.context.user&&X(this.props.context.user.competitors).then((function(t){var a=t.filter((function(e){return null!==e}));e.setState({hotels:a})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.props.context.user!==e.context.user&&X(this.props.context.user.competitors).then((function(e){var t=e.filter((function(e){return null!==e}));a.setState({hotels:t})}))}},{key:"render",value:function(){var e=this,t=this.state.hotels.flat().map((function(t){return{title:e.getHotelName(t.hotel_url[0]),description:t.rates[0].rate,date:t.chk_in}}));return l.a.createElement("div",null,l.a.createElement("div",{style:{height:"auto",width:"",margin:"100px 100px"}},l.a.createElement(K.a,{plugins:[J.a,Z.a,$.a],initialView:"dayGridWeek",firstDay:1,height:"auto",timeZone:"UTC",selectable:"true",eventDisplay:"auto",loading:this.isLoading,eventClick:this.handleEventClick,eventContent:this.EventDetail,events:t})),l.a.createElement("div",null,l.a.createElement(re,{isOpen:this.state.modal,handleClose:this.closeModal,title:this.state.title,description:this.state.description,date:this.state.date})))}}]),a}(n.Component)),oe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(ce,null))}}]),a}(n.Component),ie=(a(104),[{label:"Hotel Marguerite",value:"g187129-d615325"},{label:"Hotel Campanile Gare",value:"g187129-d229787"},{label:"Hotel des Cedres",value:"g187129-d572198"},{label:"Hotel Ibis Gare",value:"g187129-d233286"},{label:"Grand Hotel",value:"g187129-d243818"},{label:"Hotel Saint Aignan",value:"g187129-d636351"},{label:"Appart City",value:"g187129-d5217993"},{label:"Escale Oceania",value:"g187129-d261850"},{label:"Hotel Abeille",value:"g187129-d1119754"}]),se=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleChange=function(t){var a="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,n=t.target.name;e.setState(Object(A.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),y(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/profile")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.context.user.competitors),l.a.createElement("div",{className:"register-wrapper"},l.a.createElement("div",{className:"register-block"},l.a.createElement("h3",{className:"register-title"},"Update your account"),l.a.createElement("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,style:{display:"flex",flexDirection:"column",width:300,marginLeft:600}},l.a.createElement("label",null,"First name:"),l.a.createElement("input",{type:"text",id:"firstName",name:"firstName",defaultValue:this.context.user.firstName}),l.a.createElement("label",null,"Last name:"),l.a.createElement("input",{type:"text",id:"lastName",name:"lastName",defaultValue:this.context.user.lastName}),l.a.createElement("label",null,"Hotel name:"),l.a.createElement("input",{type:"text",id:"hotelName",name:"hotelName",defaultValue:this.context.user.hotelName}),l.a.createElement("label",null,"Phone number:"),l.a.createElement("input",{type:"text",id:"phoneNumber",name:"phoneNumber",defaultValue:this.context.user.phoneNumber}),l.a.createElement("label",null,"Address:"),l.a.createElement("input",{type:"text",id:"address",name:"address",defaultValue:this.context.user.address}),l.a.createElement("label",null,"Competitors:"),l.a.createElement(I.a,{options:ie,selected:this.context.user.competitors,onSelectedChanged:function(t){e.setState({competitors:t}),e.context.setUser({competitors:t})}}),l.a.createElement("button",null,"Submit"))))}}]),a}(n.Component);se.contextType=x;var me=Object(w.g)(se),ue=k(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={hotels:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.context.user&&X(this.props.context.user.competitors).then((function(t){var a=t.filter((function(e){return null!==e}));e.setState({hotels:a}),d.a.post("http://localhost:4000/hotelData/data",{hotels:a}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}))}},{key:"componentDidUpdate",value:function(e){console.log(this.props.context,"this is context")}},{key:"render",value:function(){return this.state.hotels?(console.log("hotels",this.state.hotels),l.a.createElement("div",null,l.a.createElement("p",null,"Data"))):"Loading..."}}]),a}(n.Component)),he=a(51),de=a(22),pe=d.a.create({baseURL:"https://matchprice.herokuapp.com/hotelData",withCredentials:!0}),ge=function(){return pe.get("/")},Ee=a(52),ve=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={hotels:[],dates:[]},e.getHotelName=function(e){var t=e.substring(64),a=t.substring(0,t.length-5);"-"===a.charAt(0)&&(a=a.replace("-",""));return a=a.replace(/_/gi," ")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;ge().then((function(t){console.log(t.data),e.setState({hotels:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.hotels.reduce((function(e,t){return e[t.hotel_url[0]]?e[t.hotel_url[0]].dates[t.chk_in]=t.rates[0].rate:e[t.hotel_url[0]]={dates:Object(A.a)({},t.chk_in,t.rates[0].rate)},e}),{});console.log("result",t);var a=[],n=Object.keys(t);n.forEach((function(e){var n=Object.keys(t[e].dates);a=[].concat(Object(de.a)(a),Object(de.a)(n))})),a.sort();var r=(a=Object(de.a)(new Set(a))).reduce((function(e,a){var l,r=Object(he.a)(n);try{for(r.s();!(l=r.n()).done;){var c=l.value;e[a]?e[a].push(t[c].dates[a]):e[a]=[t[c].dates[a]]}}catch(o){r.e(o)}finally{r.f()}return e}),{}),c=Object.keys(r).reduce((function(e,t){return e.push([t].concat(Object(de.a)(r[t]))),e}),[]);console.log("formattedData",c),console.log(n);var o=n.map((function(t){return e.getHotelName(t)})),i=["Dates"].concat(Object(de.a)(o));console.log("readyData",i);var s=c.unshift(i);return console.log("data",s),l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",maxWidth:900}},l.a.createElement(Ee.a,{width:500,height:400,chartType:"ColumnChart",loader:l.a.createElement("div",null,"Loading Chart"),data:c,options:{title:"Rates per date",chartArea:{width:"30%"},hAxis:{title:"Dates",minValue:0},vAxis:{title:"Rates"}},legendToggle:!0})))}}]),a}(n.Component),be=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",message:""},e}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),N(this.state).then((function(e){console.log(e)}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"contact-div"},l.a.createElement("div",{className:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"txtb"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",name:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),l.a.createElement("div",{className:"txtb"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",id:"email",name:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),l.a.createElement("div",{className:"txtb"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{rows:"5",id:"message",name:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),l.a.createElement("button",{type:"submit",className:"btni "},"Submit")))}}]),a}(n.Component),fe=function(e){return l.a.createElement(be,null)};var ye=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(S,null),l.a.createElement("div",{className:"content"},l.a.createElement(w.d,null,l.a.createElement(w.b,{exact:!0,path:"/",component:L}),l.a.createElement(w.b,{exact:!0,path:"/signin",component:M}),l.a.createElement(w.b,{exact:!0,path:"/signup",component:Y}),l.a.createElement(V,{exact:!0,path:"/data",component:ue}),l.a.createElement(V,{exact:!0,path:"/profile/settings",component:me}),l.a.createElement(V,{exact:!0,path:"/dashboard",component:oe}),l.a.createElement(V,{exact:!0,path:"/db",component:ve}),l.a.createElement(w.b,{exact:!0,path:"/contact",component:fe}),l.a.createElement(w.b,{exact:!0,path:"/db",component:ve}),l.a.createElement(V,{exact:!0,path:"/profile",component:W}),l.a.createElement(w.b,{exact:!0,path:"/contact",component:fe}))),l.a.createElement(T,null))};a(105),a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(113);c.a.render(l.a.createElement(o.a,null,l.a.createElement(O,null,l.a.createElement(ye,null))),document.getElementById("root"))},59:function(e,t,a){e.exports=a(114)},81:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.88ad01a0.chunk.js.map