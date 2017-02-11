var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null && this.tail === null) {
      var firstNode = Node(value);
      this.tail = firstNode;
      this.head = firstNode;
    } else {
      var newNode = Node(value);
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var formerHead = this.head.value;
    this.head = this.head.next;
    return formerHead;
  };

  list.contains = function(target) {
    // base case
    var checkNode = function(node) {
      if (node.value === target) {
        // debugger;
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return checkNode(node.next);
      }
    }

    return checkNode(this.head);

    // return _.contains(this.head.value, target);
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
