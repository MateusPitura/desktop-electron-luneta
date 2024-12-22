import { type ReactElement } from "react";
import FilterContainer from "./FilterContainer";
import { languages } from "../utils/constants";
import Filter from "./Filter";

interface FilterBarTranslateProperties {
  hidden: boolean;
}

export default function FilterBarTranslate({
  hidden,
}: FilterBarTranslateProperties): ReactElement {
  return (
    <FilterContainer hidden={hidden}>
      <Filter
        inputName="translateFilterFrom"
        label="From"
        options={languages}
      />
      <Filter
        inputName="translateFilterTo"
        label="To"
        options={languages}
        multiple
      />
    </FilterContainer>
  );
}
