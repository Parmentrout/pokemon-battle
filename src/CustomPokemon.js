import React from "react"
import styles from '../styles/Home.module.css'
import { getCustomPokemon } from "./added-pokemon";

export default class CustomPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            customPokemon: [],
        }
    }

    showComponent = async () => {
        console.log('firing');
        await this.setState({show: true, customPokemon: getCustomPokemon() });
    }

    render() {
        const { show, customPokemon } = this.state;
        return (
        <div>
            {!show &&
               <div className={styles.centerbutton}>
                <button className={styles.niceButton} onClick={this.showComponent}>Toggle Custom Pokemon</button>
               </div>
            }
            {show &&
                <div>
                <h1 className={styles.centerbutton}>Custom Pokemon</h1>
                <div className={styles.showcase}>
                    { 
                    customPokemon.map(pokemon => {
                    return (
                    <div className={styles.card}>
                        <h2>{ pokemon.name }</h2>
                        <div>Total Health: <span className={styles.red}>{pokemon.health}</span></div>
                        <img
                            className={styles.battleImage}
                            src={pokemon.sprites.other.home.front_default} 
                            alt="No images found"
                            />
                        <div><b>Abilities:</b></div>
                        <ul>
                            {pokemon && pokemon.abilities && pokemon.abilities.map(x => {
                                return <li key={x.ability.name}>{x.ability.name}</li>
                            })}
                        </ul>
                        </div>)
                    })}
                </div>
            </div>}
        </div>)
    }
}