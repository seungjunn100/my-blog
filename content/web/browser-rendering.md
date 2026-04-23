---
title: 브라우저 렌더링의 진행 과정
description: 브라우저가 HTML, CSS, JavaScript를 해석하고 화면에 그리기까지의 렌더링 과정
date: 2026-04-20
category: web
slug: browser-rendering
thumbnail: /thumbnails/browser-rendering.png
---

![브라우저 렌더링](/thumbnails/browser-rendering.png)

## 브라우저 렌더링이란

브라우저 렌더링은 사용자가 웹 페이지에 접속했을 때, 서버로부터 받은 HTML, CSS, JavaScript 등의 리소스를 해석하여 화면에 실제로 그려내는 과정이다.

브라우저 내부에서는 대략 아래 순서로 진행된다.

- HTML 파싱과 DOM 생성

- CSS 파싱과 CSSOM 생성

- Render Tree 생성

- Layout : 크기와 위치 계산

- Paint : 픽셀로 그리기

- Composite : 레이어 합성

즉, 브라우저 렌더링은 위와 같은 과정을 통해 사용자가 상호작용할 수 있는 시각적인 화면으로 변환하는 과정이다.

이러한 과정은 브라우저 내부의 핵심 구성 요소인 렌더링 엔진과 자바스크립트 엔진에 의해 수행된다.

### 렌더링 엔진

렌더링 엔진은 HTML, CSS를 해석해 실제 화면을 그리는 핵심 엔진이다.

렌더링 엔진이 수행하는 작업은 우리가 흔히 말하는 브라우저 렌더링 과정을 얘기한다.

- HTML 파싱과 DOM 생성

- CSS 파싱과 CSSOM 생성

- Render Tree 생성

- Layout : 크기와 위치 계산

- Paint : 픽셀로 그리기

- Composite : 레이어 합성

대표적인 렌더링 엔진

- Chrome, Edge : `Blink`

- Safari : `WebKit`

- Firefox : `Gecko`

### 자바스크립트 엔진

자바스크립트 엔진은 JavaScript 코드를 해석하고 실행하는 엔진이다.

자바스크립트 엔진은 단순 계산만 하는 것이 아니라, DOM API를 통해 문서를 조작할 수 있다. 예를 들어 JavaScript가 요소를 추가하거나 클래스명을 바꾸면 렌더링 결과도 달라진다.

그래서 브라우저 렌더링은 HTML/CSS만의 문제가 아니라, JavaScript 실행 타이밍과 DOM/CSSOM 변경 여부에도 큰 영향을 받는다.

대표적인 자바스크립트 엔진

- Chrome, Edge : `V8`

- Safari : `JavaScriptCore`

- Firefox : `SpiderMonkey`

## 브라우저 렌더링의 진행 과정

### HTML 파싱과 DOM 생성

브라우저는 서버로부터 HTML 문서를 받으면, 위에서 아래로 한 줄씩 읽으며 `DOM(Document Object Model)` 트리를 생성한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta ... />
    <link ... />
    <script src="script.js"></script>
  </head>
  <body>
    <p>Hello, <span>web performance</span> students</p>
    <div>
      <img src="..." alt="..." />
    </div>
  </body>
