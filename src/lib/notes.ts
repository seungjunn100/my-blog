/* Notes 관련 로직 */

import { mockNotes } from "../data/mockNotes";
import { NoteItem, NoteItemCategory } from "../types/note";


// 날짜 최신순으로 정렬된 전체 노트 목록 반환
export function getAllNotes(): NoteItem[] {
  return [...mockNotes].sort((a, b) => b.date.localeCompare(a.date));
}

// 특정 카테고리에 해당하는 노트 목록 반환
export function getNotesByCategory(category: NoteItemCategory): NoteItem[] {
  return getAllNotes().filter((note) => note.category === category);
}