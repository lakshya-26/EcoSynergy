// Card.js

import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
