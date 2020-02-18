let Stack = function() {
  let someInstance = {};

  // Use an object with numeric keys to store values
  let storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let pushedKey = `${Object.keys(storage).length}`;
    storage[pushedKey] = value;
    return Object.keys(storage).length;
  };

  someInstance.pop = function() {
    let poppedKey = `${Object.keys(storage).length - 1}`;
    let element = storage[poppedKey];
    delete storage[poppedKey];
    return element;
  };

  someInstance.size = function() {
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
  };

  return someInstance;
};

// loop through storage
// if storage[key] doesn't exist in accumulator
// push in storage[key]
