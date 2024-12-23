import { useContext, useState, type ReactElement } from "react";
import { Inputs, Option } from "../utils/types";
import FilterSelect from "./FilterSelect";
import FilterActive from "./FilterActive";
import { GlobalContext } from "../GlobalContext";

interface FilterProperties {
  multiple?: boolean;
  options: Option[];
  label: string;
  inputName: keyof Inputs;
}

export default function Filter({
  multiple = false,
  options,
  label,
  inputName,
}: FilterProperties): ReactElement {
  const { unregister } = useContext(GlobalContext);

  const [currentFilter, setCurrentFilter] = useState<Option[]>([]);

  const handleAddCurrentFilter = (option: Option) => {
    if (!multiple) {
      setCurrentFilter([option]);
      return;
    }
    if (currentFilter.find((filter) => filter.value === option.value)) {
      return;
    }
    setCurrentFilter((prev) => [...prev, option]);
  };

  const handleRemoveCurrentFilter = (option?: Option) => {
    if (!multiple) {
      setCurrentFilter([]);
      return;
    }
    setCurrentFilter((previous) =>
      previous.filter((filter) => filter.value !== option?.value)
    );
    unregister?.(inputName)
  };

  return (
    <>
      <FilterSelect
        label={label}
        onClick={handleAddCurrentFilter}
        options={options}
      />
      {currentFilter.map((filter) => (
        <FilterActive
          key={filter.value}
          option={filter}
          onClick={handleRemoveCurrentFilter}
          name={inputName}
        />
      ))}
    </>
  );
}
