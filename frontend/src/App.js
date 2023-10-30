import React, { useState } from 'react';
import './App.css';
import axios from 'axios'; 
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json', // Set the content type to JSON
    };
    try {
      const response = await axios.post('/submit',JSON.stringify(formData), { headers }) // Use Axios to make the POST request
  
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };
  

  return (
    <div className="App">
      <div className="form">
        <div id="head">
          <h1>Get In Touch!</h1>
          <h2>Use the contact form below to get in touch.</h2>
        </div>
        <form onSubmit={handleSubmit}>
            Name:<br />
          <input
            name="name"
            type="text"
            className="basic"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <br />Email Address:<br />
          <input
            name="email"
            type="email"
            className="basic"
            placeholder="your@sample.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />Contact:<br />
          <input
            name="contact"
            type="text"
            className="basic"
            placeholder="Your Contact Number"
            required
            value={formData.contact}
            onChange={handleChange}
          />
          <br />
          <br />Message:<br />
          <textarea
            name="message"
            className="basic"
            cols="30"
            rows="10"
            placeholder="Write your text here."
            required
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Send Away!" className="btn" />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default App;
