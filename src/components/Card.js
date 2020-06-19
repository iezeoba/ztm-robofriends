import React from 'react';

const Card = (props) => {
    // const Card = ({ name, email, id }) => { // above line destructured here
    // const { name, email, id } = props; //another way to destructure above lines
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
            {/* <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> */} {/*above line destructured here*/}
            {/*above line destructured here*/}
            <div>
                <h2>{props.name}</h2>
                {/* <h2>{name}</h2> */} {/*above line destructured here*/}
                <p>{props.email}</p>
                {/* <p>{email}</p>  */} {/*above line destructured here*/}
            </div>
        </div>
    );
}
export default Card;

// The lines commented are alternative ways to write the code using destructuring. 
//The commented lines can replace the active lines and still produce the same result. 
//It's a matter of choice and approach to presentation