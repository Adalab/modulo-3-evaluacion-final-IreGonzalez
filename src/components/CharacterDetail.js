import { Link } from "react-router-dom";
// STYLESHEET
import '../styles/Variables.scss';
import '../styles/CharacterDetail.scss';


const CharacterDetail = (props) => {
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
            <Link to="/">Back</Link>
            <div >
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
                        Origen: {props.characterData.origin.name}
                    </li>
                    <li className="detail__text--line">
                        Estado: {props.characterData.status}
                    </li>
                    <li className="detail__text--line">
                        Episodios: {props.characterData.episode.length}
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default CharacterDetail;