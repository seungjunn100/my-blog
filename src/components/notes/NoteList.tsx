import { NoteItem } from "../../types/note";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: NoteItem[];
}

export default function NoteList({ notes }: NoteListProps) {
  if (notes.length === 0) {
    return <p className="note-list__empty">해당 카테고리의 게시물이 없습니다.</p>;
  }
  
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteCard key={`${note.category}-${note.slug}`} note={note} />
      ))}
    </ul>
  );
}