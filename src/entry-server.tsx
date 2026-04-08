import { renderToString } from "react-dom/server";
import { RouterProvider, createMemoryRouter } from "react-router";
import { routes } from "./app/routes";
import { getAllNotes } from "./lib/notes";
import { getMetaByPath, renderHeadTags } from "./lib/metadata";

export function getPrerenderRoutes() {
  const staticRoutes = ["/", "/notes"];

  const noteRoutes = getAllNotes().map(
    (note) => `/notes/${note.category}/${note.slug}`
  );

  return [...staticRoutes, ...noteRoutes];
}

export function render(url: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  });

  const appHtml = renderToString(<RouterProvider router={router} />);
  const headTags = renderHeadTags(getMetaByPath(url));

  return {
    appHtml,
    headTags,
  };
}