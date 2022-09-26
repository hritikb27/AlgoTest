import { useDispatch, useSelector } from "react-redux"
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { updateLeg } from "../../features/Legs/renderLegSlice";
import SimpleMomentum from "./SimpleMomentum";

const RenderLegs = () => {
    const legs = useSelector(state => state.renderLegSlice.legs);

    return (
        <div className="flex flex-col gap-5">
            {legs.map(leg => {
                if (leg.type === 'options') {
                    return <SimpleMomentum leg={leg} />
                }
                else {
                    return null
                }
            })}
        </div>
    )
}

export default RenderLegs;