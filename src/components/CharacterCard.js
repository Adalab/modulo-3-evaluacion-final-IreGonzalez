// HOJAS DE ESTILO
import '../styles/Variables.scss';
import '../styles/CharacterCard.scss';

const CharacterCard = (props) => {
    console.log(props);
    return (
        <li className="list__element" id={props.characterData.id} key={props.characterData.id} >
            <img className="list__element--img"
                src={props.characterData.photo}
                alt={props.characterData.name}
                title={props.characterData.name}
            />
            <div className="list__element--text">
                <h2 className="name">{props.characterData.name}</h2>
                <p className="detail">Especie : {props.characterData.species}</p>
            </div>
        </li >
    );
};

export default CharacterCard;