import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Routes from './router/router';

function App() {
  return (
    <main>
      <Router>
        <Routes />
      </Router>
    </main>
  );
}

export default App;
