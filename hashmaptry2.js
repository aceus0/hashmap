function HashMap() {
  let array = [];
  let capacity = 12;

  const Node = class {
    constructor(value = null, key = null, nextNode = null) {
      this.key = key;
      this.value = value;
      this.next = nextNode;
    }
  };

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  };

  const set = (key, value) => {
    let index = hash(key) % capacity;
    if (array[index] == null) {
      array[index] = new Node(value, key);
    } else if (array[index].key == key) {
      array[index].value = value;
    } else {
      array[index] = setHelper(array[index], key, value);
    }
  };

  const setHelper = (node, key, value) => {
    if (node == null) {
      return (node = new Node(value, key));
    } else if (node.key == key) {
      node.value = value;
      return node;
    } else {
      node.next = setHelper(node.next, key, value);
      return node;
    }
  };

  const get = (key, node = array[hash(key) % capacity]) => {
    if (node == null) {
      return null;
    } else if (node.key == key) {
      return node.value;
    } else {
      return get(key, node.next);
    }
  };

  const has = (key, node = array[hash(key) % capacity]) => {
    if (node.key == key) {
      return true;
    } else if (node.next == null) {
      return false;
    } else {
      return has(key, node.next);
    }
  };

  const remove = (key, node = array[hash(key) % capacity], prev = null) => {
    if (node == null) {
      return false;
    } else if (node.key == key) {
      if (prev == null) {
        array[hash(key) % capacity] = node.next;
      } else {
        prev.next = node.next;
      }
      return true;
    } else {
      return remove(key, node.next, node);
    }
  };

  const length = () => {
    let keyNum = 0;

    for (let i = 0; i < capacity; i++) {
      let node = array[i];
      while (node != null) {
        keyNum++;
        node = node.next;
      }
    }

    return keyNum;
  };

  const clear = () => {
    array.length = 0;
  };

  const keys = () => {
    let keysList = [];

    for (let i = 0; i < capacity; i++) {
      let node = array[i];
      while (node != null) {
        keysList.push(node.key);
        node = node.next;
      }
    }

    return keysList;
  };

  const values = () => {
    let valuesList = [];

    for (let i = 0; i < capacity; i++) {
      let node = array[i];
      while (node != null) {
        valuesList.push(node.value);
        node = node.next;
      }
    }

    return valuesList;
  };

  const entries = () => {
    let entriesList = [];

    for (let i = 0; i < capacity; i++) {
      let node = array[i];
      while (node != null) {
        entriesList.push([node.key, node.value]);
        node = node.next;
      }
    }

    return entriesList;
  };

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}
const test = HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");
