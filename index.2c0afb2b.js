!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){a[t]=e},e.parcelRequired7c6=o),o.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}}));var l={searchForm:document.querySelector(".header-form"),searchButton:document.querySelector(".header-form__btn"),filmCard:document.querySelector(".gallery"),headerButtons:document.querySelector(".header__buttons"),gallery:document.querySelector(".gallery__list"),rate:document.querySelector(".info-rate")},i=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}};!function(t){try{var e=localStorage.getItem(t);null===e||JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}("genres");function r(t){l.gallery.innerHTML=t.map((function(t){var e=t.genre_ids,n=t.id,a=t.title,o=t.poster_path,l=t.release_date,i=t.vote_average,r=o?"https://image.tmdb.org/t/p/w500".concat(o):"https://via.placeholder.com/150/360505/FFFFFF/?Text=No-poster";return'\n        <li class="gallery__item">\n                <img class="gallery__image" src="'.concat(r,'" alt="Movie poster of ').concat(a,'" loading="lazy" data-id="').concat(n,'"/>\n                <div class="info">\n                    <h2 class="info-title">').concat(a,'</h2>\n\t\t\t\t\t\t\t\t\t\t<p class="info-meta">').concat(e.slice(0,2)," | ").concat(l.slice(0,4),'<span class="info-rate">').concat(i.toFixed(2),"</span></p>\n                </div>\n        </li>")})).join("")}(new(0,(T=o("18yUV")).default)).fetchTrendingFilms().then((function(t){r(t.results)})),o("7F1pg");var c=document.querySelector(".team__list"),s=[{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"}].map((function(t){var e=t.img,n=t.alt,a=t.name,o=t.pos,l=t.git,i=t.linked,r=t.insta;return'<li class="team__item">                          \n                <img src="'.concat(e,'" alt="').concat(n,'" width = 260> \n\n                <div class="team-div">\n                    <h3 class="team-div__employee">').concat(a,'</h3>\n                    <p class="team-div__position">').concat(o,'</p>\n                    <ul class="team-div__list">                \n                        <li class="team-div__item">\n                            <a class="team-div__link" href="').concat(r,'">\n                                <svg class="team-div__icon" width="20" height="20" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink"> \n                                    <path d="M31.968 9.408c-0.074-1.701-0.349-2.869-0.742-3.882-0.424-1.111-1.054-2.059-1.85-2.837l-0.001-0.001c-0.78-0.792-1.724-1.419-2.778-1.827l-0.054-0.018c-1.019-0.394-2.181-0.667-3.882-0.742-1.712-0.082-2.256-0.101-6.602-0.101-4.344 0-4.888 0.019-6.595 0.094-1.699 0.074-2.869 0.349-3.88 0.742-1.112 0.424-2.060 1.054-2.839 1.85l-0.001 0.001c-0.791 0.78-1.418 1.724-1.825 2.778l-0.018 0.054c-0.395 1.019-0.669 2.181-0.744 3.882-0.082 1.712-0.101 2.256-0.101 6.602 0 4.344 0.019 4.888 0.094 6.595 0.075 1.701 0.35 2.869 0.744 3.882 0.426 1.11 1.055 2.057 1.849 2.837l0.001 0.001c0.8 0.813 1.77 1.443 2.832 1.843 1.019 0.395 2.182 0.67 3.882 0.744 1.707 0.075 2.251 0.094 6.595 0.094 4.346 0 4.89-0.019 6.595-0.094 1.701-0.074 2.869-0.349 3.882-0.742 2.157-0.85 3.833-2.526 4.664-4.628l0.019-0.055c0.394-1.019 0.669-2.182 0.744-3.882 0.075-1.707 0.093-2.251 0.093-6.595s-0.006-4.888-0.080-6.595zM29.088 22.474c-0.070 1.563-0.333 2.406-0.55 2.97-0.552 1.399-1.64 2.486-3.004 3.024l-0.036 0.012c-0.56 0.219-1.411 0.482-2.968 0.55-1.688 0.075-2.194 0.094-6.464 0.094-4.269 0-4.782-0.019-6.464-0.094-1.563-0.069-2.406-0.331-2.97-0.55-0.721-0.269-1.334-0.676-1.836-1.192l-0.001-0.001c-0.517-0.503-0.924-1.117-1.184-1.803l-0.011-0.034c-0.218-0.563-0.48-1.413-0.549-2.97-0.075-1.688-0.094-2.195-0.094-6.464 0-4.27 0.019-4.784 0.094-6.464 0.069-1.563 0.331-2.406 0.549-2.97 0.269-0.722 0.678-1.337 1.198-1.837l0.002-0.002c0.504-0.517 1.119-0.923 1.806-1.182l0.034-0.011c0.56-0.219 1.411-0.48 2.968-0.55 1.688-0.074 2.195-0.093 6.464-0.093 4.275 0 4.782 0.019 6.464 0.093 1.563 0.069 2.406 0.331 2.97 0.55 0.693 0.256 1.325 0.662 1.837 1.194 0.531 0.52 0.938 1.144 1.195 1.84 0.218 0.56 0.48 1.411 0.549 2.968 0.075 1.688 0.094 2.194 0.094 6.464 0 4.269-0.019 4.768-0.094 6.458z"></path>\n                                    <path d="M16.059 7.782c-4.539 0.002-8.218 3.682-8.219 8.221v0c0 0 0 0.001 0 0.002 0 4.541 3.681 8.222 8.222 8.222s8.222-3.681 8.222-8.222c0-4.541-3.681-8.222-8.222-8.222-0.001 0-0.001 0-0.002 0h0zM16.059 21.334c-2.945-0-5.332-2.388-5.332-5.333s2.388-5.333 5.333-5.333c0 0 0.001 0 0.001 0h-0c2.946 0 5.334 2.388 5.334 5.334s-2.388 5.334-5.334 5.334v0zM26.525 7.458c0 1.060-0.86 1.92-1.92 1.92s-1.92-0.86-1.92-1.92v0c0-1.060 0.86-1.92 1.92-1.92s1.92 0.86 1.92 1.92v0z"></path>\n                                </svg>\n                            </a>\n                        </li>\n                        <li class="team-div__item">\n                            <a class="team-div__link" href="').concat(l,'">\n                                <svg class="team-div__icon" width="20" height="20" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink"> \n                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path> \n                                </svg>\n                            </a>\n                        </li>\n                        <li class="team-div__item">\n                            <a class="team-div__link" href="').concat(i,'">\n                                <svg class="team-div__icon" width="20" height="20" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink"> \n                                    <path d="M31.992 32h0.008v-11.738c0-5.741-1.237-10.163-7.947-10.163-3.227 0-5.392 1.77-6.277 3.45h-0.093v-2.914h-6.365v21.363h6.627v-10.578c0-2.786 0.528-5.48 3.978-5.48 3.398 0 3.448 3.179 3.448 5.658v10.402h6.621zM0.528 10.635h6.635v21.365h-6.635v-21.365zM3.843 0c-2.123 0-3.843 1.721-3.843 3.843v0c0 2.12 1.722 3.878 3.843 3.878 2.12 0 3.842-1.757 3.842-3.878s-1.72-3.841-3.841-3.843h-0z"></path> \n                                </svg>\n                            </a>\n                        </li>                                  \n                    </ul>\n                </div>\n            </li>')})).join("");c.insertAdjacentHTML("beforeend",s),o("j1lrD");var d=o("bpxeT"),m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){p.default(t,e,n[e])}))}return t};var u,p=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var g=o("2TvXO");function h(t){var e=t.poster_path,n=t.title,a=t.vote_average,o=t.vote_count,l=t.popularity,i=t.original_title,r=t.listOfGenders,c=t.overview,s=t.id;return'\n    <div class="modal" data-modal-id="'.concat(s,'">\n        <div class="modal__poster">\n            <img\n                class="modal__img"\n                src="https://image.tmdb.org/t/p/w500').concat(e,'"\n                alt="').concat(n,'"\n                />\n        </div>\n    \n        <div class="modal__content">\n            <h2 class="modal__content-title">').concat(n,'</h2>\n            <table class="modal__content-info">\n                <tr>\n                    <td class="modal__content-name">Vote / Votes</td>\n                    <td class="modal__content-name-value">\n                        <span class="modal__content-rate">').concat(a,'</span>\n                        /\n                        <span class="modal__content-rates">').concat(o,'</span>\n                    </td>\n                </tr>\n                <tr>\n                    <td class="modal__content-name">Popularity</td>\n                    <td class="modal__content-name-value">').concat(l,'</td>\n                </tr>\n                <tr>\n                    <td class="modal__content-name">Original Title</td>\n                    <td class="modal__content-name-value--title">').concat(i,'</td>\n                </tr>\n                <tr>\n                    <td class="modal__content-name">Genre</td>\n                    <td class="modal__content-name-value">').concat(r,'</td>\n                </tr>\n            </table>\n        \n            <div class="modal__about">\n                <h3 class="modal__about-title">About</h3>\n                <p class="modal__about-description">').concat(c,'</p>\n            </div>\n        \n            <div class="modal__btns">\n                <button class="modal__btn add-to-watched" type="button" data-modal-action="').concat(s,'">\n                Add to watched\n                </button>\n                <button class="modal__btn add-to-queue" type="button" data-modal-action="').concat(s,'">\n                Add to queue\n                </button>\n                \x3c!-- <button  type="button" class="modal__btn player" data-player-action="').concat(s,'">watch the trailer</button>  --\x3e\n\n            </div>\n            <button class="modal__close" type="button" data-modal-close aria-label="close-modal">\n                <svg class="modal__close-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n                    <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n                </svg>\n            </button>\n        </div>\n    </div>\n    ')}var v=new(0,(T=o("18yUV")).default),w=null,f="",_={gallery:document.querySelector(".gallery"),backdrop:document.querySelector(".modal-backdrop"),closeFilmModalBtn:"",addToWatched:"",addToQueue:""};_.gallery.addEventListener("click",(function(t){if(t.preventDefault(),w=t.target.dataset.id,y(w),"IMG"!==t.target.nodeName)return;C()}));var b,y=(b=t(d)(t(g).mark((function e(n){var a,o,l;return t(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.fetchFilmById(n);case 3:return a=e.sent,e.next=6,a.genres.map((function(t){return t.name})).join(", ");case 6:return o=e.sent,l=t(m)({},a,{listOfGenders:o}),f=h(l),_.backdrop.innerHTML=f,k(),_.closeFilmModalBtn.addEventListener("click",x),_.backdrop.addEventListener("click",S),window.addEventListener("keydown",M),e.abrupt("return",_.backdrop);case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[0,17]])}))),function(t){return b.apply(this,arguments)});function k(){return _.closeFilmModalBtn=document.querySelector(".modal__close"),_.addToWatched=document.querySelector(".add-to-watched"),_.addToQueue=document.querySelector(".add-to-queue"),_}function x(t){t.preventDefault(),C(),_.backdrop.innerHTML="",console.log(_.backdrop),j()}function M(t){t.preventDefault(),"Escape"===t.code&&(C(),_.backdrop.innerHTML="",j())}function S(t){t.preventDefault(),t.currentTarget===t.target&&(C(),_.backdrop.innerHTML="",j())}function C(){_.backdrop.classList.toggle("is-hidden")}function j(){_.closeFilmModalBtn.removeEventListener("click",x),window.removeEventListener("keydown",M),_.backdrop.removeEventListener("click",S)}var T=o("18yUV");(new(0,T.default)).fetchGenres().then((function(t){i("genres",t)})),document.querySelector(".pagination ul").addEventListener("click",(function(t){refs.gallery.innerHTML="",console.log(t.target),t.target===document.querySelector(".arrow-left")&&(filmsApi.pageDecrement(),filmsApi.fetchTrendingFilms().then((function(e){console.log(e);var n=e.page,a=e.total_pages;console.log(t.target),renderHomeGallery(e.results),pagination(a,n),console.log(Number(document.querySelector(".numb").textContent))})));var e=document.querySelectorAll(".numb"),n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var r=l.value;t.target===r&&(filmsApi.setPage(Number(t.target.textContent)),filmsApi.fetchTrendingFilms().then((function(e){console.log(e);var n=e.page,a=e.total_pages;console.log(t.target),renderHomeGallery(e.results),pagination(a,n)})))}}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}t.target===document.querySelector(".arrow-right")&&(filmsApi.pageIncrement(),filmsApi.fetchTrendingFilms().then((function(t){console.log(t);var e=t.page,n=t.total_pages;renderHomeGallery(t.results),pagination(n,e)})))}));var q=o("jcFG7"),F=new(0,(T=o("18yUV")).default);F.fetchTrendingFilms().then((function(t){console.log(t);var e=t.page,n=t.total_pages;r(t.results),(0,q.default)(n,e)})),document.querySelector(".pagination ul").addEventListener("click",(function(t){l.gallery.innerHTML="",console.log(t.target),t.target===document.querySelector(".arrow-left")&&(F.pageDecrement(),F.fetchTrendingFilms().then((function(e){console.log(e);var n=e.page,a=e.total_pages;console.log(t.target),r(e.results),(0,q.default)(a,n),console.log(Number(document.querySelector(".numb").textContent))})));var e=document.querySelectorAll(".numb"),n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var s=i.value;t.target===s&&(F.setPage(Number(t.target.textContent)),F.fetchTrendingFilms().then((function(e){console.log(e);var n=e.page,a=e.total_pages;console.log(t.target),r(e.results),(0,q.default)(a,n)})))}}catch(t){a=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}t.target===document.querySelector(".arrow-right")&&(F.pageIncrement(),F.fetchTrendingFilms().then((function(t){console.log(t);var e=t.page,n=t.total_pages;r(t.results),(0,q.default)(n,e)})))}))}();
//# sourceMappingURL=index.2c0afb2b.js.map
