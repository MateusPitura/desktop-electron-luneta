import classNames from "classnames";
import type { ReactElement } from "react";

interface ResultOptionProperties {
  label: string;
  supportText?: string;
  active?: boolean;
  onClick: () => void;
}

export default function ResultOption({
  label,
  supportText,
  active,
  onClick,
}: ResultOptionProperties): ReactElement {
  return (
    <div
      className={classNames("cursor-pointer hover:opacity-50", {
        "bg-dark-tertiary bg-opacity-25": active,
      })}
      onClick={onClick}
    >
      <div className="p-4">
        <span className="text-dark-onSurface">{label}</span>{" "}
        <span className="text-dark-outline">{supportText}</span>
      </div>
    </div>
  );
}
