var Stack = function() {
  this.stackSize = 0;
};

var stack = new Stack();

Stack.prototype.size = function() {
  return this.stackSize;
};

Stack.prototype.push = function(val) {
  this[this.stackSize] = val;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
  }
  return this[this.stackSize];
};
