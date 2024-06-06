import {
  SiCss3,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGo,
  SiHono,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "@icons-pack/react-simple-icons";

const SKILLS = [
  {
    field: "Frontend",
    skills: [
      { skill: "html", icon: SiHtml5 },
      { skill: "css", icon: SiCss3 },
      { skill: "javascript", icon: SiJavascript },
      { skill: "typescript", icon: SiTypescript },
      { skill: "reactjs", icon: SiReact },
      { skill: "nextjs", icon: SiNextdotjs },
      { skill: "redux", icon: SiRedux },
      { skill: "material-ui", icon: SiMui },
      { skill: "tailwind", icon: SiTailwindcss },
    ],
  },
  {
    field: "Backend",
    skills: [
      {
        skill: "golang",
        icon: SiGo,
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
        skill: "hono",
        icon: SiHono,
      },
      {
        skill: "postgresql",
        icon: SiPostgresql,
      },
      {
        skill: "mysql",
        icon: SiMysql,
      },
      {
        skill: "prisma",
        icon: SiPrisma,
      },
      {
        skill: "drizzle-orm",
        icon: SiDrizzle,
      },
    ],
  },
  {
    field: "Developer Tools",
    skills: [
      {
        skill: "git",
        icon: SiGit,
      },
      {
        skill: "docker",
        icon: SiDocker,
      },
      {
        skill: "vscode",
        icon: SiVisualstudiocode,
      },
    ],
  },
];

export default SKILLS;
