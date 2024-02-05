import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=>{


    return (
      <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CC-News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <div class="dropdown">
  <a class="btn btn-secondary btn-sm m-2 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Country
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="IndiaTopHeadlines">🇮🇳 India</a></li>
    <li><a class="dropdown-item" href="USTopHeadlines">🇺🇸 USA</a></li>
    <li><a class="dropdown-item" href="AustraliaTopHeadlines">🇦🇺 Australia</a></li>
    <li><a class="dropdown-item" href="JapanTopHeadlines">🇯🇵 Japan</a></li>
    <li><a class="dropdown-item" href="KoreaTopHeadlines">🇰🇷 Korea</a></li>
    <li><a class="dropdown-item" href="UAETopHeadlines">🇦🇪 UAE</a></li>
    <li><a class="dropdown-item" href="ChinaTopHeadlines">🇨🇳 China</a></li>
    {/* <li><a class="dropdown-item" href="YemenTopHeadlines">🇾🇪 Yemen</a></li> */}
  </ul>
</div>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
  }


export default Navbar