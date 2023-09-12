import PropTypes from 'prop-types'

import './style.css'



export default function Atividade(props) {
    
    Atividade.propTypes = {
        imgSrc: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        nome: PropTypes.string,
        exp: PropTypes.number.isRequired,
    }

    return (
        <>
        <article className='atividade'>
            <div className='container-info'>
                <img src={props.imgSrc} />
                <div className='txt-info'>
                    <p className='type-atividade'>{props.tipo}</p>
                    <p className='name-atividade'>{props.nome}</p>
                    <p className='exp-atividade'>XP + {props.exp}</p>
                </div>
            </div>
            <button className='btn-learn'>Learn</button>
        </article>
        </>
    )
}
