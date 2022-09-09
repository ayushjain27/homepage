import React from 'react';
import './App.css';

import Homepage from './Components/Homepage';
import Information from './Components/Information';

function App() {
  return (
    <>
    <div className="main w-100">
        <Homepage />
        <Information />
    </div>
    </>
  );
}

export default App;
