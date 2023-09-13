import './style.css'

import omcorp from '../../imgs/omcorp-logo.svg'
import portologo from '../../imgs/porto-logo.svg'


export default function Rodape() {

  return (
    <>
    <footer id='rodape' >

      <img className='logo-omcorp' src={omcorp} />
      <img className='logo-porto' src={portologo} />

    </footer>
    </>
  )
}
