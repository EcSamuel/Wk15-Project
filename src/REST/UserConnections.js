import React, { useEffect, useState } from 'react';
import ChangeStatus from './ChangeStatus';
import RemoveConnection from './RemoveConnection';
import axios from 'axios';


// const handleRemoveConnection = (id) => {
//   setConnections((prevConnections) =>
//     prevConnections.filter((connection) => connection.id !== id)
//   );
// };

function UserConnections({ connections, onRemove }) {
    console.log("connections" , connections)
    const handleRemoveConnection = (id) => {
      onRemove(id);
    };

    return (
      <div>
        <h2>UserConnections</h2>
        {connections.length > 0 ? (
          connections.map(connection => (
            <div key={connection.id}>
              <img src={connection.profileImage} alt={`${connection.userName}'s profile`} />
              <h3>{connection.userName}</h3>
              <p>Paired on: {connection.pairedOn}</p>
              <p>Gaming History: {connection.gamingHistory} games played together</p>
              <ChangeStatus id={connection.id} />
              <RemoveConnection id={connection.id} onRemove={handleRemoveConnection} />
            </div>
          ))
        ) : (
          <p>No Connections Found</p>
        )}
      </div>
    );
}

export default UserConnections;
