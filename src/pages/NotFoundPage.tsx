import { Link } from "react-router";

export default function NotFoundPage() {

  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">페이지를 찾을 수 없습니다.</h1>
      <p className="not-found__description">입력한 주소가 잘못되었거나, 존재하지 않거나, 삭제되었거나, 이동된 페이지일 수 있습니다.</p>

      <div className="not-found__links">
        <Link to="/" className="back-link">← Home</Link>
        <Link to="/notes" className="back-link">← Notes</Link>
      </div>
    </section>
  );
}