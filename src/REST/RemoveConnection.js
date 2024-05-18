// import React, {useEffect, useState } from 'react'
// import axios from 'axios';

// function RemoveConnection() {
//   const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/`
//   const handleRemove = async () => {
//     try {
//       // Make the DELETE request to the API
//       await axios.delete(`${APIurl}${id}`);
//       // Call the onRemove callback to update the parent component's state
//       onRemove(id);
//     } catch (error) {
//       console.error('Error removing connection:', error);
//     }
//   };

//   return (
//     <button onClick={handleRemove}>
//       Remove Connection
//     </button>
//   );
// };
//   // Will be making a delete button and the method for the removal of a connection from the array totally
// export default RemoveConnection

import React from 'react';
import axios from 'axios';

function RemoveConnection({ id, onRemove }) {
  const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/Connections`;

  const handleRemove = async () => {
    try {
      await axios.delete(`${APIurl}/${id}`);
      onRemove(id);
    } catch (error) {
      console.error('Error removing connection:', error);
    }
  };

  return (
    <button onClick={handleRemove}>
      Remove Connection
    </button>
  );
}

export default RemoveConnection;
// PRESENTLY DOES NOT CAUSE A REFRESH OR RERENDER