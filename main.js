(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),c=t(667),s=t.n(c),p=new URL(t(256),t.b),d=a()(r()),l=s()(p);d.push([n.id,`:root {\n    --color: #f2eac7\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: linear-gradient(90deg, rgba(80,87,102,1) 0%, rgba(44,48,99,1) 100%);\n    font-family: 'Urbanist', sans-serif;\n}\n\nheader {\n    background-color: rgb(68,68,68,0);\n    color: white;\n    height: 7vh;\n    width: 100%;\n    min-height: 70px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n    transition: 500ms background-color ease-in-out 0.1s;\n}\n\nheader.scrolled {\n    background-color: rgb(68,68,68);\n}\n\n.furcio {\n    width: 160px;\n    min-width: 160px;\n}\n\n.furcio:hover {\n    cursor: pointer;\n}\n\nnav ul {\n    width: 350px;\n    min-width: 300px;\n    display: flex;\n    justify-content: space-between;\n}\n\nli {\n   list-style-type: none;\n   font-size: 1.4rem;\n   cursor: pointer;\n}\n\n#content {\n    height: auto;\n}\n\n.intro {\n    height: 93vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 85px;\n    color: white;\n    position: relative;\n}\n\n.intro::before {\n    position: absolute;\n    top: -80px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    content: '';\n    background: url(${l});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    opacity: 0.9;\n}\n\n.intro h2, .intro-btn {\n    position: relative;\n}\n\n.intro h2 {\n    font-size: 2.8rem;\n    font-weight: normal;\n    letter-spacing: 0.1rem;\n}\n\n.intro-btn {\n    z-index: 100;\n    background-color: rgba(0, 0, 0, 0.4);\n    color: white;\n    cursor: pointer;\n    border: 2px groove white;\n    border-radius: 16px;\n    font-size: 1.3rem;\n    padding: 8px;\n    transition: 200ms all ease-in-out;\n}\n\n.intro-btn:hover, .contact-btn:hover {\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.intro-btn:active, .contact-btn:active {\n    transform: scale(1);\n}\n\n.reviews {\n    height: 30vh;\n    background-color: rgb(255, 255, 255);\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.reviews h2 {\n    text-align: center;\n    padding: 30px;\n    font-size: 1.8rem;\n    height: 10%;\n}\n\n.reviews-body {\n    display: flex;\n    justify-content: space-around;\n    height: 85%;\n}\n\n.scores {\n    width: 30%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.google-score, .yelp-score {\n    display: flex;\n    gap: 10px;\n}\n\n.google-score img, .yelp-score img {\n    width: 120px;\n    height: 120px;\n}\n\n.score-info {\n    font-size: 1.3rem;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.testimonies {\n    width: 70%;\n    justify-content: center;\n    align-items: center;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));\n    grid-template-rows: 1fr;\n    grid-auto-flow: column;\n    padding: 0 12px 0 6px;\n}\n\n.testimony {\n    background-color: rgb(230, 244, 253);\n    width: 800px;\n    height: 160px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 4px;\n    margin-right: 20px;\n    border-radius: 16px;\n    box-shadow: 0px 0px 8px 2px rgb(212, 237, 252);\n}\n\n.testimony-text {\n    font-size: 1.1rem;\n    height: 80%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.testimony-name {\n    font-size: 1rem;\n    align-self: flex-end;\n    font-style: italic;\n}\n\n.about {\n    height: 80vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 20px;\n    background-color: rgb(41, 39, 39);\n}\n\n.about p {\n    font-size: 1.3rem;\n    width: 50%;\n    min-width: 400px;\n    border-radius: 50px;\n    padding: 40px;\n    color: white;\n    line-height: 1.7;\n}\n\n.about img {\n    height: 70%;\n    width: 25%;\n    min-width: 300px;\n    object-fit: cover;\n    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.hours {\n    height: 10vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border: 1px solid white;\n    background: linear-gradient(90deg, var(--color) 0%, #dbd5b9 100%);\n}\n\n.hours ul {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n}\n\n.hours ul li {\n    letter-spacing: 0.05rem;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\n.characteristics {\n    height: 90vh;\n    background: rgb(99, 17, 17);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 80px;\n}\n\n.characteristics-div {\n    background:rgb(41, 39, 39);\n    height: 520px;\n    width: 15%;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 10px 1px rgb(15, 14, 14);\n}\n\n.characteristics-div:nth-child(odd) {\n    margin-bottom: 100px;\n}\n\n.characteristics-div:nth-child(even) {\n    margin-top: 100px;\n}\n\n.characteristics-div img {\n    height: 50%;\n    width: 100%;\n    object-fit: cover;\n    align-self: center;\n    padding: 12px;\n    border-radius: 12px;\n}\n\n.characteristics-div p, .characteristics-div h2 {\n    color: var(--color);\n}\n\n.characteristics-div h2 {\n    padding: 12px;\n}\n\n.characteristics-div p {\n    height: 35%;\n    width: 100%;\n    line-height: 1.5rem;\n    padding: 12px;\n}\n\n.gallery {\n    background: rgb(31, 0, 0);\n    height: 70vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.gallery-pics {\n    width: 70%;\n    height: 75%;\n    min-width: 500px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));\n    grid-template-rows: 1fr;\n    grid-auto-flow: column;\n    gap: 50px;\n}\n\n.gallery-pics img {\n    padding: 20px;\n    object-fit: cover;\n    width: 550px;\n    height: 100%;\n}\n\n.map {\n    height: 70vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.map-container {\n    border-radius: 10px;\n    width: 100%;\n    height: 100%;\n    min-width: 500px;\n    display: flex;\n    gap: 80px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 40px;\n}\n\n.map-container iframe {\n    height: 100%;\n    width: 50%;\n    border: none;\n}\n\n.map-info {\n    height: 50%;\n    width: 30%;\n    min-width: 280px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-left: 50px;\n    color: white;\n    font-size: 1.3rem;\n    gap: 20px;\n}\n\n.contact-btn {\n    background-color: rgba(0, 0, 0, 0.4);\n    width: 200px;\n    color: white;\n    cursor: pointer;\n    border: 2px groove white;\n    border-radius: 16px;\n    font-size: 1.2rem;\n    padding: 8px;\n    transition: 200ms background-color ease-in-out;\n    \n}\n\nfooter {\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    font-family: 'IBM Plex Serif', serif;\n    margin-top: 40px;\n}\n\n.footer-container {\n    width: 60%;\n    border-top: 1px solid white;\n    color: white;\n    padding: 16px;\n    font-size: 1rem;\n}\n\n.footer-top {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.icons {\n    display: flex;\n    justify-content: space-between;\n    width: 15%;\n    min-width: 100px;\n    font-size: 1.6rem;\n}\n\n.icon {\n    color: white;\n}\n\n#menu-page {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    margin-top: 80px;\n}\n\n#menu-page h2 {\n    font-size: 2rem;\n    color: white;\n    width: 100%;\n    text-align: center;\n    padding: 8px;\n    background: rgb(88, 3, 3);\n}\n\n.menu-item {\n    width: 70%;\n    min-width: 500px;\n    height: 500px;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 20px;\n    color: white;\n    padding: 12px;\n    gap: 10px;\n}\n\n.menu-item:nth-child(even) {\n   flex-direction: row-reverse;\n}\n\n.item-info {\n    width: 40%;\n}\n\n.item-info p {\n    text-align: center;\n    margin-top: 20px;\n}\n\n.menu-item p {\n    font-size: 1.4rem;\n}\n\n.menu-item img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    box-shadow: 0px 0px 15px 2px black;\n}\n\n.menu-item a {\n    height: 90%;\n    width: 30%;\n    min-width: 300px;\n}\n\n#contact-page {\n    height: 82vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n}\n\n#contact-page h2 {\n    font-size: 3rem;\n    font-weight: normal;\n    color: white;\n}\n\n#contact-page p {\n    font-size: 1.5rem;\n    color: white;\n}\n\n.form {\n    margin-top: 50px;\n    border: 1px solid black;\n    width: 60%;\n    min-width: 400px;\n    padding: 20px;\n    justify-self: center;\n    background-color: var(--color);\n    border-radius: 4px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\nform input {\n    width: 50%;\n}\n\nform input, form textarea {\n    margin: 5px 0px 20px 0;\n    padding: 4px;\n    font-size: 1.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n}\n\nbutton {\n    padding: 6px;\n    width: 10%;\n    min-width: 80px; \n}\n\nbutton[type='submit'] {\n    background: green;\n    color: white;\n    border: 1px solid rgb(1, 56, 1);\n}\n\nbutton[type='reset'] {\n    background: rgb(143, 5, 5);\n    color: white;\n    border: 1px solid rgb(107, 3, 3);\n}\n\nbutton:active {\n    transform: scale(0.9);\n}\n\n/* SCROLL ANIMATION */\n\n.reveal-first, .reveal {\n    position: relative;\n    opacity: 0;\n}\n\n.reveal-first.active, .reveal.active {\n    opacity: 1;\n}\n\n.active.fade-bottom {\n    animation: fade-bottom 1s ease-in-out;\n}\n\n.active.fade-left {\n    animation: fade-left 1s ease-in-out;\n}\n\n.active.fade-right {\n    animation: fade-right 1s ease-in-out;\n}\n\n.active.fade-top {\n    animation: fade-top 1s ease-in-out;\n}\n\n@keyframes fade-top {\n    0% {\n      transform: translateY(-100px);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n}\n\n@keyframes fade-bottom {\n    0% {\n      transform: translateY(100px);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n}\n\n@keyframes fade-left {\n    0% {\n      transform: translateX(-100px);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n}\n  \n@keyframes fade-right {\n    0% {\n      transform: translateX(100px);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n}\n\n/* MEDIA QUERIES */\n  \n@media screen and (max-width: 900px) {\n   \n    header {\n        flex-direction: column;\n        height: auto;\n    }\n\n    .furcio {\n        padding: 16px;   \n    }\n\n    nav ul {\n        min-width: 240px;\n        padding: 8px;   \n    }\n\n    li {\n        font-size: 1.3rem;\n    }\n\n    .intro {\n        gap: 60px;\n    }\n\n    .intro::before {\n        top: -140px;\n    }\n\n    .intro h2 {\n        font-size: 1.6rem;\n        padding: 12px;\n    }\n\n    .intro-btn {\n        font-size: 1rem;\n        width: 140px;\n        padding: 8px\n    }\n\n    .reviews-body, .about, .characteristics, .map-container { \n        flex-direction: column;\n        height: auto;\n    }\n\n    .reviews, .hours, .map {\n        height: auto;\n    }\n\n    .reviews {\n        padding: 20px 0 40px 0;\n    }\n\n    .reviews-body {\n        align-items: center;\n        gap: 40px;\n    }\n\n    .scores {\n        width: 100%;\n        justify-content: space-around;\n    }\n\n    .google-score img, .yelp-score img {\n        width: 100px;\n        height: 100px;\n    }\n\n    .score-info {\n        font-size: 1rem;\n    }\n\n    .testimonies {\n        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n        width: 100%;\n    }\n\n    .testimony {\n        width: 500px;\n        height: 140px;\n        padding: 12px;\n    }\n\n    .testimony-text {\n        font-size: 0.9rem;\n    }\n\n    .testimony-name {\n        font-size: 0.8rem;\n    }\n\n    .about {\n        flex-direction: column-reverse;\n        padding: 40px 0 30px 0;\n    }\n\n    .about p {\n        font-size: 1.1rem;\n        line-height: 1.6;\n        width: 100%;\n    }\n\n    .about img {\n        margin-top: 20px;\n    }\n    \n    .hours {\n        padding: 8px;\n    }\n\n    .hours ul li {\n        font-size: 1.2rem;\n        text-align: center;\n    }\n\n    .characteristics-div:nth-child(odd), \n    .characteristics-div:nth-child(even) {\n        margin-top: 0px;\n        margin-bottom: 0px;\n    }\n\n    .characteristics {\n        padding: 40px;\n        gap: 40px;\n    }\n\n    .characteristics-div {\n        height: 400px;\n        min-width: 270px;\n    }\n\n    .characteristics-div h2 {\n        padding: 8px;\n        font-size: 1.1rem;\n    }\n\n    .characteristics-div p {\n        font-size: 0.9rem;\n        line-height: 1.3rem;\n        padding: 8px;\n    }\n\n    .characteristics-div img {\n        padding: 8px;\n    }\n\n    .gallery-pics {\n        width: 85%;\n        height: 80%;\n        min-width: 350px;\n        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    }\n\n    .gallery-pics img {\n        width: 400px;\n    }\n\n    .map-container {\n        margin-top: 20px;\n        min-width: 300px;\n    }\n\n    .map-container iframe {\n        width: 100%;\n        height: 300px;\n    }\n\n    .map-info {\n        width: 100%;\n        font-size: 1.1rem;\n        margin-left: 0;\n        text-align: center;\n    }\n\n    .footer-container {\n        width: 80%;\n    }\n\n    .menu-item {\n        min-width: 350px;\n        height: 350px;\n        width: 80%;\n        gap: 30px;\n    }\n\n    .menu-item p {\n        font-size: 1.1rem;\n    }\n\n    #contact-page {\n        gap: 20px;\n    }\n\n    #contact-page h2 {\n        font-size: 2rem;\n    }\n\n    #contact-page p {\n        font-size: 1.2rem;\n    }\n\n    .form {\n        width: 70%;\n        min-width: 300px;\n    }\n\n    form input {\n        width: 70%;\n    }\n\n    form input, form textarea {\n        font-size: 1rem;\n    }\n\n}\n\n@media screen and (max-width: 500px) {\n\n\n    nav ul {\n        flex-direction: column;\n        align-items: center;\n        gap: 12px;\n    }\n\n    .intro::before {\n        top: -200px;\n    }\n\n    .intro h2 {\n        font-size: 1.3rem;\n        padding: 8px;\n        text-align: center;\n    }\n\n    .scores {\n        flex-direction: column;\n        gap: 20px;\n    }\n\n    .testimonies {\n        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n    }\n\n    .testimony {\n        width: 270px;\n    }\n\n    .testimony-text {\n        font-size: 0.8rem;\n    }\n\n    .testimony-name {\n        font-size: 0.7rem;\n    }\n\n    .about p {\n        font-size: 0.9rem;\n        min-width: 280px;\n    }\n\n    .about img {\n        min-width: 250px;\n    }\n\n    .hours ul {\n        flex-direction: column;\n        gap: 12px;\n    }\n\n    .hours ul li {\n        font-size: 1rem;\n    }\n\n    .gallery {\n        height: 60vh;\n    }\n\n    .gallery-pics {\n        width: 80%;\n        height: 70%;\n        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n        min-width: 250px;\n    }\n\n    .gallery-pics img {\n        width: 250px;\n    }\n\n    .map-container {\n        min-width: 250px;\n    }\n\n    #menu-page {\n        gap: 60px;\n    }\n\n    .menu-item, .menu-item:nth-child(even) {\n        flex-direction: column-reverse;\n    }\n\n    .menu-item {\n        height: auto;\n        gap: 4px;\n        min-width: 250px;\n    }\n\n    .menu-item a {\n        min-width: 250px;\n    }\n\n    .menu-item img {\n        height: 250px;\n    }\n\n    .footer-top {\n        flex-direction: column;\n        gap: 8px;\n    }\n\n    .form {\n        min-width: 260px;\n    }\n\n}`,""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],p=i.base?s[0]+i.base:s[0],d=o[p]||0,l="".concat(p," ").concat(d);o[p]=d+1;var m=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var u=r(h,i);i.byIndex=c,e.splice(c,0,{identifier:l,updater:u,references:1})}a.push(l)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=i(n,r),p=0;p<o.length;p++){var d=t(o[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},256:(n,e,t)=>{n.exports=t.p+"6b771f20d8c09ccc4dad.webp"}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!n;)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),r=t.n(i),o=t(569),a=t.n(o),c=t(565),s=t.n(c),p=t(216),d=t.n(p),l=t(589),m=t.n(l),h=t(426),u={};u.styleTagTransform=m(),u.setAttributes=s(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),e()(h.Z,u),h.Z&&h.Z.locals&&h.Z.locals;const g=document.querySelector(".home"),f=document.querySelector(".menu"),x=document.querySelector(".contact"),y=document.querySelector(".furcio");let b=document.getElementById("homepage"),v=document.getElementById("menu-page"),w=document.getElementById("contact-page");function z(){b.style.display="block",v.style.display="none",w.style.display="none";let n=document.querySelectorAll(".reveal-first");for(let e=0;e<n.length;e++)n[e].classList.add("active")}function k(){b.style.display="none",v.style.display="grid",w.style.display="none"}function j(){b.style.display="none",v.style.display="none",w.style.display="flex"}z(),f.addEventListener("click",k),x.addEventListener("click",j),g.addEventListener("click",z),y.addEventListener("click",z),document.querySelector(".intro-btn").addEventListener("click",k),document.querySelector(".contact-btn").addEventListener("click",j),window.addEventListener("scroll",(()=>{const n=document.querySelector("header");window.scrollY>0?n.classList.add("scrolled"):n.classList.remove("scrolled"),function(){let n=document.querySelectorAll(".reveal");for(let e=0;e<n.length;e++){let t=window.innerHeight;n[e].getBoundingClientRect().top<t-250?n[e].classList.add("active"):n[e].classList.remove("active")}}()}))})()})();