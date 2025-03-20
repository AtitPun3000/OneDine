import React from "react";
import { cn } from "../../libs/utils";

export default function TextWithBackground({
  parentClass,
  className,
  children,
}) {
  return (
    <div
      className={cn(
        "w-fit mb-4 relative mx-auto after:bg-[#FFB700] after:content-['']",
        "after:w-full after:h-4 after:opacity-50 after:-translate-y-[10%]",
        "after:top-1/2 after:z-[-1] after:px-8 after:absolute",
        parentClass
      )}
    >
      <h1 className={cn("text-3xl font-semibold text-center px-4", className)}>
        {children}
      </h1>
    </div>
  );
}
