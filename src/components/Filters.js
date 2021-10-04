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
                select={props.select}
                handleSelect={props.handleSelect}
                filteredData={props.filteredData}
                uniqueList={props.genderUniqueList}
            />
            <Select
                name="especie"
                select={props.select}
                handleSelect={props.handleSelect}
                filteredData={props.filteredData}
                uniqueList={props.speciesUniqueList}
            />
            <Select
                name="origen"
                select={props.select}
                handleSelect={props.handleSelect}
                filteredData={props.filteredData}
                uniqueList={props.originUniqueList}
            />
            <Select
                name="estado"
                select={props.select}
                handleSelect={props.handleSelect}
                filteredData={props.filteredData}
                uniqueList={props.statusUniqueList}
            />
        </form>
    );
};

export default Filters;