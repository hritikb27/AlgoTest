import { useDispatch, useSelector } from "react-redux"
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { updateLeg } from "../../features/Legs/renderLegSlice";
import Futures from "./Futures";
import Options from "./Options";

const RenderLegs = () => {
    const legs = useSelector(state => state.renderLegSlice.legs);

    return (
        <div className="flex flex-col gap-5">
            {legs.map(leg => {
                if (leg.type === 'futures') {
                    return <Futures leg={leg} />
                }
                else {
                    return <Options leg={leg} />
                }
            })}
        </div>
    )
}

export default RenderLegs;