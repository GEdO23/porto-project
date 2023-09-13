import { Link } from 'react-router-dom'

import './style.css'

import heart from '../../imgs/heart.svg'
import star from '../../imgs/star.svg'
import logo from '../../imgs/porto-logo.svg'


export default function Cabecalho() {

  return (
    <>
    <header id='cabecalho' className='light'>
      <div id="pages">
        <a href='https://www.portoseguro.com.br'>
          <img className='logo-porto' src={logo} />
        </a>

        <Link to='/' className='page-link' >Contratar Seguro</Link>
        <Link to='/' className='page-link' >Atividades</Link>
        <Link to='/' className='page-link' >Participantes</Link>

      </div>
      
      <div id="user-stats">
        <div id="life-stat">
          <img src={heart} alt="Vidas: " />
          <p id='id-qtd-lifes' >3</p>
        </div>

        <div id="point-stat">
          <img src={star} alt="Pontos: " />
          <p id='id-qtd-points' >0</p>
        </div>

      </div>
    </header>
    </>
  )
}
