import { Link } from 'react-router-dom'

import './style.css'

import omcorp from '../../imgs/omcorp-logo.svg'
import portologo from '../../imgs/porto-logo.svg'


export default function Rodape() {

  return (
    <>
    <footer id='rodape' >

      {/*  <img className='logo-omcorp' src={omcorp} /> */ }

      <p>|</p><Link to='/' className='rodape-link' >Atividades</Link>
      <p>|</p><Link to='/' className='rodape-link' >Placar</Link>
      <p>|</p><Link to='/' className='rodape-link' >Loja</Link>
      <p>|</p><Link to='/' className='rodape-link' >Configurações</Link>
      <p>|</p><Link to='/' className='rodape-link' >Participantes</Link>
      <p>|</p>

      <img className='logo-porto' src={portologo} />

    </footer>
    </>
  )
}
