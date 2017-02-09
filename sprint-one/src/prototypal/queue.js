var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.queueSize = 0;
  console.log(someInstance);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
};

queueMethods.enqueue = function(val) {
  this[this.queueSize] = val;
  this.queueSize++;
};

queueMethods.dequeue = function() {
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
  }
  return result;
};