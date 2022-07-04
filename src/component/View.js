import React from "react";
import DrawList from "./DrawList";
import { useParams } from "react-router-dom";
import FileList from '../data/FileList.json';

const View = () => {
    let { Channel, Folder } = useParams();

    let FolderName = FileList.listdata.find(el => el.label === "Publist").content.find(el => el.channel === Channel).category.find(el => el.folder === Folder);

    return (
        <section id="view">
            {DrawList(FolderName.file)}
        </section>
    );
};

export default View;