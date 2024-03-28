import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MoveToTop from "./components/MoveToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MoveToTop />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Project",
        element: <Projects />
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
