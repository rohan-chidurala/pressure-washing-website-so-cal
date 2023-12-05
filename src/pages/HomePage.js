import React from 'react';

function HomePage() {
  return (
    <div>
      <nav style={{ backgroundColor: '#343a40', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Your Company Name</div>
        <div>
          <button style={{ marginRight: '1rem', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '0.5rem 1rem' }}>Our Services</button>
          <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Contact Us</button>
        </div>
      </nav>

      <div style={{ backgroundImage: 'url(path-to-your-hero-background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '4rem 1rem', color: 'white', textAlign: 'center' }}>
        <h1>Your Main Tagline Here</h1>
        <p style={{ maxWidth: '600px', margin: 'auto', fontSize: '18px' }}>Brief description or subtagline goes here.</p>
      </div>

      {/* Call to Action Section */}
      <div style={{ backgroundColor: '#f8f9fa', textAlign: 'center', padding: '2rem' }}>
        <h2>Why Choose Us?</h2>
        <p style={{ maxWidth: '600px', margin: 'auto' }}>Provide some reasons why customers should choose your service.</p>
      </div>

      {/* Services Section */}
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '2rem' }}>
        {/* Repeat this block for each service */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <img src="path-to-service-image.jpg" alt="Service Name" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
          <h3>Service Name</h3>
          <p>Short description of the service.</p>
          <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>Learn More</button>
        </div>
        {/* ... Other services */}
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#343a40', color: 'white', textAlign: 'center', padding: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;
