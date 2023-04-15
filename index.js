const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
  const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
  
    return collection;
  }

const myMap = function(collection, callback){
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
        newArr.push(callback(newCollection[idx]));
    }

    return newArr;
}


const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
    const len = newCollection.length;
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }
  
    return undefined;
}

const myFilter = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
    const newArr = []
    for (let idx = 0; idx < newCollection.length; idx++) {
        if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
}

const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
}

const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
}


const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
}

const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }

const myValues = function(obj) {
    const values = [];
    for (let key in obj){
        values.push(obj[key]);
    }
    return values;
  
  }