</html>
```

<p align="center">
  <img src="/images/dom-tree.png" alt="DOM Tree" />
  <br />
  <small>
    출처: <a href="https://hangem-study.readthedocs.io/en/latest/front_interview/browser-rendering/">Browser Rendering - Front Study</a>
  </small>
</p>

DOM은 HTML 문서의 계층적 구조를 표현하는 객체 모델로, 브라우저가 HTML로 작성된 여러 요소들을 JavaScript가 이해하고 조작할 수 있도록 변환시킨 객체이다.

DOM은 문서의 요소를 트리 구조로 표현하며, 각 노드(Node)는 HTML 태그, 속성, 텍스트를 나타낸다. 그리고 이 트리 구조를 DOM 트리 라고 부른다.

### CSS 파싱과 CSSOM 생성

브라우저는 HTML을 파싱하면서 `<link>`나 `<style>`을 만나면 CSS도 함께 읽는다. 그리고 CSS를 파일을 읽어 `CSSOM(CSS Object Model)` 트리를 생성한다.

```css
body { font-size: 16px; }
span { color: red; }
img { float: right; }
p { font-weight: bold; }
p span { display: none; }
```

<p align="center">
  <img src="/images/cssom-tree.png" alt="CSSOM Tree" />
  <br />
  <small>
    출처: <a href="https://hangem-study.readthedocs.io/en/latest/front_interview/browser-rendering/">Browser Rendering - Front Study</a>
  </small>
</p>

CSSOM은 브라우저가 CSS를 파싱하여 트리 구조로 표현한 객체 모델로, HTML 문서의 각 요소에 적용된 CSS 스타일 규칙을 나타내며, DOM과 결합해 화면에 표현될 준비를 한다.

### Render Tree 생성

DOM과 CSSOM이 준비되면 브라우저는 이를 결합해 Render 트리를 만든다. Render 트리는 실제로 화면에 그려질 노드들만 포함하는 트리다.

<p align="center">
  <img src="/images/render-tree.png" alt="Render Tree" />
  <br />
  <small>
    출처: <a href="https://hangem-study.readthedocs.io/en/latest/front_interview/browser-rendering/">Browser Rendering - Front Study</a>
  </small>
</p>

여기서 중요한 점은 DOM에 있다고 해서 무조건 Render 트리에 포함되지는 않는다. `<head>`나 `display: none` 같은 요소는 화면에 보이지 않으므로 Render 트리에 포함되지 않는다. 하지만 `visibility: hidden` 요소는 공간은 차지하지만 보이지 않는 상태이므로 Render 트리에 포함된다.

### Layout : 크기와 위치 계산

Render 트리가 만들어지면 브라우저는 각 요소의 크기와 위치를 계산하는 Layout 단계를 진행한다.

브라우저는 다음과 같은 정보를 계산한다.

- 요소의 너비와 높이

- 요소의 위치

- 부모/자식 관계에 따른 배치

- 박스 모델(margin, padding, border) 정보

- 텍스트 줄바꿈에 따른 크기 변화

화면에 요소를 그리려면 단순히 스타일만 알아서는 부족하다. 예를 들어 `width: 50%` 라는 값은 부모 요소 크기를 알아야 실제 픽셀 값이 결정된다. 또한 `flex`, `grid`, `position`, `margin`, `padding` 같은 속성들도 주변 요소와의 관계를 바탕으로 최종 배치가 정해진다.

그래서 Layout 단계는 단순 계산이 아니라 문서 전체의 공간 배치를 확정하는 중요한 과정이다.

### Paint : 픽셀로 그리기

Layout 단계가 끝나면 브라우저는 요소를 실제 픽셀로 그리는 Paint 단계를 진행한다.

이 단계에서는 다음과 같은 시각적 정보가 그려진다.

- 텍스트

- 색상

- 배경

- 테두리

- 그림자

- 이미지

즉, Layout이 `어디에 그릴지`를 정하는 단계라면, Paint는 `무엇을 어떻게 보이게 그릴지`를 처리하는 단계라고 볼 수 있다.

### Composite : 레이어 합성

현대 브라우저는 모든 요소를 한 번에 단순하게 그리지 않는다. 성능 최적화를 위해 여러 레이어로 나누고, 이를 합성하는 Composite 단계를 거친다.

예를 들어 다음과 같은 요소는 별도 레이어로 분리될 수 있다.

- transform

- opacity

- will-change

- position (고정 위치 요소)

- 일부 애니메이션 요소

Composite 단계에서는 이 레이어들을 GPU 등을 활용해 조합하여 최종 화면을 만든다.

Composite 단계가 중요한 이유는, 예를 들어 `top`, `left`를 바꾸면 Layout부터 다시 일어날 가능성이 크지만, `transform`, `opcity`는 경우에 따라 Layout과 Paint를 다시 하지 않고도 레이어 합성만으로 비교적 효율적으로 처리할 수 있기 때문이다.

그래서 보통 성능 관점에서 애니메이션은 `transform`, `opacity` 위주로 처리하는 것이 유리하다.

## JavaScript가 렌더링에 미치는 영향

JavaScript는 DOM과 CSSOM이 만들어지는 과정에도 영향을 줄 수 있다. 특히 브라우저가 HTML을 파싱하다가 `<script>` 태그를 만나면, 기본적으로 파싱을 멈추고 스크립트를 실행한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta ... />
    <link ... />
    <script src="script.js"></script> <!-- 파싱 중단 -->
  </head>
  <body>
    <p>Hello, <span>web performance</span> students</p>
    <div>
      <img src="..." alt="..." />
    </div>
  </body>
</html>
```

