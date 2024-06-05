import CERTIFICATIONS from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="mb-16">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Certifications</h1>
      {CERTIFICATIONS.map((cert, id) => {
        return (
          <div className="mb-6" key={id}>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <a href={cert.link}>
                <strong>
                  <li>
                    <u>{cert.ceritficateName} </u>
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
