import React from "react";

const Video: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 p-8">
      <div className="w-full md:w-1/2 p-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[400px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/8q7_aV8eLUE?autoplay=1&loop=1&playlist=8q7_aV8eLUE"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 text-left">
        <h2 className="text-3xl font-sans font-bold mb-4 text-green-800 heading text-center">
          Effects of Carbon Footprint
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify font-sans">
          The carbon footprint from human activities is wreaking havoc on our
          planet. It traps heat, leading to rising temperatures, melting ice
          caps, and rising sea levels. Extreme weather events like hurricanes,
          droughts, and floods are becoming more frequent and devastating.
          Ecosystems are disrupted, threatening biodiversity and food security.
          This relentless carbon emission endangers our health and future,
          demanding immediate action. Reducing our carbon footprint isn't just
          an option—it's a necessity for safeguarding our planet for future
          generations.
        </p>
      </div>
    </div>
  );
};

export default Video;
