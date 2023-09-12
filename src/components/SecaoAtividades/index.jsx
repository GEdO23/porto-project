import PropTypes from 'prop-types'

import Atividade from "../Atividade";
import quiz from "../../imgs/atividade-quiz.svg"

import './style.css'

export default function SecaoAtividades(props) {

    SecaoAtividades.propTypes = { id: PropTypes.number.isRequired }

    const dflt = {
        src: quiz,
        tipo: "Quiz",
        nome: "Nome da atividade",
        exp: 10
    }

    return (
        <>
        <article className="artic-atividades">
            <div className="tit-atividade">
                <h2>Atividade</h2><h2>{props.id}</h2>
            </div>
            <Atividade imgSrc={dflt.src} tipo={dflt.tipo} nome={dflt.nome} exp={dflt.exp} />
            <Atividade imgSrc={dflt.src} tipo={dflt.tipo} nome={dflt.nome} exp={dflt.exp} />
            <Atividade imgSrc={dflt.src} tipo={dflt.tipo} nome={dflt.nome} exp={dflt.exp} />
            <Atividade imgSrc={dflt.src} tipo={dflt.tipo} nome={dflt.nome} exp={dflt.exp} />
            <Atividade imgSrc={dflt.src} tipo={"Avaliação"} nome={"Avaliação " + props.id} exp={50} />

        </article>
        </>
    )
}
