import TypeAheadDropDown from "./TypeAheadDropDown";
import React from 'react';
import styles from '../styles/Home.module.css'

export default class PokemonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: '',
            pokemon2: ''
        }
    }

    onPlayerOneSelected(value) {
        console.log(value);
    }

    onPlayerTwoSelected(value) {
        console.log(value);
    }

    render() {
        const pokemonNames = this.props.allPokemon;
        return (
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>Player 1 &rarr;</h2>
                    <p>Choose your Pokemon</p>
                    <TypeAheadDropDown items={pokemonNames} onSelected={this.onPlayerOneSelected} />
                </div>

                <div className={styles.card}>
                    <h2>Player 2 &rarr;</h2>
                    <p>Choose your Pokemon</p>
                    <TypeAheadDropDown items={pokemonNames}  onSelected={this.onPlayerOneSelected} />
                </div>
            </div>
        )
    }
}