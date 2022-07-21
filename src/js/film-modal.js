import FilmsApiService from "./fetch-api";
import { filmModalMarkup } from "./film-modal-markup";

const filmsApiService = new FilmsApiService();
let id = null;
let markup = "";
const ADD_TO_WATCHED = 'Add to watched';
const ADD_TO_QUEUE = 'Add to queue';
const REMOVE_FROM_WATCHED = 'Remove from watched';
const REMOVE_FROM_QUEUE = 'Remove from queue';

const refs = {
    gallery: document.querySelector(".gallery"),
    backdrop: document.querySelector(".modal-backdrop"),
    closeFilmModalBtn: "",
    addToWatched: "",
    addToQueue: "",
}

// localStorage.clear();
// localStorage.removeItem("KEY_STORAGE_WATCHED");
// localStorage.removeItem("KEY_STORAGE_QUEUE");
refs.gallery.addEventListener('click', onOpenFilmModal);

function onOpenFilmModal(e) {
    e.preventDefault();
    id = e.target.dataset.id;
    getFilmModal(id);
        
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    
    toggleModal();
    console.log(refs.addToWatched);
    
}

const getFilmModal = async (filmID) => {
    
    try {

        const data = await filmsApiService.fetchFilmById(filmID);
        const listOfGenders = await data.genres.map(genre => genre.name).join(', ');
        const filmData = {...data, listOfGenders};
        // console.log(filmData);
        markup = filmModalMarkup(filmData);
        refs.backdrop.innerHTML = markup;
        getRefsOfBtns();
        
        onWatchedButtonTextWhenOpenModal(filmID);
        onQueueButtonTextWhenOpenModal(filmID);
        determineButtonStateWhenOpenModal();
        
        refs.closeFilmModalBtn.addEventListener('click', onCloseFilmModal);
        refs.backdrop.addEventListener('click', onBackdropClose);
        window.addEventListener('keydown', onEscapeClose);
        console.log(refs.addToWatched);
        refs.addToWatched.addEventListener('click', onAddToWatchedClick(filmID));
        refs.addToQueue.addEventListener('click', onAddToQueueClick(filmID));
        return refs.backdrop;
    }

    catch (error) {
        console.log(error.message);
    }
}

function getRefsOfBtns() {
    refs.closeFilmModalBtn = document.querySelector(".modal__close");
    refs.addToWatched = document.querySelector(".add-to-watched");
    refs.addToQueue = document.querySelector(".add-to-queue");
    
    return refs;
}

function onCloseFilmModal(e) {
    e.preventDefault();
    toggleModal();
    refs.backdrop.innerHTML = "";
    console.log(refs.backdrop);
    removeAllEventListeners();
}

function onEscapeClose(e) {
    e.preventDefault();
    if (e.code === 'Escape') {
        toggleModal();
        refs.backdrop.innerHTML = "";
        removeAllEventListeners();
    }
}

function onBackdropClose(e) {
    e.preventDefault();
    if (e.currentTarget === e.target) {
        toggleModal();
        refs.backdrop.innerHTML = "";
        removeAllEventListeners();
    }
}

function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
}

function removeAllEventListeners() {
    refs.closeFilmModalBtn.removeEventListener('click', onCloseFilmModal);
    window.removeEventListener('keydown', onEscapeClose);
    refs.backdrop.removeEventListener('click', onBackdropClose);
}

// localStorage.setItem("KEY_STORAGE_WATCHED", "[]");
// localStorage.setItem("KEY_STORAGE_QUEUE", "[]");

function inStorageWatched(id) {
    if (localStorage.getItem("KEY_STORAGE_WATCHED") == null) {
       return false;
    }

    if (JSON.parse(localStorage.getItem("KEY_STORAGE_WATCHED").includes(id))) {
        return true;
    }
    
    else {
        return false;
    }
}

function inStorageQueue(id) {
    if (localStorage.getItem("KEY_STORAGE_QUEUE") == null) {
       return false;
    }

    if (JSON.parse(localStorage.getItem("KEY_STORAGE_QUEUE").includes(id))) {
        return true;
    }

    else return false;
}



// пишемо текст кнопок, коли модалка відкривається

function onWatchedButtonTextWhenOpenModal(id) {
    
    if(!inStorageWatched(id)) {
        refs.addToWatched.textContent = ADD_TO_WATCHED;
        return;
    }

    if(inStorageWatched(id)) {
        refs.addToWatched.textContent = REMOVE_FROM_WATCHED;
    }
}

