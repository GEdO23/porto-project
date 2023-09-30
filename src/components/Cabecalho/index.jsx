import './style.scss'

import { Link } from 'react-router-dom'

import logo from '../../imgs/porto-logo.svg'
import menuIcon from '../../imgs/menu-icon.svg'
import pfpIcon from '../../imgs/pfp-icon.svg'

export default function Cabecalho() {

  return (
    <>
    <header id="cabecalho" className="light">

      <img src={menuIcon} alt="Menu" />

      <Link className="logoPorto" to="/">
        <img src={logo} alt="Porto" />
      </Link>

      <img className="" src={pfpIcon} alt="Usuario" />

    </header>
    </>
  )
}
