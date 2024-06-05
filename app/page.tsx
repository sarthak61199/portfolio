import Links from "@/components/links";

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Sarthak Agarwal</h1>
      <p className="mt-2 text-lg sm:text-xl">
        Senior Software Engineer @Incedo
      </p>
      <div className="mt-6 text-base sm:text-lg">
        <p>
          I have around <strong>3 years of experience</strong> in the software industry.
          Despite having a primary inclination towards{" "}
          <strong>Frontend Development</strong>, I am equally proficient in{" "}
          <strong>Backend Development</strong>. Taking complete ownership from
          Design to Deployment is what I strive for.
        </p>
      </div>
      <div className="mt-6 text-base sm:text-lg">
        <div className="grid grid-cols-2 gap-5">
          <a
            className="cursor-pointer rounded-base border-2 border-black px-4 py-2 text-center text-sm font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base bg-main"
            href={
              "https://drive.google.com/uc?export=download&id=1AbpH8LkR1f1yEy0Xk-_CpTszaeD4QbWS"
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
              <a target="_blank" href={"mailto:sarthakagarwal61199@gmail.com"}>
                sarthakagarwal61199@gmail.com
              </a>
            </strong>
          </u>{" "}
          or ping me on{" "}
          <u>
            <strong>
              <a
                target="_blank"
                href={"https://www.linkedin.com/in/sarthak-agarwal-84996416b/"}
              >
                LinkedIn
              </a>
            </strong>
          </u>
          .
        </p>
      </div>
      <Links />
    </div>
  );
}
