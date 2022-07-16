import React from "react";
import Cards from "./static_components/Cards";

const Stories = ({ type, loading, posts }) => {
    return (
        <>
            <h1 className="heading">{type} Stories</h1>
            <div className="card-container">
                {
                    loading ? <p className="loading">|</p> :
                        Object.keys(posts).map(id => {
                            return <Cards key={id} id={posts[id]} />
                        })
                }
            </div>
        </>
    )
}

export default Stories;