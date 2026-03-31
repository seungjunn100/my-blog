import { useParams } from "react-router";
import { getAllNotes } from "../lib/notes";

export default function NoteDetailPage() {
  const { category, slug } = useParams();

  const notes = getAllNotes();

  const note = notes.find(
    (note) => note.category === category && note.slug === slug
  );

  if (!note) {
    return <p>해당 글을 찾을 수 없습니다.</p>
  }
  
  return (
    <section>
      <h1>[{note.category}] {note.title}</h1>
      <time dateTime={note.date}>{note.date}</time>
      <div>
        <p>Markdown 본문이 들어올 예정입니다.</p>
      </div>
    </section>
  );
}