var Stack = function() {
  var newStack = {
    length: 0
  };
  _.extend(newStack, stackMethods);
  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  size: function() {
    return this.length;
  },
  push: function(val) {
    this[this.length] = val;
    this.length++;
  },
  pop: function() {
    if (this.length > 0) {
      this.length--;
      return this[this.length];
    }
  }
};


