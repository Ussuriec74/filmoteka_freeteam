export function inStorageWatched(id) {
    if (localStorage.getItem("watchedFilms") == null) {
        return false;
    }
   
    if ([...JSON.parse(localStorage.getItem("watchedFilms"))].includes(id)) {
        return true;
    }
        else return false;
}

export function inStorageQueue(id) {
    if (localStorage.getItem("queueFilms") == null) {
       return false;
    }

    if ([...JSON.parse(localStorage.getItem("queueFilms"))].includes(id)) {
        return true;
    }
        else return false;
}

const addToStorageWhenNull = (key, value) => {
    let currArray = [value];
    try {
        const stringOfData = JSON.stringify(currArray);
        localStorage.setItem(key, stringOfData);
    }   catch (error) {
        console.error('You have an (ADD TO LOCAL STORAGE) error when add your first film: ', error.message);
    }
}

const addToStorage = (key, value) => {
    let currArray = [...JSON.parse(localStorage.getItem(key))];
    
    currArray.push(value);
    
    
    try {
      const stringOfData = JSON.stringify(currArray);
      localStorage.setItem(key, stringOfData);
    } catch (error) {
      console.error('You have an (ADD TO LOCAL STORAGE) error: ', error.message);
    }
};

const removeFromStorage = (key, id) => {
    let currArray = [...JSON.parse(localStorage.getItem(key))];
  
    // if (localStorage.getItem(key) !== null) {
    //   currArray = [...JSON.parse(localStorage.getItem(key))];
    // }
    
    const item = currArray.indexOf(id);
    currArray.splice(item, 1);
  
    try {
      const stringOfData = JSON.stringify(currArray);
      localStorage.setItem(key, stringOfData);
    } catch (error) {
      console.error('You have a (WRITING TO LOCAL STORAGE) error after REMOVING: ', error.message);
    }
};

const checkItemInStorage = (key1, key2, value) => {
    if (!localStorage.getItem(key1)) {
        localStorage.setItem(key1, JSON.stringify(value));
    }
    if (!localStorage.getItem(key2)) {
        localStorage.setItem(key2, JSON.stringify(value));
    }
};

export {
    addToStorage,
    addToStorageWhenNull,
    removeFromStorage,
    checkItemInStorage,
};