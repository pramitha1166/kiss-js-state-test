import { BlocBuilder } from "kiss-js-bloc-react"
import '../style.css'

type CustomButtonProps = {
    action: () => void,
    text: string,
}

const CustomButton = ({action, text}: CustomButtonProps) => {

    return (
        <div className="button-container">
            <button className="btn-style" onClick={action}>{text}</button>
        </div>
    )
}

export default CustomButton

