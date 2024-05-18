import React, { useEffect, useState } from 'react';
import UserConnections from './UserConnections';
import axios from 'axios';

function ShowConnections() {
  const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/Connections`;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(APIurl)
      .then(res => res.json())
      .then(data => setData(data));
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`${APIurl}/${id}`);
      setData(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing connection:', error);
    }
  };

  return (
    <UserConnections connections={data} onRemove={handleRemove} />
  );
}

export default ShowConnections;