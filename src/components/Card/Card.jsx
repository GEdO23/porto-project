import './Card.scss'

import PropTypes from 'prop-types'

import Botao from '../Botao/Botao'

function Card(props) {

  return (
    <>
    <section className='card'>
      
      <div className='conteudoCard'>
        <h1>{props.titulo}</h1>

        <p>{props.descricao}</p>

        <Botao text={props.btnTxt}/>
      </div>
      <div className='conteudoCard'>
        <img src={props.img} alt={props.alt} />
      </div>

    </section>
    </>
  )
} export default Card


Card.defaultProps = {
  btnTxt: 'Saiba mais'
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  img: PropTypes.object,
  alt: PropTypes.string,
  btnTxt: PropTypes.string,
};
