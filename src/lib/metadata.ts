// src/lib/metadata.ts
import { getNoteByCategoryAndSlug } from "./notes";
import type { NoteItemCategory } from "../types/note";

export interface MetaData {
  title: string;
  description: string;
  path: string;
  image: string;
  type: "website" | "article";
}

const SITE_NAME = "junn.dev";
const SITE_URL = "https://junn.dev";
const DEFAULT_OG_IMAGE = "/og-image.png";

const categories: NoteItemCategory[] = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "web",
  "ai",
];

function isNoteCategory(value: string): value is NoteItemCategory {
  return categories.includes(value as NoteItemCategory);
}

export function getMetaByPath(path: string): MetaData {
  if (path === "/") {
    return {
      title: SITE_NAME,
      description:
        "프론트엔드 개발자로 성장하기 위해 JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 내용을 기록합니다.",
      path: "/",
      image: DEFAULT_OG_IMAGE,
      type: "website",
    };
  }

  if (path === "/notes") {
    return {
      title: "Notes",
      description:
        "JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 노트를 모아둔 페이지입니다.",
      path: "/notes",
      image: DEFAULT_OG_IMAGE,
      type: "website",
    };
  }

  const match = path.match(/^\/notes\/([^/]+)\/([^/]+)$/);

  if (match) {
    const category = match[1];
    const slug = match[2];

    if (!category || !slug) {
      return {
        title: "페이지를 찾을 수 없습니다",
        description: "존재하지 않거나 이동된 페이지입니다.",
        path,
        image: DEFAULT_OG_IMAGE,
        type: "website",
      };
    }

    if (isNoteCategory(category)) {
      const note = getNoteByCategoryAndSlug(category, slug);

      if (note) {
        return {
          title: note.title,
          description: note.description,
          path,
          image: note.thumbnail ?? DEFAULT_OG_IMAGE,
          type: "article",
        };
      }
    }
  }

  return {
    title: "페이지를 찾을 수 없습니다",
    description: "존재하지 않거나 이동된 페이지입니다.",
    path,
    image: DEFAULT_OG_IMAGE,
    type: "website",
  };
}

export function renderHeadTags(meta: MetaData) {
  const fullTitle =
    meta.title === SITE_NAME ? SITE_NAME : `${meta.title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${meta.path}`;
  const imageUrl = `${SITE_URL}${meta.image}`;

  return `
  <title>${escapeHtml(fullTitle)}</title>
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <meta name="description" content="${escapeHtml(meta.description)}" />
  <meta name="theme-color" content="#242424" />

  <meta property="og:type" content="${escapeHtml(meta.type)}" />
  <meta property="og:title" content="${escapeHtml(fullTitle)}" />
  <meta property="og:description" content="${escapeHtml(meta.description)}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta property="og:image" content="${escapeHtml(imageUrl)}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:site_name" content="${SITE_NAME}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
  <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
  `.trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}