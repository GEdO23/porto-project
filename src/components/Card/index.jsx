import './style.css'
import PropTypes from 'prop-types'
import BotaoDefault from '../Botão/botaoDefault'


export default function Card(props) {

    Card.propTypes = {
        tit: PropTypes.string.isRequired,
        desc: PropTypes.string,
        link: PropTypes.string.isRequired,
    }

    return (
        <>
        <div className='card'>
            <h2 className='card-tit' >{props.tit}</h2>
            <p className='card-desc'>{props.desc}</p>
            <BotaoDefault txt={"ENTRAR"} link={props.link} />
        </div>
        </>
    )
}
