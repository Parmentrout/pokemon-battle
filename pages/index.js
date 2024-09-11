import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import TypeAheadDropDown from '../src/TypeAheadDropDown';
import PokemonContainer from '../src/PokemonContainer';
import styles from '../styles/Home.module.css'
import { getCustomPokemon } from '../src/added-pokemon';

export default function Home({ preRenderedData }) {

  const [pokemonNames, setComponentData] = useState([]);
  useEffect(() => {
      if(preRenderedData) {
        setComponentData(preRenderedData)
      }
    }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Battle</title>
        <meta name="description" content="Armentrout family Pokemon app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pokemon Battle
        </h1>
{/* 
        <p className={styles.description}>
          <code className={styles.code}>{dataInsideTheComponent.testing ? dataInsideTheComponent.testing : ''}</code>
          <code className={styles.code}>{JSON.stringify(dataInsideTheComponent)}</code>
        </p> */}

        <PokemonContainer className={styles.center} allPokemon={pokemonNames} />
      </main>

      <footer className={styles.footer}>
          Powered by Patrick!
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=2000`;
  let res = await fetch(url);
  let allPokemon = await res.json();
  allPokemon = allPokemon.results.map(x => x.name);
  const newPokemon = getCustomPokemon().map(x => x.name);
  allPokemon.push(...newPokemon);
  return {props: {preRenderedData: allPokemon}}
}