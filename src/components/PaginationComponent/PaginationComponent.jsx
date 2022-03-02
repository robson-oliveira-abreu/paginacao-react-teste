import React from "react";
import './PaginationConponent.css'

const PaginationComponent = ({ setCurrentPage, pages, currentPage }) => {
    return (
        <div>
            {Array.from(Array(pages), (item, index) => {
                return (
                    <button
                        style={ index === currentPage ? {backgroundColor: "gray"} : null}
                        className="paginationButton"
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >
                        {index + 1}
                    </button>
                )
            })}
        </div>

    )
}

export default PaginationComponent;