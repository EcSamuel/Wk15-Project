import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';

const CrudExample = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const addData = (newItem) => {
    const newEntry = { id: data.length + 1, title: newItem };
    setData([...data, newEntry]);
  };

  const updateData = (id, updatedTitle) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, title: updatedTitle } : item
    );
    setData(updatedData);
  };

  const deleteData = (id) => {
    const filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
  };

  return (
    <div>
      <h1>CRUD Example</h1>
      <AddItem addData={addData} />
      <ItemList data={data} updateData={updateData} deleteData={deleteData} />
    </div>
  );
};

export default CrudExample;
