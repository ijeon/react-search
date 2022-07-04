import React from "react";
import { useParams, Link } from "react-router-dom";
import FileList from '../data/FileList';
import "../styles/layout.scss";

const Lnb = () => {
    let { Channel, Folder } = useParams();

    return (
        <nav>
            {
                FileList.listdata.map((root, idx) =>
                    <>
                        <h1>{root.label}</h1>
                        {
                            root.content.map(content =>
                                <>
                                    <button>{content.channel}</button>
                                    {
                                        content.category.map(category =>
                                            <Link to={`/${root.label}/${content.channel}/${category.folder}`} className={content.channel === Channel && category.folder === Folder ? "ui-active" : ""}>
                                                {category.name}
                                            </Link>
                                        )
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </nav>
    )
};

export default Lnb;