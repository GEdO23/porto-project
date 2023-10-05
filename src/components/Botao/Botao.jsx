import PropTypes from 'prop-types'

function Botao(props) {
    Botao.propTypes = {
        text: PropTypes.string.isRequired,
    }

    return (
        <>
            <button type="button" className="btn">{props.text}</button>
        </>
    )
} 

export default Botao
