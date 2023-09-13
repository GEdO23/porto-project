import './botaoDefault.css'
import { Link } from 'react-router-dom'
import negociochato from '../../imgs/Prosseguir.svg'
import PropTypes from 'prop-types'

export default function BotaoDefault(props) {

    BotaoDefault.propTypes = {
        txt: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }

    return (
        <>
        <Link className="btn-container" to={props.link}>
            <p className="btn-txt" >{props.txt}</p>
            <img src={negociochato} />
        </Link>
        </>
    )
}
