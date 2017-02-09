var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {
    stackSize: 0
  };

  _.extend(newInstance, stackMethods);

  return newInstance;
};

var stackMethods = {
  size: function() {
    return this.stackSize;
  },
  push: function() {
    this.stackSize++;
  },
  pop: function() {
    if (this.stackSize > 0) {
      this.stackSize--;
    }
  }
};