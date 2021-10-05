// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Filters.scss';
// COMPONENTS
import Input from './Input';
import Select from './Select';

const Filters = (props) => {
    return (
        <form className="form">
            <Input value={props.inputName} handleInput={props.handleInput} />
            <Select
                name="Género"
                select={props.selectGender}
                handleSelect={props.handleSelectGender}
                uniqueList={props.genderUniqueList}
            />
            <Select
                name="Especie"
                select={props.selectSpecies}
                handleSelect={props.handleSelectSpecies}
                uniqueList={props.speciesUniqueList}
            />
            <Select
                name="Origen"
                select={props.selectOrigin}
                handleSelect={props.handleSelectOrigin}
                uniqueList={props.originUniqueList}
            />
            <Select
                name="Estado"
                select={props.selectStatus}
                handleSelect={props.handleSelectStatus}
                uniqueList={props.statusUniqueList}
            />
        </form>
    );
};

export default Filters;