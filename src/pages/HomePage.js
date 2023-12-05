import React from 'react';
import '../styles/Home.css'; // Import your CSS file
import backgroundImage from '../assets/pexels-photo-106399.jpeg'; // Import your background image

const HomePage = () => {
  return (
    <div className="full-screen-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <div className="description">
          <h2>About Pressure Washing</h2>
          <p>A brief description of what a pressure washing business does...</p>
        </div>
        <div className="quote-form">
          <h2>Get Your Free Quote</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Address" />
            <textarea placeholder="Additional Information"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
