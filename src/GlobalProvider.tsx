import { ReactElement, useState } from "react";
import { Execute, Sections } from "./utils/types";
import { GlobalContext } from "./GlobalContext";

interface GlobalProviderProperties {
  children: ReactElement;
}

export function GlobalProvider({ children }: GlobalProviderProperties) {
  const [currentSectionActive, setCurrentSectionActive] = useState<Sections>(
    Sections.Translate
  );

  const [execute, setExecute] = useState<Execute>();

  return (
    <GlobalContext.Provider
      value={{
        currentSectionActive,
        setCurrentSectionActive,
        execute,
        setExecute,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
