(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={header:"header_header__3cBp-",header_body:"header_header_body__1_cra",Profileimage:"header_Profileimage__2ZNpK",logo_text:"header_logo_text__1w_Bi"}},function(e,t,a){e.exports={PageRoot:"about_PageRoot__2yTG2",pageRootBlack:"about_pageRootBlack__3Vy1H",leftPart:"about_leftPart__2gUmW",leftPartText:"about_leftPartText__3wFAZ"}},,,,,,function(e,t,a){e.exports={PageRoot:"Experience_PageRoot__1tWvb",pageRootWhite:"Experience_pageRootWhite__2f0_M",leftPart:"Experience_leftPart__Tzit1"}},,,function(e,t,a){e.exports=a.p+"static/media/profileImage.d398f9e1.jpg"},function(e,t,a){e.exports=a.p+"static/media/uc.4bc2d788.gif"},function(e,t,a){e.exports=a.p+"static/media/profile.bbe03cb8.jpg"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t){var a=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,12)||2e3,this.txt="",this.tick(),this.isDeleting=!1};a.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},n)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-rotate"),r=e[t].getAttribute("data-period");n&&new a(e[t],JSON.parse(n),r)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.1em solid #fff }",document.body.appendChild(o)}},function(e,t,a){e.exports={pageRootBlack:"HomePage_pageRootBlack__24R8J",pageRootWhite:"HomePage_pageRootWhite__2pjLR",leftAlignedBold:"HomePage_leftAlignedBold__aZLuB"}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(19),a(20),a(3)),c=a(4),s=a(6),u=a(5),d=a(7),m=a(1),h=a.n(m),p=a(11),f=a.n(p);var g=function(){return r.a.createElement("header",{className:h.a.header},r.a.createElement("div",{className:h.a.header_body},r.a.createElement("div",{className:h.a.logo_text},r.a.createElement("b",null,"SOURAV DEY"),r.a.createElement("div",null,"Developer & Designer")),r.a.createElement("img",{src:f.a,className:h.a.Profileimage,alt:"ProfileImage"})))},_=a(12),E=a.n(_),b=function(e){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",null,e.children),r.a.createElement("div",null,r.a.createElement("img",{alt:"under construction",style:{width:"100%"},src:E.a})))},v=a(2),x=a.n(v);a(21),a(22);var w=function(){return r.a.createElement("div",null,"I 'm\xa0",r.a.createElement("span",{class:"txt-rotate","data-period":"500","data-rotate":'[ "coder.", "developer.", "designer.", "engineer." ]'}))},y=a(13),P=a.n(y),R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.PageRoot},r.a.createElement("div",{className:x.a.leftPart,ref:this.left},r.a.createElement("img",{src:P.a,alt:""}),r.a.createElement("div",{className:x.a.leftPartText},"Sourav Dey")),r.a.createElement("div",{className:x.a.pageRootBlack,ref:this.right},r.a.createElement("div",{style:{fontSize:"1rem",borderLeft:"2px solid #ffa600",paddingLeft:"10px"}},"Hi ",r.a.createElement("span",{style:{color:"#ffa600",fontWeight:"bold"}}," Sourav ")," here,",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w,null),r.a.createElement("br",null),"Based on Bangalore. Currently working as ",r.a.createElement("span",{style:{color:"white",fontWeight:"bold"}},"Software Developer")," for Tata Consultancy Services.",r.a.createElement("br",null),r.a.createElement("br",null))))}}]),t}(r.a.Component),k=(a(8),a(23),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement("div",null,r.a.createElement(R,null)))}}]),t}(r.a.Component));var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.ac53bf57.chunk.js.map