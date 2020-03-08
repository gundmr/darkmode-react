import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './style.css';

//bootstrap formatting 
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav'; 

//Internal Routing
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';





function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  //put darkMode in local storage so state persisits
  //when component mounts it will check dependancers array
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPreColorScheme();

    //if mode was saved -> return correlation (dark/light)
    if(isReturningUser){
      return savedMode;
    
    //if preferred color scheme is dark - return dark
    } else if(userPrefersDark){
      return true;
    
    // otherwise reutrn light
    } else {
      return false;
    }
  }

  function getPreColorScheme() {
    //add conditional to see if user has pref
    if(!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <Router>
        <Container className="p-0" fluid={true}>
          <div className={ darkMode ? "dark-mode" : "light-mode" }>
            <nav>

              <div className = 'toggle-container'> 
                <span className="toggle">
                  <input 
                    checked = {darkMode}
                    onChange = {() => setDarkMode(prevMode => !prevMode)}
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                  />
                  <label htmlFor="checkbox" />
                </span>
                <Link className='text-link' to="/">Home </Link>

                <Link className='text-link' to="/projects"> Projects</Link>
              </div>
            </nav>
          


            <main>

              {/* ROUTES - IMPORTED */}
              <Route path="/" exact render={() => <HomePage />} />

              <Route path="/projects" render={() => <ProjectsPage />} />
            </main>

          </div>

      </Container>
    </Router>
  );
}

export default App;
