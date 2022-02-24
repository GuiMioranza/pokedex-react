import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Details from "../Pages/Details";

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}