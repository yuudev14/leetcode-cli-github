class Nodes {
  val: number;
  next: Nodes | null;
  constructor(val: number | null = null, next: Nodes | null = null) {
    this.val = val === null ? -1 : val;
    this.next = next;
  }
}

class MyLinkedList {
  head: Nodes | null;
  tail: Nodes | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  get(index: number): number {
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (i === index) {
        return curr.val;
      }
      curr = curr.next!;
      i++;
    }
    return -1;
  }

  addAtHead(val: number): void {
    const newNode = new Nodes(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    const newNode = new Nodes(val);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);
    const newNode = new Nodes(val);
    let i = 0;
    let curr = this.head;

    while (i !== index - 1) {
      curr = curr!.next;
      i++;
    }
    newNode.next = curr!.next;
    curr!.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.head = this.head!.next;
    } else {
      let i = 0;
      let curr = this.head;

      while (i !== index - 1) {
        curr = curr!.next;
        i++;
      }

      curr!.next = curr!.next!.next;
      if (index === this.size - 1) {
        this.tail = curr;
      }
    }
    this.size--;
  }

  print() {
    let curr = this.head;
    let s = "";
    while (curr != null) {
      s += curr.val + "->";
      curr = curr.next!;
    }
    console.log(s);
  }
}