function onQueueButtonTextWhenOpenModal(id) {
    
    if(!inStorageQueue(id)) {
        refs.addToQueue.textContent = ADD_TO_QUEUE;
        return;
    }

    if(inStorageQueue(id)) {
        refs.addToQueue.textContent = REMOVE_FROM_QUEUE;
    }
}

// встановлюємо стан активності кнопок при відкритті модалки 
// з урахуванням localStorage

function determineButtonStateWhenOpenModal() {

    if (refs.addToWatched.textContent === ADD_TO_WATCHED) {
        refs.addToWatched.classList.remove('is-in-storage');
      } else {
        refs.addToWatched.classList.add('is-in-storage');
      }
    
      if (refs.addToQueue.textContent === ADD_TO_QUEUE) {
        refs.addToQueue.classList.remove('is-in-storage');
      } else {
        refs.addToQueue.classList.add('is-in-storage');
      }
}

function onAddToWatchedClick(id) {
    
    if (localStorage.getItem("KEY_STORAGE_WATCHED") == null) {

        localStorage.setItem("KEY_STORAGE_WATCHED", '[]');
    }

    if (!inStorageWatched(id)) {

        // змінюємо назву та стан активності кнопок після кліку
        refs.addToWatched.textContent = REMOVE_FROM_WATCHED;
        refs.addToWatched.classList.add('is-in-storage');
        console.log(id);

        // отримуємо дані з localStorage, розпарсуємо дані у масив (watchedArray)
        // додаємо новий id до нього та записуємо до localStorage
        const watchedArray = JSON.parse(localStorage.getItem("KEY_STORAGE_WATCHED"));
        console.log(watchedArray);
        console.log(typeof(watchedArray));
        const watchedArrayAddToData = watchedArray.push(id);
        console.log(watchedArrayAddToData);
        localStorage.setItem("KEY_STORAGE_WATCHED", JSON.stringify(watchedArrayAddToData));
        
    } else {
        
        // змінюємо назву та стан активності кнопок після кліку
        refs.addToWatched.textContent = ADD_TO_WATCHED;
        refs.addToWatched.classList.remove('is-in-storage');

        // отримуємо дані з localStorage, розпарсуємо дані у масив (watchedArray)
        // видаляємо наш id з масиву та записуємо дані до localStorage
        const watchedArray = JSON.parse(localStorage.getItem("KEY_STORAGE_WATCHED"));
        const watchedArrayRemoveData = watchedArray.splice(watchedArray.indexOf(id), 1);
        localStorage.setItem("KEY_STORAGE_WATCHED", JSON.stringify(watchedArrayRemoveData));
    }
}

function onAddToQueueClick(id) {

    if (localStorage.getItem("KEY_STORAGE_QUEUE") == null) {

        localStorage.setItem("KEY_STORAGE_WATCHED", "[]");
    }
    
    if (!inStorageQueue(id)) {

        // змінюємо назву та стан активності кнопок після кліку
        refs.addToQueue.textContent = REMOVE_FROM_QUEUE;
        refs.addToQueue.classList.add('is-in-storage');

        // отримуємо дані з localStorage, розпарсуємо дані у масив (queueArray)
        // додаємо новий id до нього та записуємо до localStorage
        let queueArray = JSON.parse(localStorage.getItem("KEY_STORAGE_QUEUE"));
        console.log(queueArray);

        const queueArrayAddToData = queueArray.push(id);
        console.log(queueArrayAddToData);
        console.log(JSON.stringify(queueArrayAddToData));
        localStorage.setItem("KEY_STORAGE_QUEUE", JSON.stringify(queueArrayAddToData));
        
    } else {
        
        // змінюємо назву та стан активності кнопок після кліку
        refs.addToQueue.textContent = ADD_TO_QUEUE;
        refs.addToQueue.classList.remove('is-in-storage');

        // отримуємо дані з localStorage, розпарсуємо дані у масив (queueArray)
        // видаляємо наш id з масиву та записуємо дані до localStorage
        const queueArray = JSON.parse(localStorage.getItem("KEY_STORAGE_QUEUE"));
        const queueArrayRemoveData = queueArray.splice(queueArray.indexOf(id), 1);
        localStorage.setItem("KEY_STORAGE_QUEUE", JSON.stringify(queueArrayRemoveData));
    }
}