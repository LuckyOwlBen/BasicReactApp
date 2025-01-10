import React, { useState, useEffect } from 'react';

const About = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Save data to session storage
        sessionStorage.setItem('aboutPageVisited', 'true');

        // Retrieve data from session storage
        const visited = sessionStorage.getItem('aboutPageVisited');
        console.log('About page visited:', visited);
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', { name, email });
        // You can add API call here to submit the form data
    };
    return (
        <div>
            <h2>About Page</h2>
            <p>This is the about page</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default About;