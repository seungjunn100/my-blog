import { NoteCategory } from "../../types/note";

interface NoteFilterProps {
  selectedCategory: NoteCategory;
  categories: NoteCategory[];
  onSelectCategory: (category: NoteCategory) => void;
}

const categoryLabelMap: Record<NoteCategory, string> = {
  all: 'All',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  nextjs: 'Next.js',
  web: 'Web',
  ai: 'AI',
};

export default function NoteFilter({ selectedCategory, categories, onSelectCategory }: NoteFilterProps) {
  return (
    <section className="note-filter" aria-label="노트 카테고리 필터">
      <ul className="note-filter__list">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <li key={category} className="note-filter__item">
              <button
                type="button"
                className={`note-filter__button ${isSelected ? 'is-active' : ''}`}
                onClick={() => onSelectCategory(category)}
                aria-pressed={isSelected}
              >
                {categoryLabelMap[category]}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}