import './App.css';
import {useState} from "react";

function App() {

  const [jokes, setJokes] = useState(null);

  const fetchJokes = async () => {
    try{
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJokes(`${data.setup} ${data.punchline}`);
    }catch (error) {
      setJokes("something went wrong");
    }

  }

  return (
    <div className="App">
      <h1>Jokes</h1>
      <h1>{jokes}</h1>
      <button onClick={fetchJokes}>onclick</button>
    </div>
  );
}

export default App;
