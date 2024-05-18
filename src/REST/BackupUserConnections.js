import React, { useEffect, useState } from 'react';
import ChangeStatus from './ChangeStatus';
import RemoveConnection from './RemoveConnection';
import axios from 'axios';

function UserConnections() {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/`;

    const getConnections = async () => {
      try {
        const ids = [0, 1, 2, 3, 4, 5];
        const fetchedConnections = await Promise.all(
          ids.map(async (id) => {
            const res = await axios.get(`${APIurl}/${id}`);
            const { userName, pairedOn, gamingHistory, profileImage } = res.data;
            return { id, userName, pairedOn, gamingHistory, profileImage };
          })
        );
        setConnections(fetchedConnections);
      } catch (error) {
        console.error('Error fetching connections:', error);
      }
    };

    getConnections();
  }, []);

  const handleRemoveConnection = (id) => {
    setConnections((prevConnections) =>
      prevConnections.filter((connection) => connection.id !== id)
    );
  };

  return (
    <div>
      <h2>UserConnections</h2>
      {connections.length > 0 ? (
        connections.map((connection) => (
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