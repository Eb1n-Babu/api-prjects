import React, {useEffect} from 'react';

function App(props) {
    const [activity, setActivity] = React.useState(null);

    const fetchData = async () => {
        try{
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.boredapi.com/api/activity/')
            const data = await response.json();
            setActivity(data);
        }catch(error){
            setActivity("something went wrong");
        }
    }

    useEffect(() => {
        fetchData()
    },[])
    return (
        <div>
            <h1>Random Activity</h1>
            <h1>{activity?.activity || activity}</h1>
            <button onClick={fetchData}>Click</button>
        </div>
    );
}

export default App;