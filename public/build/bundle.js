!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty;function o(e,t){return Array.isArray(e)?function(e,t){for(var n,a="",r="",i=Array.isArray(t),l=0;l<e.length;l++)(n=o(e[l]))&&(i&&t[l]&&(n=s(n)),a=a+r+n,r=" ");return a}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var o in e)o&&e[o]&&a.call(e,o)&&(t=t+n+o,n=" ");return t}(e):e||""}function r(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)a.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function i(e,t,n,a){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(a?e:e+'="'+e+'"');var o=typeof t;return"object"!==o&&"function"!==o||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=s(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var a=t[0],o=1;o<t.length;o++)a=e(a,t[o]);return a}for(var i in n)if("class"===i){var l=t[i]||[];t[i]=(Array.isArray(l)?l:[l]).concat(n[i]||[])}else if("style"===i){l=(l=r(t[i]))&&";"!==l[l.length-1]?l+";":l;var s=r(n[i]);s=s&&";"!==s[s.length-1]?s+";":s,t[i]=l+s}else t[i]=n[i];return t},t.classes=o,t.style=r,t.attr=i,t.attrs=function(e,t){var n="";for(var l in e)if(a.call(e,l)){var s=e[l];if("class"===l){s=o(s),n=i(l,s,!1,t)+n;continue}"style"===l&&(s=r(s)),n+=i(l,s,!1,t)}return n};var l=/["&<>]/;function s(e){var t=""+e,n=l.exec(t);if(!n)return e;var a,o,r,i="";for(a=n.index,o=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}o!==a&&(i+=t.substring(o,a)),o=a+1,i+=r}return o!==a?i+t.substring(o,a):i}t.escape=s,t.rethrow=function e(t,a,o,r){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&a||r))throw t.message+=" on line "+o,t;try{r=r||n(2).readFileSync(a,"utf8")}catch(n){e(t,null,o)}var i=3,l=r.split("\n"),s=Math.max(o-i,0),c=Math.min(l.length,o+i);i=l.slice(s,c).map((function(e,t){var n=t+s+1;return(n==o?"  > ":"    ")+n+"| "+e})).join("\n");t.path=a;t.message=(a||"Pug")+":"+o+"\n"+i+"\n\n"+t.message;throw t}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<link rel="stylesheet" href="static/css/Profile.css" type="text/css"><section style="text-align-last: center"><div class="tabs"><input id="tab_1" type="radio" name="inset" value="" checked=""><label for="tab_1">Профиль и доступ</label><input id="tab_2" type="radio" name="inset" value=""><label for="tab_2">Действия</label><input id="tab_3" type="radio" name="inset" value=""><label for="tab_3">Карточки</label><input id="tab_4" type="radio" name="inset" value=""><label for="tab_4">Настройки</label><div class="tabcontent word" id="Профиль и доступ"><img style="margin-top: 50px" src="static/img/profilewolf.svg" alt=""><h1>Управление персональными данными</h1><p>Вы можете менять настройки доступа к информации и улучшениям. Чтобы<wbr>            узнать больше, читайте следующие документы:<a href="/">Условия использования</a> и<a href="/">Политика конфиденциальности</a>.</p><h2 style="margin-top: 60px; text-align-last: left">О нас</h2><hr><div class="container"><div class="row"><div class="col-2-3"><h3>Полное имя</h3><input class="inputLine" type="text" value="Username" id="username"><h3>Инициалы</h3><input class="inputLine" type="text" value="U"><h3>Пароль</h3><input class="inputLine" type="password" value="" id="password"><h3>О себе</h3><textarea class="aboutYou" placeholder="Something"></textarea><form><button class="saveButton">Сохранить</button></form></div><div class="col-1-3"><a style="text-align-last: center">Avatar</a><p><img src="static/img/userAva.png" alt=""></p></div></div></div><h2 style="margin-top: 60px; text-align-last: left;">Контакт</h2><hr><h3>Электронная почта</h3><textarea readonly="" style="text-align-last: left;">user@mail.com</textarea><button onclick="mailChange(event)">Сменить или добавить почту</button></div><div class="tabcontent word" id="Действия" style="text-align-last: left"><h2 style="margin-top: 40px">Команды</h2><hr><h2>Действия</h2><hr><button>Загрузить больше действий</button></div><div class="tabcontent sorts" id="Карточки"><ul style="line-height: 50px"><li>Сортировка по доске</li><li>Показ карточек со всех досок</li><li>Показ активных за последний месяц</li></ul></div><div class="tabcontent setting" id="Настройки"><h3>Подробности аккаунта</h3><hr><a href="/">Изменить пароль</a><a href="/">Сменить язык...</a><h3>Уведомления</h3><hr><a href="/">Изменить частоту оповещений по электронной почте</a><h3>Макетинговые сообщения</h3><hr><a href="/">Отказаться получать макетинговые сообщения</a><h3>Доступность</h3><hr><a href="/">Включить режим для дальтоников</a><h3>Доступность</h3><hr><a href="/">Включить режим для дальтоников</a><h3>Приложения</h3><hr><h3>Сеансы</h3><hr><a href="/">Настроить двухэтапную аутентификацию</a><h3>Экспорт персональных данных</h3><hr><p style="color: gray">Нажав кнопку, вы создадите JSON-файл с вашей персональной информацией, которая хранится в\nTrello: учетные данные, сведения о платежах, данные и настройки профиля, а также настройки досок и\nкоманд.</p><a style="background-color: lightgray; max-width: 300px" href="/">Скачать персональные данные</a></div></div></section>'}},function(e,t){},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div id="app"><h1>Канбан-доска здесь</h1></div><div id="view"><button>Создать новую карточку</button></div><div id="logout"><button>Разлогиниться</button></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div class="cont"><div class="form sign-in"><h2>С возвращением</h2><form id="in"><label><span>Email</span><input name="email" type="email" value="aaa@mail.ru"></label><label><span>Password</span><input name="password" type="password" value="qwerty"></label><label><p class="forgot-pass">Забыли пароль? Ничем не можем вам помочь</p><div class="errorArea"></div></label><button type="submit" form="in">Войти</button></form><button class="vk-btn">Войти через<span>ВКонтакте</span></button></div><div class="sub-cont"><div class="bmstu"><div class="img__text m--up"><h2>Первый раз?</h2><p>Зарегистрируйтесь и откройте для себя\nмножество новых возможностей!</p></div><div class="img__text m--in"><h2>Один из нас?</h2><p>Если у вас уже есть аккаунт,\nпросто войдите в систему.\nМы скучали по вам!</p></div><div class="img__btn"><span class="m--up">Регистрация</span><span class="m--in">Вход</span></div></div><div class="form sign-up"><h2>Время почувствовать себя как дома,</h2><form id="up"><label><span>Ваше имя</span><input name="name" type="text"></label><label><span>Email</span><input name="email" type="email"></label><label><span>Password</span><input name="password" type="password"></label></form><div class="errorArea"></div><button type="submit" form="up">Зарегистрироваться</button><button class="vk-btn">связать с аккаунтом<span>ВКонтакте</span></button></div></div></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<div><div class="row"><div class="column" id="col1"><img src="static/img/hero-a.svg"></div><div class="column" id="col2"><div><h1>Мы создали</h1><h1>Чтобы что</h1><h1>-то было</h1></div><button onclick="location.href=\'#/login\';">Начать пользоваться</button><p>Без регистрации и СМС вам доступно только:</p><button onclick="document.location.href = &quot;PUG/index.html&quot;">Посмотреть на мопса</button></div></div></div>'}},function(e,t,n){n(0);e.exports=function(e){var t="";return t+='<head><div id="header"><ul><li><a href="#/" data-section="home">Домой</a></li><li><a href="#/board">Доска</a></li><div class="rightside"><li><a href="#/login">Войти</a></li><li><a href="#/profile">Профиль</a></li><li><a href="#/info">О нас</a></li></div></ul></div></head>'}},function(e,t,n){"use strict";function a(e="/",t=null){return console.log(t),fetch("http://localhost:8080"+e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(e=>e.json()).then(e=>(console.log("Успех:",JSON.stringify(e)),e)).catch(e=>alert(e.message))}function o(e=""){return e.match(/^([a-z0-9_\\-]+\.)*[a-z0-9_\\-]+@([a-z0-9][a-z0-9\\-]*[a-z0-9]\.)+[a-z]{2,4}$/i)}function r(e="",t=""){return e.length>=6&&e===t}n.r(t);const i=n(1);const l=n(3);function s(){const e=l();document.getElementById("application").innerHTML=e,document.getElementById("logout").addEventListener("click",()=>{a("/logout",{}).then(()=>{location.href="#/"})})}const c=n(4);var u={parseRequestUrl:()=>{const e=location.hash.slice(1).toLowerCase()||"/";console.log(e);const t=e.split("/"),n={resource:null,id:null,verb:null};return n.resource=t[1],n.id=t[2],n.verb=t[3],n}};const d={"/":function(){const e=n(5)();document.getElementById("application").innerHTML=e},"/profile":function(){const e={};(function(e="/"){return fetch("http://localhost:8080"+e,{method:"GET",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"}).then(e=>e.json()).then(e=>(console.log("Ответ такой:",JSON.stringify(e)),e)).catch(e=>null)})("/user").then(t=>{if(t){e.login=t.login,e.password=t.password,e.id=t.id,application.innerHTML=i(),document.getElementById("username").value=e.login,document.getElementById("password").value=e.password,document.getElementsByClassName("saveButton")[0].addEventListener("click",()=>{const e=document.getElementById("username"),t=document.getElementById("password"),n=o(e.value),a=r(t.value,t.value);n&&a?function(e="/",t=null){return console.log(t),fetch("http://localhost:8080"+e,{method:"PUT",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(e=>e.json()).then(e=>(console.log("Ответ такой:",JSON.stringify(e)),e)).catch(e=>alert(e.message))}("/user",{login:e.value,password:t.value}).then(e=>{console.log(e),200!==e.status?(console.log(e.message),location.href="/"):location.href="#"}).catch(e=>{alert(`ошибка:${e}`)}):(console.log("как-то сообщить юзеру что что-то не так"),n||console.log("невалидный email"),a||console.log("невалидный пароль"))})}else location.href="#/"})},"/login":function(){document.getElementById("application").innerHTML=c();const e=document.getElementsByTagName("form")[0];e.addEventListener("submit",t=>{console.log("this code executes"),t.preventDefault();const n=e.elements.email.value,i=e.elements.password.value,l=document.getElementsByClassName("errorArea").item(0);o(n)&&r(i,i)?a("/login",{login:n,password:i}).then(e=>{200!==e.status?l.innerText=e.message:s()}).catch(()=>{console.log("login unsuccesful")}):l.innerText="Некорректная почта или пароль!"});const t=document.getElementsByTagName("form")[1];console.log(t),t.addEventListener("submit",e=>{console.log("this code executes"),e.preventDefault();const n=t.elements.email.value,i=t.elements.password.value,l=t.elements.name.value,c=document.getElementsByClassName("errorArea").item(1);o(n)&&r(i,i)&&function(e=""){return e.match(/^[a-zA-Z][a-zA-Z0-9_.,-]{4,14}$/)}(l)?a("/registration",{login:n,password:i}).then(e=>{s()}).catch(()=>{c.innerText="такой пользователь мол есть уже"}):c.innerText="Некорректный ввод!"}),document.querySelector(".img__btn").addEventListener("click",(function(){document.querySelector(".cont").classList.toggle("s--signup")}))},"/board":s},h=async()=>{const e=u.parseRequestUrl(),t=e.resource?"/"+e.resource:"/",n=d[t];console.log(t),n()},f=async()=>{console.log("hash changed"),await h()};document.addEventListener("DOMContentLoaded",(function(){!function(){const e=n(6);document.getElementById("header").innerHTML=e()}(),window.addEventListener("hashchange",f),window.addEventListener("load",h)}))}]);