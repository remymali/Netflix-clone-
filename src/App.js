import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {action,orginals,ComedyMovies} from './urls'
//import Test from './Components/Test/Test'

function App() {
  return (
    <div>
       <Navbar/> 
      <Banner/>
      <Rowpost url={orginals} title="Netflix Original"/> 
      <Rowpost url={action} title="Action" isSmall/>
      <Rowpost url={ComedyMovies} title="Comedy" isSmall/>
      {/* <Test/> */}
    </div>
  );
}

export default App;
