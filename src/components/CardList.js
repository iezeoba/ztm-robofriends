import React from 'react';
import Card from './Card.js';

//const CardList = (props) => { //figure how to use props instead of destructuring
const CardList = ({ robots }) => { // destructuring is being used here to reference robots
    if (false) {  // To see the errorboundary alert, change false to true //
        throw new Error("Noooooooo!")
    }
    // return (
    //     <div>
    const eachCardComponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <div>
            {eachCardComponent}
        </div>
    );
    // </div>
    // )
}
export default CardList;