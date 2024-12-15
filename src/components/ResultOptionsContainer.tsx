import type { ReactElement, ReactNode } from "react";

interface ResultOptionsContainerProperties {
  children: ReactNode;
}

export default function ResultOptionsContainer({
  children,
}: ResultOptionsContainerProperties): ReactElement {
  return (
    <div className="bg-dark-surfaceBright max-w-64 flex-1 overflow-auto">
      {children}
    </div>
  );
}
