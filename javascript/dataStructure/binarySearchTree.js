//implement a binary search tree

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.addNode(this.root, newNode)
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.addNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.addNode(node.right, newNode)
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node,key) {
    if (node === null) {
      return null
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key)
       return node
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key)
       return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // delete node w/ 2 children
      const temp = this.findMinNode(node.right)
      node.data = temp.data
      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }
  inOrder(node = this.root, result=[]) {
    if (node === null) {
      return result
    } else {
      this.inOrder(node.left, result)
      result.push(node.data)
      this.inOrder(node.right, result)
      return result
    }
  }
  contains(value, node = this.root) {
    if (value === node.data) {
      return true
    } else if (value <  node.data) {
      if (node.left === null) {
        return false
      } else {
        return this.contains(value, node.left)
      }
    } else {
      if (node.right === null) {
        return false
      } else {
        return this.contains(value, node.right)
      }
    }
  }
}

var bts = new BinarySearchTree();

bts.add(15);
bts.add(25);
bts.add(10);
bts.add(7);
bts.add(22);
bts.add(17);
bts.add(13);
bts.add(5);
bts.add(9);
bts.add(27);
// bts.inOrder(); // prints 5 7 9 10 13 15 17 22 25 27
bts.remove(5);
console.log(bts.inOrder()); // prints 7 9 10 13 15 17 22 25 27
console.log(bts.contains(15))
