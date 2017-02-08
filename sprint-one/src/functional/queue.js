var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    size++;
    index++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
      var smallestKey = Infinity;
      for (var key in storage) {
        if (key < smallestKey) { smallestKey = key; }
      }
      var temp = storage[smallestKey];
      delete storage[smallestKey];
      return temp;
    }
    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
