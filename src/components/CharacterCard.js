// STYLESHEET
import '../styles/Variables.scss';
import '../styles/CharacterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    let status = "";
    if (props.characterData.status === "Dead") {
        status = <i className="fas fa-dizzy"></i>
    }
    if (props.characterData === undefined) {
        return (
            <section className="alternative">
                <h2>¡¡Eh!!</h2>
                <p> ¡¡Esta no es su serie!!</p>
            </section>
        )
    }
    else {
        return (
            <Link to={`./character/${props.characterData.id}`}>
                <li className="list__element"
                    id={props.characterData.id}
                    key={props.characterData.id}
                >
                    <img className="list__element--img"
                        src={props.characterData.photo}
                        alt={props.characterData.name}
                        title={props.characterData.name}
                    />
                    <div>
                        <div className="list__element--text">
                            <h2 className="name">{props.characterData.name}</h2>
                            <p className="line">{props.characterData.species}
                                <span>{status}</span>
                            </p>
                        </div>

                    </div>
                </li >
            </Link>
        );
    };
};

export default CharacterCard;