import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";
import React from "react"
import styles from '../styles/Home.module.css'

export default class PokemonBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: {},
            pokemon2: {},
            pokemon1PageData: {
                health: 0,
                specialAttackUsed: false,
                eliminated: false
            },
            pokemon2PageData: {
                health: 0,
                specialAttackUsed: false,
                eliminated: false
            }
        }
    }

    getPokemonData = async (pokemon, player) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let res = await fetch(url);
        let pokemonData = await res.json();
        //console.log(pokemonData);
        const heads = (Math.floor(Math.random() * 2) == 0);
        const totalHealth = pokemonData.stats[0].base_stat + pokemonData.stats[2].base_stat; // HP + Defense
        if (player === 1) {
            await this.setState(
                { 
                    pokemon1: pokemonData,
                    pokemon1PageData: {
                        health: totalHealth, 
                        specialAttackUsed: false,
                        turn: heads
                    }
                }
            )
        }
        if (player === 2) {
            await this.setState(
                {
                    pokemon2: pokemonData,
                    pokemon2PageData: {
                        health: totalHealth, 
                        specialAttackUsed: false,
                        turn: !heads
                    }
                }
            )
        }
        console.log(this.state);
    }
    async componentDidMount() {
        const { player1, player2 } = this.props;
        await this.getPokemonData(player1, 1);
        await this.getPokemonData(player2, 2);
    }

    attackPlayer = async (playerInitiated, isSpecial) => {
        const attackAmount = isSpecial ? this.state.pokemon1.stats[3].base_stat : this.state.pokemon1.stats[3].base_stat;
        if (playerInitiated === 1) {
            let newHealth = this.state.pokemon2PageData.health - attackAmount;
            if (newHealth < 0 ) { newHealth = 0; }
            console.log(this.state);
            await this.setState(
                {
                    pokemon1PageData: {
                        health: this.state.pokemon1PageData.health,
                        specialAttackUsed: isSpecial,
                        turn: false
                    },
                    pokemon2PageData: {
                        health: newHealth,
                        specialAttackUsed: this.state.pokemon2PageData.specialAttackUsed,
                        turn: true
                    }
                }
            )
        }

        if (playerInitiated === 2) {
            let newHealth = this.state.pokemon1PageData.health - attackAmount;
            if (newHealth < 0 ) { newHealth = 0; }
            console.log(this.state);
            await this.setState(
                {
                    pokemon1PageData: {
                        health: newHealth, 
                        specialAttackUsed: this.state.pokemon1PageData.specialAttackUsed,
                        turn: true
                    },
                    pokemon2PageData: {
                        health: this.state.pokemon2PageData.health,
                        specialAttackUsed: isSpecial,
                        turn: false
                    }
                }
            )
        }
        
    };

    render() {
        const { pokemon1, pokemon2, pokemon1PageData, pokemon2PageData } = this.state;

        return (
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>{ pokemon1.name }</h2>
                    <div>Total Health: <span className={styles.red}>{pokemon1PageData.health}</span></div>
                    <img src={pokemon1 && pokemon1.id && `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon1.id}.svg`} />
                    <div><b>Abilities:</b></div>
                    <ul>
                        {pokemon1 && pokemon1.abilities && pokemon1.abilities.map(x => {
                            return <li>{x.ability.name}</li>
                        })}
                    </ul>
                    <button onClick={() => this.attackPlayer(1,false)} disabled={!pokemon1PageData.turn}>Attack!</button>
                    <button onClick={() => this.attackPlayer(1,true)} disabled={!pokemon1PageData.turn || pokemon1PageData.specialAttackUsed}>Special Attack!</button>
                </div>
                <div className={styles.card}>
                    <h2>{ pokemon2.name }</h2>
                    <div>Total Health: <span className={styles.red}>{pokemon2PageData.health}</span></div>
                    <img src={pokemon1 && pokemon1.id && `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon2.id}.svg`} />
                    <div><b>Abilities:</b></div>
                    <ul>
                        {pokemon2 && pokemon2.abilities && pokemon2.abilities.map(x => {
                            return <li>{x.ability.name}</li>
                        })}
                    </ul>
                    <button onClick={() => this.attackPlayer(2,false)} disabled={!pokemon2PageData.turn}>Attack!</button>
                    <button onClick={() => this.attackPlayer(2,true)} disabled={!pokemon2PageData.turn || pokemon2PageData.specialAttackUsed}>Special Attack!</button>
                </div>
            </div>
        )
    }
}