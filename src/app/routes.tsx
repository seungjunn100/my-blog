import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import NotesPage from "../pages/NotesPage";
import NoteDetailPage from "../pages/NoteDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'notes',
        element: <NotesPage />,
      },
      {
        path: 'notes/:category/:slug',
        element: <NoteDetailPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      },
    ],
  },
];