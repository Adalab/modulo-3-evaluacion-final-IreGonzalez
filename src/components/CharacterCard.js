

const CharacterCard = (props) => {
    console.log(props);
    return (
        <>
            <img className="list__element--img"
                src={props.characterData.photo}
                alt={props.characterData.name}
                title={props.characterData.name}
            />
            <div className="list__element--text">
                <h2>{props.characterData.name}</h2>
                <p>Especie : {props.characterData.species}</p>
            </div>
        </>
    );
};

export default CharacterCard;