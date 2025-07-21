import React, { useState } from 'react';

function AddTravelerForm({ onAdd }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraveler = { name, age, email, travelDate };
    onAdd(newTraveler);
    setName('');
    setAge('');
    setEmail('');
    setTravelDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-traveler-form">
      <input
        type="text"
        placeholder="Traveler Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="date"
        value={travelDate}
        onChange={(e) => setTravelDate(e.target.value)}
        required
      />
      <button type="submit">Add Traveler</button>
    </form>
  );
}

export default AddTravelerForm;
