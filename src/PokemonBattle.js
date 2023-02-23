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
                lostHealth: 0,
                specialAttackUsed: false,
                eliminated: false,
                turn: true,
                imageUrl: '',
                evolvesTo: ''
            },
            pokemon2PageData: {
                health: 0,
                lostHealth: 0,
                specialAttackUsed: false,
                eliminated: false,
                turn: true,
                imageUrl: '',
                evolvesTo: ''
            }
        }
    }

    getRandomPokemon = (pokemonList) => {
        return Math.floor(Math.random() * pokemonList.length);
    }

    getEvolutionData = async (pokemon) => {
        let evolvesTo = '';

        // First we need to get the species of the pokemon
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;

        let species;
        try {
            const speciesRes = await fetch(speciesUrl);
            species = await speciesRes.json();
        } catch (e) {
            console.log(e);
            return '';
        }
        let evolveUrl = species.evolution_chain.url;

        // Next we pull the evolution chain
        let evolveResponse = await fetch(evolveUrl);
        let evolveData = await evolveResponse.json();

        // Now we need to iteratively recurse the chain to find out where we are and what is next
        if (evolveData && evolveData.chain && evolveData.chain.species) {
            const firstLayer = evolveData.chain.species.name;
            const secondLayer = evolveData.chain.evolves_to.length ?
                evolveData.chain.evolves_to[0].species.name : '';
            let thirdLayer = '';
            if (secondLayer) {
                thirdLayer = evolveData.chain.evolves_to[0].evolves_to.length ?
                    evolveData.chain.evolves_to[0].evolves_to[0].species.name : '';
            }

            switch (pokemon) {
                case firstLayer:
                    {
                        const evolveList = evolveData.chain.evolves_to;
                        if (evolveList.length > 1) { // Eevee edge case
                            const randomEevee = this.getRandomPokemon(evolveList);
                            evolvesTo = evolveList[randomEevee].species.name; 
                        } else {
                            evolvesTo = secondLayer;
                        }
                    }
                    break;
                case secondLayer:
                    evolvesTo = thirdLayer;
                    break;
                case thirdLayer:
                    {
                        // Check for varieties and return one of the varieties
                        let varieties = species && species.varieties.length 
                            ? species.varieties.filter(x => x.pokemon.name !== pokemon): [];
                        if (varieties.length) {
                            const random = this.getRandomPokemon(varieties);
                            evolvesTo = varieties[random].pokemon.name;
                        }
                    }
                    break;
            }
           
        }

        return evolvesTo;
    }

    getPokemonData = async (pokemon, player, lostHealth) => {
        // Get details
        const getUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let res = await fetch(getUrl);
        let pokemonData = await res.json();

        const totalHealth = pokemonData.stats[0].base_stat + pokemonData.stats[2].base_stat - lostHealth; // HP + Defense
        const evolvesTo = await this.getEvolutionData(pokemonData.name);
        console.log(evolvesTo);

        const imageUrl = (pokemonData.sprites.other.dream_world.default) 
            ? pokemonData.sprites.other.dream_world.front_default 
            : pokemonData.sprites.other.home.front_default

        if (player === 1) {
            await this.setState(
                { 
                    pokemon1: pokemonData,
                    pokemon1PageData: {
                        health: totalHealth, 
                        specialAttackUsed: false,
                        turn: true,
                        lostHealth,
                        imageUrl,
                        evolvesTo
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
                        turn: true,
                        lostHealth,
                        imageUrl,
                        evolvesTo
                    }
                }
            )
        }

    }
    async componentDidMount() {
        const { player1, player2 } = this.props;
        await this.getPokemonData(player1, 1, 0, null);
        await this.getPokemonData(player2, 2, 0, null);
    }

    evolveNotAttack = async (playerInitiated, evolvesTo, lostHealth) => {
        await this.getPokemonData(evolvesTo, playerInitiated, lostHealth);
    }
    

    attackPlayer = async (playerInitiated, isSpecial) => {
        let attackAmount = 0;
        const imageUrl1 = (this.state.pokemon1.sprites.other.dream_world.default) 
            ? this.state.pokemon1.sprites.other.dream_world.front_default 
            : this.state.pokemon1.sprites.other.home.front_default;

        const imageUrl2 = (this.state.pokemon2.sprites.other.dream_world.default) 
            ? this.state.pokemon2.sprites.other.dream_world.front_default 
            : this.state.pokemon2.sprites.other.home.front_default;
        
        if (playerInitiated === 1) {
            attackAmount = isSpecial ? this.state.pokemon1.stats[3].base_stat : this.state.pokemon1.stats[1].base_stat;
            
            let newHealth = this.state.pokemon2PageData.health - attackAmount;
            let lostHealth = this.state.pokemon2PageData.lostHealth + attackAmount;

            if (newHealth < 0 ) { 
                newHealth = 0;
                this.props.onWinnerSelected(this.state.pokemon1);
            }
            await this.setState(
                {
                    pokemon1PageData: {
                        health: this.state.pokemon1PageData.health,
                        specialAttackUsed: isSpecial,
                        turn: false,
                        imageUrl: imageUrl1,
                        lostHealth: this.state.pokemon1PageData.lostHealth,
                        evolvesTo: this.state.pokemon1PageData.evolvesTo
                    },
                    pokemon2PageData: {
                        health: newHealth,
                        specialAttackUsed: this.state.pokemon2PageData.specialAttackUsed,
                        turn: true,
                        imageUrl: imageUrl2,
                        lostHealth,
                        evolvesTo: this.state.pokemon2PageData.evolvesTo
                    }
                }
            )
        }

        if (playerInitiated === 2) {
            attackAmount = isSpecial ? this.state.pokemon2.stats[3].base_stat : this.state.pokemon2.stats[1].base_stat;
            let newHealth = this.state.pokemon1PageData.health - attackAmount;
            let lostHealth = this.state.pokemon1PageData.lostHealth + attackAmount;

            if (newHealth < 0 ) { 
                newHealth = 0;
                this.props.onWinnerSelected(this.state.pokemon2);
            }
            await this.setState(
                {
                    pokemon1PageData: {
                        health: newHealth, 
                        specialAttackUsed: this.state.pokemon1PageData.specialAttackUsed,
                        turn: true,
                        imageUrl: imageUrl1,
                        lostHealth,
                        evolvesTo: this.state.pokemon1PageData.evolvesTo
                    },
                    pokemon2PageData: {
                        health: this.state.pokemon2PageData.health,
                        specialAttackUsed: isSpecial,
                        turn: false,
                        imageUrl: imageUrl2,
                        lostHealth: this.state.pokemon2PageData.lostHealth,
                        evolvesTo: this.state.pokemon2PageData.evolvesTo
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
                    <img 
                        className={styles.battleImage}
                        src={pokemon1PageData?.imageUrl} 
                        alt="No image found"
                    />
                    <div><b>Abilities:</b></div>
                    <ul>
                        {pokemon1 && pokemon1.abilities && pokemon1.abilities.map(x => {
                            return <li key={x.ability.name}>{x.ability.name}</li>
                        })}
                    </ul>
                    <button className={styles.niceButton} onClick={() => this.attackPlayer(1,false)} disabled={!pokemon1PageData.turn}>Attack! ({pokemon1 && pokemon1.stats && pokemon1.stats[1].base_stat})</button>
                    <button className={styles.niceButton} onClick={() => this.attackPlayer(1,true)} disabled={!pokemon1PageData.turn || pokemon1PageData.specialAttackUsed}>Special Attack! ({pokemon1 && pokemon1.stats && pokemon1.stats[3].base_stat})</button>
                    <button className={styles.niceButton} onClick={() => this.evolveNotAttack(1, pokemon1PageData.evolvesTo, pokemon1PageData.lostHealth)} disabled={pokemon1PageData.evolvesTo === '' || !pokemon1PageData.turn}>Evolve</button>
                </div>
                <div className={styles.card}>
                    <h2>{ pokemon2.name }</h2>
                    <div>Total Health: <span className={styles.red}>{pokemon2PageData.health}</span></div>
                    <img
                        className={styles.battleImage}
                        src={pokemon2PageData.imageUrl} 
                        alt="No images found"
                        />
                    <div><b>Abilities:</b></div>
                    <ul>
                        {pokemon2 && pokemon2.abilities && pokemon2.abilities.map(x => {
                            return <li key={x.ability.name}>{x.ability.name}</li>
                        })}
                    </ul>
                    <button className={styles.niceButton} onClick={() => this.attackPlayer(2,false)} disabled={!pokemon2PageData.turn}>Attack! ({pokemon2 && pokemon2.stats && pokemon2.stats[1].base_stat})</button>
                    <button className={styles.niceButton} onClick={() => this.attackPlayer(2,true)} disabled={!pokemon2PageData.turn || pokemon2PageData.specialAttackUsed}>Special Attack! ({pokemon2 && pokemon2.stats && pokemon2.stats[3].base_stat})</button>
                    <button className={styles.niceButton} onClick={() => this.evolveNotAttack(2, pokemon2PageData.evolvesTo, pokemon2PageData.lostHealth)} disabled={pokemon2PageData.evolvesTo === '' || !pokemon2PageData.turn}>Evolve</button>
                </div>
            </div>
        )
    }
}