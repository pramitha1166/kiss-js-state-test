import { BlocBuilder } from "kiss-js-bloc-react"
import './style.css'


const Header: React.FC = () => {

    return (
        <div className="header-container">
            <img src={require('../../img/icon.jpeg')} width={200} />
        </div>
    )
}

export default Header

