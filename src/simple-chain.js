const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length ||
      typeof position !== "number"
    ) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map(function (el) {
      if (el === null) {
        return "( null )";
      } else {
        return `( ${el} )`;
      }
    });
    result = result.join("~~");
    this.chain = [];
    return result;
  },
};
module.exports = chainMaker;
