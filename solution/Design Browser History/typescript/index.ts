class LinkedListNode {
  val: string;
  next: LinkedListNode | null;
  prev: LinkedListNode | null;
  constructor(
    val: string,
    prev: LinkedListNode | null = null,
    next: LinkedListNode | null = null
  ) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class BrowserHistory {
  curr: LinkedListNode;

  constructor(homepage: string) {
    this.curr = new LinkedListNode(homepage);
  }

  visit(url: string): void {
    this.curr.next = new LinkedListNode(url, this.curr, null);
    this.curr = this.curr.next;
  }

  back(steps: number): string {
    let i = 0;
    while (i < steps && this.curr.prev) {
      this.curr = this.curr.prev!;
      i++;
    }
    return this.curr.val;
  }

  forward(steps: number): string {
    let i = 0;
    while (i < steps && this.curr.next) {
      this.curr = this.curr.next!;
      i++;
    }
    return this.curr.val;
  }
}