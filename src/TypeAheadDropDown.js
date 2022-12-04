
// TypeAheadDropDown.js
import React from 'react';
import styles from '../styles/TypeAheadDropDown.module.css';


export default class TypeAheadDropDown extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     suggestions: [],
     text:''
   }
 }
 
 onTextChange = (e) => {
   const {items} = this.props;
   let suggestions = [];
   const value = e.target.value;
   if (value.length > 0) {
     const regex = new RegExp(`^${value}`, `i`);
     suggestions = items.sort().filter(v => regex.test(v));
   }


   this.setState(() => ({
     suggestions,
     text:value
   }));
 }
 
 
 suggestionSelected=(value)=>{
   this.setState(()=>({
     text:value,
     suggestions:[]
   }))
 }
 
 renderSuggestions = () => {
   const { suggestions } = this.state;
   if (suggestions.length === 0) {
     return null;
   }
   const topTen = suggestions.slice(0,10);
   return (
     <ul>
       {topTen.map(s => <li key={s} onClick={(e)=>this.suggestionSelected(s)}>{s}</li>)}
     </ul>
   )
 }
 
 
 render() {
   const {text}=this.state
   return (
   <div className={styles.TypeAheadDropDown}>
     <input onChange={this.onTextChange} placeholder="Search pokemon" value={text} type="text" />
     {this.renderSuggestions()}
   </div>
   );
 }
 
}