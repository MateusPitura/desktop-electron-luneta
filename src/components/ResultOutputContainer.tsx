import type { ReactElement, ReactNode } from "react";

interface ResultOutputProperties {
  children: ReactNode;
}

export default function ResultOutputContainer({
  children,
}: ResultOutputProperties): ReactElement {
  return (
    <div className="p-4 flex-1 text-dark-onSurface text-lg">{children}</div>
  );
}
