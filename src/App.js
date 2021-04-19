import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

// BEM class naming convention
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>Search page</h1>
          </Route>
          <Route path="/">
              <div className="app-page">
                <Sidebar />
                <RecommendedVideos />
              </div>
          </Route>

        </Switch>
      </Router>
         
     </div>
  
  );
}

export default App;
