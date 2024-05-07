import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/home";
import Programs from "./pages/programs";
import Program from "./pages/program";
import Profile from "./pages/profile";
import Excercise from "./pages/excercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/program/:id",
    element: <Program />,
  },
  {
    path: "/excercise",
    element: <Excercise />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
