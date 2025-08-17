import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import App from "./App";
import { lazy, Suspense } from "react";
import Spinner from "./components/spinner/Spinner";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
