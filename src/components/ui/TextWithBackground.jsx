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
        "w-fit mb-4 relative mx-auto before:bg-[#FFB700] before:content-['']",
        "before:w-full before:h-4 before:opacity-50 before:-translate-y-[10%]",
        "before:top-1/2 before:z-[-1] before:px-8 before:absolute",
        parentClass
      )}
    >
      <h1 className={cn("text-3xl font-semibold text-center px-4", className)}>
        {children}
      </h1>
    </div>
  );
}
