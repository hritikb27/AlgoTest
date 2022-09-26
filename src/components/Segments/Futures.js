import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

const Futures = () => {

    return(
        <div className='flex gap-5'>
            <div className='relative appearance-none flex flex-col justify-center items-center gap-2'>
                <label>Total lot</label>
                <div>
                    <input type='number' min='1' className='appearance-none border border-[#f6f6f6] rounded-xl h-[25px] w-[80px] px-3 py-[2px] text-xs ' />
                    <IoChevronUp className='absolute right-3 top-8 text-[#C7C7C7]' />
                    <IoChevronDown className='absolute right-3 bottom-0 text-[#C7C7C7]' />
                </div>
            </div>
            <div className='flex gap-5 justify-center'>
                <div className='relative appearance-none flex flex-col justify-center items-center gap-2'>
                    <label>Position</label>
                    <div>
                        <select> 
                            <option>Sell</option>
                            <option>Buy</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Futures;