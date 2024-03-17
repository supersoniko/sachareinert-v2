import { ComponentPropsWithoutRef } from "react";

type SectionLayoutProps = ComponentPropsWithoutRef<"section">;

export const SectionLayout = ({ ...props }: SectionLayoutProps) => {
  return (
    <section
      {...props}
      className="flex scroll-mt-16 flex-col pl-4 md:flex-row md:pl-12"
    ></section>
  );
};
