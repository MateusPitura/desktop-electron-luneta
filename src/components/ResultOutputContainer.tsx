import type { ReactElement } from "react";

interface ResultOutputProperties {
  children?: ReactElement;
}

export default function ResultOutputContainer({
  children,
}: ResultOutputProperties): ReactElement {
  return (
    <div className="p-4 flex-1 text-dark-onSurface text-lg">{children}</div>
  );
}
