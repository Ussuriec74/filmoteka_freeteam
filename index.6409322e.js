var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequired7c6=a);var n=a("i3bGI");var s=a("2nhTy");const l=(e,t)=>{try{const i=JSON.stringify(t);localStorage.setItem(e,i)}catch(e){console.error("Set state error: ",e.message)}},o=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("genres");console.log(o),a("8Yq9A");const r=document.querySelector(".team__list"),d=[{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"кто-то тут есть",name:"Maksym Kidanov",pos:"Developer",git:"https://github.com/Eldiwr",linked:"https://www.linkedin.com/in/maksym-kidanov-53b08b21a/",insta:"https://www.instagram.com/eldiwr/"}].map((({img:e,alt:t,name:i,pos:a,git:n,linked:s,insta:l})=>`<li class="team__item">                          \n                <img src="${e}" alt="${t}" width = 260> \n\n                <div class="team-div">\n                    <h3 class="team-div__employee">${i}</h3>\n                    <p class="team-div__position">${a}</p>\n                    <ul class="team-div__list">                \n                        <li class="team-div__item">\n                            <a class="team-div__link" href="${l}">\n                                <svg class="team-div__icon" width="20" height="20"> \n                                    <use href="/src/images/social-icons.svg#icon-instagram"></use> \n                                </svg>\n                            </a>\n                        </li>\n                        <li class="team-div__item">\n                            <a class="team-div__link" href="${n}">\n                                <svg class="team-div__icon" width="20" height="20"> \n                                    <use href="/src/images/social-icons.svg#icon-linkedin"></use> \n                                </svg>\n                            </a>\n                        </li>\n                        <li class="team-div__item">\n                            <a class="team-div__link" href="${s}">\n                                <svg class="team-div__icon" width="20" height="20"> \n                                    <use href="/src/images/social-icons.svg#icon-git"></use> \n                                </svg>\n                            </a>\n                        </li>                                  \n                    </ul>\n                </div>\n            </li>`)).join("");r.insertAdjacentHTML("beforeend",d),a("04jNI"),a("422V3");n=a("i3bGI");(new(0,n.default)).fetchGenres().then((e=>{l("genres",e)}));const m=new(0,n.default),c={searchForm:document.querySelector(".header-form"),searchButton:document.querySelector(".header-form__btn"),filmCard:document.querySelector(".gallery"),headerButtons:document.querySelector(".header__buttons"),gallery:document.querySelector(".gallery__list")};m.fetchTrendingFilms().then((e=>{var t;t=e.results,c.gallery.innerHTML=t.map((({genre_ids:e,id:t,title:i,poster_path:a,release_date:n,vote_average:s})=>`\n        <li class="gallery__item">\n            <a href="" class="gallery__link" >\n                <img class="gallery__image" src="${a?`https://image.tmdb.org/t/p/w500${a}`:"https://via.placeholder.com/150/360505/FFFFFF/?Text=No-poster"}" alt="Movie poster of ${i}" loading="lazy" data-id="${t}"/>\n                <div class="info">\n                    <h2 class="info-title">${i}</h2>\n\t\t\t\t\t\t\t\t\t\t<div class="meta-wrap"></div>\n                    <p class="info-item">${e.slice(0,2)} | ${n.slice(0,4)}<span class="content-rates">${s.toFixed(2)}</span></p>\n                </div>\n            </a>\n        </li>`)).join("")}));document.querySelector("ul");m.fetchTrendingFilms().then((e=>{console.log(e);const t=e.page,i=e.total_pages;(0,s.default)(i,t)}));
//# sourceMappingURL=index.6409322e.js.map
