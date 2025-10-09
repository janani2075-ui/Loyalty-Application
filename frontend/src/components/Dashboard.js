import React, { useEffect, useState } from 'react';
import { getCustomers, addCustomer, deleteCustomer } from '../api';
import LoyaltyList from './LoyaltyList';
import LoyaltyForm from './LoyaltyForm';

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await getCustomers();
      setCustomers(res.data);
    } catch (err) {
      setError('Failed to load customers. Is the backend running on port 8080?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAdd = async (customer) => {
    try {
      await addCustomer(customer);
      fetchCustomers();
    } catch (err) {
      setError('Failed to add customer.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCustomer(id);
      fetchCustomers();
    } catch (err) {
      setError('Failed to delete customer.');
    }
  };

  return (
    <div className="dashboard">
      <div className="left">
        <h2>Customers</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <LoyaltyList customers={customers} onDelete={handleDelete} />
      </div>
      <div className="right">
        <h2>Add Customer</h2>
        <LoyaltyForm onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default Dashboard;