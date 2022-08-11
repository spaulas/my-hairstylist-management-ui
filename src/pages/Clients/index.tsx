import React from "react";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();
  return (
    <div>
      Clients
      <hr />
      <button onClick={() => navigate("/employees")}>Employees</button>
    </div>
  );
};

export default Clients;
