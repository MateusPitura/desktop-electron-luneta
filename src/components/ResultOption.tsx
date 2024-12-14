import classNames from "classnames";
import type { ReactElement } from "react";

interface ResultOptionProperties {
  label: string;
  supportText?: string;
  active?: boolean;
}

export default function ResultOption({
  label,
  supportText,
  active,
}: ResultOptionProperties): ReactElement {
  return (
    <div
      className={classNames({
        "bg-dark-tertiary bg-opacity-25": active,
      })}
    >
      <div className="p-4">
        <span className="text-dark-onSurface">{label}</span>{" "}
        <span className="text-dark-outline">{supportText}</span>
      </div>
    </div>
  );
}
