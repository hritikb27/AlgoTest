import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import RenderLegs from './components/RenderLegs';
import Futures from './components/Segments/Futures';
import Options from './components/Segments/Options';
import SelectSegment from './components/Segments/SelectSegment';
import { addLeg } from './features/Legs/renderLegSlice';

function App() {
  const segment = useSelector(state => state.legSlice.segment);
  const futureLeg = useSelector(state => state.futureSlice)
  const optionsLeg = useSelector(state => state.optionSlice)
  const dispatch = useDispatch();

  const addLegs = () => {
    let newLeg;
    if (segment === 'options') {
      newLeg = {
        id: uuid(),
        type: 'options',
        totalLot: optionsLeg.totalLot,
        position: optionsLeg.position,
        optionType: optionsLeg.optionType,
        expiry: optionsLeg.expiry,
        strikeCriteria: optionsLeg.strikeCriteria,
        strikeType: optionsLeg.strikeType,
        SM: {
          checked: true,
          type: 'Underlying Percentage ↓',
          value: 2
        },
        TSL: {
          checked: true,
          type: 'Points',
          value1: 0,
          value2: 0,
        },
      }
    } else {
      newLeg = {
        id: uuid(),
        type: 'futures',
        value: futureLeg.value,
        SM: {
          checked: true,
          type: 'Underlying Percentage ↓',
          value: 2
        },
        TSL: {
          checked: true,
          type: 'Points',
          value1: 0,
          value2: 0,
        },
      }

    }
    console.log(newLeg)
    dispatch(addLeg(newLeg))
  }

  return (
    <div className="w-full flex flex-col items-center p-2 m-1 mt-0 gap-5">
      <SelectSegment />
      {segment === 'options' ? <Options /> : <Futures />}
      <div className='flex gap-5'>
        <button className='bg-[#375a9e] text-white w-[125px] rounded-2xl cursor-pointer' onClick={addLegs}>Add Leg</button>
        <button className='bg-white border border-[#efefef] w-[125px] rounded-2xl cursor-pointer'>Cancel</button>
      </div>
      <RenderLegs />
    </div>
  );
}

export default App;
