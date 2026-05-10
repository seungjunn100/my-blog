---
title: 웹접근성을 위한 WAI-ARIA
description: WAI-ARIA의 개념부터 역할(role), 속성(property), 상태(state)와 실무에서 올바르게 사용하는 방법까지 정리
date: 2026-05-09
category: web
slug: wai-aria
thumbnail: /thumbnails/wai-aria.png
---

![웹접근성을 위한 WAI-ARIA](/thumbnails/wai-aria.png)

## WAI-ARIA란

`WAI-ARIA(Web Accessibility Initiative - Accessible Rich Internet Applications)`는 웹 콘텐츠의 접근성을 높이기 위해 W3C WAI에서 개발한 기술이다. 

웹이 단순한 문서 연결을 넘어 복잡한 사용자 경험(UX)을 제공하는 리치 인터넷 애플리케이션(RIA) 시대로 발전하면서 등장했다.

초기 웹은 정적이었으나, 현대 웹에서는 JavaScript와 Ajax 같은 기술로 웹 페이지가 동적으로 변하고 다양한 UI 컴포넌트가 등장하면서 기존 HTML만으로는 그 의미를 보조 기술(스크린 리더 등)에 정확히 전달하기 어려워졌다. 

예를 들어 `<div>`나 `<span>` 태그로 만든 컴포넌트의 기능과 상태를 보조 기술이 파악할 수 없는 문제가 발생했다.

WAI-ARIA는 이러한 문제를 해결하기 위해 `역할(Role)`, `속성(Property)`, `상태(State)` 정보를 마크업에 추가하여 웹의 구조와 동작을 보조 기술이 올바르게 이해할 수 있도록 돕는다.

### WAI-ARIA의 동작 원리

WAI-ARIA는 유저 에이전트와 보조 기술 사이에서 정보를 전달하는 역할을 한다.

> 유저 에이전트(User Agent)
> > 유저 에이전트는 웹 서버와 통신하여 웹 콘텐츠를 요청하고 처리하는 주체를 의미하며, 일반적으로는 웹 브라우저를 뜻한다.

1. 개발자가 HTML DOM 요소에 ARIA 속성을 추가한다.

2. 유저 에이전트는 이를 해석하여 `접근성 트리(Accessibility Tree)`를 생성한다.

   이 접근성 트리는 웹 콘텐츠의 구조, 역할, 상태에 대한 정보를 담고 있다.

3. 생성된 정보는 운영체제의 접근성 API를 통해 외부로 전달된다.

4. 스크린 리더와 같은 보조 기술은 이 정보를 기반으로 사용자에게 콘텐츠를 전달한다.

## WAI-ARIA의 세 가지 구성 요소

### 역할(Role)

요소가 어떤 역할을 하는지 정의한다.  
이는 해당 요소가 어떤 종류의 UI 컴포넌트인지 또는 페이지의 어느 영역인지 나타낸다.

```html
<!-- 해당 요소가 버튼 기능을 수행 -->
<div role="button">버튼</div>

<!-- <nav> 내비게이션 영역 -->
<div role="navigation"></div>
```

### 속성(Property)

요소의 특성이나 정보를 설명한다.  
이는 콘텐츠의 상태나 특성을 보조 기술에 전달하는데 사용된다.

```html
<!-- 해당 요소에 대한 설명 텍스트 제공 -->
<button aria-label="메뉴 열기"></button>

<!-- 해당 요소가 필수 항목임을 알수 있도록 제공 -->
<input aria-required="true" />
```

### 상태(State)

요소의 현재 상태를 나타낸다.  
속성과 유사하지만 상태는 사용자의 상호작용에 따라 동적으로 변하는 값이다.

```html
<!-- 확장 가능한 영역이 현재 펼쳐져 있음 -->
<button aria-expanded="true"></button>

<!-- 체크박스가 선택되어 있음 -->
<input type="checkbox" aria-checked="true" />
```

## WAI-ARIA 작성 규칙

### HTML의 시맨틱 요소 우선 사용

시맨틱 요소들은 기본적으로 의미와 기능을 제공할 수 있어 접근성을 가지고 있다.  
굳이 ARIA를 사용할 필요가 없다.

#### 시맨틱 요소

```html
<header>  <!-- role="header" -->
<nav>     <!-- role="navigation" -->
<button>  <!-- role="button" -->
```

#### 불필요한 ARIA 사용

```html
<span role="button">버튼</span>
```

ARIA는 보완용이지, 대체용이 아니다.

### HTML 요소의 기능 변경 제한

모든 HTML 요소에 ARIA 속성을 추가하거나 기존의 의미를 변강하는건 좋지 않다.

```html
<img src="./src/images/photo.jpg" alt="photo" role="button" />
```

이미지 이면서 버튼 역할을 할 수 없으며, 요소의 의미론적 충돌로 인해 보조 기술 사용자들은 혼란스러울 수 있다.

### 키보드 접근성 보장

사용자와 상호 작용이 필요한 대화형 UI의 경우 키보드로도 접근 및 사용이 가능하도록 제공해야 한다. 

`role`은 오직 역할만 붙여줄 뿐, 기능적으로는 동작하지 않는다.

기본적으로 키보드로 접근할 수 없는 HTML 요소의 경우 `tabindex=""` 속성을 사용하여 키보드로 접근이 가능하도록 할 수 있어야 하며, 이벤트 처리까지 직접 구현해야 한다.

```html
<span role="button" tabindex="0">버튼</span>
```

```javascript
// role="button"
var roleButton = document.querySelector('[role="button"]');

// keyup 이벤트 핸들러 함수
function keyUpHandler(event) {
  if (event.key === 'Enter' || event.key == 'Space' || event.key == 'Spacebar' ||event.keyCode === 13 || event.keyCode === 32) {
  // Enter 키 또는 Spacebar 키가 눌렸을 때 실행할 작업
  }
}

// role="button"으로 지정된 요소에 keyup 이벤트 리스너 추가
roleButton.addEventListener('keyup', keyUpHandler);
```

### 숨김 처리 주의

ARIA를 사용하거나 CSS를 사용해서 숨김 처리를 하면 접근성이 차단될 수 있다.

```css
display: none;
visibility: hidden;
```

위와 같은 스타일 속성의 경우, 보조 기술뿐만 아니라 모든 사용자에게 숨겨진다.

```html
<div aria-hidden="true">장식 요소</div>
```

위와 같은 ARIA의 경우 사용자에게 보여지지만 보조 기술에서는 해당 요소를 숨긴다.

### 모든 상호작용 요소에 접근 가능한 이름을 부여

상호작용 가능한 모든 요소는 접근 가능한 이름을 가져야 한다.

#### 가장 표준적인 `<label>` 사용

```html
<label for="user-name">이름</label>
<input type="text" id="user-name" />
```

#### `aria-labelledby` 사용

```html
<h2 id="billing-address">결제 주소</h2>
<input type="text" aria-labelledby="billing-address" />

<span id="first-name">성</span>
<span id="last-name">이름</span>
<input type="text" aria-labelledby="first-name last-name" />
```

#### `aria-label` 사용

```html
<button type="button" aria-label="닫기"> X </button>
```

---

`WAI-ARIA`는 접근성을 높이는 데 도움이 되지만, 잘못 사용하면 오히려 혼란을 줄 수 있다.

따라서 HTML 시맨틱 요소를 우선 사용하고, 필요한 경우에만 보완적으로 사용하는 것이 중요하다. 이를 통해 보조 기술 사용자도 보다 자연스럽게 웹을 이용할 수 있다.