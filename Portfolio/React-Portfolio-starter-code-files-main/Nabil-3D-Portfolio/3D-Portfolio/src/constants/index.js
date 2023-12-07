import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  figma,
  illustrator,
  photoshop,
  aftereffects,
  adobexd,
  adobedimension,
  blender,
  flstudio,
  indesign,
  wordpress,
  digiassur,
  directsales,
  hkouki,
  carillons,
  neomotors,
  carrent,
  jobit,
  tripguide,
  evobike,
  alpha55,
  premierepro,
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
    title: "UI & UX  Designer",
    icon: web,
  },
  {
    title: "Video Animator",
    icon: mobile,
  },
  {
    title: "3D Models Creator",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
  {
    name: "adobexd",
    icon: adobexd,
  },
  {
    name: "aftereffects",
    icon: aftereffects,
  },
  {
    name: "adobedimension",
    icon: adobedimension,
  },
  {
    name: "premierpro",
    icon: premierepro,
  },
  {
    name: "indesign",
    icon: indesign,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flstudio",
    icon: flstudio,
  },
  {
    name: "blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Infographic Designer",
    company_name: "Direct Sales",
    icon: directsales,
    iconBg: "#383E56",
    date: " 2017 -  2019",
    points: [
      "Created visual content for marketing and advertising strategies.",
      "Designed graphics for client campaigns.",
      "Contributed to the development of creative concepts and designs.",
    ],
  },
  {
    title: "2D Animation Creation",
    company_name: "Houkouki",
    icon: hkouki,
    iconBg: "#383E56",
    date: "Task Mission",
    points: [
      "Developed 2D animations for Houkouki's launch campaign, enhancing visual branding",
      "Worked closely with the development team to align animations with the application's features.",
      "Crafted storyboards and brought creative concepts to life through animation.",
    ],
  },
  {
    title: "Infographic Designer / Assistant Community Manager",
    company_name: "Alpha 55",
    icon: alpha55,
    iconBg: "#E6DEDD",
    date: " 2019 -  2021",
    points: [
      "Designed informative and engaging infographics for promotional activities.",
      "Assisted in community management and engagement.",
      "Contributed to the development of marketing strategies.",
      "Collaborated with the team for store branding initiatives.",
    ],
  },
  {
    title: "2D Animation for Launch Campaign",
    company_name: "Digiassure",
    icon: digiassur,
    iconBg: "#383E56",
    date: "Task Mission",
    points: [
      "Created engaging and informative 2D animations for the launch campaign.",
      "Translated marketing concepts into visually compelling animations",
      "Collaborated with the marketing team to ensure alignment with campaign goals.",
      "Crafted storyboards and brought creative concepts to life through animation.",
      "Delivered high-quality animations that resonated with the target audience",
    ],
  },
  {
    title: "Graphic Designer / Community Manager",
    company_name: "Evobike",
    icon: evobike,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Collaborating with clients to understand their design needs and deliver effective solutions.",
      "Managed and executed advertising campaigns on Facebook, Google, and TikTok.",
      "Developed the company website with advanced filters for each motorcycle part, ensuring compatibility and a seamless user experience.",
      "Collaborated with the team for store branding initiatives, enhancing the in-store and online presence.",
      "Contributed to community engagement strategies and content creation for various platforms.",
    ],
  },
  {
    title: "UI/UX Website Design",
    company_name: "Neo Motors",
    icon: neomotors,
    iconBg: "#383E56",
    date: "Task Mission",
    points: [
      "Executed UI/UX design for the website of Neo Motors, the first 100% Moroccan automotive manufacturer",
      "Collaborated with the development team to integrate advanced functionalities",
      "Designed the website to reflect the brand identity and communicate product uniqueness.",
    ],
  },
  {
    title: "Senior Graphic Designer / Studio Manager",
    company_name: "Carillons",
    icon: carillons,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Directing diverse design projects and campaigns in the automotive tourism, and other sectors for clients in Morocco and Saudi Arabia. ",
      "Managing a team for studio operations and ensuring high-quality project delivery",
      "Leading design strategies for branding and marketing campaigns.",
      "Collaborating with clients to understand their design needs and deliver effective solutions.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe illustrator",
        color: "green-text-gradient",
      },
      {
        name: "Adobexd",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
