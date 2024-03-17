import Image from "next/image";
import { SectionTitle } from "@/app/(landing)/components/section-title/section-title";
import { SectionLayout } from "@/app/(landing)/components/section-layout/section-layout";

export const ContributionsSection = () => {
  return (
    <SectionLayout id="contributions" aria-labelledby="contributions-heading">
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
    </SectionLayout>
  );
};
