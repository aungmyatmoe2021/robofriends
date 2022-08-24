import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    const lsCard = robots.map((robot, i) => {
        return (
            <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
    })
    // if (true) {
    //     throw new Error('Nooooooo!')
    // }
    return (
        <div>
            {lsCard}
        </div>
    );
}

export default CardList;