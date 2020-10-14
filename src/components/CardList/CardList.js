import React from "react";

export const CardList = ({users}) => {
    const nameArray = users.map(userName => <h1>{userName.name}</h1>);

    return <div>{nameArray}</div>
}