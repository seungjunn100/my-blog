export type NoteCategory = "all" | "javascript" | "typescript" | "react" | "nextjs" | "web" | "ai";

export type NoteItemCategory = Exclude<NoteCategory, "all">;

export interface NoteItem {
  title: string;
  description: string;
  category: NoteItemCategory;
  date: string;
  slug: string;
  thumbnail: string;
}

export interface NoteDetail extends NoteItem {
  content: string;
}