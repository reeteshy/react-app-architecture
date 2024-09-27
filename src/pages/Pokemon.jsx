import * as React from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function Pokemon() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  const location = useLocation();

  const pageTitle = useMemo(() => getTitleFromRoute(location.pathname));
  console.log("pageTitle ", pageTitle)

  return (
    <div className="App">
    <Helmet>
      <title>Testing </title>
    </Helmet>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>{pageTitle}</h1>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
