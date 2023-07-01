import React from 'react';

const SpotifyEmbed = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Define a altura da tela inteira
    }}
  >
    <div style={{ borderRadius: '12px', width: '40%', maxWidth: '600px' }}>
      <iframe
        src="https://open.spotify.com/embed/track/7xjxiAQUByBANNUrSl8pBr?utm_source=generator&theme=0"
        width="100%"
        height="300"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
);

export default SpotifyEmbed;
