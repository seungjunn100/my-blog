import { NoteDetail, NoteItem, NoteItemCategory } from "../types/note";

// Vite에서 markdown 파일을 문자열로 가져오기 위한 타입
type MarkdownModule = string;

// 허용된 카테고리 목록
const categories: NoteItemCategory[] = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "web",
  "ai",
];

// 문자열이 유효한 카테고리인지 검사하는 함수 (타입 가드)
function isNoteCategory(value: string): value is NoteItemCategory {
  return categories.includes(value as NoteItemCategory);
}

/**
 * content 폴더의 모든 markdown 파일을 가져오는 부분
 *  - "/content/--/-.md" : content 폴더 아래의 모든 markdown 파일을 가져옴
 *  - query: "?raw" : 파일을 "문자열"로 가져옴
 *  - import: "default" : default export 값만 가져옴
 *  - eager: true : 런타임이 아니라 빌드 시점에 한 번에 로드
 * 
 * 예시
 *      {
 *        "/content/react/use-memo.md": "markdown 전체 문자열",
 *        "/content/javascript/array-map.md": "markdown 전체 문자열"
 *      }
 */
const noteFiles = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, MarkdownModule>;

/**
 * frontmatter 한 줄을 파싱하는 함수
 * 
 * 예시
 *      "title: useMemo 정리" → { key: "title", value: "useMemo 정리" }
 */
function parseFrontmatterLine(line: string) {
  const separatorIndex = line.indexOf(":");

  if (separatorIndex === -1) {
    return null;
  }

  const key = line.slice(0, separatorIndex).trim();
  const value = line.slice(separatorIndex + 1).trim();

  return { key, value };
}

/**
 * markdown 문자열에서 frontmatter, 본문(content)을 분리하는 함수
 *
 * 예시
 *      ---
 *      title: ...
 *      ---
 *      ## 본문
 * →
 *      {
 *        data: { title: "...", ... },
 *        content: "## 본문..."
 *      }
 */
function parseMarkdownFile(rawContent: string) {
  const trimmedContent = rawContent.trim();

  if (!trimmedContent.startsWith("---")) {
    throw new Error("Frontmatter가 없는 markdown 파일입니다.");
  }

  /**
   * "---" 기준으로 분리
   *
   * 예시
   *      [
   *        "",                      // 시작
   *        "\ntitle: ...",             // frontmatter
   *        "\n\n## 제목..."                // content
   *        "\n\n## 내용..."                // content
   *      ]
   */
  const parts = trimmedContent.split("---");

  const frontmatterBlock = parts[1]!.trim();
  const content = parts.slice(2).join("---").trim();

  const data: Record<string, string> = {};

  frontmatterBlock.split("\n").forEach((line) => {
    const parsedLine = parseFrontmatterLine(line);
    if (!parsedLine) return;
    data[parsedLine.key] = parsedLine.value;
  });

  return { data, content };
}

// markdown 파일 하나를 파싱해서 NoteDetail 객체로 변환하는 함수
function parseNoteFile(filePath: string, rawContent: string): NoteDetail {
  const { data, content } = parseMarkdownFile(rawContent);

  const title = data.title;
  const description = data.description;
  const date = data.date;
  const category = data.category;
  const slug = data.slug;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof date !== "string" ||
    typeof category !== "string" ||
    typeof slug !== "string"
  ) {
    throw new Error(`Invalid frontmatter in file: ${filePath}`);
  }

  if (!isNoteCategory(category)) {
    throw new Error(`Invalid category in file: ${filePath}`);
  }

  return {
    title,
    description,
    date,
    category,
    slug,
    content,
  };
}

// 모든 markdown 파일을 최신 날짜순으로 정렬하여 NoteDetail 배열로 변환하는 함수
function getAllNoteDetails(): NoteDetail[] {
  return Object.entries(noteFiles)
    .map(([filePath, rawContent]) => parseNoteFile(filePath, rawContent))
    .sort((a, b) => b.date.localeCompare(a.date));
}

// 전체 노트 목록 반환
export function getAllNotes(): NoteItem[] {
  return getAllNoteDetails()
    .map(({ title, description, category, date, slug }) => ({
      title,
      description,
      category,
      date,
      slug,
    })
  );
}

// 최신 노트 5개만 반환
export function getRecentNotes(limit = 5) {
  return getAllNotes().slice(0, limit);
}

// 특정 카테고리에 해당하는 노트 목록 반환
export function getNotesByCategory(category: NoteItemCategory): NoteItem[] {
  return getAllNotes().filter((note) => note.category === category);
}

// 상세 페이지에 해당하는 노트 반환
export function getNoteByCategoryAndSlug(category: NoteItemCategory, slug: string): NoteDetail | undefined {
  return getAllNoteDetails().find((note) => note.category === category && note.slug === slug);
}