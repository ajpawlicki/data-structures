var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var formerHead = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    }
    return formerHead.value;
  };

  list.contains = function(target) {
    // base case
    var checkNode = function(node) {
      if (node.value === target) {
        return true;
      } else if (!node.next) {
        return false;
      } else {
        // recursive case
        return checkNode(node.next);
      }
    };

    return checkNode(this.head);
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = this.head.previous;
    }
  };

  list.removeTail = function() {
    var formerTail = this.tail;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;    
    }
    return formerTail.value;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
