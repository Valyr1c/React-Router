import { RouteObject } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CardList from "../pages/CardList";
import Card from "../pages/Card";
import ErrorPage from "../pages/ErrorPage";

const Routes: RouteObject[] = [
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: `about`, element: <About /> },
      { path: `contact`, element: <Contact /> },
      {
        path: `cardList`,
        element: <CardList />,
      },
      { path: `cardList/:id`, element: <Card /> },
    ],
  },
  { path: `*`, element: <ErrorPage /> },
];

export default Routes;
