// COMPONENTS
import Option from './Option';
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Select.scss';

const Select = (props) => {
    const html = props.uniqueList.map(
        (options, index) => {
            return (
                <Option option={options} key={index} />
            )
        }
    )

    return (
        <label htmlFor={props.select} className="label">{props.name}:
            <select className="select" name={props.select} value={props.select} onChange={props.handleSelect}>
                <option value="all">All</option>
                {html}
            </select>
        </label>
    );
};

export default Select;