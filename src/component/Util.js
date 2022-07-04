export function FindFolder(listData, Channel, Folder) {
    return listData.find(el => el.label === "Publist").content.find(el => el.channel === Channel).category.find(el => el.folder === Folder);
}