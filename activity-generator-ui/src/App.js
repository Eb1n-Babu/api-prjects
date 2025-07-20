import React, { useState, useEffect } from 'react';

function App() {
    const [activity, setActivity] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://cors-anywhere.herokuapp.com/https://www.boredapi.com/api/activity/'
            );
            const data = await response.json();
            setActivity(data.activity);
        } catch (error) {
            setActivity("Oops! Something went wrong 😅");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>🌀 Random Activity</h1>
            <h2>{activity}</h2>
            <button onClick={fetchData} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Suggest Another
            </button>
        </div>
    );
}

export default App;