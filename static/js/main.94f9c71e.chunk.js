(this["webpackJsonpshri-gopala"]=this["webpackJsonpshri-gopala"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),m=(n(14),n(15),function(e){return r.a.createElement("div",{className:"product-container"},r.a.createElement("img",{alt:"product",src:"ghee.jpg"}),r.a.createElement("button",{className:"bt"},r.a.createElement("h2",null,"Add to cart")),r.a.createElement("h1",null,e.name),r.a.createElement("h2",null,e.price))}),p=(n(16),function(e){return r.a.createElement("div",{className:"prod-grid"},e.products.map((function(e){return r.a.createElement(m,{key:e.key,name:e.name,price:e.price})})))}),d=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={products:[],searchValue:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://myfelight.firebaseapp.com/shriproducts.json").then((function(e){return e.json()})).then((function(t){return e.setState({products:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.products,a=t.searchValue,c=n.filter((function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"shri-gopala-logo"},"Shri Gopala"),r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"search products",className:"search-bar",onChange:function(t){e.setState({searchValue:t.target.value},(function(){return console.log(e.state)}))}})),r.a.createElement(p,{products:c}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.94f9c71e.chunk.js.map