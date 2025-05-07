import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

function Card({ id }) {
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`} >
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa"/>
            </Link>
            <figure>
                
            </figure>

        </section>
    );

}

export default Card;