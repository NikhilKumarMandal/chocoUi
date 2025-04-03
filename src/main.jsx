import { StrictMode,useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import Layout from "./Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NavbarComForUser from "./pages/NavbarPage.jsx";
import { DocsPage } from "./pages/DocsPage.jsx";
import BentoPage from "./pages/BentoPage.jsx";
import FooterPage from "./pages/FooterPage.jsx"
import CardPage from "./pages/CardPage.jsx";

const CursorWrapper = ({ children }) => (
  <>
    <CustomCursor />
    {children}
  </>
);

const ScrollWrapper = ({ children }) => {
  useEffect(() => {

    const scrollContainers = document.querySelectorAll('[data-scroll-container]')
    scrollContainers.forEach(container => {
      container.removeAttribute('data-scroll-container')
    })
    
    const mainElement = document.querySelector('main')
    if (mainElement) {
      mainElement.setAttribute('data-scroll-container', '')
    }
  }, [])

  return children
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={
        <CursorWrapper>
          <ScrollWrapper>
            <LandingPage/>
          </ScrollWrapper>
        </CursorWrapper>
      } />

      <Route path="/dashboard" element={<CursorWrapper><Layout /></CursorWrapper>}>
        <Route path="navbar" element={<NavbarComForUser />} />
        <Route path="bento" element={<BentoPage/>} />
        <Route path="footer" element={<FooterPage/>} />
        <Route path="card" element={<CardPage/>} />
      </Route>
      <Route path="/docs" element={<DocsPage />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
