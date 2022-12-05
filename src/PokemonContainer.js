import TypeAheadDropDown from "./TypeAheadDropDown";
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import PokemonBattle from "./PokemonBattle";

export default class PokemonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: '',
            pokemon2: '',
            beginBattle: false
        }
    }

    onPlayerOneSelected = async (value) => {
        await this.setState({pokemon1: value});
        this.canBeginBattle();
    }

    onPlayerTwoSelected = async (value) => {
        await this.setState({pokemon2: value});
        this.canBeginBattle();    
    }

    canBeginBattle = async () => {
        console.log(this.state);
        if (this.state.pokemon1 && this.state.pokemon2) {
            await this.setState({beginBattle: true})
        }
    }

    render() {
        const pokemonNames = this.props.allPokemon;
        const { beginBattle, pokemon1, pokemon2 } = this.state;
        return (
            <div>
                {!beginBattle && <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Player 1 &rarr;</h2>
                            <p>Choose your Pokemon</p>
                            <TypeAheadDropDown items={pokemonNames} onSelected={this.onPlayerOneSelected} />
                        </div>

                        <div className={styles.card}>
                            <h2>Player 2 &rarr;</h2>
                            <p>Choose your Pokemon</p>
                            <TypeAheadDropDown items={pokemonNames}  onSelected={this.onPlayerTwoSelected} />
                        </div>
                    </div>
                }
                { beginBattle && 
                    <PokemonBattle player1={pokemon1} player2={pokemon2} />
                }
                
            </div>
        )
    }
}