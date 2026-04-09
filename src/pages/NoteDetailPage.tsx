import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { getNoteByCategoryAndSlug } from "../lib/notes";
import { NoteItemCategory } from "../types/note";
import rehypeHighlight from "rehype-highlight";

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
      <section className="invalid-access">
        <h1 className="invalid-access__title">잘못된 접근입니다.</h1>
        <Link to="/notes" className="back-link">← 목록으로 돌아가기</Link>
      </section>
    );
  }

  if (!isNoteCategory(category)) {
    return (
      <section className="invalid-category">
        <h1 className="invalid-category__title">유효하지 않은 카테고리입니다.</h1>
        <p className="invalid-category__description">입력한 주소가 잘못되었거나, 유효하지 않은 카테고리입니다.</p>
        <Link to="/notes" className="back-link">← 목록으로 돌아가기</Link>
      </section>
    );
  }

  const note = getNoteByCategoryAndSlug(category, slug);

  if (!note) {
    return (
      <section className="note-empty">
        <h1 className="note-empty__title">노트를 찾을 수 없습니다.</h1>
        <p className="note-empty__description">입력한 주소가 잘못되었거나, 존재하지 않거나, 삭제된 글입니다.</p>
        <Link to="/notes" className="back-link">← 목록으로 돌아가기</Link>
      </section>
    );
  }
  
  return (
    <section className="note-detail">
      <article className="note-detail__article">
        <header className="note-detail__header">
          <h1 className="note-detail__title">
            {`[ ${categoryLabelMap[note.category]} ] ${note.title}`}
          </h1>
          <time className="note-detail__date" dateTime={note.date}>{note.date}</time>
        </header>

        <div className="markdown-body">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{note.content}</ReactMarkdown>
        </div>

        <Link to="/notes" className="back-link">← 목록으로 돌아가기</Link>
      </article>
    </section>
  );
}