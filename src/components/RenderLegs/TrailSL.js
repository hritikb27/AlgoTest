import { useDispatch, useSelector } from "react-redux"
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { updateLeg } from "../../features/Legs/renderLegSlice";

const TrailSL = ({ leg }) => {
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

    const handleSMtype = (value, id) => {
        const newLegs = legs.map(leg => {
            if (leg.id === id) {
                return {
                    ...leg,
                    SM: {
                        ...leg.SM,
                        type: value.target.value,
                    }
                }
            } else {
                return leg
            }
        })

        dispatch(updateLeg(newLegs))
    }
    return <div className="flex flex-col gap-5" key={leg.id}>
        <div className="flex gap-5">
            <label>Lot</label>
            <div className="relative">
                <input type='number' min='1' value={leg.value} onChange={(event) => handleLotValue(event.target.value, leg.id)} className='appearance-none border border-[#f6f6f6] rounded-xl h-[25px] w-[80px] px-3 py-[2px] text-xs ' />
                <IoChevronUp className='absolute right-3 top-0 text-[#C7C7C7]' />
                <IoChevronDown className='absolute right-3 bottom-0 text-[#C7C7C7]' />
            </div>
            <select>
                <option>Sell</option>
                <option>Buy</option>
            </select>
        </div>

        <div>
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
        </div>
    </div>
}

export default TrailSL;