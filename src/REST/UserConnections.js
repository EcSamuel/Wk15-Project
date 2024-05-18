// import RemoveConnection from './RemoveConnection'


// function UserConnections() {

//     const [connections, setConnections] = useState([]);

//     useEffect(() => {
//         const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/`

//         let getConnections = async () => {
//             let myConnections = [];
//             let ids = [0,1,2,3,4,5]

//             for (let id of ids) {
//                 let res = await axios.get(`${APIurl}/${id}`);

//                 let prevConnections = res.data.userName //possible I need to not call this as prevConnections for a few reasons
//                 let pairedDate = res.data.pairedOn
//                 let pairedHistory = res.data.gamingHistory
//                 let profileImage = res.data.profileImage

//             }

//             setConnections(myConnections);
//         }
//         getConnections();
//     })

//   return (
//     <div>
//         <h2>UserConnections</h2>
//         <ChangeStatus/>
//         {/* <RemoveConnection/> */}
//     </div>

//   )
// }

// export default UserConnections

// import React from 'react';
// import ChangeStatus from './ChangeStatus';
// import RemoveConnection from './RemoveConnection';
// import axios from 'axios'

// function UserConnections({ connections }) {
//   return (
//     <div>
//       <h2>UserConnections</h2>
//       {connections.map(connection => (
//         <div key={connection.id}>
//           <img src={connection.profileImage} alt={`${connection.userName}'s profile`} />
//           <h3>{connection.userName}</h3>
//           <p>Paired on: {connection.pairedOn}</p>
//           <p>Gaming History: {connection.gamingHistory}</p>
//           <ChangeStatus />
//           <RemoveConnection id={connection.id} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserConnections;

import React from 'react';
import ChangeStatus from './ChangeStatus';
import RemoveConnection from './RemoveConnection';

function UserConnections({ connections, onRemove }) {
    console.log("connections" , connections)
  return (
    <div>
      <h2>UserConnections</h2>
      {connections != "Not found" ? connections.map(connection => (
        <div key={connection.id}>
          <img src={connection.profileImage} alt={`${connection.userName}'s profile`} />
          <h3>{connection.userName}</h3>
          <p>Paired on: {connection.pairedOn}</p>
          <p>Gaming History: {connection.gamingHistory}</p>
          <ChangeStatus />
          <RemoveConnection id={connection.id} onRemove={onRemove} />
        </div>
      )): <p>No Connections Found</p>}
    </div>
  );
}

export default UserConnections;
