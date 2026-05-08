---
title: 웹표준과 웹접근성
description: 웹표준과 웹접근성의 개념과 중요성, 그리고 WCAG 4가지 원칙까지 정리
date: 2026-05-08
category: web
slug: web-standards-a11y
thumbnail: /thumbnails/web-standards-a11y.png
---

![웹표준과 웹접근성](/thumbnails/web-standards-a11y.png)

## 웹표준(Web Standards)

웹표준은 웹사이트를 제작할 때 지켜야 하는 국제적인 기술 규약이다.

`W3C(World Wide Web Consortium)` 라는 국제 기구가 주도하며, 웹 개발의 기본 언어인 HTML, CSS, JavaScript의 기술과 규칙을 정의한다.

### 웹표준이 중요한 이유

#### 호환성

웹표준을 지키면 사용자의 운영체제나 브라우저와 관계없이 웹페이지를 일관되게 표현할 수 있다.

#### 유지보수

표준을 지킨 코드는 구조가 명확하기 때문에 다른 개발자도 쉽게 이해할 수 있다.  
그만큼 협업이 수월해지고 유지보수 비용도 줄어든다.

#### 검색 엔진 최적화(SEO)

검색 엔진은 웹페이지의 구조를 분석해 내용을 이해한다.  
웹표준을 지키면 콘텐츠 구조가 명확해져 검색 결과에서 더 잘 노출될 수 있다.

### HTML, CSS, JavaScript와 웹표준

#### HTML

HTML은 웹페이지의 구조와 의미를 담당한다.  
`<h1>` 태그는 제목을, `<p>` 태그는 문단을 나타내는 것처럼 각 태그는 고유한 의미를 가진다. 웹 표준에서는 이처럼 의미에 맞게 태그를 올바르게 사용하는 것을 권장한다.

#### CSS

CSS는 웹페이지의 시각적인 표현(디자인)을 담당한다.  
HTML이 구조만을 담당하고 CSS가 디자인을 담당하도록 역할을 분리하는 것을 권장한다. 이 덕분에 구조와 디자인을 독립적으로 관리할 수 있어 유지보수가 용이해진다.

#### JavaScript

JavaScript는 사용자와의 상호작용 등 동적인 기능을 담당한다.  
웹 표준은 JavaScript가 웹페이지의 구조(HTML)나 디자인(CSS)을 비표준적으로 조작하는 것을 지양하고, 동적인 기능 구현에만 집중하는 것을 권장한다.

```javascript
// 구조의 비표준적인 방식 - 의미를 가지지 않는 태그를 사용
const newElement = document.createElement('div');
newElement.innerHTML = '<b>Hello World</b>';
document.body.appendChild(newElement);

// 구조의 표준적인 방식 - 내용의 의미에 맞는 태그를 사용
const newElement = document.createElement('strong');
newElement.textContent = 'Hello World';
document.body.appendChild(newElement);

// 디자인의 비표준적인 방식 - HTML 요소에 직접 스타일 정보를 삽입
const myButton = document.getElementById('my-button');
myButton.style.color = 'red';
myButton.style.fontSize = '20px';

// 디자인의 표준적인 방식 - CSS 클래스 추가하고 실제 스타일 정보는 CSS 파일에 따로 저장
const myButton = document.getElementById('my-button');
myButton.classList.add('active-button');
```

## 웹접근성(Web Accessibility)

웹 접근성은 장애인이나 고령자 등 신체적, 환경적 조건에 관계없이 모든 사용자가 웹에 접근하고 이용할 수 있도록 보장하는 것을 의미한다.

- 신체적 조건 : 장애인, 고령자 등을 포함한 모든 사용자를 의미

- 환경적 조건 : 다양한 기기, 운영체제, 웹 브라우저, 네트워크 환경 등을 포함하는 것을 의미

### 웹 접근성이 중요한 이유

#### 모두가 사용할 수 있는 웹

웹이 가진 본질적인 가치는 누구나 어디서나 접근할 수 있는 공간을 설계하는 것이다.  
장애인이나 고령자 등 신체적, 환경적 조건에 관계없이 모든 사용자가 웹에 접근하고 이용할 수 있도록 보장하는 것이다. 마치 건물에 엘리베이터나 경사로를 설치해 누구나 쉽게 드나들 수 있게 하는 것과 같다.

#### 법률적 준수

많은 국가에서 웹 접근성 준수를 법적으로 의무화하고 있다.  
한국도 지능정보화기본법, 장애인차별금지법 등 법적 의무사항이 있다. 미국에서는 시각 장애인 연맹(NFB)이 대형 유통업체인 타겟(Target)을 상대로 웹 접근성 미달로 고소한 [사례](https://www.w3.org/WAI/business-case/archive/target-case-study)도 있다.

#### 사용자층 확대

웹 접근성을 개선하면 장애인이나 고령자 등 신체적·환경적 제약이 있는 사람은 물론, 모바일 사용자까지 더 폭넓은 이용자가 편리하게 웹사이트를 사용할 수 있다. 이는 곧 잠재 고객 확대와 비즈니스 확장에도 긍정적인 영향을 준다.

### 웹 콘텐츠 접근성 가이드라인

`웹 콘텐츠 접근성 가이드라인(WCAG - Web Content Accessibility Guidelines)`은 웹 콘텐츠의 접근성을 확보하기 위해 W3C에서 제공한 권고안이다. 이 지침의 목적은 장애인과 고령자를 포함한 모든 사용자가 웹 콘텐츠를 인식하고 이해하며, 원활히 상호작용할 수 있도록 보장하는 것이다.

`WCAG`는 4가지 주요 원칙을 바탕으로 구성되어 있다.  
이 4가지 원칙은 접근 가능한 웹사이트를 만들기 위한 필수적인 조건이다.

#### 인지 가능(Perceivable)

콘텐츠 정보를 사용자가 인지할 수 있는 방식으로 제공되어야 한다.

- 이미지 대체 텍스트 제공

- 비디오 자막 지원

- 충분한 색상(명도) 대비

#### 운용 가능(Operable)

사용자가 인터페이스를 운용할 수 있는 방식으로 제공되어야 한다.

- 마우스 없이 키보드만으로 조작 가능

- 콘텐츠를 읽거나 기능을 사용하기 위한 충분한 시간

- 탐색을 쉽게 하기 위한 명확한 내비게이션

#### 이해 가능(Understandable)

콘텐츠 정보와 인터페이스를 사용자가 이해할 수 있는 방식으로 제공되어야 한다.

- 읽고 이해하기 쉬운 텍스트 콘텐츠

- 일관되고 예측 가능한 웹페이지의 반응

- 오류 발생시 오류를 명확하게 알려주고 수정 방법 제공

#### 견고성(Robust)

콘텐츠는 다양한 환경에서도 안정적으로 동작해야 한다.

- 다양한 브라우저, 보조 기술, 장치에서도 안정적으로 작동

- HTML, CSS 등 웹 기술의 문법적 규칙을 준수