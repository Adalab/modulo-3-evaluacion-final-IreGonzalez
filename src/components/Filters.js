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
                name="género"
                select={props.selectGender}
                handleSelect={props.handleSelectGender}
                filteredData={props.filteredData}
                uniqueList={props.genderUniqueList}
            />
            <Select
                name="especie"
                select={props.selectSpecies}
                handleSelect={props.handleSelectSpecies}
                filteredData={props.filteredData}
                uniqueList={props.speciesUniqueList}
            />
            <Select
                name="origen"
                select={props.selectOrigin}
                handleSelect={props.handleSelectOrigin}
                filteredData={props.filteredData}
                uniqueList={props.originUniqueList}
            />
            <Select
                name="estado"
                select={props.selectStatus}
                handleSelect={props.handleSelectStatus}
                filteredData={props.filteredData}
                uniqueList={props.statusUniqueList}
            />
        </form>
    );
};

export default Filters;