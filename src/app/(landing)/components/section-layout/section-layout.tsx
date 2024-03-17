import { ComponentPropsWithoutRef } from "react";

type SectionLayoutProps = ComponentPropsWithoutRef<"section">;

export const SectionLayout = ({ ...props }: SectionLayoutProps) => {
  return <section {...props} className="flex pl-12"></section>;
};
