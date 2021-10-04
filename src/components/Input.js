import '../styles/Variables.scss';
import '../styles/Input.scss';

const Input = (props) => {
    return (
        <input
            className="input"
            type="text"
            placeholder="Introduce tu búsqueda"
            value={props.value}
            onChange={props.handleInput}
        />
    );
};

export default Input;