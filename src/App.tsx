import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Clients from "./pages/Clients";
import Employees from "./pages/Employees";

export default ({ history }: { history: any }): React.ReactElement => {
  console.log("APP management");
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </HistoryRouter>
  );
};
