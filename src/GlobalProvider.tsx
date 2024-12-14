import { ReactElement, useState } from "react";
import { Sections } from "./utils/types";
import { GlobalContext } from "./GlobalContext";

interface GlobalProviderProperties {
  children: ReactElement;
}

export function GlobalProvider({ children }: GlobalProviderProperties) {
  const [currentSectionActive, setCurrentSectionActive] = useState<Sections>(
    Sections.Translate
  );

  const [currentFilter, setCurrentFilter] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{
        currentSectionActive,
        setCurrentSectionActive,
        currentFilter,
        setCurrentFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
