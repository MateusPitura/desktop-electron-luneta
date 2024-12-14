import { Clear } from "@mui/icons-material";
import type { ReactElement } from "react";
import { Option } from "../utils/types";

interface FilterActiveProperties {
  option: Option;
  onClick: (option?: Option) => void;
}

export default function FilterActive({
  option,
  onClick,
}: FilterActiveProperties): ReactElement {
  return (
    <div className="bg-dark-secondary rounded-md px-2 flex gap-2 items-center">
      <span className="text-dark-onSecondary text-sm">{option.label}</span>
      <button
        className="text-dark-onSecondary flex items-center hover:opacity-50"
        onClick={() => onClick(option)}
      >
        <Clear color="inherit" fontSize="small" />
      </button>
    </div>
  );
}
