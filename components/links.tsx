import {
  SiGithub,
  SiGmail,
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
  ];

  return (
    <div className="mr-auto mt-16 flex w-full flex-wrap items-center gap-10">
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
