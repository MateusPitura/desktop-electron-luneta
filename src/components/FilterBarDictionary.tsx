import type { ReactElement } from "react";
import FilterSelect from "./FilterSelect";
import FilterContainer from "./FilterContainer";

export default function FilterBarDictionary(): ReactElement {
  return (
    <FilterContainer>
      <FilterSelect label="Language" onClick={() => {}} options={[]} />
    </FilterContainer>
  );
}
