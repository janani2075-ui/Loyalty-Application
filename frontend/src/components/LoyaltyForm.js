import React, { useState } from 'react';

function LoyaltyForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onAdd({ name, email, points: Number(points) });
    setName('');
    setEmail('');
    setPoints(0);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Points
        <input type="number" value={points} onChange={(e) => setPoints(e.target.value)} />
      </label>
      <div>
        <button type="submit" className="btn-primary">Add Customer</button>
      </div>
    </form>
  );
}

export default LoyaltyForm;
