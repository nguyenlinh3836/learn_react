import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <switch>
        <Route path="/" exact />
      </switch>
    </Router>
    </>
  );
}
export default App;
