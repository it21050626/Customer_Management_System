import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Stock And Inventory</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link> 
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Create Item</Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link">Department</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
};
export default Header;