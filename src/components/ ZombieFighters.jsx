
import './ZombieFighters.css';

const ZombieFighters = (props) => {
  return (
    <div className="fighter-card">
      <img src={props.img} width="150" height="150" />
      <ul>
        <li>Name: {props.name}</li>
        <li>Price: {props.price}</li>
        <li>Strength: {props.strength}</li>
        <li>Agility: {props.agility}</li>
      </ul>
    </div>
  );
};

export default ZombieFighters;
