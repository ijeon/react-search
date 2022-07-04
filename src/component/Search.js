import React from "react";
import { useParams } from "react-router-dom";
import FileList from '../data/FileList.json';

//const RootData = FileList.listdata.find(el => el.label === "Publish").content;

const Search = () => {
    let { Keyword } = useParams();        

   //// const ResultSet = RootData.filter(content => (content.channel.toLowerCase().includes(Keyword.toLowerCase())));

    return (
        <section>
            {Keyword}
            
            <ul>
                <li>
                    <span>Hmall-PC &gt; PC 고객센터(CC)</span>
                    <ul>
                        <li>
                            dd
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Search;