import { useContext, type ReactElement } from "react";
import { GlobalContext } from "../GlobalContext";
import { Sections } from "../utils/types";
import FilterBarTranslate from "./FilterBarTranslate";
import FilterBarDictionary from "./FilterBarDictionary";
import FilterBarChat from "./FilterBarChat";

export default function FilterBarWrapper(): ReactElement {
  const { currentSectionActive } = useContext(GlobalContext);

  switch (currentSectionActive) {
    case Sections.Translate:
      return <FilterBarTranslate />;
    case Sections.Dictionary:
      return <FilterBarDictionary />;
    case Sections.Chat:
      return <FilterBarChat />;
    default:
      return <FilterBarTranslate />;
  }
}
