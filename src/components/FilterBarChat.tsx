import type { ReactElement } from "react";
import FilterSelect from "./FilterSelect";
import FilterContainer from "./FilterContainer";

export default function FilterBarChat(): ReactElement {
  return (
    <FilterContainer>
      <>
        <FilterSelect label="Model" onClick={() => {}} options={[]} />
      </>
    </FilterContainer>
  );
}
