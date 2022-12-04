import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import TypeAheadDropDown from '../src/TypeAheadDropDown';
import PokemonContainer from '../src/PokemonContainer';
import styles from '../styles/Home.module.css'

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Thunderdome
        </h1>
{/* 
        <p className={styles.description}>
          <code className={styles.code}>{dataInsideTheComponent.testing ? dataInsideTheComponent.testing : ''}</code>
          <code className={styles.code}>{JSON.stringify(dataInsideTheComponent)}</code>
        </p> */}

        <PokemonContainer allPokemon={pokemonNames} />
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
  return {props: {preRenderedData: allPokemon}}
}