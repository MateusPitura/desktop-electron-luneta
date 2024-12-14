import { createContext } from "react";
import { Execute, Sections } from "./utils/types";

interface GlobalContextProperties {
  currentSectionActive?: Sections;
  setCurrentSectionActive: (section: Sections) => void;
  execute?: Execute;
  setExecute: (execute: Execute) => void;
}

export const GlobalContext = createContext<GlobalContextProperties>({
  currentSectionActive: undefined,
  setCurrentSectionActive: () => {},
  execute: undefined,
  setExecute: () => {},
});
