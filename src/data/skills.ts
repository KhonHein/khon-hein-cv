
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

import foodiePosSvg from '../../public/images/shop.svg'
import posSvg from '../../public/images/pos.svg'
import readSvg from '../../public/images/read.svg'
import androidSvg from '../../public/images/android.svg'
import websiteSvg from '../../public/images/website.svg'
import databaseSvg from '../../public/images/database.svg'

export const devsIn = [
    {
        id:1,
        name:'Dynamic App',
        image:androidSvg,
        caption:'Designing smooth-running applications with the latest features for every medium.',
    },
    {
        id:2,
        name:'Website',
        image:websiteSvg,
        caption:'Fully compatible and user-friendly dynamic websites to perform the user’s requirements.',
    },
    {
        id:3,
        name:'Data Modeling',
        image:databaseSvg,
        caption:'“You can have data without information, but you cannot have information without data.”',
    },
]

export const skillsFrontend = [
    {
        language:"HTML-5",
        status:"Experienced",
        percent:80,
        icon:''
    },
    {
        language:"CSS-3",
        status:"Experienced",
        percent:75,
        icon:''
    },
    {
        language:"JavaScript",
        status:"Experienced",
        percent:75,
        icon:''
    },
    {
        language:"Bootstrap5",
        status:"Experienced",
        percent:80,
        icon:''
    },
    {
        language:"jQuery",
        status:"Experienced",
        percent:80,
        icon:''
    },
    {
        language:"Vue-3",
        status:"Experienced",
        percent:75,
        icon:''
    },
    {
        language:"React",
        status:"Experienced",
        percent:85,
        icon:''
    },
    {
        language:"Typescript",
        status:"Experienced",
        percent:80,
        icon:''
    },
];

export const skillsBackend = [
    {
        language:"PHP",
        status:"Experienced",
        percent:70,
    },
    {
        language:"Laravel V.^8.*",
        status:"Experienced",
        percent:80,
    },
    {
        language:"MySQL",
        status:"Experienced",
        percent:75,
    },
    
    {
        language:"Postgresql (prisma)",
        status:"hand on",
        percent:70,
    },
    {
        language:"Core Java V.8",
        status:"still learning",
        percent:65,
    },
    {
        language:"Node,NextJs",
        status:"hand on",
        percent:80,
    },
]


export const tests = [
    {

        icon:CalendarMonthIcon,
        title:'',
        name:"Age",
        caption: `I was born in 28th of july , 2000. So I'm 24 in 2024.`,

    },
    {

        icon:SchoolIcon,
        title:'',
        name:"Education",
        caption: `DTEd, Monywa. Shwebo Uni, Eng 3rd yr.`,

    },
    {

        icon:AddLocationAltIcon,
        title:'',
        name:"Live in",
        caption: `I live in Mandalay, currently live in Mohnyin ,`,
    },
    {

        icon:LocalLibraryIcon,
        title:'',
        name:"Next",
        caption: `Studying in Android application development`,
    },
]

export const gitPrjs = [
    {
        name:'Foodie-Pos',
        caption:'This is a Restrunt Management Application , NodeJs&&NextJs, Postgresql,',
        svg:foodiePosSvg
    },
    {
        name:'Pizza-Order-System',
        caption:'This is a OnlineShop Application , PHP , Laravel , MySql',
        svg:posSvg
    },
    {
        name:'Learn-Tai',
        caption:'This is aimed to be able to study Tai-Leng Language Application',
        svg:readSvg
    },

]