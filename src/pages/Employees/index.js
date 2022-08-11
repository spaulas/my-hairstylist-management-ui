import React from "react";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const navigate = useNavigate();
  return (
    <div>
      Employees
      <hr />
      <button onClick={() => navigate("/clients")}>Clients</button>
    </div>
  );
};

export default Employees;
