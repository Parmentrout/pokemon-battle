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
            beginBattle: false,
            hasWinner: false
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
    
    onWinnerDeclared = async (winner) => {
        await this.setState(
            {
                hasWinner: true,
                winner: winner
            }
        );
    }

    canBeginBattle = async () => {
        console.log(this.state);
        if (this.state.pokemon1 && this.state.pokemon2) {
            await this.setState({beginBattle: true})
        }
    }
    battleAgain = async () => {
        await this.setState(
            {
                pokemon1: '',
                pokemon2: '',
                beginBattle: false,
                hasWinner: false
            }
        );
    }

    render() {
        const pokemonNames = this.props.allPokemon;
        const { beginBattle, pokemon1, pokemon2, hasWinner, winner } = this.state;
        return (
            <div>
                {!beginBattle && !hasWinner && <div className={styles.grid}>
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
                { beginBattle && !hasWinner &&
                    <PokemonBattle player1={pokemon1} player2={pokemon2} onWinnerSelected={this.onWinnerDeclared} />
                }
                {
                    hasWinner && 
                    <div className={styles.grid}>
                         <div className={styles.card}>
                            <h2>Winner: {winner && winner.name}</h2>
                            <img
                                className={styles.battleImage}
                                src={winner && winner.id && `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${winner.id}.svg`} 
                                alt="No images found"
                            />
                            <br></br>
                            <button className={styles.niceButton} onClick={this.battleAgain}>Battle Again!</button>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}