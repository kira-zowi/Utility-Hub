import React from "react";
import {FaCalculator,FaTasks,FaCloudSun} from 'react-icons/fa';

function Home({ onSelect }) {
  return (
    <div className="text-center mt-5">
      <h1 className="fw-bold">Welcome to Your Utility Hub!</h1>
      <p className="fs-4 mt-3 text-muted">Choose a tool to get started:</p>

      <div className="d-flex justify-content-center flex-wrap gap-4 mt-5">

        {/* Calculator */}
        <div className="card shadow-sm p-4" style={{ width: "220px", borderRadius: "15px" }}>
          <FaCalculator size={40} className="text-primary mb-3" />
          <h5 className="fw-semibold">Calculator</h5>
          <p className="text-muted">Perform calculations quickly</p>
          <button
            className="btn btn-primary w-100 mt-2"
            style={{ borderRadius: "10px" }}
            onClick={() => onSelect("calculator")}
          >
            Open
          </button>
        </div>

         {/* To-Do List */}
        <div className="card shadow-sm p-4" style={{ width: "220px", borderRadius: "15px" }}>
          <FaTasks size={40} className="text-primary mb-3" />
          <h5 className="fw-semibold">To-Do List</h5>
          <p className="text-muted">Manage your daily tasks</p>
          <button
            className="btn btn-primary w-100 mt-2"
            style={{ borderRadius: "10px" }}
            onClick={() => onSelect("todo")}
          >
            Open
          </button>
        </div>


        {/* Weather App */}
        <div className="card shadow-sm p-4" style={{ width: "220px", borderRadius: "15px" }}>
          <FaCloudSun size={40} className="text-primary mb-3" />
          <h5 className="fw-semibold">Weather App</h5>
          <p className="text-muted">Check local weather updates</p>
          <button
            className="btn btn-primary w-100 mt-2"
            style={{ borderRadius: "10px" }}
            onClick={() => onSelect("weather")}
          >
            Open
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;
