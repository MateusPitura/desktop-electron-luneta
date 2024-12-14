import { HighlightOff } from "@mui/icons-material";
import type { ReactElement } from "react";

interface FilterActiveProperties {
  label: string;
}

export default function FilterActive({
  label,
}: FilterActiveProperties): ReactElement {
  return (
    <div className="bg-dark-secondary rounded-md px-2 flex gap-2 items-center">
      <span className="text-dark-onSecondary text-sm">{label}</span>
      <HighlightOff color="primary" fontSize="small" />
    </div>
  );
}
