import { Link } from 'react-router-dom'

import './style.css'

import logo from '../../imgs/porto-logo.svg'


export default function Cabecalho() {

  return (
    <>
    <header id='cabecalho' className='light'>
      <div id="pages">
        <Link to='/'>
          <img className='logo-porto' src={logo} />
        </Link>
      </div>


    </header>
    </>
  )
}
