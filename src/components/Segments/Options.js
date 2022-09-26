import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import './segments.css'

const data = [
    {
        name: 'Position',
        options: ['Sell', 'Buy']
    },
    {
        name: 'Option Type',
        options: ['Call', 'Put']
    },
    {
        name: 'Expiry',
        options: ['Weekly', 'Monthly']
    },
    {
        name: 'Select Strike Criteria',
        options: ['Strike Type', 'Premium Range', 'Closest Premium', 'Straddle Width']
    },
    {
        name: 'Strike Type',
        options: ['ITM1', 'ITM2', 'ITM3', 'ITM4', 'ITM5','ATM', 'OTM1','OTM2','OTM3','OTM4']
    },
]

const Options = () => {

    return(
        <div className="flex gap-5">
            <div className='relative appearance-none flex flex-col justify-center items-center gap-2'>
                <label>Total lot</label>
                <div>
                    <input type='number' min='1' className='appearance-none border border-[#f6f6f6] rounded-xl h-[25px] w-[80px] px-3 py-[2px] text-xs ' />
                    <IoChevronUp className='absolute right-3 top-8 text-[#C7C7C7]' />
                    <IoChevronDown className='absolute right-3 bottom-0 text-[#C7C7C7]' />
                </div>
            </div>
            <div className='flex gap-5 justify-center'>
                {data.map(item=>{
                    return <div className='relative appearance-none flex flex-col justify-center items-center gap-2'>
                    <label>{item.name}</label>
                    <div>
                        <select>
                            {item.options.map(option=>{
                                return <option>{option}</option>
                            })}
                        </select>
                    </div>
                </div>
                })}
            </div>
        </div>
    )
}

export default Options;