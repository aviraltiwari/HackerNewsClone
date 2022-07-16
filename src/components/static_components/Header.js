import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../modules/utils/Api";

const Header = () => {


    const [searchResults, setSearchResults] = React.useState([]);
    const [showSearchResults, setShowSearchResults] = React.useState(false);
    const fetchSearchItems = async (searchTerm) => {
        Api.fetchSearchResults(searchTerm).then(data => {
            setSearchResults(data.hits);
        }
        )
    }
    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value !== "") {
            fetchSearchItems(e.target.value);
            setShowSearchResults(true);
        } else {
            setShowSearchResults(false);
        }
    }
    const onLinkClick = (e, url) => {
        window.open(url, '_blank');
    }
    return (
        <div className="header">
            <div className="title">HP</div>
            <div className="search-bar">
                <input className="search" placeholder="Search" onChange={handleSearch} />
                <button className="search-button">Enter to search</button>
                {searchResults.length > 0 && <div className="search-results">
                    {searchResults.slice(0, 10).map(item => {
                        if (showSearchResults && item.title !== null && item.title !== undefined && item.title !== "") {
                            return <div className="search-items" key={item.objectID} onClick={() => onLinkClick(item.url)}>{item.title}</div>
                        } else {
                            return null
                        }
                    })}
                </div>}
            </div >
            <ul>
                <Link to="/">
                    <li>Top Stories</li>
                </Link>
                <Link to="/new">
                    <li>New Stories</li>
                </Link>
            </ul>
        </div >
    );
}

export default Header;