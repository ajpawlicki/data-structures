

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key == node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] && this[toNode]) {
    return this[fromNode].edges.includes(toNode) && this[toNode].edges.includes(fromNode);
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { 
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index1 = this[fromNode].edges.indexOf(toNode);
  this[fromNode].edges.splice(index1, 1);
  var index2 = this[toNode].edges.indexOf(fromNode);
  this[toNode].edges.splice(index2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (Number.isInteger(parseInt(key))) {
      cb(parseInt(key));
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var GraphNode = function(value) {
  this.value = value;
  this.edges = [];
};
