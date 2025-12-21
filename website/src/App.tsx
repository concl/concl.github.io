
// styles
import './App.css'

// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';
import ProjectsPage from './pages/ProjectsPage';


// components
import PageHandler from './components/PageHandler';

function App() {

  return (
    <>
      <div className="portfolio-layout">
        <Router>
          <PageHandler />
        </Router>
      </div>
    </>
  )
}

export default App
