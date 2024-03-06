import React, { useState } from 'react';
import './Chatbox.css';

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      handleAIResponse(input);
      setInput('');
    }
    if (image) {
      handleImageUpload();
    }
  };

  const handleResponse = (response) => {
    setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'ai' }]);
  };

  const handleAIResponse = async (inputText) => {
    // Existing chat functionality for text input
    const response = await fetch('/api/chatbox', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: inputText }),
    });
    const data = await response.json();
    handleResponse(data.response);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('images', image);

    try {
      const response = await fetch('https://api.plant.id/v2/identify', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer yourBearerTokenHere',
        },
        body: formData,
      });

      const data = await response.json();
      // Adjust according to the actual API response
      handleResponse(`Plant identified: ${data.suggestions[0].plant.name}`);
    } catch (error) {
      console.error('Error:', error);
      handleResponse('An error occurred while identifying the plant.');
    }

    setImage(null); // Clear the image after processing
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      setMessages([...messages, { text: "Image uploaded. Please wait for identification.", sender: 'user' }]);
    }
  };

  return (
    <div className="Chatbox">
      <div className="ai-chatbox-description">
        <h2>Understanding Our AI Chatbox for Plant Identification:</h2>
        <p>
          Welcome to our innovative AI Chatbox, designed for effortless plant care and identification. Simply upload an image of your plant, and our AI will analyze and identify it, providing care tips and insights. Click the image upload button, wait for identification, and receive valuable information about your plant. Whether you're a new plant parent or an experienced enthusiast, our chatbox is here to assist you.
        </p>
      </div>

      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <input type="file" accept="image/*" onChange={onImageChange} />
        <button type="submit">Send</button>
      </form>

      <footer className="footer">
        <p>© {new Date().getFullYear()} LeafyLux - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Chatbox;
