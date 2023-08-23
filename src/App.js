import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import './App.css';
import Routes from './Routes';
import logo from './Iisc_logo.png';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <Link to="/"><img src={logo} alt="IISC Logo" className="logo" /></Link>
            <div className="header-text">
            <Link to="/" className='header-link'><h1>CENTRE FOR HIGH ENERGY PHYSICS</h1>
              <h2>INDIAN INSTITUTE OF SCIENCE, BENGALURU</h2></Link>
            </div>
          </div>
        </header>
        <nav className="navbar">
          <ul className="nav-list">
            <li className='hc'><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span className="dropdown-btn">Academics <i className="fas fa-caret-down"></i></span>
              <div className="dropdown-content">
                <Link to="/admissions">Admissions</Link>
                <Link to="/academic-programs">Academic Programs</Link>
                <Link to='/academic-programs/research'>Research</Link>
                <a href="https://iisc.ac.in/admissions/" target='blank' rel="noopener noreferrer">IISc UG Programs</a>
              </div>
            </li>
            <li className="dropdown">
              <span className="dropdown-btn">People <i className="fas fa-caret-down"></i></span>
              <div className="dropdown-content">
                <Link to="/faculty">Faculty</Link>
                <a href="#">Former Faculty</a>
                <a href="#">Inspire/Ramanujan Faculty</a>
                <a href="#">Postdocs</a>
                <Link to='/students'>Students</Link>
                <Link to='/alumni'>Alumni</Link>
                <a href="#">Office</a>
              </div>
            </li>
            <li className="dropdown">
              <span className="dropdown-btn">Events <i className="fas fa-caret-down"></i></span>
              <div className="dropdown-content">
                <Link to='/conference'>Visitor/Conferences/Meetings</Link>
                <a href="#">Seminars</a>
                <a href="#">Pheno Coffee</a>
                <a href="#">Math-Physics General Club</a>
              </div>
            </li>
            <li><Link to="/news">News</Link></li>
            <li className="dropdown">
              <span className="dropdown-btn">Jobs <i className="fas fa-caret-down"></i></span>
              <div className="dropdown-content">
                <a href="#">Faculty</a>
                <a href="#">Post Doctoral</a>
              </div>
            </li>
            <li><Link to="/Committee">Committees</Link></li>
          </ul>
        </nav>
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
