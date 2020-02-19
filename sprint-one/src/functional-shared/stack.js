var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let storage = {};
  // extend(storage, stackMethods);

  extend(storage, stackMethods);

  return storage;
};

var extend = function(obj, methods) {
  for (let key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push: function(value) {
    // let storage = {};
    let pushedKey = `${Object.keys(storage).length}`;
    storage[pushedKey] = value;
    return Object.keys(storage).length;
  },
  pop: function() {
    // let storage = {};
    let poppedKey = `${Object.keys(storage).length - 1}`;
    let element = storage[poppedKey];
    delete storage[poppedKey];
    return element;
  },
  size: function() {
    // let storage = {};
    let accumulator = [];
    for (let key in storage) {
      let push = true;
      for (let i = 0; i < accumulator.length; i++) {
        if (accumulator[i] === storage[key]) {
          push = false;
        }
      }
      if (push === true) {
        accumulator.push(storage[key]);
      }
    }
    return accumulator.length;
  }
};
