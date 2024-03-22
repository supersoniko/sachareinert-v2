import { cn } from "@/lib/utils";
import { CornerDownRight } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

type SectionTitleProps = ComponentPropsWithoutRef<"h2">;

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className={cn("flex space-x-2", "drop-shadow-lightning")}>
      <CornerDownRight size={32} />
      <h2 {...props} className="mb-4 text-3xl md:mb-0 md:w-[20vw]" />
    </div>
  );
};
