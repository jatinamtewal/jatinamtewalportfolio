import {
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
  carhub,
  fashionempire,
  promptopia,
  mmdu,
  finolity,
  fashionempirelogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "HackaVerse MMU 2022",
    icon: mmdu,
    iconBg: "#383E56",
    date: "March 2022",
    points: [
      "Crafting a stunning and user-centric interface for PEAK, a cutting-edge Fitness Application developed during a hackathon.",
      "Collaborating with cross-functional teams including content creators, graphics designers, and other developers to create high-quality interface.",
      "Creating an exceptional UI/UX design for PEAK, elevating the fitness application with intuitive navigation, visually appealing elements, and seamless user interactions.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Fashion Empire",
    icon: fashionempirelogo,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Nov 2022",
    points: [
      "Personalized an exquisite e-commerce platform, enabling a local vendor to showcase and sell their unique collection, leveraging the power of MERN stack for seamless functionality.",
      "Engineered a robust e-commerce platform with Redux state management, ensuring smooth navigation, and deployed it on Vercel for rapid scalability and enhanced user experience.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Finolity Ventures",
    icon: finolity,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Pioneered a revolutionary MERN-based Ed-Tech platform, empowering students to unlock their potential, acquire in-demand skills, and earn career-enhancing certificates.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jatin proved me wrong.",
    name: "Suraj Kumar",
    designation: "CFO",
    company: "Fashion Empire",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jatin does.",
    name: "Ravi Sharma",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "After Jatin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kumar Abhishek",
    designation: "CEO",
    company: "Finolity Ventures",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Car Hub",
    description:
      "Web-based Rental Cars showcase platform providing users with up-to-date information on car models, manufacturers, years, and fuel types.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/jatinamtewal/carhub",
    web_link: "https://carhub-tau-five.vercel.app",
  },
  {
    name: "Fashion Empire",
    description:
      "An personalized e-commerce platform for a local garment vendor, empowering them to showcase and sell their exquisite collection online.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: fashionempire,
    source_code_link:
      "https://github.com/jatinamtewal/Fashion_Empire_Ecommerce_Repository",
    web_link: "https://fashionempire.vercel.app",
  },
  {
    name: "Promptopia",
    description:
      "A website that revolutionizes AI interactions by enabling users to discover, create, and share creative prompts specifically tailored for AI platforms like CHATGPT.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/jatinamtewal/promptopia",
    web_link: "https://nextpromptopia.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
