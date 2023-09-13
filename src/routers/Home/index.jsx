import Card from '../../components/Card'
import './style.css'

export default function Home() {

    return (
    <> 
    <main>
      <Card tit={"Contratar Seguro"} desc={'Descrição'} link={'/'}/>
      <Card tit={"Gamificação"} desc={'Descrição'} link={'/'}/>
    </main>
    </>
    )
  }
  