import { useState, type ReactElement } from "react";
import FilterSelect from "./FilterSelect";
import FilterActive from "./FilterActive";
import { Option } from "../utils/types";
import FilterContainer from "./FilterContainer";
import { languages } from "../utils/constants";

export default function FilterBarTranslate(): ReactElement {
  const [currentFilterFrom, setCurrentFilterFrom] = useState<Option[]>([]);

  const [currentFilterTo, setCurrentFilterTo] = useState<Option[]>([]);

  const handleAddCurrentFilterFrom = (option: Option) => {
    if (currentFilterFrom.find((filter) => filter.value === option.value)) {
      return;
    }
    setCurrentFilterFrom((prev) => [...prev, option]);
  };

  const handleAddCurrentFilterTo = (option: Option) => {
    if (currentFilterTo.find((filter) => filter.value === option.value)) {
      return;
    }
    setCurrentFilterTo((prev) => [...prev, option]);
  };

  const handleRemoveCurrentFilterFrom = (option: Option) => {
    setCurrentFilterFrom((prev) =>
      prev.filter((filter) => filter.value !== option.value)
    );
  };

  const handleRemoveCurrentFilterTo = (option: Option) => {
    setCurrentFilterTo((prev) =>
      prev.filter((filter) => filter.value !== option.value)
    );
  };

  return (
    <FilterContainer>
      <>
        <FilterSelect
          label="From"
          onClick={handleAddCurrentFilterFrom}
          options={languages}
        />
        {currentFilterFrom.map((filter) => (
          <FilterActive
            key={filter.value}
            option={filter}
            onClick={handleRemoveCurrentFilterFrom}
          />
        ))}
        <FilterSelect
          label="To"
          onClick={handleAddCurrentFilterTo}
          options={languages}
        />
        {currentFilterTo.map((filter) => (
          <FilterActive
            key={filter.value}
            option={filter}
            onClick={handleRemoveCurrentFilterTo}
          />
        ))}
      </>
    </FilterContainer>
  );
}
