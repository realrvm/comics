import App from "@/app/App";
import { PageFour } from "@/pages/page-four";
import { PageOne } from "@/pages/page-one";
import { PageThree } from "@/pages/page-three";
import { PageTwo } from "@/pages/page-two";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <PageOne />,
        path: "",
      },
      {
        element: <PageTwo />,
        path: "/2",
      },
      {
        element: <PageThree />,
        path: "/3",
      },
      {
        element: <PageFour />,
        path: "/4",
      },
    ],
  },
]);
