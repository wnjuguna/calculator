'use strict';

class Stack {
  constructor(){
    this.stack = [];
  };

  push(item){
    this.stack.push(item);
    return;
  };

  pop(){
    return this.stack.pop();
  };

  peek(){
    if (this.stack.length > 0){
      return this.stack[this.stack.length-1];
    }
    return null;
  };

  length(){
    return this.stack.length;
  };
};

export {Stack};
