var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
};

var queue = new Queue();

Queue.prototype.size = function() {
  return this.queueSize;
};

Queue.prototype.enqueue = function(value) {
  this[this.queueSize] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
    var result = this[0];
    delete this[0];
    for (var key in this) {
      if (Number.isInteger(parseInt(key))) {
        var store = this[key];
        this[key - 1] = store;
        delete this[key];
      }
    }
    return result;
  }
};



