import React from "react"
import styles from '../styles/Home.module.css'

export default class PokemonBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: {},
            pokemon2: {}
        }
    }

    getPokemonData = async (pokemon, player) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let res = await fetch(url);
        let pokemonData = await res.json();
        console.log(pokemonData);
        if (player === 1) {
            await this.setState({pokemon1: pokemonData})
        }
        if (player === 2) {
            await this.setState({pokemon2: pokemonData})
        }
    }
    async componentDidMount() {
        const { player1, player2 } = this.props;
        await this.getPokemonData(player1, 1);
        await this.getPokemonData(player2, 2);
    }

    render() {
        const { pokemon1, pokemon2 } = this.state;
        //this.getPokemonData(player1, 1);
        //this.getPokemonData(player2, 2);
        return (
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>{ pokemon1.name }</h3>
                    <img src={pokemon1 && pokemon1.sprites && pokemon1.sprites.front_default} />
                    <div><b>Abilities:</b></div>
                    <ul>
                        {pokemon1 && pokemon1.abilities && pokemon1.abilities.map(x => {
                            return <li>{x.ability.name}</li>
                        })}
                    </ul>
                    <button>Attack!</button>
                </div>
                <div className={styles.card}>
                    <h3>{ pokemon2.name }</h3>
                    <img src={pokemon2 && pokemon2.sprites && pokemon2.sprites.front_default} />
                    <div><b>Abilities:</b></div>
                    <ul>
                        {pokemon2 && pokemon2.abilities && pokemon2.abilities.map(x => {
                            return <li>{x.ability.name}</li>
                        })}
                    </ul>
                    <button>Attack!</button>
                </div>
            </div>
        )
    }
}