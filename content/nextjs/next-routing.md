---
title: Next.js 라우팅 구조
description: Next.js App Router 기반 라우팅 구조 이해
date: 2026-04-02
category: nextjs
slug: next-routing
thumbnail: /thumbnails/use-memo.png
---

## App Router란?

Next.js의 App Router는 파일 기반 라우팅 시스템이다.

## 구조

```txt
app/
  page.tsx        → /
  blog/
    page.tsx      → /blog
```

## 특징

- 파일 기반 라우팅
- 서버 컴포넌트 지원
- 레이아웃 분리 가능

## 정리

App Router는 기존보다 더 직관적인 구조를 제공한다.