var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.tail) {
      var oldNode = this.tail;
      oldNode.next = newNode;
    }
    if (!this.head) {
      this.head = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    var firstNode = this.head;
    this.head = firstNode.next;
    return firstNode.value;
  };

  list.contains = function(target) {
    var find = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return find(node.next);
      } else {
        return false;
      }
    };

    return find(this.head);
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
