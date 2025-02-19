import './ZombieFighters.css'
const ZombieFighters = (props) => {

return(

<>

<div>

<img src= {props.img}/>
<ul>{props.key}</ul>
    <ul>price : {props.price}</ul>
<ul>Strength : {props.strength}</ul>
    <ul>Agility : {props.agility}</ul>

</div>


</>

)


}
export default ZombieFighters 