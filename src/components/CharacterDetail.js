import { Link } from "react-router-dom";
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/CharacterDetail.scss';
import Alternative from "./Alternative";


const CharacterDetail = (props) => {
    let status = "";
    if (props.characterData.status === "Dead") {
        status = <i className="status fas fa-dizzy" />
    } else if (props.characterData.status === "Alive") {
        status = <i class="fas fa-heartbeat" />
    } else {
        status = <i class="far fa-question-circle" />
    }
    if (props.characterData === undefined) {
        return (
            <section className="alternative">
                <h2 className="alternative__insult">¡¡Eh!!</h2>
                <p className="alternative__text">¡¡Metete con un personaje de esta serie!!</p>
                <Link to="/"><i class="return fas fa-backspace" /></Link>
            </section>
        )
    }
    else {
        return (
            <section className="detail"
                id={props.characterData.id}
                key={props.characterData.id}
            >
                <img className="detail__img"
                    src={props.characterData.photo}
                    alt={props.characterData.name}
                    title={props.characterData.name}
                />
                <div className="text">
                    <h1 className="detail__name">
                        {props.characterData.name}
                    </h1>
                    <ul className="detail__text">
                        <li className="detail__text--line">
                            Especie : {props.characterData.species}
                        </li>
                        <li className="detail__text--line">
                            Género: {props.characterData.gender}
                        </li>
                        <li className="detail__text--line">
                            Origen: {props.characterData.origin}
                        </li>
                        <li className="detail__text--line">
                            Nº Episodios: {props.characterData.episode}
                        </li>
                        <li className="detail__text--line">
                            Salud: {status}
                        </li>
                    </ul>
                    <Link to="/"><i className="back fas fa-level-up-alt" /></Link>
                </div>
            </section>
        );
    };

};

export default CharacterDetail;