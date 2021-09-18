class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If we have an empty tree, insert new val at the root
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    // If not we find the right spot for the node
    let current = this.root;
    while (true){
    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val);
        return this;
      } else {
        current = current.left;
      }
    } else if(current.val < val){
      if(current.right === null) {
        current.right = new Node(val);
        return this;
      } else {
        current = current.right;
      }

    }
  }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // If the tree is empty insert at the root.
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // If not we find the right spot for the new val
    // recursively

    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val);
        return this;
      } else {
        this.insertRecursively(val, current = current.left);
      }
    } else if(current.val < val){
      if(current.right === null) {
        current.right = new Node(val);
        return this;
      } else {
        this.insertRecursively(val, current = current.right);
      }

    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let found = false;

    if(val === currentNode.val) return currentNode;

    while(currentNode && !found){
      if(val < currentNode.val){
        currentNode = currentNode.left;
      } else if (val > currentNode.val){
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    if(!found) return undefined
    return currentNode;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if(this.root === null) return undefined 

    if(val < currentNode.val) {
      if(currentNode.left === null) return undefined;
      return this.findRecursively(val, currentNode = currentNode.left);
    } else if (val > currentNode.val) {
      if(currentNode.right === null) return undefined;
      return this.findRecursively(val, currentNode = currentNode.right);
    }

    return currentNode;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, visitedNodes=[]) {
    if(this.root === null) return [];
  visitedNodes.push(current.val);
  if (current.left) this.dfsPreOrder(current.left, visitedNodes);
  if (current.right) this.dfsPreOrder(current.right, visitedNodes);

  return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root, visitedNodes=[]) {
    if(this.root === null) return [];
  if (current.left) this.dfsInOrder(current.left, visitedNodes);
  visitedNodes.push(current.val);
  if (current.right) this.dfsInOrder(current.right, visitedNodes);

  return visitedNodes;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root, visitedNodes=[]) {
    if(this.root === null) return [];
  if (current.left) this.dfsPostOrder(current.left, visitedNodes);
  if (current.right) this.dfsPostOrder(current.right, visitedNodes);
  visitedNodes.push(current.val);

  return visitedNodes;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let visited = [];

    queue.push(node);

    while(queue.length){
      node = queue.shift();
      visited.push(node.val);
      if(node.left){
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }

    return visited;

  }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
