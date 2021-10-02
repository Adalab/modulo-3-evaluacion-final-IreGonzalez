// COMPONENTES
import CharacterCard from './CharacterCard'
// HOJAS DE ESTILO
import '../styles/Variables.scss';
import '../styles/CharacterList.scss';

const CharacterList = (props) => {
    const html = props.list.map((characterData) => {
        console.log(characterData);
        return (
            <CharacterCard characterData={characterData} />
        )

    });

    return (
        <ul className="list">
            {html}
        </ul>
    );
};

export default CharacterList;