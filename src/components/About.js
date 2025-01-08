import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        // Save data to session storage
        sessionStorage.setItem('aboutPageVisited', 'true');

        // Retrieve data from session storage
        const visited = sessionStorage.getItem('aboutPageVisited');
        console.log('About page visited:', visited);
    }, []);
    return (
        <div>
            <h2>About Page</h2>
            <p>This is the about page</p>
        </div>
    );
};

export default About;