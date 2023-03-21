// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        const node = this.head;
        this.head = node.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (!last) {
            this.head = new Node(data);
        } else {
            const node = new Node(data);
            last.next = node;
        }
    }

    getAt(index) {
        if (index === 0) {
            return this.getFirst();
        }

        if (index === this.size() - 1) {
            return this.getLast();
        }

        if (index > this.size() - 1) {
            return null;
        }

        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;

            if (counter === index) {
                return node;
            }
        }
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.removeFirst();
            return;
        }

        if (index === this.size() - 1) {
            this.removeLast();
            return;
        }

        if (index > this.size() - 1) {
            return null;
        }

        const previous = this.getAt(index - 1);

        if (!previous) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        if (index === this.size() - 1 || index > this.size() - 1) {
            this.insertLast(data);
            return;
        }

        const previous = this.getAt(index - 1);
        const newNode = new Node(data, previous.next);

        previous.next = newNode;
    }

    forEach(fn) {
        let node = this.head;

        while (node) {
            fn(node);

            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;

            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };