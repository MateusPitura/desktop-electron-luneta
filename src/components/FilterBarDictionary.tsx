import { type ReactElement } from "react";
import FilterContainer from "./FilterContainer";
import { languages } from "../utils/constants";
import Filter from "./Filter";

interface FilterBarDictionaryProperties {
  hidden: boolean;
}

export default function FilterBarDictionary({
  hidden,
}: FilterBarDictionaryProperties): ReactElement {
  return (
    <FilterContainer hidden={hidden}>
      <Filter
        inputName="dictionaryFilter"
        label="Language"
        options={languages}
      />
    </FilterContainer>
  );
}
