import { BlocBuilder } from "kiss-js-bloc-react"
import CounterBloc from "../bloc/counter-bloc"
import './style.css'

let bloc = new CounterBloc()

const CounterComponent: React.FC = () => {

    return (
        <div className="container">
            <div className="box">
            <BlocBuilder bloc={bloc} builder={(state: number) => {
                return <p className="text">{state}</p>
            }} />
            </div>
           
        </div>
    )
}

export default CounterComponent

