import React from 'react';

function TravelerCard({ traveler, handleDelete }) {
  return (
    <div className="traveler-card">
      <div>
        <img
          src={traveler.image}
          alt={traveler.name}
          style={{ width: '80px', height: '80px', borderRadius: '50%' }}
        />
        <h3>{traveler.name}</h3>
        <p>Status: {traveler.status}</p>
      </div>
      <button onClick={() => handleDelete(traveler._id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default TravelerCard;
