var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      // debugger;
      size--;
      var result = storage[0];
      delete storage[0];
      // Shift keys in object down by 1
      for (var i = 0; i < size; i++) {
        for (var key in storage) {
          storage[i] = storage[key];
        }
      }
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
