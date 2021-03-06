var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods);
  newTree.left = undefined;
  newTree.right = undefined;
  newTree.value = value;
  return newTree;
};  

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var nextTree, direction;
  if (!this.contains(value)) {
    this.value > value ? direction = 'left' : direction = 'right';

    if (this[direction]) {
      nextTree = this[direction];
      nextTree.insert(value);
    } else {
      this[direction] = BinarySearchTree(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value) {
    if (this.left) {
      return this.left.contains(value);
    }
    return false;
  } else {
    if (this.right) {
      return this.right.contains(value);
    }
    return false;
  }
};

binaryTreeMethods.depthFirstLog = function(fn) {
  fn(this.value);
  if (this.left) {
    this.left.depthFirstLog(fn);
  } else if (this.right) {
    this.right.depthFirstLog(fn);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
