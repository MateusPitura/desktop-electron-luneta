import classNames from "classnames";
import type { ReactElement } from "react";

interface SectionItemProperties {
  label: string;
  counter?: number;
  children?: ReactElement;
  active?: boolean;
  onClick: () => void;
}

export default function SectionItem({
  label,
  counter,
  children,
  active,
  onClick,
}: SectionItemProperties): ReactElement {
  return (
    <div
      className={classNames("cursor-pointer hover:opacity-50", {
        "bg-dark-tertiary bg-opacity-25": active,
      })}
      onClick={onClick}
    >
      <div className="flex gap-2 p-3 items-center">
        {children}
        <span className="text-dark-secondary text-lg">{label}</span>
        {counter && (
          <div className="rounded-full bg-dark-secondary w-5 h-5 flex items-center justify-center">
            <span className="text-dark-onSecondary text-sm">{counter}</span>
          </div>
        )}
      </div>
    </div>
  );
}
