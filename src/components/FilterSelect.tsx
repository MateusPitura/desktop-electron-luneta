import type { ReactElement } from "react";
import FilterDropDownMenu from "./FilterDropDownMenu";
import { Option } from "../utils/types";

interface FilterSelectProperties {
  label: string;
  onClick: (option: Option) => void;
}

export default function FilterSelect({
  label,
  onClick,
}: FilterSelectProperties): ReactElement {
  return (
    <div className="bg-dark-primary rounded-md px-2 flex gap-2 items-center">
      <span className="text-dark-onPrimary text-sm">{label}</span>
      <FilterDropDownMenu onClick={onClick} />
    </div>
  );
}
