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

  const get = (key) => {
    const index = hash(key);

    const check = (index) => {
      if (array[index] == key){
        return array[index].value;
      } else if (array[index].next == null)  {
        return null;
      } else {
        get(array[index].next);
      }  
    }

  }

  const has = (key) => {
    const index = hash(key);
    if (array[index] == key){
      return true
    } else if (array[index].next == null){
      return false
    } else {
      has(key);
    }
  }


  set(123)



}


const table1 = HashMap();