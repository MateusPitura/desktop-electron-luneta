import { createContext } from "react";
import { Sections } from "./utils/types";

interface GlobalContextProperties {
  currentSectionActive: Sections | undefined;
  setCurrentSectionActive: (section: Sections) => void;
}

export const GlobalContext = createContext<GlobalContextProperties>({
  currentSectionActive: undefined,
  setCurrentSectionActive: () => {},
});
