// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Filters.scss';
// COMPONENTS
import Input from './Input';
import Select from './Select';
import Button from './Button';

const Filters = (props) => {

    const handleInput = (ev) => {
        ev.preventDefault()
        props.setInputName(ev.currentTarget.value)
    };
    const handleSelectGender = (ev) => {
        props.setSelectGender(ev.currentTarget.value)
    };
    const handleSelectSpecies = (ev) => {
        props.setSelectSpecies(ev.currentTarget.value)
    };
    const handleSelectOrigin = (ev) => {
        props.setSelectOrigin(ev.currentTarget.value)
    };
    const handleSelectStatus = (ev) => {
        props.setSelectStatus(ev.currentTarget.value)
    };

    // LIST TO OPTIONS
    const genderList = props.data.map((c) => c.gender);
    const genderUniqueList = genderList
        .filter((g, i) => genderList.indexOf(g) === i);

    const speciesList = props.data.map((c) => c.species);
    const speciesUniqueList = speciesList
        .filter((s, i) => speciesList.indexOf(s) === i);

    const originList = props.data.map((c) => c.origin);
    const originUniqueList = originList
        .filter((o, i) => originList.indexOf(o) === i);

    const statusList = props.data.map((c) => c.status);
    const statusUniqueList = statusList
        .filter((st, i) => statusList.indexOf(st) === i);

    const handleReset = (ev) => {
        ev.preventDefault()
        props.setInputName('');
        props.setSelectGender('all');
        props.setSelectSpecies('all');
        props.setSelectOrigin('all');
        props.setSelectStatus('all')
    };
    const handleGo = () => {

    };
    const handleBack = () => {

    };

    return (
        <form className="form">
            <Input value={props.inputName} handleInput={handleInput} />
            <div className="line__buttons">
                <Button handleclick={handleGo} text={<i class="fas fa-reply" />} />
                <Button handleclick={handleReset} text={"Reset"} />
                <Button handleclick={handleBack} text={<i class="fas fa-share" />} />
            </div>
            <Select
                name="Género"
                select={props.selectGender}
                handleSelect={handleSelectGender}
                uniqueList={genderUniqueList}
            />
            <Select
                name="Especie"
                select={props.selectSpecies}
                handleSelect={handleSelectSpecies}
                uniqueList={speciesUniqueList}
            />
            <Select
                name="Origen"
                select={props.selectOrigin}
                handleSelect={handleSelectOrigin}
                uniqueList={originUniqueList}
            />
            <Select
                name="Estado"
                select={props.selectStatus}
                handleSelect={handleSelectStatus}
                uniqueList={statusUniqueList}
            />
        </form>
    );
};

export default Filters;