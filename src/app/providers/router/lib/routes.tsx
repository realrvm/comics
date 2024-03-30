import { createBrowserRouter } from "react-router-dom";

import App from "@/app/App";
import { Main } from "@/pages/main";
import { Content } from "@/pages/content";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { path: "", element: <Main /> },
      { path: "content/:id", element: <Content /> },
    ],
  },
]);
