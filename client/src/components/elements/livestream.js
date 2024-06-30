// LiveStream.js
import React from 'react';

const LiveStream = () => {
  return (
    <div className="livestream-container">
      <h2 className="text-lg font-semibold mb-4">Live Stream</h2>
      <div className="livestream-video">
        {/* Replace with your live stream video URL or iframe */}
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Live Stream"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LiveStream;
