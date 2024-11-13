// src/components/Sidebar.js
import React from "react";
import "../assets/css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        <h3>Course Content</h3>
      </div>
      <ul>
        <li>
          <button>Section 1: Course Introduction</button>
        </li>
        <li>
          <button>Section 2: Web Design Guidelines</button></li>
          <ol><li>
            <button>HTML</button>
          </li>
          <li>
            <button>CSS</button>
          </li>
          <li>
            <button>JAVASCRIPT</button>
          </li>
          </ol>
        <li>
          <button>Section 3: Course Summary</button>
        </li>
        <li>
          <button>Section 4: Conclusion</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
