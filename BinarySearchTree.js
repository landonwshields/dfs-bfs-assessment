const Node = require('./Node')
const Queue = require('./Queue')

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(data) {
		if(!this.root) {
			this.root = new Node(data)
		} else {
			let currentNode = this.root

			while(true) {
				if(data <= currentNode.data) {
					if(currentNode.left) {
						currentNode = currentNode.left
					} else {
						currentNode.left = new Node(data)
						break
					}
				} else {
					if(currentNode.right) {
						currentNode = currentNode.right
					} else {
						currentNode.right = new Node(data)
						break
					}
				}
			}
		}
	}

	dfs(cb, node=this.root) {
    // Write an algorithm using depth first search that will take in a callback function and call it while passing each nodes data starting down the left path
		// Expected order: '25, 15, 17, 197, 97, 9997'
		let current = node
		if(current === null){
			return false;
		}
		cb(current.data)
			this.dfs(cb, current.left)
			this.dfs(cb, current.right)
	}

	bfs(cb, node=this.root) {
    // Write an algorithm using breadth first search that takes in a callback function and calls it for every node
    // Expected order: 25, 15, 197, 17, 97, 9997
		const q = []
		q.push(node)
		while (q.length > 0){
			node = q.shift()
			cb (node.data)
			if (node.left)
				q.push(node.left)
				if(node.right)
				q.push(node.right)
		}
	}
}

module.exports = BinarySearchTree
