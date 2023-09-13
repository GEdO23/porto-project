import { useState } from 'react';
import './ContratarSeguro.css';

export default function ContratarSeguro() {
  const [numeroSerie, setNumeroSerie] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');

  const handleContratarSeguro = () => {
    // Adicione aqui a lógica para contratar o seguro
  } 

  return (
    <div className="contratar-seguro-container">
      <h2 className='card-tit'>Contratar Seguro</h2>
      <p className='card-desc'>Preencha seus dados de acesso para continuar.</p>
      <input 
        type="text" 
        placeholder="Número de Série" 
        value={numeroSerie} 
        onChange={(e) => setNumeroSerie(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Marca da Bike" 
        value={marca} 
        onChange={(e) => setMarca(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Modelo da Bike" 
        value={modelo} 
        onChange={(e) => setModelo(e.target.value)} 
      />
      <input 
        type="color" 
        value={cor} 
        onChange={(e) => setCor(e.target.value)} 
      />
      <button onClick={handleContratarSeguro}>Contratar Seguro</button>
    </div>
  )
}