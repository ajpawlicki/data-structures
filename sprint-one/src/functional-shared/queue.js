var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  newQueue.index = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(value) {
    this[this.index] = value;
    this.length++;
    this.index++;
  },
  dequeue: function() {
    if (this.length > 0) {
      this.length--;
      var minIndex = Infinity;
      for (var key in this) {
        if (key < minIndex) {
          minIndex = key;
        }
      }
      var temp = this[minIndex];
      delete this[minIndex];
      return temp;
    }
  }
};