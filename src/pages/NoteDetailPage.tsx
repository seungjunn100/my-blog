import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { getNoteByCategoryAndSlug } from "../lib/notes";
import { NoteItemCategory } from "../types/note";

const categories: NoteItemCategory[] = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "web",
  "ai",
];

const categoryLabelMap: Record<NoteItemCategory, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  nextjs: "Next.js",
  web: "Web",
  ai: "AI",
};

function isNoteCategory(value: string): value is NoteItemCategory {
  return categories.includes(value as NoteItemCategory);
}

export default function NoteDetailPage() {
  const { category, slug } = useParams();

  if (!category || !slug) {
    return (
      <section>
        <h1>잘못된 접근입니다.</h1>
        <Link to="/notes">목록으로 돌아가기</Link>
      </section>
    );
  }

  if (!isNoteCategory(category)) {
    return (
      <section>
        <h1>유효하지 않은 카테고리입니다.</h1>
        <Link to="/notes">목록으로 돌아가기</Link>
      </section>
    );
  }

  const note = getNoteByCategoryAndSlug(category, slug);

  if (!note) {
    return (
      <section>
        <h1>노트를 찾을 수 없습니다.</h1>
        <p>존재하지 않거나 삭제된 글입니다.</p>
        <Link to="/notes">목록으로 돌아가기</Link>
      </section>
    );
  }
  
  return (
    <section>
      <h1>[{categoryLabelMap[note.category]}] {note.title}</h1>
      <time dateTime={note.date}>{note.date}</time>

      <article>
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </article>

      <Link to="/notes">← 목록으로 돌아가기</Link>
    </section>
  );
}