import SecaoAtividades from "../../components/SecaoAtividades";
import './Atividades.css'

export default function Atividades() {

    return (
    <> 
    <main>

      <section className="secao-atividades">

        <SecaoAtividades id={1} />
        <SecaoAtividades id={2} />
        <SecaoAtividades id={3} />

      </section>

    </main>
    </>
    )
  }
  