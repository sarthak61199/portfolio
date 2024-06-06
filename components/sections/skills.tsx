import Tech from "@/components/tech";
import SKILLS from "@/data/skills";

export default function Skills() {
  return (
    <div className="mb-16">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">
        <u>Skills</u>
      </h1>
      {SKILLS.map((item, id) => {
        return (
          <div key={id}>
            <h3 className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <div className="mb-10 flex flex-wrap gap-5">
              {item.skills.map((skill, id) => {
                return <Tech key={id} skill={skill} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
