import { useSelector } from 'react-redux';
import RenderLegs from './components/RenderLegs';
import Futures from './components/Segments/Futures';
import Options from './components/Segments/Options';
import SelectSegment from './components/Segments/SelectSegment';

function App() {
  const segment = useSelector(state => state.legSlice.segment);

  return (
    <div className="w-full flex flex-col items-center p-2 m-1 mt-0 gap-5">
        <SelectSegment />
        {segment === 'options' ? <Options /> : <Futures />}
        <div className='flex gap-5'>
          <button className='bg-[#375a9e] text-white w-[125px] rounded-2xl cursor-pointer '>Add Leg</button>
          <button className='bg-white border border-[#efefef] w-[125px] rounded-2xl cursor-pointer'>Cancel</button>
        </div>
        <RenderLegs />
    </div>
  );
}

export default App;
