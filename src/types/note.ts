export interface NoteItem {
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
}

export type NoteCategory = "all" | "javascript" | "typescript" | "react" | "nextjs" | "web" | "ai";

export type NoteItemCategory = Exclude<NoteCategory, "all">;