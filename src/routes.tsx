// import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout"; // adjust the path as needed
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";

export const routes = [
  {
    path: "/",
    element: <Layout />, // Layout contains <Outlet />
    children: [
      { path: "/", element: <Home /> },
      { path: "projects", element: <Project /> },
      { path: "projects/:name", element: <ProjectDetail /> }
      // { path: "about", element: <About /> },
      // { path: "projects", element: <Projects /> },
    ],
  },
];