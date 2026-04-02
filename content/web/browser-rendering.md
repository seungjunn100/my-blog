---
title: 브라우저 렌더링 과정
description: 브라우저가 화면을 그리는 과정 정리
date: 2026-03-28
category: web
slug: browser-rendering
---

## 렌더링 과정

브라우저는 HTML, CSS를 파싱하여 화면을 그린다.

## 흐름

1. HTML 파싱 → DOM 생성
2. CSS 파싱 → CSSOM 생성
3. Render Tree 생성
4. Layout
5. Paint

## 왜 중요한가?

렌더링 과정을 이해하면 성능 최적화에 도움이 된다.

## 정리

렌더링 과정은 웹 성능의 핵심이다.