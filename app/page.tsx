import Links from "@/components/links";
import Certifications from "@/components/sections/certifications";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div>
      <div className="mb-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <h1 className="text-2xl font-heading sm:text-4xl">Sarthak Agarwal</h1>
          <Links />
        </div>
        <div className="mt-6 text-base sm:text-lg">
          <p>
            I am a developer with <strong>3+ years</strong> of software industry
            experience, excelling in both <strong>Frontend</strong> and{" "}
            <strong>Backend</strong> development. I take pride in owning
            projects from design to deployment.
          </p>
        </div>
        <div className="mt-6 text-base sm:text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <a
              className="cursor-pointer rounded-base border-2 border-black px-4 py-2 text-center text-sm shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base bg-main"
              href={
                "https://drive.google.com/uc?export=download&id=1sV-sNm0nFYqRyEReWutPObZF9yOiwBMR"
              }
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-6 text-base sm:text-lg">
          <p>
            Drop me a mail on{" "}
            <u>
              <strong>
                <a
                  target="_blank"
                  href={"mailto:sarthakagarwal61199@gmail.com"}
                >
                  sarthakagarwal61199@gmail.com
                </a>
              </strong>
            </u>{" "}
            or ping me on{" "}
            <u>
              <strong>
                <a
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/sarthak-agarwal-84996416b/"
                  }
                >
                  LinkedIn
                </a>
              </strong>
            </u>
            .
          </p>
        </div>
      </div>
      <Skills />
      <Experience />
      <Certifications />
    </div>
  );
}
