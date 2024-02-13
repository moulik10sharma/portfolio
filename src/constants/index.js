import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  nitd,
  cluboard,
  cash_flow,
  freadom,
  food,
  alumni,
  iris,
  ecell,
  graphql,
  portfolio,
  publiclab,
  zulip,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1qCp0aXenWxZNdLz0Txbvmme2N9a8WMGH/view?usp=drive_link";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/m10s ";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitd,
    title: "National Institute of Technology Delhi",
    degree: "Bachelor of Technology",
    duration: "December 2021 - May 2025",
    content1: "Major: Computer Science Engineering",
    content2: "Relevant Coursework: Data Structures, Database Management System, Design and Analysis of Algorithms, Artificial Intelligence"
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-2",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
    ],
  },
];

export const experiences = [
];

export const projects = [
  {
    id: "project-1",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
  {
    id: "project-2",
    title: "Food Delivery Website",
    github: "https://github.com/moulik10sharma/FoodProject",
    link: "https://www.youtube.com/watch?v=c3WiKoXFjmc",
    image: food,
    content:
      "SDLC based Food Delivery Website using MERN Stack.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
    ],
  }
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Alumni Cell",
    title: "Social Media Account Handler",
    duration: "Oct 2022 - Present",
    content: [
      {
        text: "Managed the Linkedin & Twitter accounts of the Alumni Cell",
        link: "https://nitdelhi.ac.in/alumniportal/team.php",
      },
    ],
    logo: alumni,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/m10s",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/moulik10sharma",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:moulik10sharma@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/moulik10sharma",
  },
];

export const aboutMe = {
    name: "Moulik Sharma",
    tagLine: "Ex - Web Dev Intern @WebStack Academy | Social Media Account Handler @Alumni Cell, NITD",
    intro: "Student web-developer from India who is either busy improving his craft or pondering over the next big idea."
}
