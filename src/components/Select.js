// COMPONENTS
import Option from './Option';
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Select.scss';

const Select = (props) => {

    const list = props.data.map((c) => c.{ props.listSelector });
    const uniqueList = list
        .filter((e, i) => list.indexOf(e) === i);

    const html = list.map(
        (options, index) => {
            return (
                <Option option={options} key={index} />
            )
        }
    );

    const handleSelect = (ev) => {
        props.setSelect(ev.currentTarget.value)
    };


    return (
        <label htmlFor={props.select} className="label">{props.name}:
            <select className="select" name={props.select} value={props.select} onChange={handleSelect}>
                <option value="all">All</option>
                {html}
            </select>
        </label>
    );
};

export default Select;