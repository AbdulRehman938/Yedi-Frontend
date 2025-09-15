import { Routes, Route } from "react-router-dom";

import Layout from "../components/Common/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Locations from "../pages/Locations";
import Locks from "../pages/Locks";
import Partner from "../pages/Partner";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="locations" element={<Locations />} />
        <Route path="locks" element={<Locks />} />
        <Route path="partner" element={<Partner />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
