const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(pos) {
    if(!pos || !Number.isInteger(pos) || typeof pos !== 'number' || pos > this.chain.length || pos <= 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.splice(0, this.chain.length).join('~~');
    return result;
  }
};

module.exports = {
  chainMaker
};
