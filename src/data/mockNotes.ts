import { NoteItem } from "../types/note";

export const mockNotes: NoteItem[] = [
  {
    title: '클로저(Closure) 개념 정리',
    description: '클로저의 개념과 동작 원리, 활용 예시를 정리한 글',
    category: 'javascript',
    date: '2026-03-31',
    slug: 'closure-basics',
  },
  {
    title: '배열 메서드 map / filter / reduce 정리',
    description: '자주 사용하는 배열 메서드의 차이와 활용 방법을 정리한 글',
    category: 'javascript',
    date: '2026-03-29',
    slug: 'array-methods-map-filter-reduce',
  },
  {
    title: 'TypeScript 기본 타입 정리',
    description: 'string, number, boolean, array 등 기본 타입을 정리한 글',
    category: 'typescript',
    date: '2026-03-28',
    slug: 'typescript-basic-types',
  },
  {
    title: 'React 컴포넌트 분리 기준',
    description: '컴포넌트를 어떤 기준으로 나누면 좋은지 정리한 글',
    category: 'react',
    date: '2026-03-27',
    slug: 'react-component-structure',
  },
  {
    title: 'Next.js App Router 기본 구조',
    description: 'App Router의 기본 폴더 구조와 라우팅 흐름을 정리한 글',
    category: 'nextjs',
    date: '2026-03-26',
    slug: 'nextjs-app-router-structure',
  },
  {
    title: '브라우저 렌더링 과정 이해',
    description: '브라우저가 HTML, CSS, JavaScript를 해석하는 과정을 정리한 글',
    category: 'web',
    date: '2026-03-25',
    slug: 'browser-rendering-process',
  },
];