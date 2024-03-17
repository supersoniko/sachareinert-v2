import Image from "next/image";
import { SectionTitle } from "@/app/(landing)/components/section-title/section-title";

export const ContributionsSection = () => {
  return (
    <section
      id="contributions"
      aria-labelledby="contributions-heading"
      className="flex pl-12"
    >
      <SectionTitle id="contributions-heading">Contributions</SectionTitle>
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
