var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = treeMethods.insert;
  tree.contains = treeMethods.contains;
  tree.depthFirstLog = treeMethods.depthFirstLog;

  return tree;
};

treeMethods = {};

treeMethods.insert = function(value) {
  var childTree = new BinarySearchTree(value);

  // check to see if it's smaller or larger
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value);
    } else {
      this.left = childTree;
    }
  } else if (value > this.value) {
    if (this.right) {
      return this.right.insert(value);
    } else {
      this.right = childTree;
    }
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (target < this.value) {
    if (this.left && this.left.contains(target)) {
      return true;
    }
  } else if (target > this.value) {
    if (this.right && this.right.contains(target)) {
      return true;
    }
  }

  return false;
};

treeMethods.depthFirstLog = function(func) {
  func(this.value);

  if (this.left) {
    this.left.depthFirstLog(func);
  }

  if (this.right) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert function
// check to see if any children
// if no children
// Check to see if value is larger or smaller than parent
// if smaller, travel [0], if larger travel [1]
