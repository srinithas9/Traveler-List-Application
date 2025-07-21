import React, { useEffect, useState } from 'react';
import { fetchTravelers, deleteTraveler, addTraveler } from '../api';
import TravelerCard from '../components/TravelerCard';
import AddTravelerForm from '../components/AddTravelerForm';
import { Link } from 'react-router-dom';
import '../App.css';

function TravelerListPage() {
  const [travelers, setTravelers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredTravelers, setFilteredTravelers] = useState([]);

  const getTravelers = async () => {
    const res = await fetchTravelers();
    setTravelers(res.data);
    setFilteredTravelers(res.data);
  };

  useEffect(() => {
    getTravelers();
  }, []);

  const handleSearchClick = () => {
    const filtered = travelers.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTravelers(filtered);
  };

  const handleAddTraveler = async (traveler) => {
    await addTraveler(traveler);
    getTravelers();
  };

  const handleDeleteTraveler = async (id) => {
    await deleteTraveler(id);
    getTravelers();
  };

  return (
    <div className="app-container">
      <h1>Traveler List</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearchClick} className="search-btn">
          Search
        </button>
      </div>

      <AddTravelerForm onAdd={handleAddTraveler} />

      {filteredTravelers.map((traveler) => (
        <Link to={`/travelers/${traveler._id}`} key={traveler._id}>
          <TravelerCard
            traveler={traveler}
            handleDelete={handleDeleteTraveler}
          />
        </Link>
      ))}
    </div>
  );
}

export default TravelerListPage;
