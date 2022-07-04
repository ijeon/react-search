import { React, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FileList from '../data/FileList.json';
import * as Utils from "./Util.js";

const Header = () => {
    const location = useLocation();
    const label = location.pathname.split('/')[1];
    const branch = location.pathname.split('/')[2];
    let { Channel, Folder, Keyword } = useParams();
    let FolderName = "검색 결과: ";

    if (branch === 'Search') {
        
    } else {
        FolderName = Utils.FindFolder(FileList.listdata, Channel, Folder);        
    }

    const navigate = useNavigate();
    const [ searchInput, setSearchInput ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        navigate(`/Publist/Search/${searchInput}`)
        setSearchInput('');
    }
   
    return (
        <header>
            <h1>{branch === 'Search' ? "검색 결과" : Channel} :: {branch === 'Search' ? Keyword : FolderName.name}({Folder})</h1>
            <form onSubmit={handleSubmit}>
                <input id="search" type="text" onChange={event => setSearchInput(event.target.value)} value={searchInput}></input>
            </form>
        </header>
    );
};

export default Header;