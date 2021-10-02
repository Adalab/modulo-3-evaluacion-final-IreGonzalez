// COMPONENTES
import CharacterCard from './CharacterCard'
// HOJAS DE ESTILO
import '../styles/core/Variables.scss';
import '../styles/core/Variables.scss';

const CharacterList = (props) => {
    const html = props.list.map((characterData) => {
        console.log(characterData);
        return (
            <li className="list__element" id={characterData.id} key={characterData.id} >
                <CharacterCard characterData={characterData} />
            </li >
        )

    });

    return (
        <ul className="list">
            {html}
        </ul>
    );
};

export default CharacterList;