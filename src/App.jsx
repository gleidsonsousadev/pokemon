import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.sass";
import { Card } from "./components/Card";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { ShowPokemon } from "./components/ShowPokemon";
import { Pagination } from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonInfo, setPokemonInfo] = useState();
  
  useEffect(() => getPokemons(), []);
  
  const getPokemons = (url) => {
    const _url = "https://pokeapi.co/api/v2/pokemon";
    axios.get(url || _url).then((response) => {
      setPokemon(response.data)
    })
  }

  return (
    <Container className={styles.ContainerApp}>
      <Row>
        <Col md={9} className={styles.PokemonsContainer}>
          <Row>
            {pokemon?.results?.map((item) => {
              return (
                <Card
                  pokemon={item}
                  handleClick={(poke) => setPokemonInfo(poke)}
                  key={item.name}
                />
              );
            })}
          </Row>
            <Pagination data={pokemon} handleClick={getPokemons} />
        </Col>

        <Col md={3}>
          <Row>
            <div className={styles.ShowInfo}>
              <ShowPokemon pokemon={pokemonInfo} />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
