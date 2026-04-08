import { Link } from "react-router";
import { getRecentNotes } from "../lib/notes";
import { NoteItem } from "../types/note";
import { PageMeta } from "../components/common/PageMeta";

const categoryLabelMap: Record<NoteItem['category'], string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  nextjs: 'Next.js',
  web: 'Web',
  ai: 'AI',
};

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="junn.dev"
        description="프론트엔드 개발자로 성장하기 위해 JavaScript, TypeScript, React, Next.js, Web, AI 관련 학습 내용을 기록합니다."
        path="/"
      />

      <section className="home">
        <h2 className="sr-only">Home</h2>
        <p className="home__description">
          이 블로그는 신입 개발자로서 성장하기 위해 학습한 내용을 정리하고 기록하는 공간입니다.
        </p>
        <p className="home__description">
          단순히 개념을 읽고 넘어가는 것이 아니라, 이해한 내용을 스스로 풀어내며 학습을 깊이 있게 쌓아가는 것을 목표로 하고 있습니다. 
          더디더라도 빠르게 소비되는 지식보다, 오래 남는 이해를 만드는 데에 집중하고 있습니다.
        </p>
        <p className="home__description">
          초기에는 JavaScript, TypeScript, React, Next.js 등 프론트엔드 중심의 내용을 다루지만, 점차 개발 전반에 대한 이해를 넓히며 백엔드, 인프라 등으로 학습 범위를 확장해 나갈 예정입니다.
          또한 AI를 활용한 개발 방식과 프로젝트에 접목하는 방법에 대해서도 함께 고민하고 기록해 나가고자 합니다.
        </p>
        <p className="home__description">
          꾸준한 기록을 통해 저만의 개발 기준과 사고 과정을 만들어가는 것을 목표로 합니다.
        </p>

        <section className="home-notes">
          <h3 className="home-notes__title">Recent Notes</h3>

          <ul className="home-notes__recent-list">
            {getRecentNotes().map((note) => (
              <li key={`${note.category}-${note.slug}`} className="home-notes__recent-item">
                <div className="home-notes__recent-inner">
                  <Link to={`/notes/${note.category}/${note.slug}`} className="home-notes__recent-link">
                    {`[ ${categoryLabelMap[note.category]} ] ${note.title}`}
                  </Link>

                  <time className="home-notes__recent-date" dateTime={note.date}>
                    {note.date}
                  </time>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-links">
          <h3 className="home-links__title">Link</h3>
          <ul className="home-links__list">
            <li className="home-links__item"><Link to="https://www.notion.so/191931a2ff5e801f9867f5e3248f3210" target="_blank" className="home-links__link"><span className="home-links__icon">📄</span>이력서</Link></li>
            <li className="home-links__item"><Link to="https://github.com/seungjunn100" target="_blank" className="home-links__link"><span className="home-links__icon">🐙</span>깃허브</Link></li>
            <li className="home-links__item"><Link to="https://github.com/seungjunn100" target="_blank" className="home-links__link"><span className="home-links__icon">✨</span>포트폴리오</Link></li>
          </ul>
        </section>
      </section>
    </>
  );
}