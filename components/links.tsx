import {
  SiGithub,
  SiGmail,
  SiLeetcode,
  SiLinkedin
} from "@icons-pack/react-simple-icons";

export default function Links() {
  const links = [
    {
      icon: SiGmail,
      href: "mailto:sarthakagarwal61199@gmail.com",
    },
    {
      icon: SiGithub,
      href: "https://github.com/sarthak61199",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/sarthak-agarwal-84996416b/",
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/m8rix/",
    },
  ];

  return (
    <div className="flex pr-8 flex-wrap items-center gap-8">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon />
          </a>
        );
      })}
    </div>
  );
}
