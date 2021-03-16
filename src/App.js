import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/map"
import SideBar from './components/layouts/sideBar';
function App() {
  return (
    <div className="App">
      <SideBar/>
      <Map/>
    </div>
  );
}

export default App;
