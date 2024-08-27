import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // Layout wrapper
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/jobs", element: <JobsPage /> },
        { path: "/jobs/:id", element: <JobPage />, loader: jobLoader },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
