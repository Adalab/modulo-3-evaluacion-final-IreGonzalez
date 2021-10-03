// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Filters.scss';
// COMPONENTS
import Input from './Input';
import Select from './Select';

const Filters = (props) => {
    return (
        <>
            <Input value={props.inputName} handleInput={props.handleInput} />
            <Select
                select={props.select}
                handleSelect={props.handleSelect}
                filteredData={props.filteredData}
            />
        </>
    );
};

export default Filters;