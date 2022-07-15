import React, { useEffect } from "react";

const Cards = (id) => {
    const { title, url, author, num_comments, points } = id.id;
    const onLinkClick = (e) => {
        e.preventDefault();
        window.open(url, '_blank');
    }
    return (
        <div className="cards" onClick={onLinkClick}>
            {/* {console.log(id)} */}
            <div className="card">
                <div className="card-title">
                    <h1> {title}</h1>
                </div>
                <div className="card-footer">
                    <p>@{id.id.by}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;