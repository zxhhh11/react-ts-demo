(window.webpackJsonphooksinital=window.webpackJsonphooksinital||[]).push([[0],{118:function(e,t,n){e.exports=n(286)},123:function(e,t,n){},124:function(e,t,n){},285:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(28),r=n.n(c),o=(n(123),n(10)),u=n(20),i=(n(124),n(15)),m=n(16),s=n(21),E=n(18),d=n(19),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(E.a)(t).call(this,e))).countNumEvent=function(){var e=n.state.count;n.setState({count:e+1})},n.state={count:0},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("ComponentDidMount=>You clicked ".concat(this.state.count," times"))}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate=>You clicked ".concat(this.state.count," times"))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"You clicked ",this.state.count," times"),l.a.createElement("button",{onClick:this.countNumEvent},"Click me"),l.a.createElement("div",null,l.a.createElement("h3",null,"\u7528class \u65b9\u5f0f\u4e3a\u8ba1\u6570\u5668\u6dfb\u52a0\u751f\u547d\u5468\u671f"),l.a.createElement("div",null)))}}]),t}(a.Component),b=n(4),p=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(12),i=Object(b.a)(r,2);i[0],i[1];return Object(a.useEffect)(function(){return console.log("useEffect, you clicked ".concat(n," times")),document.title="You clicked ".concat(n," times"),function(){console.log("==========================")}},[n]),l.a.createElement("div",null,l.a.createElement("h2",null,"useState"),l.a.createElement("p",null,"You clicked ",n," times"),l.a.createElement("button",{onClick:function(){c(n+1)}},"Hooks Increase"),l.a.createElement("button",{onClick:function(){n>0&&c(n-1)}},"Hooks Decrease"),l.a.createElement("div",null,l.a.createElement("h2",null,"Router Page useEffect Part"),l.a.createElement(o.a,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Link")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/list"},"List"))),l.a.createElement(u.b,{path:"/",exact:!0,component:h}),l.a.createElement(u.b,{path:"/list",component:v}))))};function h(){return Object(a.useEffect)(function(){return console.log("welcome to index page"),console.log("leave from index page")},[12]),l.a.createElement("h2",null,"this is a index page")}function v(){return Object(a.useEffect)(function(){return console.log("welcome to list page"),function(){console.log("\u53d6\u6d88\u8ba2\u9605"),console.log("componentWillUnMount ")}},[]),l.a.createElement("div",null,l.a.createElement("h2",null,"this is a list page"),l.a.createElement("ul",null,l.a.createElement("li",null,"1"),l.a.createElement("li",null,"2"),l.a.createElement("li",null,"3")))}var g=Object(a.createContext)(),O=Object(a.createContext)(),j=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),o=Object(b.a)(r,2),u=o[0],i=o[1];return l.a.createElement("div",null,l.a.createElement("p",null,"You clicked ",n," times"),l.a.createElement("button",{onClick:function(){c(n+1)}},"Hooks Increase"),l.a.createElement("button",{onClick:function(){i(!u)}},u?"isShow":"isHide"),l.a.createElement(g.Provider,{value:n},l.a.createElement(O.Provider,{value:u},l.a.createElement(k,null))))};function k(){return l.a.createElement("div",null,l.a.createElement(g.Consumer,null,function(e){return l.a.createElement("i",null,e)}),l.a.createElement(x,null),l.a.createElement(O.Consumer,null,function(e){return l.a.createElement("h2",null,e?"isShow":"isHide","\u7b2c\u4e00\u5c42\u5b50\u7ec4\u4ef6\u4f20\u9012\u591a\u53d8\u91cf")}))}function x(){var e=Object(a.useContext)(O),t=Object(a.useContext)(g);return l.a.createElement("div",null,l.a.createElement("h2",null,t,"\u6df1\u5c42\u5b50\u7ec4\u4ef6",e?"isShow":"isHide"))}var y=n(3);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S=function(){var e=Object(a.useReducer)(function(e,t){switch(t){case"add":return C({},e,{count:e.count+1});case"sub":return C({},e,{count:e.count-1});case"change":return C({},e,{color:"blue"});default:return e}},{count:0,color:"red"}),t=Object(b.a)(e,2),n=t[0],c=n.count,r=n.color,o=t[1];return l.a.createElement("div",null,l.a.createElement("h2",null,"\u73b0\u5728\u7684\u5206\u6570\u662f",c),l.a.createElement("h2",null,"\u73b0\u5728\u7684\u989c\u8272\u662f",r),l.a.createElement("button",{onClick:function(){return o("add")}},"Increment"),l.a.createElement("button",{onClick:function(){return o("sub")}},"Decrement"),l.a.createElement("button",{onClick:function(){return o("change")}},"Change color"))};n(66);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var H=Object(a.createContext)({}),D=function(e,t){switch(t.type){case"UPDATE_COLOR":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{color:t.color});default:return e}},R=function(e){var t=Object(a.useReducer)(D,{color:"blue",size:17}),n=Object(b.a)(t,2),c=n[0],r=c.color,o=c.size,u=n[1];return l.a.createElement(H.Provider,{value:{color:r,size:o,dispatch:u}},e.children)},z=function(){var e=Object(a.useContext)(H),t=e.color,n=e.size;return l.a.createElement("div",{style:{color:t}},"\u5b57\u4f53\u989c\u8272\u4e3a",t,"+",n)},W=function(){var e=Object(a.useContext)(H).dispatch;return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e({type:"UPDATE_COLOR",color:"red"})}},"\u7ea2\u8272"),l.a.createElement("button",{onClick:function(){return e({type:"UPDATE_COLOR",color:"purple"})}},"\u7d2b\u8272"))},N=function(){return l.a.createElement("div",null,l.a.createElement(R,null,l.a.createElement(z,null),l.a.createElement(W,null)))},I=n(61),U=n.n(I),M=n(116),L=n(117),Y=n.n(L),T=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(b.a)(r,2),u=o[0],i=(o[1],Object(a.useState)("")),m=Object(b.a)(i,2),s=m[0],E=m[1],d=Object(a.useState)("https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/planStatusList"),f=Object(b.a)(d,2),p=f[0],h=f[1],v=Object(a.useState)(!1),g=Object(b.a)(v,2),O=g[0];g[1];return Object(a.useEffect)(function(){var e=!1;return function(e){return A.apply(this,arguments)}(p).then(function(t){e||(c(t.data),console.log(t))}).catch(function(e){console.log(e)}),function(){e=!0}},[p]),l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:s,onChange:function(e){E(e.target.value)}}),l.a.createElement("button",{type:"button",onClick:function(){h("a"==s?"https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/getData":"https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/")}},"\u8f6c\u6362"),O&&l.a.createElement("div",null,"\u6355\u6349\u5230\u9519\u8bef"),u?l.a.createElement("div",null,"loading..."):l.a.createElement("div",null,l.a.createElement("ul",null,n.map(function(e,t){return l.a.createElement("li",{key:t},e.name)}))))};function A(){return(A=Object(M.a)(U.a.mark(function e(t){var n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"\u7c7b\u5b9e\u73b0"),l.a.createElement(f,null)),l.a.createElement("div",null,l.a.createElement("h2",null,"react-hooks\u5b9e\u73b0"),l.a.createElement(p,null)),l.a.createElement("div",null,l.a.createElement("h2",null,"Context\u5b9e\u73b0"),l.a.createElement(j,null)),l.a.createElement("div",null,l.a.createElement("h2",null,"useReducer\u5b9e\u73b0"),l.a.createElement(S,null)),l.a.createElement("div",null,l.a.createElement("h2",null,"useReducer \u548c useContext\u5b9e\u73b0redux"),l.a.createElement(N,null)),l.a.createElement("div",null,l.a.createElement("h2",null,"\u53d1\u8d77\u5f02\u6b65\u8bf7\u6c42"),l.a.createElement(T,null)))},F=function(e){var t=e.gif;return l.a.createElement("img",{src:t,alt:"gif"})},G=n(63),q=n(62),J=n.n(q),K=Object(G.a)(function(e){var t=e.children;return l.a.createElement("div",{className:"gifs"},t)}),X=Object(G.b)(function(e){var t=e.gif;return l.a.createElement(F,{key:t,gif:t})}),_=function(){var e=Object(a.useState)(["https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif","https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif","https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif","https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif"]),t=Object(b.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(["https://media.giphy.com/media/xiOgHgY2ceKhm46cAj/giphy.gif","https://media.giphy.com/media/3oKIPuMqYfRsyJTWfu/giphy.gif","https://media.giphy.com/media/4ZgLPakqTajjVFOVqw/giphy.gif","https://media.giphy.com/media/3o7btXIelzs8nBnznG/giphy.gif"])),r=Object(b.a)(c,2),o=r[0],u=r[1];return l.a.createElement("div",{className:"box"},l.a.createElement("h2",null,"Drag those GIFs around"),l.a.createElement("h2",null,"Set 1"),n.map(function(e,t){return l.a.createElement(F,{collection:"gifs",key:e,gif:e})}),l.a.createElement("h2",null,"Set 2"),l.a.createElement(K,{axis:"x",onSortEnd:function(e){var t=e.oldIndex,a=e.newIndex;switch(e.collection){case"gifs":u(J()(n,t,a));break;case"newGifs":u(J()(o,t,a))}}},o.map(function(e,t){return l.a.createElement(X,{index:t,key:e,gif:e,collection:"newGifs"})})))},V=(n(285),function(e){var t=["component-button ",e.orange?"orange ":"",e.wide?"wide":""];return l.a.createElement("div",{className:t.join("").trim()},l.a.createElement("button",{onClick:function(){e.clickHandler(e.name)}},e.name))}),Z=function(e){var t=e.handleClick,n=function(e){t(e)};return l.a.createElement("div",{className:"component-button-panel"},l.a.createElement("div",null,l.a.createElement(V,{name:"AC",clickHandler:n}),l.a.createElement(V,{name:"+/-",clickHandler:n}),l.a.createElement(V,{name:"%",clickHandler:n}),l.a.createElement(V,{name:"\xf7",clickHandler:n,orange:!0})),l.a.createElement("div",null,l.a.createElement(V,{name:"7",clickHandler:n}),l.a.createElement(V,{name:"8",clickHandler:n}),l.a.createElement(V,{name:"9",clickHandler:n}),l.a.createElement(V,{name:"x",clickHandler:n,orange:!0})),l.a.createElement("div",null,l.a.createElement(V,{name:"4",clickHandler:n}),l.a.createElement(V,{name:"5",clickHandler:n}),l.a.createElement(V,{name:"6",clickHandler:n}),l.a.createElement(V,{name:"-",clickHandler:n,orange:!0})),l.a.createElement("div",null,l.a.createElement(V,{name:"1",clickHandler:n}),l.a.createElement(V,{name:"2",clickHandler:n}),l.a.createElement(V,{name:"3",clickHandler:n}),l.a.createElement(V,{name:"+",clickHandler:n,orange:!0})),l.a.createElement("div",null,l.a.createElement(V,{name:"0",clickHandler:n,wide:!0}),l.a.createElement(V,{name:".",clickHandler:n}),l.a.createElement(V,{name:"=",clickHandler:n,orange:!0})))},Q=function(e){var t=e.value;return l.a.createElement("div",{className:"component-display"},t)},$=n(22),ee=n.n($);function te(e,t,n){var a=ee()(e||"0"),l=ee()(t||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return a.plus(l).toString();if("-"===n)return a.minus(l).toString();if("x"===n)return a.times(l).toString();if("\xf7"===n)return"0"===l?(alert("Divide by 0 error"),0):a.div(l).toString();throw Error("Unknown operation '".concat(n,"'"))}var ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(e){console.log(e),n.setState(function(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var n=te(e.total,e.next,e.operation);return{total:ee()(n).div(ee()("100")).toString(),next:null,operation:null}}return e.next?{next:ee()(e.next).div(ee()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:te(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:te(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}(n.state,e))},n.state={next:null,total:null,operation:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.next,n=e.total;return l.a.createElement("div",{className:"calculator"},l.a.createElement(Q,{value:t||n||"0"}),l.a.createElement(Z,{handleClick:this.handleClick}))}}]),t}(a.Component),ae=function(e){var t=e.name,n=e.children;var c=Object(a.useMemo)(function(){return function(e){return console.log(e+4),console.log(e,n,"7"),e+" is a little dog"}(t)},[t]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,c),l.a.createElement("div",null,n))},le=function(){var e=Object(a.useState)("Wei Bo"),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("San Pang"),o=Object(b.a)(r,2),u=o[0],i=o[1],m=Object(a.useState)("Peter hui"),s=Object(b.a)(m,2),E=s[0],d=s[1],f=Object(a.useRef)(null),p=Object(a.useRef)();return Object(a.useEffect)(function(){p.current=E,console.log("textRef.current+ "+p.current)}),l.a.createElement("div",{style:{padding:"30px 0"}},l.a.createElement("div",null,l.a.createElement("h2",null,"UseMemo"),l.a.createElement("button",{onClick:function(){return c((new Date).getTime()+" Wei Bo")}},"Wei Bo"),l.a.createElement("button",{onClick:function(){return i((new Date).getTime()+" San Pang is so cute")}},"San Pang"),l.a.createElement(ae,{name:n},u)),l.a.createElement("div",null,l.a.createElement("h3",null,"UseRef"),l.a.createElement("input",{ref:f,type:"text"}),l.a.createElement("button",{onClick:function(){f.current.value="hello WeiBo"}},"\u5728Input\u8f93\u5165\u6846 \u4e0a\u5c55\u793a\u6587\u5b57")),l.a.createElement("div",null,l.a.createElement("h4",null,"useRef \u4fdd\u5b58\u666e\u901a\u53d8\u91cf"),l.a.createElement("input",{value:E,onChange:function(e){d(e.target.value)}})))},ce=function(){var e=Object(a.useState)({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),t=Object(b.a)(e,2),n=t[0],l=t[1],c=Object(a.useCallback)(function(){l({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})},[]);return Object(a.useEffect)(function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}},[]),n},re=function(e){var t=e.callback,n=Object(a.useState)(function(){return t()}),c=Object(b.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)(function(){o(t())},[t]),l.a.createElement("div",null,r)},oe=new Set,ue=function(){var e=Object(a.useState)(1),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(b.a)(r,2),u=o[0],i=o[1],m=Object(a.useCallback)(function(){return console.log(n),n},[n]);return oe.add(m),l.a.createElement("div",null,l.a.createElement("h4",null,"num ",n),l.a.createElement("h4",null,"set.size",oe.size),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return c(n+1)}},"+"),l.a.createElement("input",{value:u,onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("h4",null,"useCallback \u5728\u7236\u5b50\u7ec4\u4ef6\u4e2d\u7684\u5e94\u7528"),l.a.createElement(re,{callback:m})))},ie=function(){var e=ce();return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null," \u9875\u9762size:",e.width,"x",e.height)),l.a.createElement("div",null,l.a.createElement("h4",null,"UseCallback \u7528\u4e8e\u7236\u5b50\u7ec4\u4ef6\u4e2d",l.a.createElement(ue,null))))};var me=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement("div",{className:"link"},l.a.createElement(o.b,{to:"/hook"},"Hooks"),l.a.createElement(o.b,{to:"/drag"},"Dragging"),l.a.createElement(o.b,{to:"/calculator"},"Calculator"),l.a.createElement(o.b,{to:"/useMemo"},"UseMemo/Ref"),l.a.createElement(o.b,{to:"/sizeWin"},"Resize Window")),l.a.createElement(u.b,{path:"/hook",component:B}),l.a.createElement(u.b,{path:"/drag",component:_}),l.a.createElement(u.b,{path:"/calculator",component:ne}),l.a.createElement(u.b,{path:"/useMemo",component:le}),l.a.createElement(u.b,{path:"/sizeWin",component:ie}),l.a.createElement(u.a,{path:"/",to:"/useMemo"})))};r.a.render(l.a.createElement(me,null),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.209163bd.chunk.js.map