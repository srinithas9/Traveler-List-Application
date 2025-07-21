import React, { useEffect, useState } from 'react';
import { fetchTravelerById } from '../api';
import { useParams } from 'react-router-dom';

function TravelerDetailPage() {
  const { id } = useParams();
  const [traveler, setTraveler] = useState(null);

  useEffect(() => {
    const getTraveler = async () => {
      const res = await fetchTravelerById(id);
      setTraveler(res.data);
    };
    getTraveler();
  }, [id]);

  if (!traveler) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{traveler.name}</h2>
      <p>Age: {traveler.age}</p>
      <p>Email: {traveler.email}</p>
      <p>Travel Date: {new Date(traveler.travelDate).toLocaleDateString()}</p>
      <p>Created On: {new Date(traveler.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default TravelerDetailPage;
