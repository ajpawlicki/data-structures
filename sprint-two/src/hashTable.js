

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._itemsStored = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var duplicate = false;
  if (bucket === undefined) {
    bucket = [];
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        duplicate = true;
      }
    }
  }
  if (!duplicate) {
    bucket.push([k, v]);
    this._itemsStored++;
  }
  this._storage.set(index, bucket);

  if (this._itemsStored / this._limit > .75) {
    this._limit *= 2;
    this.resize();
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._itemsStored--;
  if (this._itemsStored / this._limit < .25) {
    this._limit /= 2;
    this.resize();
  }
};

HashTable.prototype.resize = function() {
  var tempStorage = [];
  this._storage.each(function(bucket) {
    if (!bucket) { return; }
    bucket.forEach(function(tuple) {
      tempStorage.push([tuple[0], tuple[1]]);
    });
  });

  this._storage = LimitedArray(this._limit);
  this._itemsStored = 0;

  var context = this;
  tempStorage.forEach(function(tuple) {
    context.insert(tuple[0], tuple[1]);
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


