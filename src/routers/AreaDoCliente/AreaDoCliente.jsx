import Card from '../../components/Card/Card'
import './AreaDoCliente.css';

export default function AreaDoCliente() {
  return (
    <div className="area-container">
      <Card 
        tit={"Contratar Seguro"} 
        desc={'Descrição'} 
        link={'/contratarseguro'} 
        seguro={false} 
      />
      <Card 
        tit={"Gamificação"} 
        desc={'Descrição'} 
        link={'/gamificacao'} 
        seguro={false} 
      />
    </div>
  )
}
