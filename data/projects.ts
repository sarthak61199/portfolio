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
      "Developed my portfolio website. Also features an advanced Blog section powered by MDX and Static Site Generation (SSG), delivering swift, SEO-optimized blog pages with seamless navigation and dynamic content rendering.",
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
      "Engineered a sophisticated API testing tool akin to Postman, designed to conduct rigorous load tests by executing concurrent requests to assess API performance and scalability thresholds. Initially conceived as an internal utility within my company. ",
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
