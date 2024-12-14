import type { ReactElement } from "react";

interface ResultOptionsContainerProperties {
  children: ReactElement;
}

export default function ResultOptionsContainer({
  children,
}: ResultOptionsContainerProperties): ReactElement {
  return (
    <div className="bg-dark-surfaceBright max-w-64 flex-1">{children}</div>
  );
}
