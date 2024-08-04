import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBars,
  faDiceD6,
  faEnvelope,
  faWindowRestore,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  aircam,
  deploy,
  avatar,
  awsIcon,
  chateg,
  cssIcon,
  eslintIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  memoryGame,
  neoIcon,
  nodeIcon,
  psqlIcon,
  pyIcon,
  raspIcon,
  reactIcon,
  viteIcon,
  hotelGuest,
  hotelStaff,
  typescriptIcon,
  nextjsIcon,
  reactRouterIcon,
  tailwindIcon,
  styledComponentsIcon,
  bootstrapIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  memoryGame,
  chateg,
  aircam,
  deploy,
  hotelGuest,
  hotelStaff,
  typescriptIcon,
  nextjsIcon,
  reactRouterIcon,
  tailwindIcon,
  styledComponentsIcon,
  bootstrapIcon,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",
    "My name is Galina, and I'm a passionate front-end developer based in Queensland, Australia. I specialize in React.js, Next.js, and modern web technologies.",
    "Outside of my professional activities, I love exercising, dancing and learning to play guitar. I'm also a proud mum and love spending time with my family",
    "I'm currently seeking job opportunities and excited to bring my enthusiasm for creating exceptional web experiences to a new team.",
    "You can download my resume here.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Deploy.link",
    description:
      "A no-code platform that enables users to create and deploy interactive digital experiences quickly and easily. It offers a drag-and-drop interface, real-time analytics, and customization options to help businesses build tailored solutions without needing technical expertise",
    image: deploy,
    demo_link: "https://deploy.link/",
  },
  {
    name: "AirCam",
    description:
      "App that instantly shares photos with those around you, allowing users to save and share photos without needing to download the app. It provides a seamless experience similar to a reversed AirDrop, enhancing photo-sharing convenience at events.",
    image: aircam,
    demo_link: "https://air.cam",
  },
  {
    name: "ChatEg",
    description:
      "communication platform designed for the European Games, enabling volunteers to coordinate and chat effectively. It features workspaces, group and private chats, and multimedia sharing, providing a comprehensive solution similar to WhatsApp but tailored for event management.",
    image: chateg,
    demo_link: "https://www.chat.eg",
  },
  {
    name: "The Wild Oasis. Staff",
    description:
      "The Wild Oasis is a management platform designed for efficiently handling cabin rentals. It allows users to add new cabins, manage check-ins and check-outs, and provide additional services and extras, streamlining the entire guest management process for property owners.",
    image: hotelStaff,
    demo_link: "https://the-wild-oasis-staff-side.netlify.app",
  },
  {
    name: "The Wild Oasis. Guests",
    description:
      "The Wild Oasis Guests platform is designed to enhance the guest experience by providing a seamless way to explore and book cabins.",
    image: hotelGuest,
    demo_link: "https://the-wild-oasis-guests-side.vercel.app/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "nextjs",
    title: "NextJs",
    icon: nextjsIcon,
    description:
      "I have extensive experience utilizing Next.js for server-side rendering and building scalable web applications.",
  },
  {
    id: "typescript",
    title: "Typescript",
    icon: typescriptIcon,
    description:
      "I am proficient in TypeScript, leveraging its static typing and advanced features to build robust, maintainable, and scalable web applications.",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description:
      "In my Tailwind CSS skills, I unleash creativity, crafting responsive and visually appealing user interfaces with utility-first styling, and collaborating seamlessly with designers and developers.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "reactRouter",
    title: "React Router",
    icon: reactRouterIcon,
    description:
      "I have a strong command of React Router, encompassing a wide range of skills such as setting up dynamic and nested routes, handling navigation and redirects, implementing route guards, and ensuring seamless user experiences in single-page applications.",
  },
  {
    id: "styledComponents",
    title: "styled-components",
    icon: styledComponentsIcon,
    description:
      "I have gained considerable experience working with styled-components, leveraging its capabilities to build dynamic and maintainable component-based user interfaces with scoped CSS in JavaScript.",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    icon: bootstrapIcon,
    description:
      "I have expertise in leveraging Bootstrap to develop responsive, visually appealing, and user-friendly web applications.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
