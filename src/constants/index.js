import {
  convo, musify, musifybeta, drumkit, foody, snakegame, tictac, todo, tradingking,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  invalid,
  pronotes,
  portfolio,
  weatherdaily,
  webeditor,
} from "../assets";

export const navLinks = [
   {
    id: "/",
    title: "Home",
  },
  {
    id: "/aboutpage",
    title: "About",
  },
  {
    id: "/projectpage",
    title: "Projects",
  },
  {
    id: "/contactpage",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Web Developer",
    icon: web,
  },
  {
    title: "TypeScript Developer",
    icon: mobile,
  },
  {
    title: "Data Science AI/ML/DL",
    icon: backend,
  },
  {
    title: "Web 3 Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Portfolio Website",
    description:
      "A 3D animated Web Application user interface to showcase all skills, Projects and all other necessary information ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "orange-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/RaktimYoddha/portfolio",
  },
  {
    name: "Pro Notes",
    description:
      "A Web application that enables users to signUp and login through their email account and create notes. Users also get the option to update and delete previously created notes",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: pronotes,
    source_code_link: "https://github.com/RaktimYoddha/pro-notes",
  },
  {
    name: "Convo",
    description:
      "A real-time chatting Web Application which enables users to chat as well as to share images, videos and various files with friends, family and colleague",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },

    ],
    image: convo,
    source_code_link: "https://github.com/RaktimYoddha/convo",
  },
  {
    name: "Weather Daily",
    description:
      "A Web Application that enables users to access all weather information of any desired state, region and country they searched for.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weatherdaily,
    source_code_link: "https://github.com/RaktimYoddha/Weather-Daily",
  },
  {
    name: "Musify",
    description:
      "A complete new generation music player Web Application that enables users to play and browse through all kind of music world wide",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient",
      },
    ],
    image: musify,
    source_code_link: "https://github.com/RaktimYoddha/Musify",
  },
  {
    name: "Web Development editor",
    description:
      "A Web Application that enables users to make a website by writing HTML, CSS and JAVASCRIPT in their respective section and the result is shown on the spot",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: webeditor,
    source_code_link: "https://github.com/RaktimYoddha/web-dev-editor",
  },
  {
    name: "Trading King",
    description:
      "A optimized stock tracking and Monitoring Web Application that enables users to view stocks of various companies and also provides their graph of ups and downs",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tradingking,
    source_code_link: "https://github.com/RaktimYoddha/trading-king",
  },
  {
    name: "Musify -vanilla",
    description:
      "A music Web Interface that enables users to select and Play music to few accessible songs",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: musifybeta,
    source_code_link: "https://github.com/RaktimYoddha/Musify-Vanilla",
  },
  {
    name: "Todo-List",
    description:
      "A to-do list Web Application which enables users to create, read and delete their to-dos and save the user information in local storage of the user",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/RaktimYoddha/Todo-list-react-CRD",
  },
  {
    name: "Drum-Kit Mini",
    description:
      "A click responding Drum-Kit Web interface that enables the user to play drum-set with click and accessible keys",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: drumkit,
    source_code_link: "https://github.com/RaktimYoddha/DrumKit-mini",
  },
  {
    name: "Foody",
    description:
      "A Dummy Food Ordering Web interface design",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: foody,
    source_code_link: "https://github.com/RaktimYoddha/FoodOrderBegineeer",
  },
  {
    name: "Snake Game",
    description:
      "A classical Snake Game Web Interface with Score and high score record and sound-effects",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: snakegame,
    source_code_link: "https://github.com/RaktimYoddha/SnakeGame",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "A tik-tac-toe game Web Interface where every time a random player gets first chance to start the Game ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/RaktimYoddha/tic-tac-toe",
  },
  
];

export { services, technologies, projects };
