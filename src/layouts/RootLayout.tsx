import { Outlet } from "react-router";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import RouteMetaSync from "../components/common/RouteMetaSync";

export default function RootLayout() {
  return (
    <>
      <RouteMetaSync />
      <Header />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}