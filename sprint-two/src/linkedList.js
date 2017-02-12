var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
// <<<<<<< HEAD
//     var newNode = Node(value);
//     if (this.tail) {
//       var oldNode = this.tail;
//       oldNode.next = newNode;
//     }
//     if (!this.head) {
//       this.head = newNode;
//     }
//     this.tail = newNode;
//   };

//   list.removeHead = function() {
//     var firstNode = this.head;
//     this.head = firstNode.next;
//     return firstNode.value;
//   };

//   list.contains = function(target) {
//     var find = function(node) {
//       if (node.value === target) {
//         return true;
//       } else if (node.next) {
//         return find(node.next);
//       } else {
//         return false;
//       }
//     };

//     return find(this.head);
// =======
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
    };

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
