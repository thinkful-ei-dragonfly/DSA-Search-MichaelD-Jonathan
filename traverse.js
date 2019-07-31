const BST = require('./bst');

function  preOrder(tree){
  // recursive function -> will print
  // output from given tree traversal
  console.log(tree.key);
  if (tree.left) {
    preOrder(tree.left);
  }
  if (tree.right) {
    preOrder(tree.right);
  }
}

function inOrder(tree){
  // first things first
  // always check if this node has
  // a left
  if (tree.left) {
    inOrder(tree.left);
  }
  // recursive function -> will print
  // output from given tree traversal
  // then look for any lefts on the Right Root Child
  console.log(tree.key);
  if (tree.right){
    inOrder(tree.right);
  }
}
function postOrder(tree){

  if (tree.left) {
    postOrder(tree.left);
  }
  if (tree.right) {
    postOrder(tree.right);
  }

  console.log(tree.key);
}

function main(){
  const tree = new BST();
  tree.insert(25, 25);
  tree.insert(15, 15);
  tree.insert(50, 50);
  tree.insert(10, 10);
  tree.insert(24, 24);
  tree.insert(35, 35);
  tree.insert(70, 70);
  tree.insert(4, 4);
  tree.insert(12, 12);
  tree.insert(18, 18);
  tree.insert(31, 31);
  tree.insert(44, 44);
  tree.insert(66, 66);
  tree.insert(90, 90);
  tree.insert(20, 20);

  postOrder(tree);
}

main();