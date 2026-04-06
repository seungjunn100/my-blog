---
title: useMemo 정리
description: useMemo의 개념과 언제 사용하면 좋은지 정리한 글
date: 2026-04-01
category: react
slug: use-memo
thumbnail: /thumbnails/use-memo.png
---

![browser rendering](/thumbnail/use-memo.png)

## useMemo란?

useMemo는 계산 결과를 메모이제이션하는 React Hook이다.

### 기본 문법

```tsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

### 정리

무조건 사용하는 것이 아니라,
계산 비용이 크거나 참조 안정성이 중요할 때 고려하는 것이 좋다.

이 단계에서는 아직 이 파일을 앱에서 읽지 않아도 괜찮아.  
일단 **파일 형식 자체를 먼저 정하는 것**이 중요해.

## B. `mockNotes.ts` 데이터도 이 형식에 맞춰 의식적으로 유지하기

예를 들면 지금 mock 데이터도 최대한 markdown 파일 구조랑 비슷하게 생각하면 좋아.

```ts
{
  title,
  description,
  category,
  date,
  slug,
  content
}
```

---

> 즉 나중에 markdown 파일을 읽어오면 결국 이 객체 모양으로 바뀌어 들어올 거라고 생각하면 돼.