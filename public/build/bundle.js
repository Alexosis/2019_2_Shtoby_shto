!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty;function r(e,t){return Array.isArray(e)?function(e,t){for(var n,a="",i="",s=Array.isArray(t),o=0;o<e.length;o++)(n=r(e[o]))&&(s&&t[o]&&(n=l(n)),a=a+i+n,i=" ");return a}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var r in e)r&&e[r]&&a.call(e,r)&&(t=t+n+r,n=" ");return t}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)a.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function s(e,t,n,a){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(a?e:e+'="'+e+'"');var r=typeof t;return"object"!==r&&"function"!==r||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=l(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var a=t[0],r=1;r<t.length;r++)a=e(a,t[r]);return a}for(var s in n)if("class"===s){var o=t[s]||[];t[s]=(Array.isArray(o)?o:[o]).concat(n[s]||[])}else if("style"===s){o=(o=i(t[s]))&&";"!==o[o.length-1]?o+";":o;var l=i(n[s]);l=l&&";"!==l[l.length-1]?l+";":l,t[s]=o+l}else t[s]=n[s];return t},t.classes=r,t.style=i,t.attr=s,t.attrs=function(e,t){var n="";for(var o in e)if(a.call(e,o)){var l=e[o];if("class"===o){l=r(l),n=s(o,l,!1,t)+n;continue}"style"===o&&(l=i(l)),n+=s(o,l,!1,t)}return n};var o=/["&<>]/;function l(e){var t=""+e,n=o.exec(t);if(!n)return e;var a,r,i,s="";for(a=n.index,r=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}r!==a&&(s+=t.substring(r,a)),r=a+1,s+=i}return r!==a?s+t.substring(r,a):s}t.escape=l,t.rethrow=function e(t,a,r,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&a||i))throw t.message+=" on line "+r,t;try{i=i||n(2).readFileSync(a,"utf8")}catch(n){e(t,null,r)}var s=3,o=i.split("\n"),l=Math.max(r-s,0),c=Math.min(o.length,r+s);s=o.slice(l,c).map((function(e,t){var n=t+l+1;return(n==r?"  > ":"    ")+n+"| "+e})).join("\n");t.path=a;t.message=(a||"Pug")+":"+r+"\n"+s+"\n\n"+t.message;throw t}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="Profile.css"></head><body><section style="text-align-last: center"><div class="tabs"><input id="tab_1" type="radio" name="inset" value="" checked=""><label for="tab_1">Профиль и доступ</label><input id="tab_2" type="radio" name="inset" value="" checked=""><label for="tab_2">Действия</label><input id="tab_3" type="radio" name="inset" value="" checked=""><label for="tab_3">Карточки</label><input id="tab_4" type="radio" name="inset" value="" checked=""><label for="tab_4">Настройки</label><div class="tabcontent word" id="Профиль и доступ"><img style="margin-top: 50px" src="assests/profilewolf.svg" alt=""><h1>Управление персональными данными</h1><p>Вы можете менять настройки доступа к информации и улучшениям. Чтобы<wbr>            узнать больше, читайте следующие документы:<a href="/">Условия использования</a> и<a href="/">Политика конфиденциальности</a>.</p><h2 style="margin-top: 60px; text-align-last: left">О нас</h2><hr><div class="container"><div class="row"><div class="col-2-3"><h3>Полное имя</h3><input class="inputLine" type="text" value="Username"><h3>Инициалы</h3><input class="inputLine" type="text" value="U"><h3>Имя пользователя</h3><input class="inputLine" type="text" value="user12345"><h3>О себе</h3><textarea class="aboutYou" placeholder="Something"></textarea><form action="T4.html"><button class="saveButton">Сохранить</button></form></div><div class="col-1-3"><a style="text-align-last: center">Avatar</a><p><img src="assests/userAva.png" alt=""></p></div></div></div><h2 style="margin-top: 60px; text-align-last: left;">Контакт</h2><hr><h3>Электронная почта</h3><textarea readonly="" style="text-align-last: left;">user@mail.com</textarea><button onclick="mailChange(event)">Сменить или добавить почту</button></div><div class="tabcontent word" id="Действия" style="text-align-last: left"><h2 style="margin-top: 40px">Команды</h2><hr><h2>Действия</h2><hr><button>Загрузить больше действий</button></div><div class="tabcontent sorts" id="Карточки"><ul style="line-height: 50px"><li>Сортировка по доске</li><li>Показ карточек со всех досок</li><li>Показ активных за последний месяц</li></ul></div><div class="tabcontent setting" id="Настройки"><h3>Подробности аккаунта</h3><hr><a href="/">Изменить пароль</a><a href="/">Сменить язык...</a><h3>Уведомления</h3><hr><a href="/">Изменить частоту оповещений по электронной почте</a><h3>Макетинговые сообщения</h3><hr><a href="/">Отказаться получать макетинговые сообщения</a><h3>Доступность</h3><hr><a href="/">Включить режим для дальтоников</a><h3>Доступность</h3><hr><a href="/">Включить режим для дальтоников</a><h3>Приложения</h3><hr><h3>Сеансы</h3><hr><a href="/">Настроить двухэтапную аутентификацию</a><h3>Экспорт персональных данных</h3><hr><p style="color: gray">Нажав кнопку, вы создадите JSON-файл с вашей персональной информацией, которая хранится в\nTrello: учетные данные, сведения о платежах, данные и настройки профиля, а также настройки досок и\nкоманд.</p><a style="background-color: lightgray; max-width: 300px" href="/">Скачать персональные данные</a></div></div></section></body></html>'}},function(e,t){},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div id="app"><h1>Канбан-доска здесь</h1></div><div id="view"><button>Создать новую карточку</button></div><div id="logout"><button>Разлогиниться</button></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div class="cont"><div class="form sign-in"><h2>С возвращением,</h2><form id="in"><label><span>Email</span><input name="email" type="email" value="aaa@mail.ru"></label><label><span>Password</span><input name="password" type="password" value="qwerty"></label></form><p class="forgot-pass">Забыли пароль? Ничем не можем вам помочь</p><div class="errorArea"></div><button type="submit" form="in">Войти</button><button class="vk-btn">Войти через<span>ВКонтакте</span></button></div><div class="sub-cont"><div class="bmstu"><div class="img__text m--up"><h2>Первый раз?</h2><p>Зарегистрируйтесь и откройте для себя\nмножество новых возможностей!</p></div><div class="img__text m--in"><h2>Один из нас?</h2><p>Если у вас уже есть аккаунт,\nпросто войдите в систему.\nМы скучали по вам!</p></div><div class="img__btn"><span class="m--up">Регистрация</span><span class="m--in">Вход</span></div></div><div class="form sign-up"><h2>Время почувствовать себя как дома,</h2><form id="up"><label><span>Ваше имя</span><input name="name" type="text"></label><label><span>Email</span><input name="email" type="email"></label><label><span>Password</span><input name="password" type="password"></label></form><div class="errorArea"></div><button type="submit" form="up">Зарегистрироваться</button><button class="vk-btn">связать с аккаунтом<span>ВКонтакте</span></button></div></div></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div><div class="row"><div class="column" id="col1"><img src="img/hero-a.svg"></div><div class="column" id="col2"><div><h1>Мы создали</h1><h1>Чтобы что</h1><h1>-то было</h1></div><button onclick="location.href=\'#/login\';">Начать пользоваться</button><p>Без регистрации и СМС вам доступно только:</p><button onclick="document.location.href = &quot;PUG/index.html&quot;">Посмотреть на мопса</button></div></div></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<head><link rel="stylesheet" type="text/css" href="Profile.css"></head><div id="header" style="line-height: 70px;"><a href="#/" data-section="home">Домой</a><a href="#/board">Доска</a><a href="#/login" style="float: right;">Войти</a><a href="#/profile" style="float: right;">Профиль</a><a href="#/info" style="float: right;">О нас</a></div>'}},function(e,t,n){"use strict";function a(e=""){return e.match(/^([a-z0-9_\\-]+\.)*[a-z0-9_\\-]+@([a-z0-9][a-z0-9\\-]*[a-z0-9]\.)+[a-z]{2,4}$/i)?{status:!0,err:""}:{status:!1,err:"Некорректная почта!"}}function r(e="",t=""){return e!==t?{status:!1,err:"Пароли не совпадают!"}:e.length<6?{status:!1,err:"Пароль слишком короткий!"}:{status:!0,err:""}}function i(e="/",t=null){return console.log(t),fetch("http://localhost:8080"+e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(e=>e.json()).then(e=>console.log("Успех:",JSON.stringify(e))).catch(e=>alert(e.message))}n.r(t);const s=n(3);function o(){const e=s();document.getElementById("application").innerHTML=e,document.getElementById("logout").addEventListener("click",()=>{i("/logout",{}).then(()=>(void 0)())})}const l=n(4);var c={parseRequestUrl:()=>{const e=(location.hash.slice(1).toLowerCase()||"/").split("/"),t={resource:null,id:null,verb:null};return t.resource=e[1],t.id=e[2],t.verb=e[3],t}};const u={"/":function(){const e=n(5)();document.getElementById("application").innerHTML=e},"/profile":function(e){const t=n(1);document.getElementById("application").innerHTML=t()},"/login":function(){document.getElementById("application").innerHTML=l();const e=document.getElementById("in");e.addEventListener("submit",(function(t){t.preventDefault();const n=e.elements.email.value,s=e.elements.password.value,l=a(n),c=r(s,s);if(l.status&&c.status)i("/registration",{login:n,password:s}).then(e=>{200!==e.status?alert(e.message):o()});else{document.getElementsByClassName("errorArea").item(0).innerText=[l.err,c.err].join(" ")}}));const t=document.getElementById("up");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.elements.email.value,s=t.elements.password.value,l=t.elements.name.value,c=a(n),u=r(s,s),d=function(e=""){return e.match(/^[a-zA-Z][a-zA-Z0-9_.,-]{4,14}$/)?{status:!0,err:""}:{status:!1,err:"Используйте только латинские буквы и цифры!"}}(l);if(c.status&&u.status&&d.status)i("/registration",{login:n,password:s,name:l}).then(()=>o()).catch(()=>o());else{document.getElementsByClassName("errorArea").item(1).innerText=[c.err,u.err,d.err].join(" ")}})),document.querySelector(".img__btn").addEventListener("click",(function(){document.querySelector(".cont").classList.toggle("s--signup")}))},"/board":o},d=async()=>{document.getElementById("application");const e=c.parseRequestUrl(),t=e.resource?"/"+e.resource:"/";(0,u[t])()},h=async()=>{console.log("hash changed"),await d()},p=n(6);document.addEventListener("DOMContentLoaded",(function(){document.getElementById("header").innerHTML=p(),window.addEventListener("hashchange",h),window.addEventListener("load",d)}))}]);