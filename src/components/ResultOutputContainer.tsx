import type { ReactElement, ReactNode } from "react";
import ActionBar from "./ActionBar";

interface ResultOutputProperties {
  children: ReactNode;
  onClickCopy?: () => void;
}

export default function ResultOutputContainer({
  children,
  onClickCopy,
}: ResultOutputProperties): ReactElement {
  return (
    <div className="p-4 flex-1 text-dark-onSurface text-lg overflow-auto">
      {onClickCopy && <ActionBar onClickCopy={onClickCopy} />}
      {children}
    </div>
  );
}
