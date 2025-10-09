import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Retail Loyalty WebApp</h1>
        <p>React frontend integrated with Java Spring Boot backend (port 8080)</p>
      </header>
      <main className="app-main">
        <Dashboard />
      </main>
      <footer className="app-footer">© Janani Veerakumar - Loyalty Module Demo</footer>
    </div>
  );
}

export default App;
