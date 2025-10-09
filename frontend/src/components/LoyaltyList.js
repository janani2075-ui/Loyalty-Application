import React from 'react';

function LoyaltyList({ customers, onDelete }) {
  if (!customers || customers.length === 0) {
    return <p>No customers yet.</p>;
  }

  return (
    <div className="list">
      {customers.map((c) => (
        <div className="card" key={c.id}>
          <div className="card-info">
            <h3>{c.name}</h3>
            <p>Email: {c.email}</p>
            <p>Points: {c.points}</p>
          </div>
          <div className="card-actions">
            <button onClick={() => onDelete(c.id)} className="btn-delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoyaltyList;
