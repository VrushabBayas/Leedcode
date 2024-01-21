function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const calculateNodeDepth = (node, count = 0) => {
  if (!node) return 0;
  console.log(node.value);
  return (count +=
    calculateNodeDepth(node.left, count + 1) +
    calculateNodeDepth(node.right, count + 1));
};
let tree = new Node(10);
tree.left = new Node(20);
tree.right = new Node(30);
tree.left.left = new Node(40);
tree.left.right = new Node(50);

let res = calculateNodeDepth(tree);
