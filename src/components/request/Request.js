import React, { useState, useEffect } from 'react';

const Request = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/requests.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendToJson = () => {
    const newItem = { text: inputValue };
    setItems([...items, newItem]);
    console.log('New item added:', newItem);
  };

  return (
    <div>
      <h1>Enter Your Request:</h1>
      <input type='text' value={inputValue} onChange={handleChange} />
      <button onClick={handleSendToJson}>Add</button>

      <h2>Your Requests:</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Request;
