import Image from "next/image";
import { SectionTitle } from "@/app/(landing)/components/section-title/section-title";

export const PetProjectSection = () => {
  return (
    <section
      id="pet-project"
      aria-labelledby="pet-projects-heading"
      className="flex pl-12"
    >
      <SectionTitle id="pet-projects-heading">Pet Project</SectionTitle>
      <div>
        <p className="text-8xl">TO DO</p>
        <Image
          src="/images/smug-tighnari-2-transparent.png"
          alt="Hero image"
          width={500}
          height={500}
          className="ml-auto mr-auto block"
        />
      </div>
    </section>
  );
};
