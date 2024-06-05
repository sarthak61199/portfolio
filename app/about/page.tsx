import Certifications from "@/components/sections/certifications";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";

export default function About() {
  return (
    <div className="font-base">
      <Skills />
      <Certifications />
      <Experience />
    </div>
  );
}
