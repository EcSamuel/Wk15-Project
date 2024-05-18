// import React, { useEffect, useState } from 'react'
// import UserConnections from './UserConnections';

// function ShowConnections() {

//   const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/`

//   const [data, setData] = useState([]);

//   const [newItem, setNewItem] = useState('');
  
//   const [editItem, setEditItem] = useState({id: null, value: ''});

//   useEffect(() => {
// fetch(APIurl)
//     .then(res => res.json())
//     .then(data => setData(data));
//   }, [])

//   return ( // I'm going to need this to be an array or map of the connections provided in the res.data
//     <UserConnections
//         // User Name ={userName}
//         // Image ={profileImage}
//         // key = {id} // this is incorrect for now but can and will be fixed
//         // History = {gamingHistory}
//     />
//   )
// }

// export default ShowConnections

// import React, { useEffect, useState } from 'react';
// import UserConnections from './UserConnections';

// function ShowConnections() {
//   const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/`;

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(APIurl)
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, []);

//   return (
//     <UserConnections
//       connections={data}
//     />
//   );
// }

// export default ShowConnections;

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
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing connection:', error);
    }
  };

  return (
    <UserConnections
      connections={data}
      onRemove={handleRemove}
    />
  );
}

export default ShowConnections;
