import type { ReactElement } from "react";
import FilterSelect from "./FilterSelect";
import FilterActive from "./FilterActive";

interface FilterBarProperties {}

export default function FilterBar({}: FilterBarProperties): ReactElement {
  return (
    <div className="p-2 gap-2 flex">
      <div className="flex gap-2">
        <FilterSelect label="Language" />
        <FilterActive label="Portuguese" />
        <FilterActive label="English" />
      </div>
    </div>
  );
}
