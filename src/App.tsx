import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import Loading from "./Loading";
const Home = lazy(() => import("./Home"));
const Admin = lazy(() => import("./Admin"));

const notify = (e: string, msg: string) => {
  toast[e](msg, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
};

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home notify={notify} />} />
            <Route path="/radmin" element={<Admin notify={notify} />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
