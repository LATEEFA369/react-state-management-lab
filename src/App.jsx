// src/App.jsx
import './App.css'
import { useState } from 'react'
import ZombieFighters from './components/ ZombieFighters'

const team = [];
const money = 100 ;
const zombieFighters = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

const App = () => {

  const [money, setMoney] = useState(100)
  const [team, setTeam] = useState([])
  
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]) 
      setMoney(money - fighter.price)
    } else {
      console.log("Not enough money")
    }
  };
  
  return (
    <>
    <h1>zombie Fighters</h1>
    <h4>Money : {money}</h4>
    <h4>Team Strength :</h4>
    <h4>Team Agility : </h4>
    <h4>Team : {team}</h4>
    <h4>Fighters</h4>
    <section>
      {zombieFighters.map((fighter) => (
        <div key={fighter.name}>
          <ZombieFighters 
            price={fighter.price}
            strength={fighter.strength}
            agility={fighter.agility}
            img={fighter.img}
          />
          <button onClick={() => handleAddFighter(fighter)}>
            Add 
          </button>
        </div>
      ))}
    </section>
  </>
);
  
}

export default App