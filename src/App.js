import { useState } from 'react';
import './App.css';
import BottomTab from './components/BottomTab';

function App() {
  return (
    <>
    <div className='  bg-pink-200 '>
      <div className=''>
            <button>Open Sheet</button>
        </div>
    </div>
   <BottomTab  />
    </>
  );
}

export default App;
