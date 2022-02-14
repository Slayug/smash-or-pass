import classNames from "classnames";
import styles from "./MiniPokemon.module.scss";
import { Pokemon } from "../../models/Pokemon";
import { getCurrentLang } from "../../utils/lang";
import { formatIndexToThumbnailName } from "../../utils/image";

const currentLang = getCurrentLang();

export default function MiniPokemonComponent({
  pokemon,
}: {
  pokemon: Pokemon;
}) {
  return (
    <div className={styles.miniPokemon}>
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
            width="75px"
            src={`/thumbnails/${formatIndexToThumbnailName(pokemon.id)}.png`}
          />
        </div>
      </div>
    </div>
  );
}
