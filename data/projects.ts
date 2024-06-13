import {
  SiExpress,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTwilio,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

const PROJECTS = [
  {
    name: "Portfolio",
    description:
      "The site you are currently on! Built using NextJS and TailwindCSS, with a touch of TypeScript for type safety. Also features a Blog section with harnesses the power MDX (Markdown) and Static Site Generation (SSG) to create a fast and SEO friendly blog pages.",
    previewImage: "/portfolio.png",
    techStack: [
      {
        skill: "nextjs",
        icon: SiNextdotjs,
      },
      {
        skill: "typescript",
        icon: SiTypescript,
      },
      {
        skill: "tailwindcss",
        icon: SiTailwindcss,
      },
    ],
    repoUrl: "https://github.com/sarthak61199/portfolio",
  },
  {
    name: "Postwoman",
    description:
      "A Postman like API testing tool with main focus on parallel requests to test the performance of the API and how much load it can handle. It was mostly built as an internal tool at my company load test the APIs we were building. It was built using ReactJS and Material-UI.",
    previewImage: "/postwoman.png",
    techStack: [
      {
        skill: "reactjs",
        icon: SiReact,
      },
      {
        skill: "material-ui",
        icon: SiMui,
      },
    ],
    repoUrl: "https://github.com/sarthak61199/react-postman",
  },
  {
    name: "Newsletter Emailing",
    description:
      "Developed a Newsletter Mailing fullstack application where a user can subscribe to a newsletter and then the client can send emails using SendGrid to the registered email ids. User also has the option to unsubscribe from the newsletter. User also had a provision to write mail in HTML format and preview it right next to it",
    previewImage: "/newsletter.png",
    techStack: [
      {
        skill: "reactjs",
        icon: SiReact,
      },
      {
        skill: "nodejs",
        icon: SiNodedotjs,
      },
      {
        skill: "express",
        icon: SiExpress,
      },
      {
        skill: "mysql",
        icon: SiMysql,
      },
      {
        skill: "sendgrid",
        icon: SiTwilio,
      },
    ],
    repoUrl: "https://github.com/sarthak61199/newsletter-mailing",
  },
];

export default PROJECTS;
