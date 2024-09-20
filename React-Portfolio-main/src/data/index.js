import {AiFillGithub} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import {FaHtml5,FaCss3Alt,FaPython, FaAws} from 'react-icons/fa'
import { SiCodechef } from "react-icons/si";
import { RiJavascriptFill} from "react-icons/ri";
import { TbBrandReact,TbBrandMysql } from "react-icons/tb";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline,IoLocationOutline } from 'react-icons/io5';
import { FaJava } from "react-icons/fa6";
import { VscSymbolNumeric } from "react-icons/vsc";




export const menus = [
    {name:"Home"},
    {name:"About"},
    {name:"Education"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"}
];

export const education = [
  {
    schoolName:"Kongu Engineering College, Erode.",
    dateRange:"2023 - 2025",
    certification:"Master of Computer Applications"
    
  },
  {
    schoolName:"Kongu Arts and Science College, Erode",
    dateRange:"2020 - 2023",
    certification:"B.Sc-Computer Technology"
  },
  {
    schoolName:"Jaivabai Model Girls Higher Secondary School, Tirupur",
    dateRange:"2018 - 2020",
    certification:"HSC"
  },
  {
    schoolName:"Jaivabai Model Girls Higher Secondary School, Tirupur",
    dateRange:"2017 - 2018",
    certification:"SSLC",
  },
]

export const skills = [


  {
    category:"Frontend Development",
    data:[
      {skill:"HTML",progress:90,icon:<FaHtml5/>},
      {skill:"CSS",progress:85,icon:<FaCss3Alt/>},
      {skill:"JavaScript",progress:80,icon:<RiJavascriptFill/>},
      {skill:"React",progress:65,icon:<TbBrandReact/>},       
    ]
  },
  {
    category:"Other Programming Languages",
    data:[
      {skill:"Java",progress:85,icon:<FaJava/>},
      {skill:"Python",progress:60,icon:<FaPython/>},
      {skill:"C",progress:80,icon:<VscSymbolNumeric />},
    ]
  },

  {
    category:"Other Techchnologies",
    data:[
      {skill:"AWS S3 Bucket",progress:85,icon:<FaAws />},
      {skill:"AWS RDS",progress:85,icon:<FaAws />},
      {skill:"AWS EC2",progress:85,icon:<FaAws />},
      {skill:"MySQL",progress:75,icon:<TbBrandMysql/>},
      {skill:"Git",progress:80,icon:<AiFillGithub/>},
    ]
  },
]


export const projects = [
  {
    name:'Todo List Application',
    description:`A to-do list is a practical tool for organizing tasks and managing time effectively.`,
    image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://to-do-list-eight-ecru.vercel.app/',
  },
  {
    name:'Expense-Tracker App',
    description:`An expense tracker application helps users monitor and manage their finances by....`,
    image:"https://plus.unsplash.com/premium_photo-1681760172611-c27f502d4084?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://react-expense-tracker-delta-seven.vercel.app/',
  },
  {
    name:'BMI Calculator',
    description:`Calculate your Body Mass Index (BMI) easily. Enter your height and weight...`,
    image:"https://plus.unsplash.com/premium_photo-1681400641919-d5d03f6c0720?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://bmi-calculator-delta-flame.vercel.app/',
  },
  {
    name:'Strong Password Generator',
    description:`An easy-to-use app that creates complex passwords instantly for enhanced online security.`,
    image:"https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://password-generator-jet-six-10.vercel.app/',
  },
  
 
  {
    name:'Weather Application',
    description:`Utilizes OpenWeather API for data. Provides detailed information including temperature, humidity, wind speed`,
    image:"https://images.unsplash.com/photo-1581057400571-61a9d92d091c?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url:'https://react-weather-application-topaz.vercel.app/',
  },
];


export const socialHandles = [
 
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/YAMUNA027",
  },
  {
    name:"LinkedIn",
    icon:<CiLinkedin/>,
    link:"https://www.linkedin.com/in/yamunar27/",
  },
  {
    name:"Code Chef",
    icon:<SiCodechef />,
    link:"https://www.codechef.com/users/yamuna_27",
  },
];
  

export const contactInfo = [
  {
    name:"Email",
    icon:<MdOutlineAlternateEmail />,
    value:"yamunaramasamy69@gmail.com",
  },
  {
    name:"Phone",
    icon:<IoCallOutline/>,
    value:"+91-6383812363",
  },
  {
    name:"Address",
    icon:<IoLocationOutline/>,
    value:"Tirupur, Tamilnadu, India-641601",
  },
]

export const footer = [
  {
    group:"Hot Links",
    routes:[
      {name:"Home"},
      {name:"About"},
      {name:"Education"},
      {name:"Skills"},
      {name:"Projects"},
      {name:"Contact"}
    ]
  },
  {
    group:"Others",
    routes:[
      {name:"Privacy Policy"},
      {name:"Terms and Conditions"},
      {name:"Cookie Policy"},
    ]
  },
  {
    group:"Contacts",
    routes:[
      {
        name:"yamunaramasamy69@gmail.com",
        icon:<MdOutlineAlternateEmail />,
      },
      {
        name:"+91-6383812363",
        icon:<IoCallOutline/>,
      },
      {
        name:"Tirupur, Tamilnadu, India-638459",
        icon:<IoLocationOutline/>,
      },
    ]
  },
]