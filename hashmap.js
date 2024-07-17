function HashMap() {

  const array = [];
  let capacity = 12;

  const Node = class {
    constructor(value = null, key = null, nextNode = null) {
      this.key = key;
      this.value = value;
      this.next = nextNode;
    }
  }

  const hash = (key) => {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
  
    hashCode = hashCode % capacity;
 
    return hashCode;
  }

  const set = (key, value) => {
    const index = hash(key);
    if (!array[index]) {

      array[index] = new Node(key, value);

    } else {
      insertOrUpdateNode(array[index], key, value);
    }
  }

  function insertOrUpdateNode(node, key, value) {
    if (node.key === key) {
      node.value = value;
      return;
    } else if (!node.next) {
      node.next = new Node(key, value);
      return;
    } else {
      insertOrUpdateNode(node.next, key, value);
    }
  }






}


const table1 = HashMap();