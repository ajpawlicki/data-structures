var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {
    queueSize: 0
  };
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {
  size: function() {
    return this.queueSize;
  },
  enqueue: function() {
    this.queueSize++;
  },
  dequeue: function() {
    if (this.queueSize > 0) {
      this.queueSize--;
    }
  }
};


