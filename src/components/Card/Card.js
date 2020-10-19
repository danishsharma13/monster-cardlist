import React from "react";
import './Card.css'

export const Card = ({users}) => {
    const nameArray = users.map(userName => 
    <div className='card-container' key={userName.id}>
        <img alt='monster' src={`https://robohash.org/${userName.id}?set=set2&size=180x180`} />
        <h2>{userName.name}</h2>
        <p>{userName.email}</p>
    </div>
   );
    
    return (<div className='cardList'>{nameArray}</div>)
}