// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Filters.scss';
// COMPONENTS
import Input from './Input'

const Filters = (props) => {
    return (
        <Input value={props.value} handleInput={props.handleInput} />
    );
};

export default Filters;