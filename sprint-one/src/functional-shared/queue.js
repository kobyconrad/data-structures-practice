var extend = function(obj, methods) {
  for (let key in methods) {
    obj[key] = methods[key];
  }
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = {};
  obj.storage = {};

  extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    let largestKey = -1;
    if (Object.keys(this.storage).length === 0) {
      largestKey = "0";
    }
    for (let key in this.storage) {
      if (parseInt(key) > largestKey) {
        largestKey = key;
      }
    }
    let pushedKey = `${parseInt(largestKey) + 1}`;
    this.storage[pushedKey] = value;

    let accumulator = 0;
    for (let key in this.storage) {
      accumulator++;
    }

    return accumulator;
  },
  dequeue: function() {
    let smallestKey = 1000000000;
    for (let key in this.storage) {
      if (parseInt(key) < smallestKey) {
        smallestKey = key;
      }
    }
    let element = this.storage[smallestKey];
    delete this.storage[smallestKey];
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

//////// --------------------------- stop

// var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   // someInstance.enqueue = function(value) {
//   //   let largestKey = -1;
//   //   if (Object.keys(storage).length === 0) {
//   //     largestKey = "0";
//   //   }
//   //   for (let key in storage) {
//   //     if (parseInt(key) > largestKey) {
//   //       largestKey = key;
//   //     }
//   //   }
//   //   let pushedKey = `${parseInt(largestKey) + 1}`;
//   //   storage[pushedKey] = value;

//   //   let accumulator = 0;
//   //   for (let key in storage) {
//   //     accumulator++;
//   //   }
//   //   return accumulator;
//   // };

//   someInstance.dequeue = function() {
//     let smallestKey = 1000000000;
//     for (let key in storage) {
//       if (parseInt(key) < smallestKey) {
//         smallestKey = key;
//       }
//     }
//     let element = storage[smallestKey];
//     delete storage[smallestKey];
//     return element;
//   };

//   someInstance.size = function() {
//     let accumulator = [];
//     for (let key in storage) {
//       let push = true;
//       for (let i = 0; i < accumulator.length; i++) {
//         if (accumulator[i] === storage[key]) {
//           push = false;
//         }
//       }
//       if (push === true) {
//         accumulator.push(storage[key]);
//       }
//     }
//     return accumulator.length;
//   };

//   return someInstance;
