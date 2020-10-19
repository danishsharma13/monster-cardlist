import React from "react";
import { Card } from '../Card/Card';
import './CardList.css';

export const CardList = ({users}) => {

    return( 
        <div>
            <Card users={users} />
        </div>
    )
}