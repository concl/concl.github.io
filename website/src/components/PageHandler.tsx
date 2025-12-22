
import { useEffect, useState } from 'react';
// router
import { Route, Routes, useLocation } from 'react-router-dom';

// pages
import HomePage from '../pages/HomePage';
import CVPage from '../pages/CVPage';
import ProjectsPage from '../pages/ProjectsPage';

// components
import Header from './Header';
import Footer from './Footer';

function PageHandler() {
    const location = useLocation();

    // The location we are currently rendering
    const [displayLocation, setDisplayLocation] = useState(location);

    // fadeIn when content is fully visible, fadeOut when leaving
    const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

    // When the real URL changes, fade out the old content, then swap and fade in the new
    useEffect(() => {
        if (location.pathname === displayLocation.pathname) {
            return;
        }

        // start fade-out
        setTransitionStage('fadeOut');

        const DURATION = 300; // keep in sync with CSS transition
        const timeout = setTimeout(() => {
            // after fade-out completes, swap to the new location and fade in
            console.log("Switching page to", location.pathname);
            setDisplayLocation(location);
            setTransitionStage('fadeIn');
        }, DURATION);

        // if the user navigates again quickly, cancel the previous animation
        return () => clearTimeout(timeout);
    }, [location, displayLocation]);

    
    // Safety: if we ever end up on the same page while in fadeOut, snap back to fadeIn
    useEffect(() => {
        if (location.pathname === displayLocation.pathname && transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
        }
    }, [location, displayLocation, transitionStage]);

    return (
        <>
            <Header />
            <div className={`page ${transitionStage}`}>
                <Routes location={displayLocation}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cv" element={<CVPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default PageHandler;
