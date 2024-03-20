import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type SectionLayoutProps = ComponentPropsWithoutRef<"section">;

export const SectionLayout = ({ className, ...props }: SectionLayoutProps) => {
  return (
    <section
      {...props}
      className={cn(
        "flex scroll-mt-16 flex-col pl-4 md:flex-row md:pl-12",
        className,
      )}
    ></section>
  );
};
