(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var i=t(81),o=t.n(i),r=t(645),a=t.n(r),c=t(667),s=t.n(c),p=new URL(t(861),t.b),d=a()(o()),l=s()(p);d.push([n.id,`:root {\n    --color: #635985\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: linear-gradient(180deg, rgba(224,139,0,1) 0%, rgba(164,110,7,1) 100%);\n    overflow-x: hidden;\n}\n\nheader {\n    border-bottom: 1px solid rgb(90, 88, 88);\n    background: #D8D9DA;\n    color: black;\n    height: 8vh;\n    width: 100%;\n    min-height: 70px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n    font-family: 'IBM Plex Serif', serif;\n}\n\n.furcio {\n    width: 160px;\n    min-width: 160px;\n}\n\n.furcio:hover {\n    cursor: pointer;\n}\n\nnav ul {\n    width: 350px;\n    min-width: 300px;\n    display: flex;\n    justify-content: space-between;\n}\n\nli {\n   list-style-type: none;\n   font-size: 1.5rem;\n   cursor: pointer;\n}\n\n#content {\n    height: auto;\n}\n\n.homepage {\n    font-family: 'IBM Plex Serif', serif;\n}\n\n.intro {\n    height: 92vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    box-shadow: 0px -10px 10px 15px rgb(224,139,0);\n    color: white;\n    position: relative;\n    background-color: black;\n}\n\n.intro::before {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    content: '';\n    background: url(${l});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    opacity: 0.5;\n}\n\n.intro h2, .intro h3 {\n    position: relative;\n}\n\n.intro h2 {\n    font-size: 5rem;\n}\n\n.intro h3 {\n    font-size: 1.8rem;\n}\n\n.about {\n    height: 60vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.about p {\n    font-size: 1.6rem;\n    width: 40%;\n    min-width: 400px;\n    border: 1px solid white;\n    border-radius: 50px;\n    padding: 40px;\n    box-shadow: 0px 0px 15px 5px black;\n    background-color: #FAEDCD;\n}\n\n.about img {\n    border-radius: 4px;\n    height: 80%;\n    width: 25%;\n    min-width: 300px;\n    object-fit: cover;\n    box-shadow: 0px 0px 15px 2px black;\n}\n\n.hours {\n    height: 60vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 100px;\n}\n\n.hours-container {\n    padding: 40px;\n    border-radius: 50px;\n    background-color: #FAEDCD;\n    box-shadow: 0px 0px 15px 5px black;\n    width: 40%;\n    min-width: 300px;\n    text-align: center;\n}\n\n.hours h3 {\n    font-size: 3rem;\n}\n\n.hours ul {\n    letter-spacing: 0.07rem;\n}\n\n.hours ul li {\n    margin-top: 10px;\n    font-size: 2rem;\n}\n\n.map {\n    height: 70vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.map-container {\n    border-radius: 10px;\n    min-width: 500px;\n    display: flex;\n    gap: 24px;\n    align-items: flex-end;\n    padding: 40px;\n}\n\n.map-info {\n    border: 1px solid black;\n    height: 100px;\n    width: 20%;\n    min-width: 200px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    border-radius: 20px;\n}\n\nfooter {\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    font-family: 'IBM Plex Serif', serif;\n}\n\n.footer-container {\n    width: 60%;\n    border-top: 1px solid white;\n    color: white;\n    padding: 16px;\n    font-size: 1.2rem;\n}\n\n.footer-top {\n    display: flex;\n    justify-content: space-around;\n}\n\n.icons {\n    display: flex;\n    justify-content: space-between;\n    width: 15%;\n    min-width: 100px;\n    font-size: 1.6rem;\n}\n\n.icon {\n    color: white;\n}\n\n.menu-page {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    padding: 40px;\n    font-family: 'IBM Plex Serif', serif;\n}\n\n.menu-page h2 {\n    font-size: 2.5rem;\n    color: white;\n}\n\n.menu-item {\n    border: 3px solid #6C3428;\n    width: 70%;\n    min-width: 500px;\n    height: 500px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 20px;\n    background-color: #FFF7D4;\n    color: #6C3428;\n    padding: 12px;\n    gap: 10px;\n}\n\n.menu-item:nth-child(even) {\n   flex-direction: row-reverse;\n}\n\n.item-info {\n    width: 40%;\n}\n\n.item-info p {\n    text-align: center;\n    margin-top: 20px;\n}\n\n.menu-item p {\n    font-size: 1.4rem;\n    font-weight: bold;\n}\n\n.menu-item img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    box-shadow: 0px 0px 15px 2px black;\n}\n\n.menu-item a {\n    border: 1px solid black;\n    height: 90%;\n    width: 30%;\n    min-width: 300px;\n}\n\n.contact-page {\n    height: 82vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n}\n\n.contact-page h2, .contact-page p {\n    font-family: 'IBM Plex Serif', serif;\n}\n\n.contact-page h2 {\n    font-size: 3rem;\n    color: white;\n}\n\n.contact-page p {\n    font-size: 1.5rem;\n    color: white;\n}\n\n.form {\n    margin-top: 50px;\n    border: 1px solid black;\n    width: 60%;\n    min-width: 400px;\n    padding: 20px;\n    justify-self: center;\n    background-color: #FFF7D4;\n    border-radius: 4px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\nform input {\n    width: 50%;\n}\n\nform input, form textarea {\n    margin: 5px 0px 20px 0;\n    padding: 4px;\n    font-size: 1.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n}\n\nbutton {\n    padding: 6px;\n    width: 10%;\n    min-width: 80px; \n}\n\nbutton[type='submit'] {\n    background: green;\n    color: white;\n    font-weight: bold;\n    border-radius: 4px;\n}\n\nbutton[type='reset'] {\n    background: rgb(143, 5, 5);\n    color: white;\n    font-weight: bold;\n    border-radius: 4px;\n}\n\nbutton:active {\n    transform: scale(0.9);\n}\n\n@media screen and (max-width: 800px) {\n    header {\n        flex-direction: column;\n        height: auto;\n        gap: 30px;\n        padding: 20px;\n    }\n\n    nav ul li {\n        font-size: 1.3rem;\n    }\n\n    .intro h2 {\n        font-size: 3rem;\n        padding: 20px;\n        text-align: center;\n    }\n\n    .intro h3 {\n        font-size: 1.4rem;\n        padding: 20px;\n        text-align: center;\n    }\n\n    .about {\n        flex-direction: column;\n        margin: 80px;\n        gap: 50px;\n    }\n\n    .about p {\n        min-width: 380px;\n        padding: 25px;\n        font-size: 1.3rem;\n    }\n\n    .about img {\n        max-height: 300px;\n    }\n\n    .hours ul li {\n        font-size: 1.5rem;\n    }\n\n    .map-container {\n        flex-direction: column;\n        min-width: 400px;\n        padding: 20px;\n    }\n\n    .map-info {\n        align-self: center;\n        padding: 2px;\n        font-size: 0.9rem;\n    }\n\n    .map-container iframe {\n        width: 100%;\n        max-height: 400px;\n    }\n\n    .footer-top {\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .menu-page {\n        padding: 10px 0px 20px 0px;\n    }\n\n    .menu-item, .menu-item:nth-child(even) {\n        flex-direction: column;\n        min-width: 300px;\n    }\n\n    .menu-item a {\n        max-height: 250px;\n        min-width: 270px;\n    }\n\n    .contact-page {\n        gap: 10px;\n        padding: 20px;\n    }\n\n    .contact-page h2 {\n        font-size: 2rem;\n    }\n\n    .contact-page p {\n        font-size: 1.1rem;\n        width: 50%;\n    }\n\n    .form {\n        padding: 8px;\n        min-width: 300px;\n    }\n\n    form input, form textarea {\n        font-size: 1.1rem;\n    }\n\n    .form-buttons {\n        gap: 20px;\n    }\n}\n\n@media screen and (max-width: 400px) {\n\n    header {\n        gap: 15px;\n    }\n\n    nav ul {\n        flex-direction: column;\n        gap: 20px;\n        align-items: center;\n    }\n\n    .about p {\n        min-width: 300px;\n    }\n\n    .map-container {\n        min-width: 260px;\n    }\n\n    .contact-page p {\n        font-size: 1rem;\n        width: 100%;\n    }\n\n    .form {\n        min-width: 280px;\n    }\n\n    form input, form textarea {\n        font-size: 1rem;\n    }\n}`,""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],c=0;c<n.length;c++){var s=n[c],p=i.base?s[0]+i.base:s[0],d=r[p]||0,l="".concat(p," ").concat(d);r[p]=d+1;var m=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,i);i.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var c=t(r[a]);e[c].references--}for(var s=i(n,o),p=0;p<r.length;p++){var d=t(r[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},861:(n,e,t)=>{n.exports=t.p+"edbf56e0ab5a111cb78b.jpeg"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!n;)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),o=t.n(i),r=t(569),a=t.n(r),c=t(565),s=t.n(c),p=t(216),d=t.n(p),l=t(589),m=t.n(l),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,console.log("check");const f=document.querySelector(".home"),x=document.querySelector(".menu"),g=document.querySelector(".contact"),b=document.querySelector(".furcio");let w=document.getElementById("content");function v(){w.replaceChildren();const n=document.createElement("div");n.classList.add("homepage"),w.appendChild(n);const e=document.createElement("div");e.classList.add("intro");const t=document.createElement("h2"),i=document.createElement("h3");t.innerHTML="Ultimate taste",i.innerHTML="Please your palate with an unforgettable meal",n.appendChild(e),e.append(t,i);const o=document.createElement("div");o.classList.add("about");const r=document.createElement("p"),a=document.createElement("img");r.innerHTML="99% chance of you coming back again, you just had to be there",a.src="sirloin-tacos.jpeg",a.alt="foto",n.appendChild(o),o.append(r,a);const c=document.createElement("div");c.classList.add("hours");const s=document.createElement("div");s.classList.add("hours-container");const p=document.createElement("h3");p.innerHTML="Hours";const d=document.createElement("ul"),l=["Mon - Closed","Tue - 10a-8p","Wed - 10a-8p","Thu - 10a-8p","Fri - 11a-9p","Sat - 11a-9p","Sun - 10a-9p"];for(let n=0;n<l.length;n++){let e=document.createElement("li");d.appendChild(e),e.innerHTML=l[n]}n.appendChild(c),c.appendChild(s),s.append(p,d);const m=document.createElement("div");m.classList.add("map");const u=document.createElement("div");u.classList.add("map-container");const h=document.createElement("iframe");h.src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119923.49779575093!2d-57.9994092058858!3d-61.98864025622191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1690381611408!5m2!1ses!2sus",h.width="700",h.height="500",h.style="border:1px solid black",h.loading="lazy",h.referrerPolicy="no-referrer-when-downgrade";const f=document.createElement("div");f.classList.add("map-info"),f.innerHTML="King Georgie Island, Antarctica",n.appendChild(m),m.appendChild(u),u.append(h,f)}v(),x.addEventListener("click",(function(){w.replaceChildren();const n=document.createElement("div");n.classList.add("menu-page"),w.appendChild(n);const e=document.createElement("h2");function t(n,e,t,i){this.item=n,this.price=e,this.stock=t,this.pic=i}e.innerHTML="Exquisite Menu",n.appendChild(e);const i=[],o=[],r=[],a=[];let c=new t("Sirloin Tacos","$11.99 (8pcs)","https://www.pexels.com/photo/steak-tacos-7613568/","sirloin-tacos.jpeg");i.push(c.item),o.push(c.price),r.push(c.stock),a.push(c.pic);let s=new t("Sirloin Chuleta","$13.99","https://www.pexels.com/photo/grilled-meat-410648/","chuleta-sirloin.jpeg");i.push(s.item),o.push(s.price),r.push(s.stock),a.push(s.pic);let p=new t("Sirloin Steak with sides","$15.99","https://www.pexels.com/photo/parrillero-de-res-16970732/","sirloin-steak.jpeg");i.push(p.item),o.push(p.price),r.push(p.stock),a.push(p.pic);let d=new t("Santisima Trinidad","$11.99","https://www.pexels.com/photo/cooked-food-on-blue-plate-2092507/","trinidad.jpeg");i.push(d.item),o.push(d.price),r.push(d.stock),a.push(d.pic);for(let e=0;e<i.length;e++){let t=document.createElement("div");t.classList.add("menu-item");let c=document.createElement("div");c.classList.add("item-info");let s=document.createElement("p"),p=document.createElement("p"),d=document.createElement("a"),l=document.createElement("img");s.innerHTML=i[e],p.innerHTML=o[e],d.href=r[e],d.target="_blank",l.src=a[e],l.alt="foto",n.appendChild(t),t.append(c,d),c.append(s,p),d.appendChild(l)}})),g.addEventListener("click",(function(){w.replaceChildren();const n=document.createElement("div");n.classList.add("contact-page"),w.appendChild(n);const e=document.createElement("h2");e.innerHTML="Contact us";const t=document.createElement("p");t.innerHTML="Leave us a message with your contact details so we can get back to you shortly";const i=document.createElement("div");i.classList.add("form"),n.append(e,t,i);const o=document.createElement("form");o.action="",o.method="get",i.appendChild(o);const r=document.createElement("label");r.for="name",r.innerHTML="Name:";const a=document.createElement("input");a.type="text",a.name="name",a.classList.add="input-name",a.id="name",a.placeholder="Enter your name",a.required=!0;const c=document.createElement("label");c.for="email",r.innerHTML="Email:";const s=document.createElement("input");s.type="email",s.name="email",s.classList.add="input-email",s.id="email",s.placeholder="Enter your email",s.required=!0;const p=document.createElement("label");p.for="message",p.innerHTML="Message:";const d=document.createElement("textarea");d.name="message",d.classList.add("input-message"),d.id="message",d.placeholder="Enter your message",d.rows="10",d.required=!0,d.style="resize: none;";const l=document.createElement("div");l.classList.add("form-buttons"),o.append(r,a,c,s,p,d,l);const m=document.createElement("button");m.type="submit",m.value="submit",m.innerHTML="Submit";const u=document.createElement("button");u.type="reset",u.value="reset",u.innerHTML="Reset",l.append(m,u)})),f.addEventListener("click",v),b.addEventListener("click",v)})()})();