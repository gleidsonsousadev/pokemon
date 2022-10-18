import { Form } from "react-bootstrap";

import styles from "./ShowPokemon.module.sass";

export function ShowPokemon({ pokemon }) {
  const imgUrl = pokemon?.sprites?.other?.dream_world?.front_default;
  const abilities = pokemon?.abilities;
  const moves = pokemon?.moves;

  if (!moves) return <></>;

  const PokemonMoves = () => {
    return (
      <Form.Select aria-label="Movimentos" size="lg" className={styles.Moves}>
        <option>↓ Movimentos ↓</option>
        {moves?.map((item) => {
          const selectMoves = item?.move?.name;
          return (
            <option value={selectMoves} key={selectMoves}>
              {selectMoves}
            </option>
          );
        })}
      </Form.Select>
    );
  }

  return (
    <>
      <div className={styles.ImageShowPokemon}>
        <img src={imgUrl} alt="imagem pokemon" />
      </div>
      <div className={styles.NamePokemon}>
        <h1>{pokemon?.name}</h1>
      </div>
      <div className={styles.AbilitiesPokemon}>
        <p>Habilidades:</p>
        {abilities?.map((item) => {
          return <div key={item.ability.name}> {item?.ability?.name} </div>;
        })}
      </div>
      <PokemonMoves />
    </>
  );
}
