import { useContext, useEffect, useState, type ReactElement } from "react";
import FilterSelect from "./FilterSelect";
import FilterActive from "./FilterActive";
import { Option, Sections } from "../utils/types";
import FilterContainer from "./FilterContainer";
import { defaultLanguage, languages } from "../utils/constants";
import { GlobalContext } from "../GlobalContext";
import { formatTranslateCommand } from "../utils/formatTranslateCommand";

export default function FilterBarTranslate(): ReactElement {
  const { setExecute } = useContext(GlobalContext);

  const [currentFilterFrom, setCurrentFilterFrom] = useState<Option[]>([]);

  const [currentFilterTo, setCurrentFilterTo] = useState<Option[]>([]);

  const handleAddCurrentFilterFrom = (option: Option) => {
    setCurrentFilterFrom([option]);
  };

  const handleAddCurrentFilterTo = (option: Option) => {
    if (currentFilterTo.find((filter) => filter.value === option.value)) {
      return;
    }
    setCurrentFilterTo((prev) => [...prev, option]);
  };

  const handleRemoveCurrentFilterFrom = () => {
    setCurrentFilterFrom([]);
  };

  const handleRemoveCurrentFilterTo = (option?: Option) => {
    setCurrentFilterTo((prev) =>
      prev.filter((filter) => filter.value !== option?.value)
    );
  };

  useEffect(() => {
    const filterFormatted = formatTranslateCommand({
      from: currentFilterFrom,
      to: currentFilterTo,
    });
    const executeTranslate = {
      command: `trans -b ${filterFormatted}`,
      section: Sections.Translate,
      info: {
        from: currentFilterFrom,
        to: currentFilterTo.length > 0 ? currentFilterTo : [defaultLanguage],
      },
    };
    setExecute(executeTranslate);
  }, [currentFilterFrom, currentFilterTo, setExecute]);

  return (
    <FilterContainer>
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
    </FilterContainer>
  );
}
