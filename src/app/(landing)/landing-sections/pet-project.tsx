import Image from "next/image";
import Link from "next/link";
import {
  IconSql,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandVercel,
  IconBrandOpenai,
} from "@tabler/icons-react";

import { SectionTitle } from "@/app/(landing)/components/section-title/section-title";
import { SectionLayout } from "@/app/(landing)/components/section-layout/section-layout";
import { Button } from "@/components/ui/button";

export const PetProjectSection = () => {
  return (
    <SectionLayout
      id="pet-project"
      aria-labelledby="pet-projects-heading"
      className="pr-4 md:pr-0"
    >
      <SectionTitle id="pet-projects-heading">Pet Project</SectionTitle>
      <div className="flex flex-col justify-center rounded-lg bg-card/70 backdrop-blur-lg">
        <Image
          src="/images/kfeed-project-hero.png"
          className="rounded-t-lg"
          alt="Hero image"
          width={1077}
          height={672}
        />
        <div className="pb- flex w-full flex-col items-start px-8 py-8">
          <div className="flex w-full items-center justify-between pb-2">
            <h3 className="text-5xl font-bold">Kfeed</h3>
            <div className="flex space-x-2">
              <IconBrandTypescript
                role="presentation"
                size={42}
                stroke={1.25}
              />
              <IconBrandNextjs role="presentation" size={42} stroke={1.25} />
              <IconBrandVercel role="presentation" size={42} stroke={1.25} />
              <IconSql
                className="hidden md:block"
                role="presentation"
                size={42}
                stroke={1.25}
              />
              <IconBrandOpenai
                className="hidden md:block"
                role="presentation"
                size={42}
                stroke={1.25}
              />
            </div>
          </div>
          <p className="max-w-lg pb-6 text-muted-foreground">
            Kfeed is a content feed aggregator for K-pop artist-related content
            from Instagram, Twitter, and YouTube. Its intuitive interface and AI
            chatbot, powered by Vercel AI, help users stay updated on their
            favorite artists, including comebacks, sponsorships and new albums.
          </p>
          <Button size="lg" asChild>
            <Link href="https://www.kfeed.app" target="_blank">
              Visit kfeed.app
            </Link>
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
};
