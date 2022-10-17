import axios from "axios";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import styles from "./Card.module.sass";
import ReactLoading from "react-loading";

export function Card({ pokemon, handleClick }) {
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    axios.get(pokemon.url).then((resp) => {
      setPokemonDetails(resp.data);
    });
  }, []);

  const image = !pokemonDetails?.sprites ? (
    <ReactLoading type="spin" color="#fff" width={"100%"} />
  ) : (
    <img src={pokemonDetails?.sprites.front_default} alt="Imagem Pokemon" />
  );

  return (
    <Col
      sm={12}
      md={6}
      lg={6}
      xl={4}
      xxl={3}
      className={styles.PokemonItemContainer}
      onClick={() => handleClick(pokemonDetails)}
    >
      <div className={styles.CardItem}>
        <div className={styles.CardImage}>{image}</div>
        <div className={styles.CardInfo}>{pokemon.name}</div>
      </div>
    </Col>
  );
}
