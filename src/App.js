import { useState } from 'react';
import './App.css';
import BottomTab from './components/BottomTab';

function App() {
  const [open,setOpen]= useState(false);
  return (
    <>
    <div className=' flex flex-col gap-5 items-center justify-center'>
            <h1 className='text-5xl font-bold text-center p-3'>Welcome to Flam's</h1>
        <button onClick={()=>setOpen(!open)} className='py-2 px-5 bg-pink-800 text-sm font-bold text-white rounded-xl hover:bg-pink-600'>{open?"Close":"Open"} Sheet</button>
        </div>
    <div  className='  bg-white '>
      
   {open&&<BottomTab setOpen={setOpen}  />}
    </div>
    </>
  );
}

export default App;
