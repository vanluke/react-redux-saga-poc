import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './app.css';

export const App = () => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Saga POC</h2>
      </div>
      <section>
        <nav>
          <Link to="/posts">Posts</Link>
          <Link to="/counter">Counter</Link>
        </nav>
      </section>
    </div>
  );

export default App;
