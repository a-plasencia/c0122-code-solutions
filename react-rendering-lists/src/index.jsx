import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class Pokemon extends React.Component {
  render() {
    return (
      <ui>
        {pokedex.map(pokemon => (
          <li key={pokemon.number}>
            {pokemon.name}
          </li>
        ))}
      </ui>
    );
  }
}

ReactDOM.render(
  <Pokemon />,
  document.querySelector('#root')
);
