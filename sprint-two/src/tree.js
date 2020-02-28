var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  // your code here
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = new Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  /* START SOLUTION */
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
  /* END SOLUTION */
};

//

// if obj.value === target, return true;
// else loop through the children
// call treeMethods.contians on the children;

// return answer;

/*
 * Complexity: What is the time complexity of the above functions?
 */

// collection of nodes
// parent node has a .value, and .children
//

// node1 = {value: 1, children: [{node2}, {node3}, {node4}]}

// nodeA = {value: A, children: [{nodeB}, {nodeC}, {nodeD}]}
