'use strict';

import {Stack} from './stack.js';
//const {Stack} = require('./stack.js');

function toPostfix(infix){
  let buffer = [];
  const postfix = [];
  const stack = new Stack();
  let precedence = {
   '*': 3,
   '/': 2,
   '+': 1,
   '-': 0
  };

  buffer = infix.trim().split(" ");
  for (let i=0; i < buffer.length; i+=1){
    switch (buffer[i]){
      case '(':
        stack.push('(');
        break;

      case ')':
        while (stack.peek() != '('){
          postfix.push(stack.pop());
        };
        stack.pop();
        break;

      case '+':
        if (stack.peek() === '('){
          stack.push('+');
        } else if (stack.peek() === null){
          stack.push('+');
        } else if (precedence[stack.peek()] >= precedence['+']) {
          postfix.push(stack.pop());
          stack.push('+');
        };
        break; 

      case '-':
        if (stack.peek() === '('){
          stack.push('-');
        } else if (stack.peek() === null){
          stack.push('-');
        } else if (precedence[stack.peek()] >= precedence['-']){
          postfix.push(stack.pop());
          stack.push('-');
        };
        break;

      case '/':
        if (stack.peek() === '('){
          postfix.push('/');
        } else if (stack.peek() === null){
          stack.push('/');
        } else if (precedence[stack.peek()] >= precedence['/']){
          postfix.push(stack.pop());
          stack.push('/');
        };
        break;

      case '*':
        if (stack.peek() === '(' || stack.peek() === null){
          stack.push('*');
        } else {
          stack.push('*');
        };
        break;

      default:
        postfix.push(buffer[i]);
        break;
    };
  };

// pop remaining operators from stack
  while (stack.length() > 0){
    postfix.push(stack.pop());
  }

  return postfix;
};

function solvePostfix(infix){
  const postfix = toPostfix(infix);
  const stack = new Stack();
  let {num1, num2, res} = 0;
  for (let i=0; i<postfix.length; i+=1){
    switch (postfix[i]){
      case '*':
        res = stack.pop() * stack.pop(); 
        stack.push(res);
        break;
      case '+':
        res = stack.pop() + stack.pop();
        stack.push(res);
        break;
      case '-':
        num1 = stack.pop()
        num2 = stack.pop();
        res = num2 - num1;
        stack.push(res);
        break;
      case '/':
        num1 = stack.pop();
        num2 = stack.pop();
        res = num2 / num1;
        stack.push(res);
        break;
      default:
        stack.push(Number(postfix[i]));
        break;
    };
  };
  return stack.pop();
};

export {solvePostfix};

//console.log(solvePostfix('( 1 + 2 + 3 )  + 4 '));
