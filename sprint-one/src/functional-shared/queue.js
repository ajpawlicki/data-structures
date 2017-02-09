var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {
    queueSize: 0
  };
  _.extend(newInstance, queueMethods);
  // console.log(newInstance);
  return newInstance;
};

var queueMethods = {
  size: function() {
    return this.queueSize;
  },
  enqueue: function(value) {
    this[this.queueSize] = value; // this is bound to newInstance
    this.queueSize++;
  },
  dequeue: function() {
    if (this.queueSize > 0) {
      this.queueSize--;

      var result = this[0];
      delete this[0];
      // Shift down each key in instance by 1
      for (var i = 0; i < this.queueSize; i++) {
        for (var key in this) {
          if (typeof this[key] !== 'function' && key !== 'queueSize') {
            this[i] = this[key];
          }
        }
      }
      return result;
    }
  }
};