import './style.css'


export default function Error() {

  return (
    <>
    <div>
      <h1>Error 404</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
    </>
  )
}
