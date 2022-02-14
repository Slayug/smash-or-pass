import { useState } from "react";
import { Button } from "antd";
import pokedex from "../../assets/pokedex.json";
import PokemonComponent from "../../components/Pokemon/PokemonComponent";
import { Pokemon } from "../../models/Pokemon";

import styles from "./Smash.module.scss";
import Done from "./Done";

const PokemonList = pokedex as Pokemon[];

export default function Smash() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pokemonPassed, setPokemonPassed] = useState<Pokemon[]>([]);
  const [pokemonSmashed, setPokemonSmashed] = useState<Pokemon[]>([]);

  if (currentIndex >= PokemonList.length) {
    return (
      <Done pokemonPassed={pokemonPassed} pokemonSmashed={pokemonSmashed} />
    );
  }

  return (
    <div className={styles.smashPage}>
      <PokemonComponent pokemon={PokemonList[currentIndex]} />
      <div>
        <Button
          className={styles.pass}
          onClick={() => {
            setPokemonPassed((pokemons) => [
              ...pokemons,
              PokemonList[currentIndex],
            ]);
            setCurrentIndex((index) => index + 1);
          }}>
          Pass
        </Button>
        <Button
          className={styles.smash}
          onClick={() => {
            setPokemonSmashed((pokemons) => [
              ...pokemons,
              PokemonList[currentIndex],
            ]);
            setCurrentIndex((index) => index + 1);
          }}>
          Smash
        </Button>
      </div>
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
    </div>
  );
}
