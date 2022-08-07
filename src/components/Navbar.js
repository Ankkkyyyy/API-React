import React  from 'react'
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types'

// export  class Navbar extends Component {

  const Navbar =()=>{
// {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NEWSBLOT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>

        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/science">Science</Link></li>
            <li><Link class="dropdown-item" to="/technology">Technology</Link></li>
            <li><Link class="dropdown-item" to="/business">Business</Link></li>
            <li><Link class="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link class="dropdown-item" to="/health">Health</Link></li>
            <li><Link class="dropdown-item" to="/entertainment">Entertainment</Link></li>
          </ul>
        </li> */}
   
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
          
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>

       
      </ul>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
// }

export default Navbar
