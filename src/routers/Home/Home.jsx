import Card from '../../components/Card/Card';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Card 
        tit={"Fazer Login"} 
        desc={'Faça login para acessar sua área'} 
        link={'/login'} 
        seguro={false} 
      />
      <Card 
        tit={"Registrar-se"} 
        desc={'Crie uma conta para começar'} 
        link={'/register'} 
        seguro={false} 
      />
    </div>
  )
}