JavaScript가 실행될 때, DOM 트리가 완성되기 전에 스크립트가 DOM을 조작할 수 있게 된다. 하지만 HTML 구조 자체를 바꿀 수 있기 때문에, 브라우저 입장에서는 스크립트를 먼저 실행해봐야 다음 HTML이 어떻게 될지 알 수 없다.

그리고 스크립트 실행이 끝나야 파싱이 재개되므로, 스크립트가 무겁거나 네트워크 응답이 느리면 그만큼 화면 렌더링 전체가 지연된다. 이걸 해결할 수 있는 방법은 `defer`와 `async` 속성을 사용하는 것이다.

### 기본 스크립트

```js
<script src="script.js"></script>
```

![기본 스크립트 파싱](/images/parsing-default.png)

기본 스크립트는 동기적으로 로드하기 때문에, HTML을 순차적으로 파싱하다가 스크립트 파일을 만나면 파싱을 중단한다.

그리고 스크립트를 다운로드 하며, 다운로드가 완료되고 실행이 완료된 후에 HTML 파싱을 재개한다.

> 동기
> > 요청과 결과가 동시에 일어난다는 뜻으로, 요청을 보내면 작업이 끝날 때까지 기다렸다가 다음 작업을 수행한다.

### `async`

```js
<script async src="script.js"></script>
```

![async 속성 파싱](/images/parsing-async.png)

async 속성을 사용하면 스크립트를 비동기적으로 로드하기 때문에, HTML 파싱과 동시에 스크립트를 로드한다. 그리고 모든 스크립트가 로딩되는 즉시 스크립트를 실행한다.

실행 시점에는 HTML 파싱이 잠시 멈추고 실행이 완료된 후에 HTML 파싱을 재개한다.

여러 async 스크립트의 실행 순서는 보장되지 않는다. 그래서 주로 독립적인 스크립트인 광고, 분석 도구, 추적 코드 같은 스크립트에 적합하다.

> 비동기
> > 요청과 결과가 동시에 일어나지 않는다는 뜻으로, 요청을 보낸 후 결과를 기다리지 않고 바로 다음 작업을 수행한다.

### `defer`

```js
<script defer src="script.js"></script>
```

![defer 속성 파싱](/images/parsing-async.png)

defer 속성을 사용하면 스크립트를 비동기적으로 로드하되, HTML 파싱이 완료된 후 실행된다.

여러 defer 스크립트가 있어도 문서에 작성된 순서대로 실행되고, DOM 구성 이후 실행되므로 일반적으로 안전하다. 그래서 대부분의 앱 스크립트는 defer가 더 적합한 경우가 많다.

## Reflow와 Repaint

브라우저 렌더링은 초기 로딩 시 한 번만 일어나는 것이 아니다. 이후에도 JavaScript로 DOM이 변경되거나, 스타일이 바뀌거나, 브라우저 크기 변화로 인해 요소의 크기와 위치를 다시 계산해야 하는 경우 렌더링이 다시 발생할 수 있다.

브라우저는 이러한 변경이 발생했을 때 전체 화면을 처음부터 다시 그리는 것이 아니라, 필요한 범위에 한해 레이아웃 계산이나 다시 그리기 작업을 수행한다.

이처럼 이미 렌더링이 끝난 이후 다시 화면을 계산하고 그리는 과정에서 자주 나오는 개념이 Reflow와 Repaint다.

### Reflow

Reflow는 요소의 크기나 위치가 바뀌어 Layout을 다시 계산하는 과정이다.

예를 들어, 다음과 같은 경우 Reflow가 발생할 수 있다.

- DOM 추가, 삭제

- width, heigh, margin, padding 변경

- 폰트 크기 변경

- 브라우저 창 크기 변경

Reflow는 하나의 요소 변경이 주변 요소 배치에도 영향을 줄 수 있기 때문에 비교적 비용이 큰 작업이다.

