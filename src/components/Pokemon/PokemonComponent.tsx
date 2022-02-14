import classNames from "classnames";
import { Pokemon } from "../../models/Pokemon";
import styles from "./Pokemon.module.scss";
import { getCurrentLang } from "../../utils/lang";
import { formatIndexToThumbnailName } from "../../utils/image";

const currentLang = getCurrentLang();

export default function PokemonComponent({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className={styles.pokemonComponent}>
      <div className={styles.pokemon}>
        <div
          className={classNames(
            styles.title,
            `${pokemon.type[0].toLowerCase()}`,
          )}>
          {pokemon.name[currentLang]}
        </div>
        <div>
          <img
            alt={`Thumbnail of ${pokemon.name[currentLang]}`}
            src={`/thumbnails/${formatIndexToThumbnailName(pokemon.id)}.png`}
          />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Types</th>
                <td>{pokemon.type.join(", ")}</td>
              </tr>
              <tr>
                <th>HP</th>
                <td>{pokemon.base.HP}</td>
              </tr>
              <tr>
                <th>Attack</th>
                <td>{pokemon.base.Attack}</td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>{pokemon.base.Speed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
