!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o("4Nugj");var a=o("4Nugj"),i=o("jcFG7"),c=o("18yUV"),u=o("bq49u"),s=new(0,c.default);function l(){s.fetchTrendingFilms().then(h)}function d(){s.fetchFilmsOnSearch().then(h)}l();var f=document.querySelector(".pagination ul");function m(e){if("LI"===e.target.nodeName){a.refs.gallery.innerHTML="";var t=document.querySelectorAll(".numb"),r=document.querySelector(".arrow-right"),n=document.querySelector(".arrow-left");e.target===n&&(s.pageDecrement(),null!==s.searchQuery&&""!==s.searchQuery?d():l());var o=!0,i=!1,c=void 0;try{for(var u,f=t[Symbol.iterator]();!(o=(u=f.next()).done);o=!0){var m=u.value;e.target===m&&(s.setPage(Number(e.target.textContent)),null!==s.searchQuery&&""!==s.searchQuery?d():l())}}catch(e){i=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(i)throw c}}e.target===r&&(s.pageIncrement(),null!==s.searchQuery&&""!==s.searchQuery?d():l())}}function h(e){var t=e.page,r=e.total_pages;(0,u.renderGallery)(e.results),(0,i.default)(r,t)}f.addEventListener("click",m),a.refs.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),s.resetPage(),s.query=e.target.elements.userSearchQuery.value.trim(),""===s.searchQuery||" "===s.searchQuery)return void a.refs.searchError.classList.remove("is-hidden");s.fetchFilmsOnSearch().then((function(e){if(0===e.total_results)return a.refs.searchError.classList.remove("is-hidden"),void f.removeEventListener("click",m);a.refs.searchError.classList.add("is-hidden"),d(),f.addEventListener("click",m)}))})),o("7F1pg"),o("gHeeA"),o("4xL4O"),o("j1lrD");var v,g=o("bpxeT"),p=o("dDDEV"),y=o("2TvXO"),b=(c=o("18yUV"),o("6D8Ko")),w=o("jzQFI"),L=(o("jzQFI"),w=o("jzQFI"),new(0,c.default)),T="",x="Add to watched",E="Add to queue",k="Remove from watched",S="Remove from queue",F={gallery:document.querySelector(".gallery"),backdrop:document.querySelector(".modal-backdrop"),closeFilmModalBtn:"",addToWatched:"",addToQueue:""};function Q(e){return q.apply(this,arguments)}function q(){return(q=e(g)(e(y).mark((function t(r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),v=r.target.dataset.id,"IMG"===r.target.nodeName){e.next=4;break}return e.abrupt("return");case 4:return W(),e.next=7,M(v);case 7:F.gallery.removeEventListener("click",Q),F.addToWatched.addEventListener("click",_),F.addToQueue.addEventListener("click",j);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(0,w.checkItemInStorage)("watchedFilms","queueFilms",[]),F.gallery.addEventListener("click",Q);var C,M=(C=e(g)(e(y).mark((function t(r){var n,o,a;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.fetchFilmById(r);case 3:return n=t.sent,t.next=6,n.genres.map((function(e){return e.name})).join(", ");case 6:return o=t.sent,a=e(p)({},n,{listOfGenders:o}),T=(0,b.filmModalMarkup)(a),F.backdrop.innerHTML=T,document.body.style.overflow="hidden",F.closeFilmModalBtn=document.querySelector("[data-modal-close]"),F.addToWatched=document.querySelector(".add-to-watched"),F.addToQueue=document.querySelector(".add-to-queue"),t.next=16,A(r);case 16:return t.next=18,H(r);case 18:return t.next=20,P();case 20:return F.closeFilmModalBtn.addEventListener("click",N),F.backdrop.addEventListener("click",O),window.addEventListener("keydown",D),t.abrupt("return",F.backdrop);case 26:t.prev=26,t.t0=t.catch(0),console.log(t.t0.message);case 29:case"end":return t.stop()}}),t,null,[[0,26]])}))),function(e){return C.apply(this,arguments)});function N(e){e.preventDefault(),F.gallery.addEventListener("click",Q),W(),F.backdrop.innerHTML="",document.body.style.overflow="",I()}function D(e){e.preventDefault(),"Escape"===e.code&&(F.gallery.addEventListener("click",Q),W(),F.backdrop.innerHTML="",document.body.style.overflow="",I())}function O(e){e.preventDefault(),e.currentTarget===e.target&&(F.gallery.addEventListener("click",Q),W(),F.backdrop.innerHTML="",document.body.style.overflow="",I())}function W(){F.backdrop.classList.toggle("is-hidden")}function I(){F.closeFilmModalBtn.removeEventListener("click",N),window.removeEventListener("keydown",D),F.backdrop.removeEventListener("click",O)}function _(e){e.preventDefault(),v=e.target.dataset.modalaction,null==localStorage.getItem("watchedFilms")&&(0,w.addToStorageWhenNull)("watchedFilms",v),(0,w.inStorageWatched)(v)?((0,w.removeFromStorage)("watchedFilms",v),F.addToWatched.textContent=x,F.addToWatched.classList.remove("is-in-storage")):((0,w.addToStorage)("watchedFilms",v),F.addToWatched.textContent=k,F.addToWatched.classList.add("is-in-storage"))}function j(e){e.preventDefault(),null==localStorage.getItem("queueFilms")&&(0,w.addToStorageWhenNull)("queueFilms",v),(0,w.inStorageQueue)(v)?((0,w.removeFromStorage)("queueFilms",v),F.addToQueue.textContent=E,F.addToQueue.classList.remove("is-in-storage")):((0,w.addToStorage)("queueFilms",v),F.addToQueue.textContent=S,F.addToQueue.classList.add("is-in-storage"))}function A(e){(0,w.inStorageWatched)(e)?(0,w.inStorageWatched)(e)&&(F.addToWatched.textContent=k):F.addToWatched.textContent=x}function H(e){(0,w.inStorageQueue)(e)?(0,w.inStorageQueue)(e)&&(F.addToQueue.textContent=S):F.addToQueue.textContent=E}function P(){F.addToWatched.textContent===x?F.addToWatched.classList.remove("is-in-storage"):F.addToWatched.classList.add("is-in-storage"),F.addToQueue.textContent===E?F.addToQueue.classList.remove("is-in-storage"):F.addToQueue.classList.add("is-in-storage")}g=o("bpxeT"),y=o("2TvXO"),c=o("18yUV");var U={};U=function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var u=void 0;if(!c&&u)return u(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[i]={exports:{}};t[i][0].call(l.exports,(function(e){return o(t[i][1][e]||e)}),l,l.exports,e,t,r,n)}return r[i].exports}for(var a=void 0,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createElement("div");return r.innerHTML=e.trim(),!0===t?r.children:r.firstChild},o=function(e,t){var r=e.children;return 1===r.length&&r[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};r.visible=a,r.create=function(e,t){var r=function(e,t){var r=n('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=r.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),c=o(a,"VIDEO"),u=o(a,"IFRAME");return!0===i&&r.classList.add("basicLightbox--img"),!0===c&&r.classList.add("basicLightbox--video"),!0===u&&r.classList.add("basicLightbox--iframe"),r}(e=function(e){var t="string"==typeof e,r=e instanceof HTMLElement==1;if(!1===t&&!1===r)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(n(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(r,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&r.addEventListener("click",(function(e){e.target===r&&i()}));var c={element:function(){return r},visible:function(){return a(r)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(r,(function(){if("function"==typeof e)return e(c)}))},close:i};return c}},{}]},{},[1])(1);var B,G,V=[],R=new(0,c.default),z={gallery:document.querySelector(".gallery"),watchTrailer:""};function X(){return(X=e(g)(e(y).mark((function t(r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"===r.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return B=r.target.dataset.id,e.next=5,K(B);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}z.gallery.addEventListener("click",(function(e){return X.apply(this,arguments)}));var K=function(){var t=e(g)(e(y).mark((function t(r){var n;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.fetchTrailerById(r);case 3:n=e.sent,V=[],n.results.forEach((function(e){if(e.name.includes("Official Trailer")){var t=e.key;V.push("https://www.youtube.com/embed/".concat(t)),G=V[0]}})),setTimeout((function(){z.watchTrailer=document.querySelector(".player"),z.watchTrailer.addEventListener("click",J)}),500),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();function J(){U.create("\n    <iframe src='".concat(G,'\'frameborder="0" allowfullscreen class="trailer_video"></iframe>')).show()}c=o("18yUV");var Y=o("9ekLB");(new(0,c.default)).fetchGenres().then((function(e){(0,Y.save)("genres",e.genres)}))}();
//# sourceMappingURL=index.0809c8e5.js.map
