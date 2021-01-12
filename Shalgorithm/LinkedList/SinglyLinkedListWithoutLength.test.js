class LinkedListNode {
  constructor(value) {
    this.data = value;
    this.nextNode = null;
  }
}

const getMiddleValue = array => array[Math.round(array.length / 2) - 1];

class SinglyLinkedListWithoutLength {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }


  getValueAtMiddle() {
    let paceMakerNode = this.head.nextNode;
    let currentNode = this.head;
    while (paceMakerNode && paceMakerNode.nextNode) {
      paceMakerNode = paceMakerNode.nextNode.nextNode;
      currentNode = currentNode.nextNode;
    }

    return currentNode.data;
  }
}

describe('SinglyLinkedListWithoutLength', () => {
  describe('append', () => {
    it('appends node to LinkedList Last', () => {
      const linkedList = new SinglyLinkedListWithoutLength();

      const value1 = 1;

      const value2 = 2;
      const node2 = new LinkedListNode(value2);

      const value3 = 3;
      const node3 = new LinkedListNode(value3);

      linkedList.append(value1);
      linkedList.append(value2);
      linkedList.append(value3);

      expect(linkedList.head.data).toEqual(value1);
      expect(linkedList.head.nextNode).toEqual({ ...node2, nextNode: node3 });
      expect(linkedList.head.nextNode.data).toEqual(value2);
      expect(linkedList.head.nextNode.nextNode).toEqual(node3);
    });
  });

  describe('getValueAtMiddle', () => {
    context('when SinglyLinkedList is [1]', () => {
      it('return 1', () => {
        const linkedList = new SinglyLinkedListWithoutLength();

        const array = [1];

        array.forEach(element => linkedList.append(element));

        const middleValue = getMiddleValue(array);

        expect(linkedList.getValueAtMiddle()).toEqual(middleValue);
      });
    });

    context('when SinglyLinkedList is [1, 2]', () => {
      it('return 2', () => {
        const linkedList = new SinglyLinkedListWithoutLength();

        const array = [1, 2];

        array.forEach(element => linkedList.append(element));

        const middleValue = getMiddleValue(array);

        expect(linkedList.getValueAtMiddle()).toEqual(middleValue);
      });
    });

    context('when SinglyLinkedList is [1, 2, 3]', () => {
      it('return 2', () => {
        const linkedList = new SinglyLinkedListWithoutLength();

        const array = [1, 2, 3];

        array.forEach(element => linkedList.append(element));

        const middleValue = getMiddleValue(array);

        expect(linkedList.getValueAtMiddle()).toEqual(middleValue);
      });
    });

    context('when SinglyLinkedList is [1, 2, 3, 4]', () => {
      it('return 2', () => {
        const linkedList = new SinglyLinkedListWithoutLength();

        const array = [1, 2, 3, 4];

        array.forEach(element => linkedList.append(element));

        const middleValue = getMiddleValue(array);

        expect(linkedList.getValueAtMiddle()).toEqual(middleValue);
      });
    });

    context('when SinglyLinkedList is [1, 2, 3, 4, 5]', () => {
      it('return 3', () => {
        const linkedList = new SinglyLinkedListWithoutLength();

        const array = [1, 2, 3, 4, 5];

        array.forEach(element => linkedList.append(element));

        const middleValue = getMiddleValue(array);

        expect(linkedList.getValueAtMiddle()).toEqual(middleValue);
      });
    });

    context('when SinglyLinkedList is [1, 2, 3, 4, 5, 6]', () => {
      it('return 3', () => {
        const linkedList = new SinglyLinkedListWithoutLength();

        const array = [1, 2, 3, 4, 5, 6];

        array.forEach(element => linkedList.append(element));

        const middleValue = getMiddleValue(array);

        expect(linkedList.getValueAtMiddle()).toEqual(middleValue);
      });
    });
  });
});

describe('getMiddleValue', () => {
  context('when array is [1, 2, 3]', () => {
    it('return 3', () => {
      const array = [1, 2, 3];

      expect(getMiddleValue(array)).toEqual(2);
    });
  });

  context('when array is [1, 2, 3, 4]', () => {
    it('return 3', () => {
      const array2 = [1, 2, 3, 4];
      expect(getMiddleValue(array2)).toEqual(2);
    });
  });
});
