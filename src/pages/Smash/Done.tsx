import { Pokemon } from "../../models/Pokemon";
import styles from "./Smash.module.scss";
import MiniPokemonComponent from "../../components/MiniPokemon/MiniPokemonComponent";

export default function Done({
  pokemonPassed,
  pokemonSmashed,
}: {
  pokemonPassed: Pokemon[];
  pokemonSmashed: Pokemon[];
}) {
  return (
    <div className={styles.done}>
      <div className={styles.counter}>
        <div className={styles.pass}>
          PASS
          <br />
          {pokemonPassed.length}
        </div>
        <div className={styles.smash}>
          SMASH
          <br />
          {pokemonSmashed.length}
        </div>
      </div>

      <div className={styles.list}>
        <div>
          {pokemonPassed.map((pokemon) => (
            <MiniPokemonComponent key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div>
          {pokemonSmashed.map((pokemon) => (
            <MiniPokemonComponent key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}
