import React, { useState, useEffect } from 'react';

// Task 4: DoctorsPage consuming Express REST API (GET /api/v1/doctors)
const DoctorsPage = () => {
  // Maintain exactly three required states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect triggers async fetch request when component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError(null);
        // Call Express REST API endpoint created in Task 3
        const response = await fetch('http://localhost:5000/api/v1/doctors');
        
        if (!response.ok) {
          throw new Error(`Server Error: ${response.status}`);
        }

        const doctorsData = await response.json();
        setData(doctorsData);
      } catch (err) {
        setError(err.message || 'Failed to fetch doctor details');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []); // Empty dependency array means runs once on mount

  // 1. Display Loading state while request is in progress
  if (loading) {
    return (
      <div className="container">
        <h1 className="page-title">Hospital Doctors</h1>
        <p className="loading-text">Loading doctors data...</p>
      </div>
    );
  }

  // 2. Display Error state if request fails
  if (error) {
    return (
      <div className="container">
        <h1 className="page-title">Hospital Doctors</h1>
        <p className="error-text">Error: {error}</p>
        <p>Make sure the backend Express server is running on http://localhost:5000</p>
      </div>
    );
  }

  // 3. Display Doctor data after successful response
  return (
    <div className="container">
      <h1 className="page-title">Available Doctors</h1>
      {data.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        data.map((doctor) => (
          <div key={doctor.id || doctor._id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Specialisation:</strong> {doctor.specialisation}</p>
            <p>
              <strong>Availability:</strong>{' '}
              <span className={doctor.available ? 'available-tag' : 'unavailable-tag'}>
                {doctor.available ? 'Available' : 'Not Available'}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default DoctorsPage;
