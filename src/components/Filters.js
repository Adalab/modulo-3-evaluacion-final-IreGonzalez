import '../styles/Variables.scss';
import '../styles/Filters.scss';

const Filters = (props) => {
    return (
        <input
            className="form__input"
            type="text"
            placeholder="Introduce tu búsqueda"
            value={props.value}
            onChange={props.handleInput}
        />
    );
};

export default Filters;