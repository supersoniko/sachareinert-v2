import { CornerDownRight } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

type SectionTitleProps = ComponentPropsWithoutRef<"h2">;

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="flex space-x-2">
      <CornerDownRight size={32} />
      <h2 {...props} className="mb-4 w-[20vw] text-3xl md:mb-0" />
    </div>
  );
};
