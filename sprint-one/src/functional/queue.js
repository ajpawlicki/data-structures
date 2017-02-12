var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var begin = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
    end = index;
  };

  someInstance.dequeue = function() {
    if (end - begin > 0) {
      // debugger;
      // index--;
      var result = storage[begin];
      delete storage[begin];
      begin = begin + 1;
      // Shift keys in object down by 1
      // for (var i = 0; i < size; i++) {
      //   for (var key in storage) {
      //     storage[i] = storage[key];
      //   }
      // }
      return result;
    }
  };

  someInstance.size = function() {
    return end - begin;
  };

  return someInstance;
};
