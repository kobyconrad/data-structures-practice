class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
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
  }

  dequeue() {
    let smallestKey = 1000000000;
    for (let key in this.storage) {
      if (parseInt(key) < smallestKey) {
        smallestKey = key;
      }
    }
    let element = this.storage[smallestKey];
    delete this.storage[smallestKey];
    return element;
  }

  size() {
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
}
