// import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout"; // adjust the path as needed

export const routes = [
  {
    path: "/",
    element: <Layout />, // Layout contains <Outlet />
    children: [
      { path: "", element: <Home /> },
      // { path: "about", element: <About /> },
      // { path: "projects", element: <Projects /> },
    ],
  },
];