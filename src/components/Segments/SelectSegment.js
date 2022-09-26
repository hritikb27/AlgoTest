import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSegment } from '../../features/Legs/legSlice';

const SelectSegment = () => {
    const segment = useSelector(state => state.legSlice.segment);
    const dispatch = useDispatch()

    const handleSelect = (event) => {
        if (event.currentTarget.value === 'futures') {
            dispatch(updateSegment('futures'))
        } else {
            dispatch(updateSegment('options'))
        }
    }
    return (
        <div className='w-full flex justify-center items-center gap-3'>
            <label>Select segments</label>
            <div>
                <input id="futures" value='futures' checked={segment === 'futures'} name="segments" onChange={(event) => handleSelect(event)} type="radio" className='hidden' />
                <label for="futures" className={segment === 'futures' ? "cursor-pointer rounded-tl-[16px] rounded-bl-[16px] px-3 h-[24px] border border-black text-white bg-[#375a9e]" : "cursor-pointer rounded-tl-[16px] rounded-bl-[16px] px-3 h-[24px] border border-black"}>Futures</label>
                <input id="options" value='options' checked={segment === 'options'} name="segments" onChange={(event) => handleSelect(event)} type="radio" className='hidden' />
                <label for="options" className={segment === 'options' ? "cursor-pointer rounded-tr-[16px] rounded-br-[16px] px-3 h-[24px] border border-black text-white bg-[#375a9e]" : "cursor-pointer rounded-tr-[16px] rounded-br-[16px] px-3 h-[24px] border border-black"}>Options</label>
            </div>
        </div>
    )
}

export default SelectSegment;