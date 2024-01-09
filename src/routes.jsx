import {
  createBrowserRouter
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World</h1>,
  },
  {
    path: "movie/:id",
    element: <h1>Movie detail page</h1>,
  },
  {
    path: "movies/:type",
    element: <h1>Movie list page</h1>,
  },
  {
    path: "/*",
    element: <h1>Error page</h1>,
  },
]);