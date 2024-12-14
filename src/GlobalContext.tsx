import { createContext } from "react";
import { Sections } from "./utils/types";

interface GlobalContextProperties {
  currentSectionActive: Sections | undefined;
  setCurrentSectionActive: (section: Sections) => void;
  currentFilter: string;
  setCurrentFilter: (command: string) => void;
}

export const GlobalContext = createContext<GlobalContextProperties>({
  currentSectionActive: undefined,
  setCurrentSectionActive: () => {},
  currentFilter: "",
  setCurrentFilter: () => {},
});
