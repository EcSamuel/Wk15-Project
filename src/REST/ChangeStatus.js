import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChangeStatus({ id }) {
  const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/Connections/${id}`;
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the current state of the item
    const fetchData = async () => {
      try {
        const res = await axios.get(APIurl);
        setIsFavorite(res.data.isFavorite);
      } catch (error) {
        setError('Error fetching the data');
      }
    };
    fetchData();
  }, [APIurl]);

  const changeFavorite = async () => {
    const toggledFavoriteStatus = !isFavorite;
    setIsFavorite(toggledFavoriteStatus);
    try {
      await axios.patch(APIurl, { isFavorite: toggledFavoriteStatus });
      console.log('Favorite status updated successfully');
    } catch (error) {
      setError('Error updating the favorite status');
      setIsFavorite(!toggledFavoriteStatus);
    }
  };

  return (
    <div>
      {isFavorite ? 'Preferred User' : 'Not a Preferred User'}
      <br></br>
      <button onClick={changeFavorite}>Change Preferred User Status</button>
    </div>
  );
}

export default ChangeStatus;