import { IconType } from "@icons-pack/react-simple-icons";

export default function Tech({
  skill,
}: {
  skill: {
    skill: string;
    icon: IconType;
  };
}) {
  return (
    <div className="flex gap-2 items-center rounded-base border-2 border-black bg-bg px-4 py-2 text-sm font-base shadow-base">
      <skill.icon className="size-6" title={skill.skill} />
      <p>{skill.skill}</p>
    </div>
  );
}
