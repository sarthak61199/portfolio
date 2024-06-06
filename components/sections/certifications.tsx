import CERTIFICATIONS from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="mb-16">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">
        <u>Certifications</u>
      </h1>
      {CERTIFICATIONS.map((cert, id) => {
        return (
          <div className="mb-4" key={id}>
            <ul className="list-disc list-inside flex flex-col gap-2 ">
              <a href={cert.link} className="w-fit">
                <strong>
                  <li>
                    <span className="hover:underline">
                      {cert.ceritficateName}
                    </span>
                  </li>
                </strong>
              </a>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
