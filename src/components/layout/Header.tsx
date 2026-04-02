import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <h1 className="site-header__logo">baek.log</h1>
        <Navigation />
      </div>
    </header>
  );
}