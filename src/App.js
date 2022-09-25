import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [segment, setSegment] = useState('options')

  const handleSelect = (event) => {
    if(event.currentTarget.value === 'futures'){
      setSegment('futures')
    }else{
      setSegment('options')
    }
  }

  return (
    <div className="w-full flex flex-col items-center p-2 m-1 mt-0">
      <div className='w-full flex justify-center items-center gap-3'>
        <label>Select segments</label>
        <div>
          <input id="futures" value='futures' checked={segment === 'futures'} name="segments" onChange={(event)=>handleSelect(event)} type="radio" className='hidden' />
          <label for="futures" className={segment === 'futures' ? "rounded-tl-[16px] rounded-bl-[16px] px-3 h-[24px] border border-black text-white bg-[#375a9e]" : "rounded-tl-[16px] rounded-bl-[16px] px-3 h-[24px] border border-black"}>Futures</label>
          <input id="options" value='options' checked={segment === 'options'} name="segments" onChange={(event)=>handleSelect(event)} type="radio" className='hidden' />
          <label for="options" className={segment === 'options' ? "rounded-tr-[16px] rounded-br-[16px] px-3 h-[24px] border border-black text-white bg-[#375a9e]" : "rounded-tr-[16px] rounded-br-[16px] px-3 h-[24px] border border-black"}>Options</label>
        </div>
      </div>
    </div>
  );
}

export default App;
