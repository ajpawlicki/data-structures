var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    var isFirstNode = true;
    for (var key in this) {
      if (Number.isInteger(parseInt(key))) {
        isFirstNode = false;    
      }
    }
    if (isFirstNode) {
      this.head = newNode;
    } else {
      var oldNode = this.tail;
      oldNode.next = newNode;
    }
    this[value] = newNode;
    //this.head = newNode;
    this.tail = newNode;
  };

  list.removeHead = function() {
    var firstNode = this.head;
    delete this[firstNode.value];
    this.head = firstNode.next;
    return firstNode.value;
  };

  list.contains = function(target) {
    for (var key in this) {
      if (key == target) {
        return true;
      }
    }
    return false;
  };
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
