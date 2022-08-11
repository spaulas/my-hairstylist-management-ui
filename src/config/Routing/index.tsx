import React from "react";
import { Routes, Route } from "react-router-dom";
import Clients from "@pages/Clients";
import Employees from "@pages/Employees";

const Routing = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/clients" element={<Clients />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};

export default Routing;
