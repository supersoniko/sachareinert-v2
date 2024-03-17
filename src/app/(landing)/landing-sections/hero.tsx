import Image from "next/image";

import {
  IconBrandReact,
  IconBrandDocker,
  IconBrandNodejs,
  IconSql,
  IconBrandAws,
  IconBrandAzure,
  IconBrandTypescript,
  IconBrandGolang,
} from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section
      aria-labelledby="introduction-heading"
      className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0"
    >
      <h1
        id="introduction-heading"
        className="pl-4 pt-4 text-4xl md:max-w-[50vw] md:pl-12 md:text-8xl"
      >
        Developing digital solutions with a focus on{" "}
        <span className="lightning-text">backend</span>.
      </h1>
      <Card className="border-t-0 md:w-[40vw]">
        <CardContent className="p-0">
          <Image
            src="/images/smug-tighnari-2-transparent.png"
            alt="Hero image"
            width={500}
            height={500}
            className="ml-auto mr-auto block"
          />
          <div className="h-full border-t bg-zinc-900 p-4">
            <h3 className="pb-2 text-lg font-bold">Experience</h3>
            <div className="grid grid-cols-4 items-center justify-items-center gap-4">
              <IconBrandGolang role="presentation" size={48} stroke={1.25} />
              <IconBrandTypescript
                role="presentation"
                size={48}
                stroke={1.25}
              />
              <IconBrandNodejs role="presentation" size={48} stroke={1.25} />
              <IconSql role="presentation" size={48} stroke={1.25} />
              <IconBrandReact role="presentation" size={48} stroke={1.25} />
              <IconBrandDocker role="presentation" size={48} stroke={1.25} />
              <IconBrandAws role="presentation" size={48} stroke={1.25} />
              <IconBrandAzure role="presentation" size={48} stroke={1.25} />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
