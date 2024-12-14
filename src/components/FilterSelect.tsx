import { ArrowDropDown } from "@mui/icons-material";
import type { ReactElement } from "react";

interface FilterSelectProperties {
  label: string;
}

export default function FilterSelect({
  label,
}: FilterSelectProperties): ReactElement {
  return (
    <div className="bg-dark-primary rounded-md px-2 flex gap-2 items-center">
      <span className="text-dark-onPrimary text-sm">{label}</span>
      <ArrowDropDown color="primary" fontSize="small" />
    </div>
  );
}
