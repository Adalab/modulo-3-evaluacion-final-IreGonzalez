import CharacterCard from './CharacterCard'

const CharacterList = (props) => {
    const html = props.list.map((characterData) => {
        console.log(characterData);
        <li className="list__element" id={characterData.id} key={characterData.id} >
            <CharacterCard characterData={characterData} />
        </li >
    })

    return (
        <ul className="list">
            {html}
        </ul>
    );
};

export default CharacterList;