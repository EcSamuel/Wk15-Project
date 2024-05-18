import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddConnection() {
    const APIurl = `https://662075d03bf790e070afcd1f.mockapi.io/Rule0Test/Connections`;
    const [userName, setUserName] = useState('');
    const [pairedOn, setPairedOn] = useState('');
    const [gamingHistory, setGamingHistory] = useState('');
    const [profileImage, setProfileImage] =useState ('');
    // const [nextId, setNextId] =useState(null);

    useEffect(() => {
        axios.get(APIurl)
        .then(res => {
            // setNextId(res.data.nextId);
            console.log(res.data)
        })
        .catch(error => {
            console.error('Error fetching the next ID', error);
        })
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = {
            // id: nextId,
            userName: userName,
            pairedOn: pairedOn,
            gamingHistory: gamingHistory,
            profileImage: '',
            isFavorite: false
        };

        try {
            const response =await axios.post(APIurl, newUser);
        console.log('User added successfully', response.data);
        } catch (error) {
            console.error('Error adding user', error);
        }
    };

    // const handleAdd = async () => {
    //     try {
    //         await axios.put(`${APIurl}/`);
    //     } catch (error) {
    //         console.error('Error adding connection', error);
    //     }
    // }
    
    return (// the button probably doesn't have all the properties it should since the values are essentially undefined presently- note the distinction between handlesubmit and handleadd//
        <div>
            <h2>Add New User</h2>
            <form onSubmit ={handleSubmit}>
                <div>
                    <label>User Name:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Paired On:</label>
                    <input
                    type="date"
                    value={pairedOn}
                    onChange={(e) => setPairedOn(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Gaming History:</label>
                    <input
                    type="number"
                    value={gamingHistory}
                    onChange={(e) => setGamingHistory(e.target.value)}
                    required
                    />
                </div>
                <button onclick={handleSubmit}>
                    Add a New Connection
                </button>
            </form>
        </div>
        
  )
}

export default AddConnection