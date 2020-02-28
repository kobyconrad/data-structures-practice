var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (!list.tail) {
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    list.head = null;
  };

  list.contains = function(target) {};

  list.showList = function(){
    console.log(list);
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
