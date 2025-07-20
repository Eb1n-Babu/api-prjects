import { useState } from 'react';
import './App.css';

function App() {
    const API_KEY = "d28efc392a10ca5761d7a9ef92a4a33f"; // 🔑 Replace with your actual API key

    const [city, setCity] = useState('');
    const [data, setData] = useState(null); // Change default to null for consistency

    const fetchData = async () => {
        if (!city) return;
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const json = await response.json();
            if (json.cod === 200) {
                setData(json);
            } else {
                setData(null);
            }
        } catch {
            setData(null);
        }
    };

    return (
        <div className='App'>
            <h1>Weather App</h1>
            <input
                type='text'
                placeholder='City'
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <button onClick={fetchData}>Fetch Data</button>

            {/* ✅ Safe rendering with optional chaining */}
            {data ? (
                <>
                    <h2>{data.name}</h2>
                    <p>{data.weather?.[0]?.main} - {data.weather?.[0]?.description}</p>
                    <p>{data.main?.temp} °C</p>
                </>
            ) : (
                <p style={{ color: 'gray' }}>No weather data available. Try another city.</p>
            )}
        </div>
    );
}

export default App;