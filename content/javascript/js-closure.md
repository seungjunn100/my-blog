---
title: 클로저(Closure) 정리
description: 자바스크립트 클로저 개념 이해
date: 2026-04-01
category: javascript
slug: js-closure
---

## 클로저란?

클로저는 함수가 선언될 당시의 외부 변수를 기억하는 개념이다.

## 예시

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2