import './Card.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import negociochato from '../../imgs/Prosseguir.svg'




export default function Card(props) {

    Card.propTypes = {
        tit: PropTypes.string.isRequired,
        desc: PropTypes.string,
        link: PropTypes.string.isRequired,
        seguro: PropTypes.bool.isRequired,
    }

    if(props.seguro) {

        return (
            <>
            <div className="card">
                <h2 className='card-tit'>{props.tit}</h2>
                <p className='card-desc'>{props.desc}</p>

                <input type="text" placeholder='Número de Série' />
                <input type="text" placeholder='Marca da Bike' />
                <input type="text" placeholder='Modelo da Bike' />
                <input type="color" placeholder='Cor' />

                <Link className="btn-container" to={props.link}>
                    <p className="btn-txt" >Avançar</p>
                    <img src={negociochato} />
                </Link>
            </div>
            </>
        )
    } else {

        return (
            <>
            <div className='card'>
                <h2 className='card-tit' >{props.tit}</h2>
                <p className='card-desc'>{props.desc}</p>
                <Link className="btn-container" to={props.link}>
                    <p className="btn-txt" >Entrar</p>
                    <img src={negociochato} />
                </Link>
            </div>
            </>
        )
    }
}
