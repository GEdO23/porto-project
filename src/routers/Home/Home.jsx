import Card from '../../components/Card/Card'
import './Home.css'

export default function Home() {

    return (
    <> 
    <main>
      <Card tit={"Contratar Seguro"} desc={'Descrição'} link={'/contratarseguro'} seguro={false} />
      <Card tit={"Gamificação"} desc={'Descrição'} link={'/gamificacao'} seguro={false} />
    </main>
    </>
    )
  }
  