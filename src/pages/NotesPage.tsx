import { useMemo, useState } from "react";
import NoteFilter from "../components/notes/NoteFilter";
import NoteList from "../components/notes/NoteList";
import { NoteCategory } from "../types/note";
import { getAllNotes, getNotesByCategory } from "../lib/notes";
import { PageMeta } from "../components/common/PageMeta";

const categories: NoteCategory[] = [
  'all',
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'web',
  'ai',
]

export default function NotesPage() {
  const [selectedCategory, setSelectedCategory] = useState<NoteCategory>('all');

  const filteredNotes = useMemo(() => {
    if (selectedCategory === 'all') {
      return getAllNotes();
    }

    return getNotesByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <section>
      <PageMeta
        title="노트 목록"
        description="JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 내용을 정리한 노트 목록 페이지입니다."
        path="/notes"
      />

      <h2 className="sr-only">Notes</h2>

      <NoteFilter selectedCategory={selectedCategory} categories={categories} onSelectCategory={setSelectedCategory} />

      <NoteList notes={filteredNotes} />
    </section>
  );
}