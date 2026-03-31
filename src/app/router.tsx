import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import NotesPage from "../pages/NotesPage";
import AboutPage from "../pages/AboutPage";
import NoteDetailPage from "../pages/NoteDetailPage";

export const router = createBrowserRouter([
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
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);