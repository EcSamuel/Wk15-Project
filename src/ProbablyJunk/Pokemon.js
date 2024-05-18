import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowPokemon() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.example.com/data');
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function to cancel any pending requests or timers
    return () => {
      // Cleanup code goes here, if needed
    };
  }, []); // The empty array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>
      {data ? (
        <div>
          {}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ShowPokemon;