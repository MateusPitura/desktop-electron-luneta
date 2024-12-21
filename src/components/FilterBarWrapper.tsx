import { useContext, type ReactElement } from "react";
import { GlobalContext } from "../GlobalContext";
import { Sections } from "../utils/types";
import FilterBarTranslate from "./FilterBarTranslate";
import FilterBarDictionary from "./FilterBarDictionary";

export default function FilterBarWrapper(): ReactElement {
  const { currentSectionActive } = useContext(GlobalContext);

  return (
    <div className="flex">
      <FilterBarTranslate
        hidden={currentSectionActive !== Sections.TRANSLATE}
      />
      <FilterBarDictionary
        hidden={currentSectionActive !== Sections.DICTIONARY}
      />
    </div>
  );
}
