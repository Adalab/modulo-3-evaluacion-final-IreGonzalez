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

    const handleReset = (ev) => {
        ev.preventDefault()
        props.setInputName('');
        props.setSelectGender('all');
        props.setSelectSpecies('all');
        props.setSelectOrigin('all');
        props.setSelectStatus('all')
    };
    const handleGo = () => {
        if (props.op <= 34) {
            props.setOp(props.op + 1);
            console.log(props.op);
        }
    };
    const handleBack = () => {
        if (props.op > 0) {
            props.setOp(props.op - 1);
            console.log(props.op)
        }
    };

    return (
        <form className="form">
            <Input value={props.inputName} handleInput={handleInput} />
            <div className="line__buttons">
                <Button handleclick={handleBack} text={<i class="fas fa-reply" />} />
                <Button handleclick={handleReset} text={"Reset"} />
                <Button handleclick={handleGo} text={<i class="fas fa-share" />} />
            </div>
            <Select
                name="Género"
                select={props.selectGender}
                setSelect={props.setSelectGender}
                listSelector={'gender'}
                data={props.data}
            />
            <Select
                name="Especie"
                select={props.selectSpecies}
                setSelect={props.setSelectSpecies}
                listSelector={'species'}
                data={props.data}
            />
            <Select
                name="Origen"
                select={props.selectOrigin}
                setSelect={props.setSelectOrigin}
                listSelector={'origin'}
                data={props.data}
            />
            <Select
                name="Estado"
                select={props.selectStatus}
                setSelect={props.setSelectStatus}
                listSelector={'status'}
                data={props.data}
            />
        </form>
    );
};

export default Filters;