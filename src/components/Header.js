import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <br></br>
        <h5><p>Click on down arrow next to heading to filter column</p>
        <p>Use the search box to locate a specific Employee</p></h5>
      </div>
    )
  }

export default Header;
