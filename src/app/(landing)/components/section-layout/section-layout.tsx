import { ComponentPropsWithoutRef } from "react";

type SectionLayoutProps = ComponentPropsWithoutRef<"section">;

export const SectionLayout = ({ ...props }: SectionLayoutProps) => {
  return (
    <section
      {...props}
      className="flex flex-col pl-4 md:flex-row md:pl-12"
    ></section>
  );
};
