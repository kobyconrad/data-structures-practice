var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let largestKey = -1;
    if (Object.keys(storage).length === 0) {
      largestKey = "0";
    }
    for (let key in storage) {
      if (parseInt(key) > largestKey) {
        largestKey = key;
      }
    }
    let pushedKey = `${parseInt(largestKey) + 1}`;
    storage[pushedKey] = value;

    let accumulator = 0;
    for (let key in storage) {
      accumulator++;
    }
    return accumulator;
  };

  someInstance.dequeue = function() {
    let smallestKey = 1000000000;
    for (let key in storage) {
      if (parseInt(key) < smallestKey) {
        smallestKey = key;
      }
    }
    let element = storage[smallestKey];
    delete storage[smallestKey];
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
