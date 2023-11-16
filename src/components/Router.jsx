import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;