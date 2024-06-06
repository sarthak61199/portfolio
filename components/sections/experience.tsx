import PAST_ROLES from "@/data/experience";

export default function Experience() {
  return (
    <div className="mb-16">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">
        <u>Experience</u>
      </h1>
      {PAST_ROLES.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2">
              {role.description.map((d) => (
                <li key={d} className="text-base">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
