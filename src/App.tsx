import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default ({ history }: { history: any }): React.ReactElement => {
  console.log("APP management");
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </HistoryRouter>
  );
};
