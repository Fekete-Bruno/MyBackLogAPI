import { Log } from "../protocols/Log.js";

const logs: Log[] = [
    {
        id:1,
        name: "Demon's Souls",
        image:"https://c.opencritic.com/images/games/10255/vgVrLFfUXzeZA55O2iDcZoDZwugslmW7T1I8Z0GZjH5gGsH5.jpg",
        platform: 'PS5',
        genre:"RPG",
        status:"wishlist"
    },
    {
        id:2,
        name: "Elden Ring",
        image:"https://www.videogameschronicle.com/files/2021/06/eldenring.jpg",
        platform: 'PS5',
        genre:"RPG",
        status:"playing"
    },
    {
        id:3,
        name: "Ape Escape 2",
        image:"https://en.wikipedia.org/wiki/Ape_Escape_2#/media/File:Ape_Escape_2_Coverart.png",
        platform: 'PS2',
        genre:"Platformer",
        status:"played",
        rating:4.5,
        review:"Amazing PS2 game! Very nostalgic and fun!"
    },
    {
        id:4,
        name: "God of War",
        image:"https://www.mobygames.com/images/covers/l/474565-god-of-war-playstation-4-front-cover.png",
        platform: 'PS4',
        genre:"Adventure",
        status:"backlog",
    }
];

export default logs;