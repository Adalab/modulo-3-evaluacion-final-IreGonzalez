// COMPONENTS
import Option from './Option';
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/Select.scss';
// Debo hacer un map  e incorporar como en la lista de favoritos del ejercicio 2  para que pinte solo las opciones de cada uno de los tipos de selector.
// Se podría añadir el planeta de origen
const Select = (props) => {

    console.log(props.filteredData);
    return (
        <>
            <label htmlFor="gender" className="label">Género:
                <select name="gender" value={props.select} onChange={props.handleSelect}>
                    <Option value="all" name="Todos" />
                    <Option value="Male" name="Hombre" />
                    <Option value="Female" name="Mujer" />
                    <Option value="unknown" name="Desconocido" />
                </select>
            </label>

            <label htmlFor="species" className="label">Especie:
                <select name="species" value={props.select} onChange={props.handleSelect}>
                    <Option value="all" name="Todos" />
                    <Option value="Human" name="Humano" />
                    <Option value="Alien" name="Alien" />
                </select>
            </label>

            <label htmlFor="status" className="label">Estado:
                <select name="status" value={props.select} onChange={props.handleSelect}>
                    <Option value="all" name="Todos" />
                    <Option value="Alive" name="Vivo" />
                    <Option value="Dead" name="Muerto" />
                </select>
            </label>
        </>
    );
};

export default Select