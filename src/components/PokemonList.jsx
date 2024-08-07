import Pokemon from "./Pokemon";

function PokemonList({ pokemons }) {
  return (
    <>
      {pokemons.map((elem) => {
        return (
          <Pokemon
            key={elem.id}
            id={elem.id}
            name={elem.name}
            type={elem.type}
          />
        );
      })}
    </>
  );
}

export default PokemonList;
