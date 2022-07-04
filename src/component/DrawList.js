import React from "react";
import { Link } from "react-router-dom";

const DrawList = (listData) => {
    return (
        <ul>
            {
                listData.map((file, idx) =>
                    <>
                        {
                            <li>
                                <p>{file.title}</p>
                                <Link to="/">{file.name}</Link>
                            </li>
                        }
                    </>
                )
            }
        </ul>
    );
};

export default DrawList;