// COMPONENTS
import CharacterCard from './CharacterCard'
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/CharacterList.scss';

const CharacterList = (props) => {
    const html = props.list.map(
        (characterData) => {
            console.log('list', props.list);
            if (props.list === []) {
                return (
                    <section className="alternative">
                        <h2>¡¡Eh!!</h2>
                        <p> ¡¡Esta no es su serie!!</p>
                    </section>
                )
            }
            else {
                return (
                    <CharacterCard
                        characterData={characterData}
                        key={characterData.id}
                    />
                )
            }
        });
    return (
        <ul className="list">
            {html}
        </ul>
    );
};

export default CharacterList;