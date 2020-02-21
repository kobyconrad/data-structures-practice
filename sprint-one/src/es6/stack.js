class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    let pushedKey = `${Object.keys(this.storage).length}`;
    this.storage[pushedKey] = value;
    return Object.keys(this.storage).length;
  }

  pop() {
    let poppedKey = `${Object.keys(this.storage).length - 1}`;
    let element = this.storage[poppedKey];
    delete this.storage[poppedKey];
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
