import React from "react";

const Cards = ({ currentItens }) => {
    return (
        <div>
            {
                currentItens.map(item => {
                    return (
                        <div className='item'>
                            <span>{item.id} </span>
                            <span>{item.title} </span>
                            <span>{item.completed}</span>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Cards;