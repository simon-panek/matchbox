
import MatchBoard from './components/matchboard';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './components/header';
// import Footer from './components/footer';
import Dashboard from './components/dashboard';
// import Gameover from './components/game-over';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Dashboard />
        <MatchBoard />
      </BrowserRouter>

    </div>
  );
}

export default App;