### Repaint

Repaint는 요소의 크기나 위치 변화 없이, 시각적인 스타일만 다시 그리는 과정이다.

예를 들어, 다음과 같은 경우 Repaint가 발생할 수 있다.

- color 변경

- background-color 변경

- border-color 변경

- visibility 변경

Repaint는 Layout 계산이 필요 없는 경우가 많아서 Reflow보다는 비교적 가벼운 작업이다. 하지만 너무 자주 발생하면 성능에 좋지 않다.

## 렌더링 성능 최적화

최적화는 사용자 경험을 개선하는 핵심 요소로 빠르고 부드러운 웹 페이지를 만드는 데 중요한 역할을 한다.

### Reflow, Repaint 최소화

Reflow와 Repaint는 브라우저 렌더링에서 가장 큰 비용이 발생하는 대표적인 작업이다.

DOM을 자주 바꾸면 브라우저가 계속 다시 계산해야 한다. 그래서 여러 번 수정할 작업은 가능하면 한 번에 묶어서 처리하는 것이 좋다.

```js
// Bad
element.style.width = "100px";
element.style.height = "100px";

// Good
element.style.cssText = "width: 100px; height: 100px;";
```

`width`, `height`, `top`, `left`, `display` 같이 Layout에 영향을 주어 Reflow 발생 가능한 속성 대신 `transfrom`, `opacity`, `visibility` 를 사용하는 것이 비교적 성능에 유리하다.

```js
// Bad
element.style.left = "100px";

// Good
element.style.transform = "translateX(100px)";
```

### 이미지 최적화

이미지와 리소스는 렌더링 속도에 직접적인 영향을 준다. 특히 이미지 크기가 크거나 양이 많으면 Paint 단계에서 느려질 수 있다.

그리고 이미지 크기가 크면 다운로드 시간이 길어지고 이미지가 늦게 로드되면 Layout shift가 발생할 수도 있다.

> Layout shift
> > 사용자가 웹 페이지를 보고 있는 도중 화면상의 요소들이 갑자기 위치를 옮기거나 크기가 변하는 현상

이미지 크기를 줄이거나 적절한 이미지 포맷을 사용하는 것이 좋다.

- JPEG → 사진

- PNG → 투명 이미지

- WebP → 고효율 이미지 (권장)

그리고 이미지 크기를 명시하여 Layout shift를 방지할 수도 있다.

```html
<img src="image.jpg" width="300" height="200" />
```

또는 `Lazy Loading`을 적용하여 이미지를 화면에 보일 때만 로드하여 초기 로딩 속도를 개선할 수 있다.

```html
<img src="image.jpg" loading="lazy" />
```

### Layout Thrashing 방지

Layout Thrashing은 스타일을 변경한 뒤 레이아웃 값을 반복해서 읽으면서 브라우저가 Layout 계산을 여러 번 강제로 수행하게 되는 현상이다.

```js
const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.style.width = index + "px";     // 쓰기 (Layout 필요 상태)
  console.log(item.offsetWidth);       // 읽기 (Layout 강제 실행 가능)
});
```

예를 들어 위와 같은 반복문이 존재한다면 width가 변경되면 브라우저는 Layout 계산이 필요한 상태로 표시해둔다. 그런데 바로 offsetWidth를 읽으면, 브라우저는 정확한 값을 반환하기 위해 Layout 계산을 죽시 수행한다.

이 흐름이 반복문 안에서 계속 반복되면 Layout이 여러 번 강제로 실행되어 성능이 저하된다.

이런 현상을 해결하기 위해서 읽기(Read)와 쓰기(Write)를 분리하여 작업을 해주면 된다.

```js
const items = document.querySelectorAll(".item");
const widths = [];

// 1. 레이아웃 값 먼저 읽기
items.forEach((item) => {
  widths.push(item.offsetWidth);
});

// 2. 스타일 변경은 나중에 한 번에 처리
items.forEach((item, index) => {
  item.style.width = widths[index] + 20 + "px";
});
```

이처럼 Layout 값 조회와 스타일 변경을 분리하면, 브라우저가 Layout 계산을 여러 번 강제로 수행하는 상황을 줄여 Layout Thrashing을 방지할 수 있다.