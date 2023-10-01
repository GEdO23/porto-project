import './style.scss'

import menuIcon from '../../imgs/menu-icon.svg'
import logo from '../../imgs/porto-logo.svg'
import pfpIcon from '../../imgs/pfp-icon.svg'

export default function Cabecalho() {

  return (
    <>
    <header id="cabecalho">
      <img src={menuIcon} alt="Menu" />
      <img src={logo} alt="Porto" />
      <img src={pfpIcon} alt="Usuario" />

    </header>
    </>
  )
}
