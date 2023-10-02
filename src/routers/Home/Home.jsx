import './Home.scss'

import Card from '../../components/Card/Card'

import segurosBikePhoto from '../../imgs/bike-photo.jpg'
import gamificaoImg from '../../imgs/game-img.jpg'
import omcorpLogo from '../../imgs/omcorp-logo.svg'


function Home() {
  return (
    <div className="homeContainer">
      <Card 
      titulo="Contrate sua bike com IA" 
      descricao="Um novo meio de contratar seguros bike, utilizando inteligência artificial para uma nova experiência!" 
      img={segurosBikePhoto}
      alt="Bike" 
      />
      <Card 
      titulo="Cursos Gamificados" 
      descricao="Venha ver nosso novo curso gamificado criado especialmente para você! Aprenda mais sobre seguros bike conosco de forma gratuita e eficiente." 
      img={gamificaoImg}
      alt="Game" 
      />
      <Card 
      titulo="Equipe de Desenvolvimento" 
      descricao="Aqui você pode ver cada membro da equipe que realizou este projeto! Venha conhecer nossos membros da startup OM. Corp." 
      img={omcorpLogo}
      alt="OMCorp" 
      />

    </div>
  )
}

export default Home
