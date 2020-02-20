var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let obj = {};
  obj.storage = {};

  extend(obj, stackMethods);

  return obj;
};

var extend = function(obj, methods) {
  for (let key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push: function(value) {
    let pushedKey = `${Object.keys(this.storage).length}`;
    this.storage[pushedKey] = value;
    return Object.keys(this.storage).length;
  },
  pop: function() {
    let poppedKey = `${Object.keys(this.storage).length - 1}`;
    let element = this.storage[poppedKey];
    delete this.storage[poppedKey];
    return element;
  },
  size: function() {
    let accumulator = [];
    for (let key in this.storage) {
      let push = true;
      for (let i = 0; i < accumulator.length; i++) {
        if (accumulator[i] === this.storage[key]) {
          push = false;
        }
      }
      if (push === true) {
        accumulator.push(this.storage[key]);
      }
    }
    return accumulator.length;
  }
};
