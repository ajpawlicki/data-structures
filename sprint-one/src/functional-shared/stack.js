var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};

  _.extend(newInstance, stackMethods);
  
  return newInstance;
};

var stackMethods = {
  size: function() {
    return 0;
  }
};