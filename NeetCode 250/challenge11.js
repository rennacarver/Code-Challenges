class MinStack {
  constructor() {
    this.stack = []
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val)
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop()
  }

  /**
   * @return {number}
   */
  top() {
    return [...this.stack].pop()
  }

  /**
   * @return {number}
   */
  getMin() {
    return Math.min(...this.stack)
  }
}
