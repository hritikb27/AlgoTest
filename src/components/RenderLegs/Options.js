import { useDispatch, useSelector } from "react-redux"
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { updateLeg } from "../../features/Legs/renderLegSlice";

const options = ['ITM1', 'ITM2', 'ITM3', 'ITM4', 'ITM5','ATM', 'OTM1','OTM2','OTM3','OTM4'];

const Options = ({ leg }) => {
    const legs = useSelector(state => state.renderLegSlice.legs);
    const dispatch = useDispatch();

    const handleLotValue = (value, id) => {
        const newLegs = legs.map(leg => {
            if (leg.id === id) {
                return {
                    ...leg,
                    value: value,
                }
            } else {
                return leg
            }
        })

        dispatch(updateLeg(newLegs))
    }

    const handleSMselect = (checked, id) => {
        console.log(checked)
        const newLegs = legs.map(leg => {
            if (leg.id === id) {
                return {
                    ...leg,
                    SM: {
                        ...leg.SM,
                        checked: !checked,
                    }
                }
            } else {
                return leg
            }
        })

        dispatch(updateLeg(newLegs))
    }

    const handleTSLselect = (checked, id) => {
        const newLegs = legs.map(leg => {
            if (leg.id === id) {
                return {
                    ...leg,
                    TSL: {
                        ...leg.TSL,
                        checked: !checked,
                    }
                }
            } else {
                return leg
            }
        })

        dispatch(updateLeg(newLegs))
    }

    const handleSMtype = (value, id) => {
        const newLegs = legs.map(leg => {
            if (leg.id === id) {
                return {
                    ...leg,
                    SM: {
                        ...leg.SM,
                        type: value,
                    }
                }
            } else {
                return leg
            }
        })

        dispatch(updateLeg(newLegs))
    }

    const handleTSLValue = (value, id, valueType) => {
        let newLegs;
        if (valueType === '1') {
            newLegs = legs.map(leg => {
                if (leg.id === id) {
                    return {
                        ...leg,
                        TSL: {
                            ...leg.TSL,
                            value1: value,
                        }
                    }
                } else {
                    return leg
                }
            })
        }else{
            newLegs = legs.map(leg => {
                if (leg.id === id) {
                    return {
                        ...leg,
                        TSL: {
                            ...leg.TSL,
                            value2: value,
                        }
                    }
                } else {
                    return leg
                }
            })
        }

        dispatch(updateLeg(newLegs))
    }

    const handleTSLtype = (value, id) => {
        const newLegs = legs.map(leg => {
            if (leg.id === id) {
                return {
                    ...leg,
                    TSL: {
                        ...leg.TSL,
                        type: value,
                    }
                }
            } else {
                return leg
            }
        })

        dispatch(updateLeg(newLegs))
    }

    return <div className="flex flex-col gap-5 bg-[#efefef] p-10 rounded-xl" key={leg.id}>
        <div className="flex gap-5 justify-center">
            <label>Lot</label>
            <div className="relative">
                <input type='number' min='1' value={leg.value} onChange={(event) => handleLotValue(event.target.value, leg.id)} className='appearance-none border border-[#f6f6f6] rounded-xl h-[25px] w-[80px] px-3 py-[2px] text-xs ' />
                <IoChevronUp className='absolute right-3 top-0 text-[#C7C7C7]' />
                <IoChevronDown className='absolute right-3 bottom-0 text-[#C7C7C7]' />
            </div>
            <select defaultValue={leg.position} className="bg-[#375a9e] text-white" >
                <option>Sell</option>
                <option>Buy</option>
            </select>
            <select defaultValue={leg.optionType} className="bg-[#375a9e] text-white">
                <option>Call</option>
                <option>Put</option>
            </select>
            <select defaultValue={leg.expiry} className="bg-[#375a9e] text-white">
                <option>Weekly</option>
                <option>Monthly</option>
            </select>
            <label>Select Strike</label>
            <select defaultValue={leg.expiry} className="bg-[#375a9e] text-white">
                <option>Strike Type</option>
                <option>Premium Range</option>
                <option>Closest Premium</option>
                <option>Straddle Width</option>
            </select>
            <select defaultValue={leg.strikeType} className="bg-[#375a9e] text-white">
                <option>Weekly</option>
                <option>Monthly</option>
            </select>
            <select defaultValue={leg.position} className="bg-[#375a9e] text-white" >
                {options.map(option=>{
                    return <option>{option}</option>
                })}
            </select>
        </div>

        <div className="flex gap-5">
            <div>
                <div className="flex gap-2">
                    <input type='checkbox' checked={leg.SM.checked} onChange={() => handleSMselect(leg.SM.checked, leg.id)} />
                    <label>Simple Momentum</label>
                </div>
                <div className="flex gap-5">
                    <select defaultValue={leg.SM.type} onChange={(event) => handleSMtype(event.target.value, leg.id)} className="rounded-2xl px-3">
                        <option>Points ↑</option>
                        <option>Points ↓</option>
                        <option>Percentage ↑</option>
                        <option>Percentage ↓</option>
                        <option>Underlying Points ↑</option>
                        <option>Underlying Points ↓</option>
                        <option>Underlying Percentage ↑</option>
                        <option>Underlying Percentage ↓</option>
                    </select>

                    <div className="relative">
                        <input type='number' min='1' value={leg.SM.value} onChange={(event) => handleLotValue(event.target.value, leg.id)} className='appearance-none border border-[#f6f6f6] rounded-xl h-[25px] w-[80px] px-3 py-[2px] text-xs ' />
                        <IoChevronUp className='absolute right-3 top-0 text-[#C7C7C7]' />
                        <IoChevronDown className='absolute right-3 bottom-0 text-[#C7C7C7]' />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-2">
                    <input type='checkbox' checked={leg.TSL.checked} onChange={() => handleTSLselect(leg.TSL.checked, leg.id)} />
                    <label>Trail SL</label>
                </div>

                <div className="flex gap-5">
                    <select defaultValue={leg.TSL.type} onChange={(event) => handleTSLtype(event.target.value, leg.id)} className="rounded-2xl px-3">
                        <option>Points</option>
                        <option>Percentage</option>
                    </select>

                    <div className="relative">
                        <input type='number' min='1' value={leg.TSL.value1} onChange={(event) => handleTSLValue(event.target.value, leg.id, '1')} className='appearance-none border border-[#f6f6f6] rounded-xl h-[25px] w-[80px] px-3 py-[2px] text-xs ' />
                        <IoChevronUp className='absolute right-3 top-0 text-[#C7C7C7]' />
                        <IoChevronDown className='absolute right-3 bottom-0 text-[#C7C7C7]' />
                    </div>
                    
                    <div className="relative">
                        <input type='number' min='1' value={leg.TSL.value2} onChange={(event) => handleTSLValue(event.target.value, leg.id, '2')} className='appearance-none border border-[#f6f6f6] rounded-xl h-[25px] w-[80px] px-3 py-[2px] text-xs ' />
                        <IoChevronUp className='absolute right-3 top-0 text-[#C7C7C7]' />
                        <IoChevronDown className='absolute right-3 bottom-0 text-[#C7C7C7]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Options;