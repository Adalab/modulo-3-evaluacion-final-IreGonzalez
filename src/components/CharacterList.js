// COMPONENTS
import CharacterCard from './CharacterCard'
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/CharacterList.scss';
import Alternative from './Alternative';

const CharacterList = (props) => {
    const html = props.list
        .map((characterData) => {
            return (
                <CharacterCard
                    characterData={characterData}
                    key={characterData.id}
                />
            )
        });
    if (props.list.length === 0) {
        console.log(props.list.length);
        return (
            <Alternative />
        )
    }
    return (
        <ul className="list">
            {html}
        </ul>
    );
};

export default CharacterList;