import { BlocBuilder } from "kiss-js-bloc-react"
import CounterBloc from "../bloc/counter-bloc"
import CustomButton from "./common/custom-button"
import './style.css'

let bloc = new CounterBloc()

const CounterActions: React.FC = () => {

    return (
        <div className="action-container">
            <CustomButton action={() => {bloc.call("increament", 1)}} text="+" />
            <CustomButton action={() => {bloc.call("decreament", 1)}} text="-" />
        </div>
    )
}

export default CounterActions

