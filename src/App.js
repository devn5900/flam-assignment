import { useState } from 'react';
import './App.css';
import BottomTab from './components/BottomTab';

function App() {

  return (
    <>
    <div className=' flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-5xl font-bold text-center p-3'>Welcome to Flam's</h1>
        </div>
    <div  className='  bg-white '>
      
   <BottomTab   />
    </div>
    </>
  );
}

export default App;
