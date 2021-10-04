// COMPONENTS
import CharacterCard from './CharacterCard'
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/CharacterList.scss';

const CharacterList = (props) => {
    const html = props.list.map(
        (characterData) => {
            return (
                <CharacterCard
                    characterData={characterData}
                    key={characterData.id}
                />
            )
        })
    if (props.list.length === 0) {
        console.log(props.list.length);
        return (
            <section className="alternative">
                <h2>¡¡Eh!!</h2>
                <p> ¡¡Esta no es su serie!!</p>
            </section>
        )
    }
    return (
        <ul className="list">
            {html}
        </ul>
    );
};

export default CharacterList;