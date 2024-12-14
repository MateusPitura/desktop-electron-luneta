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

  return (
    <GlobalContext.Provider
      value={{
        currentSectionActive,
        setCurrentSectionActive,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
