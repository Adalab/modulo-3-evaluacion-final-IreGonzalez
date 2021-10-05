// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Button.scss';

const Button = (props) => {
    return (
        <button className="button" onClick={props.handleclick}>
            {props.text}
        </button>
    );
};

export default Button;