import { Link } from "react-router";
import { NoteItem } from "../../types/note";

interface NoteCardProps {
  note: NoteItem;
}

const categoryLabelMap: Record<NoteItem['category'], string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  nextjs: 'Next.js',
  web: 'Web',
  ai: 'AI',
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <li className="note-list__item">
      <Link className="note-list__link" to={`/notes/${note.category}/${note.slug}`}>
        {`[ ${categoryLabelMap[note.category]} ] ${note.title}`}
      </Link>
      
      <time className="note-list__date" dateTime={note.date}>
        {note.date}
      </time>
    </li>
  );
}