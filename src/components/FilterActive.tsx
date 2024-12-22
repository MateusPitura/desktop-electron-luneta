import { Clear } from "@mui/icons-material";
import { useContext, type ReactElement } from "react";
import { Inputs, Option } from "../utils/types";
import { GlobalContext } from "../GlobalContext";

interface FilterActiveProperties {
  option: Option;
  onClick: (option?: Option) => void;
  name: keyof Inputs;
}

export default function FilterActive({
  option,
  onClick,
  name,
}: FilterActiveProperties): ReactElement {
  const { register } = useContext(GlobalContext);

  return (
    <label className="bg-dark-secondary rounded-md px-2 flex gap-2 items-center">
      <input
        {...register?.(name)}
        type="checkbox"
        checked
        hidden
        value={option.value}
      />
      <span className="text-dark-onSecondary text-sm">{option.label}</span>
      <div
        className="text-dark-onSecondary flex items-center hover:opacity-50"
        onClick={() => onClick(option)}
      >
        <Clear color="inherit" fontSize="small" />
      </div>
    </label>
  );
}
