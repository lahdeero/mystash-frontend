(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(2),r=n.n(a),c=n(4),o=n(29),u=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.register(e);case 2:return a=t.sent,t.next=5,o.a.getUser();case 5:return c=t.sent,window.localStorage.setItem("MS_token",a.token),n({type:"REGISTER",data:c}),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},s=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getUser();case 2:n=e.sent,t({type:"LOGIN",data:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.login(e);case 2:return a=t.sent,window.localStorage.setItem("MS_token",a.token),t.next=6,o.a.getUser();case 6:c=t.sent,n({type:"LOGIN",data:c});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT",data:null});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER":case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}}},270:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(63),o=n.n(c),u=n(34),s=n(88),i=n(14),l=n(72),m=n(2),f=n.n(m),p=n(4),d=n(6),h=n(47),v=(n(68),n(87)),E=n(3),b=n(44),g=function(e){return r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement("input",{onChange:e.filter.onChange,value:e.filter.value}))},O=function(e){e.filter.setFilter(""),e.history.push("/")},j=Object(v.a)(Object(i.b)(null)((function(e){return r.a.createElement("div",null,r.a.createElement(E.Navbar,{className:"indigo",brand:"mystash v. ".concat("0.25"),href:"#",onClick:function(){return O(e)},right:!0},r.a.createElement(b.IndexLinkContainer,{to:"/"},r.a.createElement(E.NavItem,{eventkey:1,onClick:function(){return e.filter.setFilter("")}},r.a.createElement(E.Icon,null,"view_list"))),r.a.createElement(b.IndexLinkContainer,{to:"/create"},r.a.createElement(E.NavItem,{eventkey:2},r.a.createElement(E.Icon,null,"note_add"))),r.a.createElement(b.IndexLinkContainer,{to:"/settings"},r.a.createElement(E.NavItem,{eventkey:3},r.a.createElement(E.Icon,null,"settings"))),r.a.createElement(b.IndexLinkContainer,{to:"/logout"},r.a.createElement(E.NavItem,{onClick:e.handleLogout},r.a.createElement(E.Icon,null,"logout")))),r.a.createElement(g,{filter:e.filter}))}))),w=n(92),y=n(40),x=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(""),s=Object(d.a)(u,2),i=s[0],l=s[1],m=Object(a.useState)(""),h=Object(d.a)(m,2),v=h[0],b=h[1],g=Object(a.useState)(!1),O=Object(d.a)(g,2),j=O[0],x=O[1],k=Object(a.useState)(!1),C=Object(d.a)(k,2),I=C[0],N=C[1],S=function(){var t=Object(p.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,N(!0),t.next=5,e.actionForLogin({username:c,password:i});case 5:t.next=13;break;case 7:t.prev=7,t.t0=t.catch(1),N(!1),b("Bad credentials"),console.log(t.t0),setTimeout((function(){b("")}),5e3);case 13:case"end":return t.stop()}}),t,this,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),x(!j);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}();return j?r.a.createElement("div",null,r.a.createElement(w.a,{init:e.init})):r.a.createElement("div",null,r.a.createElement(E.Navbar,{className:"indigo",brand:"mystash",href:"/mystash-frontend",right:!0}),r.a.createElement("div",{className:"container centered"},r.a.createElement(y.ClipLoader,{loading:I,color:"blue"}),""!==v?r.a.createElement("div",{className:"error"},v):r.a.createElement("div",null),r.a.createElement("form",{onSubmit:S},r.a.createElement("div",null,"username:",r.a.createElement(E.Input,{type:"text",name:"username",autoComplete:"off",value:c,onChange:function(e){return o(e.target.value)}},r.a.createElement(E.Icon,null,"account_circle"))),r.a.createElement("div",null,"password:",r.a.createElement(E.Input,{type:"password",name:"password",autoComplete:"off",value:i,onChange:function(e){return l(e.target.value)}},r.a.createElement(E.Icon,null,"https"))),r.a.createElement(E.Button,{type:"submit"},"Login")),r.a.createElement("div",null,r.a.createElement("br",null),"Dont have account? ",r.a.createElement("a",{onClick:T,href:"/register"},"Register here"))))},k=n(43),C=function(e){var t=e.note;if(void 0===t||void 0===t.id)return r.a.createElement("div",null);var n=t.tags;void 0===n&&(n=["EI TAGIA","HUOM"]);var a=t.content.length<=150?t.content:t.content.substring(0,150)+"...";return r.a.createElement("div",{className:"card-panel deep-purple lighten-4"},r.a.createElement(E.Row,null,r.a.createElement(E.Col,null,r.a.createElement(k.a,{to:"/notes/".concat(t.id)}," ",r.a.createElement("span",{s:12,className:"blue-text text-darken-2"},t.title," ")," ")),r.a.createElement(E.Col,null,n.join(",").split(",").map((function(t){return r.a.createElement(E.Chip,{key:t,onClick:function(){var n;n={tag:t},e.filter.setFilter(n.tag)}}," ",t," ")})))),r.a.createElement("div",null,a.split("\n").map((function(e,t){return r.a.createElement("span",{key:t}," ",e," ",r.a.createElement("br",null)," ")}))))},I=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],o=n[1],u=e.sort,s=e.setSort,i=function(e){s(e),o(!1)},l="light-blue accent-1";return r.a.createElement("div",null,r.a.createElement(E.Button,{className:l,onClick:function(e){e.preventDefault(),o(!c)}},"Sort"),c?r.a.createElement("div",{className:"menu"},r.a.createElement(E.Button,{className:l,onClick:function(){i("ALPHABETIC"===u?"!ALPHABETIC":"ALPHABETIC")}},"Alphabetic"),r.a.createElement(E.Button,{className:l,onClick:function(){i("CREATED"===u?"!CREATED":"CREATED")}},"Created"),r.a.createElement(E.Button,{className:l,onClick:function(){i("MODIFIED"===u?"!MODIFIED":"MODIFIED")}},"Modified")):r.a.createElement("div",null))},N=function(e){var t=e.itemsLenght,n=e.page,a=e.handleSelect,c=e.sort,o=e.setSort;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s2"},r.a.createElement(I,{sort:c,setSort:o})),r.a.createElement("div",{className:"col s6"},r.a.createElement(E.Pagination,{items:t,activePage:n,maxButtons:10,onSelect:a})))},S=function(e){var t=Object(a.useState)(1),n=Object(d.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(10),s=Object(d.a)(u,1)[0],i=Object(a.useState)("MODIFIED"),l=Object(d.a)(i,2),m=l[0],h=l[1],v=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&null===t){e.next=2;break}return e.abrupt("return",o(t));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t,n){return e<t?n?-1:1:e>t?n?1:-1:0},b=function(e,t){return e||t?!t||e>t?-1:!e||e<t?1:0:0},g=function(e,t){if(t&&void 0!==t)try{var n=e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})),a=e.filter((function(e){return e.tags.join(" ").toLowerCase().includes(t.toLowerCase())}));return Array.from(new Set(n.concat(a)))}catch(r){console.log(r)}return e}(e.notes.sort((function(e,t){switch(m){case"ALPHABETIC":return E(e.title.toLowerCase().trim(),t.title.toLowerCase().trim(),!0);case"!ALPHABETIC":return E(e.title.toLowerCase().trim(),t.title.toLowerCase().trim(),!1);case"MODIFIED":return b(e.modified_date,t.modified_date);case"!MODIFIED":return b(t.modified_date,e.modified_date);case"!CREATED":return e.id-t.id;default:return t.id-e.id}})),e.filter.value),O=g.slice((c-1)*s,(c-1)*s+s);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement(y.ClipLoader,{loading:e.loading,color:"blue"}),r.a.createElement(N,{itemsLenght:Math.ceil(g.length/s),page:c,handleSelect:v,sort:m,setSort:h})),r.a.createElement("ul",null,O.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("div",null,r.a.createElement(C,{note:t,Key:t.id,filter:e.filter})))}))),r.a.createElement("div",{className:"center"},r.a.createElement(N,{itemsLenght:Math.ceil(g.length/s),page:c,handleSelect:v,sort:m,setSort:h})))},T=n(23),R=n(24),L=n(26),D=n(25),A=n(27),M=n(93),F=n.n(M),B=n(19),_=n.n(B),G=n(50),H=n(30),U=Object(G.a)()+"/api/notes/directory",P={getAll:function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get(U+"/all",Object(H.a)());case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get(U+"/note/"+t,Object(H.a)());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post(U,t,Object(H.a)());case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),modify:function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,console.log("noteObject:",t),e.next=4,_.a.put(U+"/note/"+n,t,Object(H.a)());case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),erase:function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.delete("".concat(U,"/note/").concat(t),Object(H.a)());case 2:return n=e.sent,console.log("response "+n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},W=n(94),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE":return[t.data].concat(Object(W.a)(e.slice(0,e.length)));case"MODIFY":return e.map((function(e){return e.id===t.data.id?t.data:e}));case"REMOVE":return e.filter((function(e){return e.id!==t.data}));case"INIT_NOTES":return t.data;case"CLEAR":return[];default:return e}},z=function(e,t){return function(){var n=Object(p.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"NOTIFY",data:e}),setTimeout((function(){a({type:"HIDE_NOTIFICATION"})}),1e3*t);case 2:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},J=function(e,t){return function(){var n=Object(p.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"ERROR",data:e}),setTimeout((function(){a({type:"HIDE_ERROR"})}),1e3*t);case 2:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY":case"ERROR":return[e=t.data,t.data];case"HIDE_NOTIFICATION":case"HIDE_ERROR":return e="";default:return e}},K=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(L.a)(this,Object(D.a)(t).call(this,e))).deleteNote=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Are you sure you want to delete '".concat(n.state.title,"' ?"))){e.next=6;break}return e.next=4,n.props.removeNote(n.state.id);case 4:"number"===typeof e.sent&&(n.props.notify("you deleted '".concat(n.state.title,"'"),10),n.props.history.push("/"));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.state={id:"",title:"",content:"",tags:[]},n}return Object(A.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.getOne(this.props.match.params.id);case 3:t=e.sent,this.setState({id:t.id,title:t.title,content:t.content,tags:t.tags}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.props.errormessage("Couldn't find note '".concat(this.props.match.params.id,"'"),5),this.props.history.push("/");case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.tags.join(),t=this.state.content;console.log(e);var n=e.includes("markdown");return console.log("markdown boolean",n),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null,"[",e,"]"),n&&r.a.createElement(F.a,{source:t}),!n&&r.a.createElement("div",null,t.split("\n").map((function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))}))),r.a.createElement("div",null,r.a.createElement(k.a,{to:"/notes/edit/".concat(this.state.id,"'")},r.a.createElement(E.Button,{className:"deep orange"},"EDIT"),"\xa0"),r.a.createElement(E.Button,{className:"red accent-2",onClick:this.deleteNote},"DELETE")))}}]),t}(r.a.Component),q={removeNote:function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.erase(e);case 2:return a=t.sent,n({type:"REMOVE",data:a}),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},notify:z,errormessage:J},Q=Object(i.b)(null,q)(K),X=n(51),Z=n(52),$=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(L.a)(this,Object(D.a)(t).call(this,e))).handleSubmit=function(){var e=Object(p.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,{id:n.state.id,title:n.state.title,content:n.state.content,tags:n.state.tags};case 4:return a=e.sent,e.next=7,n.props.modifyNote(a);case 7:return e.next=9,n.props.notify("you modified '".concat(a.title,"'"),10);case 9:n.props.history.push("/"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),n.props.errormessage("ERROR WHILE EDITING NOTE",10);case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.state.isMounted&&n.setState(Object(X.a)({},e.target.name,e.target.value))},n.handleContent=function(e){n.setState({content:e.target.value})},n.addTag=function(){var e=Object(p.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,4;case 3:if(a=e.sent,0!==n.state.tagText.length&&!n.state.tags.includes(n.state.tagText)){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,n.state.tags;case 8:return r=e.sent,e.next=11,r.push(n.state.tagText);case 11:if(!(r.length>a)){e.next=15;break}n.props.notify("Maxium number of tags is '".concat(a,"'"),10),e.next=23;break;case 15:return e.prev=15,e.next=18,n.setState({tags:r,tagText:""});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(15),n.props.errormessage("ERROR WHILE ADDING TAG",10);case 23:case"end":return e.stop()}}),e,this,[[15,20]])})));return function(t){return e.apply(this,arguments)}}(),n.state={isMounted:!1,tagText:"",id:"",title:"",content:"",tags:[]},n}return Object(A.a)(t,e),Object(R.a)(t,[{key:"componentWillMount",value:function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getOne(this.props.match.params.id);case 2:t=e.sent;try{this.setState({id:t.id,title:t.title,content:t.content,tags:t.tags.filter((function(e){return null!==e}))})}catch(n){this.props.errormessage("Couldn't find note '".concat(this.props.match.params.id,"'"),5),this.props.history.push("/")}case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isMounted:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isMounted:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeTag",value:function(e){this.setState({tags:this.state.tags.filter((function(t){return t!==e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Note tags\xa0"),r.a.createElement(E.Button,{className:"indigo",position:"right",delay:"50",tooltip:"Click tag name to remove"},"[?]")),r.a.createElement("div",null,r.a.createElement(E.Row,null,r.a.createElement(E.Col,{s:12},this.state.tags.map((function(t){return r.a.createElement(E.Chip,{key:t,onClick:function(){e.removeTag(t)}}," ",t," ")}))))),r.a.createElement("div",null,r.a.createElement("form",{id:"tagform",onSubmit:this.addTag},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{name:"tagText",value:this.state.tagText,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement(E.Button,{className:"deep orange",type:"submit",form:"tagform"},"Add tag"))),r.a.createElement("h2",null,"Edit note"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,"Title",r.a.createElement("br",null),r.a.createElement("input",{name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Content",r.a.createElement("br",null),r.a.createElement(Z.a,{className:"note-edit",value:this.state.content,onChange:this.handleContent,minRows:10}))),r.a.createElement("br",null),r.a.createElement(E.Button,{waves:"light",className:"red accent-2",type:"submit"},"Save")))}}]),t}(r.a.Component),ee={modifyNote:function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.modify(e);case 2:return t.next=4,P.getOne(e.id);case 4:return a=t.sent,t.next=7,n({type:"MODIFY",data:a});case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},notify:z,errormessage:J},te=Object(i.b)(null,ee)($),ne=function(e){function t(e){var n;return Object(T.a)(this,t),(n=Object(L.a)(this,Object(D.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(X.a)({},e.target.name,e.target.value))},n.handleContent=function(e){n.setState({content:e.target.value})},n.addTag=function(){var e=Object(p.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),10,!(n.state.tags.length>=10)){e.next=5;break}return n.props.notify("Maxium number of tags is '".concat(10,"'"),10),e.abrupt("return");case 5:if(0!==n.state.tagText.length&&!n.state.tags.includes(n.state.tagText)){e.next=7;break}return e.abrupt("return");case 7:return(a=n.state.tags).push(n.state.tagText),e.prev=9,e.next=12,n.setState({tags:a,tagText:""});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),n.props.errormessage("ERROR WHILE ADDING TAG",10);case 17:case"end":return e.stop()}}),e,this,[[9,14]])})));return function(t){return e.apply(this,arguments)}}(),n.handleSubmit=function(){var e=Object(p.a)(f.a.mark((function e(t){var a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),void 0!==n.state.tags&&0!==n.state.tags.length||!(n.state.tagText.length>0)){e.next=5;break}return a=n.state.tagText.split(";"),e.next=5,n.setState({tags:a});case 5:return e.prev=5,e.next=8,{title:n.state.title,content:n.state.content,tags:n.state.tags};case 8:return r=e.sent,e.next=11,n.props.createNote(r);case 11:c=e.sent,n.props.notify("you created '".concat(c.title,"'"),10),n.setState({title:"",content:"",tag_id:""}),n.props.history.push("/"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),n.props.errormessage("ERROR WHILE ADDING NOTE",10);case 21:case"end":return e.stop()}}),e,this,[[5,17]])})));return function(t){return e.apply(this,arguments)}}(),n.state={isMounted:!1,tagText:"",title:"",content:"",tags:[]},n}return Object(A.a)(t,e),Object(R.a)(t,[{key:"removeTag",value:function(e){this.setState({tags:this.state.tags.filter((function(t){return t!==e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Create new note"),r.a.createElement("form",{id:"noteform",onSubmit:this.handleSubmit},r.a.createElement("div",null,"Title",r.a.createElement("br",null),r.a.createElement("input",{name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Content",r.a.createElement("br",null),r.a.createElement(Z.a,{className:"note-edit",value:this.state.content,onChange:this.handleContent,minRows:10}))),r.a.createElement("br",null)),r.a.createElement("div",null,this.state.tags.map((function(t){return r.a.createElement(E.Button,{key:t,onClick:function(){e.removeTag(t)}}," ",t," ")}))),r.a.createElement("form",{id:"tagform",onSubmit:this.addTag},r.a.createElement(E.Button,{className:"deep orange",type:"submit",form:"tagform"},"Add tag"),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("input",{name:"tagText",value:this.state.tagText,onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(E.Button,{form:"noteform",className:"red accent-2",type:"submit"},"Create")))}}]),t}(r.a.Component),ae={createNote:function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.create(e);case 2:return a=t.sent,t.next=5,P.getOne(a.id);case 5:return r=t.sent,n({type:"CREATE",data:r}),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},notify:z,errormessage:J},re=Object(v.a)(Object(i.b)(null,ae)(ne)),ce=n(29),oe=function(){var e=Object(a.useState)("Loading..."),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(d.a)(o,2),s=u[0],i=u[1],l=Object(a.useState)(""),m=Object(d.a)(l,2),f=m[0],p=m[1],h=Object(a.useState)(""),v=Object(d.a)(h,2),b=v[0],g=v[1];return Object(a.useEffect)((function(){ce.a.getUser().then((function(e){c(e.username),i(e.realname),p(e.tier),g(e.email)}))})),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(E.Row,null,"version ".concat("0.25")),r.a.createElement(E.Row,null,r.a.createElement(E.Col,{s:12,m:5},r.a.createElement(E.CardPanel,{className:"red accent-2 black-text"},r.a.createElement("span",null,"Currently can't change your information"))),r.a.createElement(E.Col,{s:12,m:7},r.a.createElement(E.CardPanel,{className:"blue lighten-3 black-text"},r.a.createElement(E.Row,null,r.a.createElement(E.Col,null,"Username: "),r.a.createElement(E.Col,null,n)),r.a.createElement(E.Row,null,r.a.createElement(E.Col,null,"Name: "),r.a.createElement(E.Col,null,s)),r.a.createElement(E.Row,null,r.a.createElement(E.Col,null,"Level: "),r.a.createElement(E.Col,null,f)),r.a.createElement(E.Row,null,r.a.createElement(E.Col,null,"Email: "),r.a.createElement(E.Col,null,b)))))))},ue=function(e){function t(){return Object(T.a)(this,t),Object(L.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props.notification[0];return void 0===e||e.length<=1||"object"===typeof e?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("strong",null,e))}}]),t}(r.a.Component),se=Object(i.b)((function(e){return{notification:e.notification}}))(ue),ie=n(21),le=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1];return{value:n,onChange:function(e){r(e.target.value)},setFilter:function(e){r(e)}}},me={noteInitialization:function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getAll();case 2:n=e.sent,t({type:"INIT_NOTES",data:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},setLogin:ie.e,actionForLogin:ie.a,actionForLogout:ie.b,clearNotes:function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR",data:[]});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},notify:z},fe=Object(i.b)((function(e){return{notes:e.notes,user:e.user}}),me)((function(e){var t=le(),n=Object(a.useState)(!1),c=Object(d.a)(n,2),o=c[0],u=c[1],s=Object(a.useState)(!0),i=Object(d.a)(s,2),m=i[0],v=i[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("MS_token");!o&&e&&(u(!0),E())}),[e.user]);var E=function(){var t=Object(p.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,e.noteInitialization();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.notify(t.t0);case 9:return t.prev=9,v(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return o?r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(l.a,{basename:"/mystash-frontend"},r.a.createElement("div",null,r.a.createElement(j,{filter:t,handleLogout:function(n){n.preventDefault(),window.localStorage.removeItem("MS_token"),t.setFilter(""),e.clearNotes(),e.actionForLogout(),u(!1)}}),r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,{notes:e.notes,filter:t,loading:m})}}),r.a.createElement(h.a,{path:"/login",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(h.a,{path:"/create",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(h.a,{path:"/settings",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(h.a,{exact:!0,path:"/notes/:id",component:Q}),r.a.createElement(h.a,{exact:!0,path:"/notes/edit/:id",component:te})))):r.a.createElement("div",null,r.a.createElement(x,{actionForLogin:e.actionForLogin,init:E}))})),pe=Object(u.c)({user:ie.d,notes:Y,notification:V}),de=Object(u.d)(pe,Object(u.a)(s.a));o.a.render(r.a.createElement(l.a,null,r.a.createElement(i.a,{store:de},r.a.createElement(fe,null))),document.getElementById("root"))},29:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(4),o=n(19),u=n.n(o),s=n(50),i=n(30),l=Object(s.a)()+"/api/",m=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(l+"user",Object(i.a)());case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post(l+"user",t);case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post(l+"login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}();t.a={getUser:m,register:f,login:p}},30:function(e,t,n){"use strict";t.a=function(){return{headers:{Authorization:"Bearer ".concat("undefined"!==typeof window?window.localStorage.getItem("MS_token"):"")}}}},50:function(e,t,n){"use strict";function a(){var e=window.location.host;console.log("host = ",e);return"localhost:3000"===e?"http://Localhost:3001":"https://d3eipmu8grncj0.cloudfront.net"}n.d(t,"a",(function(){return a}))},68:function(e,t,n){},92:function(e,t,n){"use strict";(function(e){var a=n(2),r=n.n(a),c=n(4),o=n(6),u=n(0),s=n(14),i=n(3),l=n(21),m=n(40),f={actionForRegister:l.c,setLogin:l.e};t.a=Object(s.b)((function(e){return{notes:e.notes,user:e.user}}),f)((function(t){var n=Object(u.useState)(""),a=Object(o.a)(n,2),s=a[0],l=a[1],f=Object(u.useState)(""),p=Object(o.a)(f,2),d=p[0],h=p[1],v=Object(u.useState)(""),E=Object(o.a)(v,2),b=E[0],g=E[1],O=Object(u.useState)(""),j=Object(o.a)(O,2),w=j[0],y=j[1],x=Object(u.useState)(""),k=Object(o.a)(x,2),C=k[0],I=k[1],N=Object(u.useState)(""),S=Object(o.a)(N,2),T=S[0],R=S[1],L=Object(u.useState)(!1),D=Object(o.a)(L,2),A=D[0],M=D[1],F=function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),M(!0),e.prev=2,e.next=5,t.actionForRegister({realname:s+" "+d,username:b,password:w,email:C});case 5:t.init(),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(2),M(!1),console.log(e.t0),R("Username not available"),setTimeout((function(){R("")}),5e3);case 14:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return e.createElement("div",null,e.createElement(i.Navbar,{className:"indigo",brand:"mystash",href:"/mystash-frontend",right:!0}),e.createElement("div",{className:"container"},e.createElement(m.ClipLoader,{loading:A,color:"blue"}),e.createElement("div",null,T&&e.createElement("div",{className:"error"},T),e.createElement("form",{onSubmit:F},e.createElement(i.Row,null,e.createElement(i.Input,{onChange:function(e){return l(e.target.value)},name:"firstname",label:"First Name"},e.createElement(i.Icon,null,"accessibility")),e.createElement(i.Input,{onChange:function(e){return h(e.target.value)},name:"lastname",s:6,label:"Last name"},e.createElement(i.Icon,null,"accessibility_new")),e.createElement(i.Input,{onChange:function(e){return g(e.target.value)},name:"username",s:12,label:"Username(*)"},e.createElement(i.Icon,null,"account_circle")),e.createElement(i.Input,{onChange:function(e){return y(e.target.value)},name:"password",type:"password",label:"Password(*)",s:12},e.createElement(i.Icon,null,"https")),e.createElement(i.Input,{onChange:function(e){return I(e.target.value)},name:"email",type:"email",label:"Email",s:12},e.createElement(i.Icon,null,"email"))),e.createElement(i.Button,{type:"submit"},"Register"))),e.createElement("br",null),e.createElement("br",null),"Back to ",e.createElement("a",{onClick:t.handleRegisterRedirect,href:"/mystash-frontend"},"login")))}))}).call(this,n(0))},95:function(e,t,n){e.exports=n(270)}},[[95,1,2]]]);
//# sourceMappingURL=main.020d0230.chunk.js.map