import { ReactElement, useState } from "react";
import { Execute, Inputs, Sections } from "./utils/types";
import { GlobalContext } from "./GlobalContext";
import { useForm } from "react-hook-form";

interface GlobalProviderProperties {
  children: ReactElement;
}

export function GlobalProvider({ children }: GlobalProviderProperties) {
  const [currentSectionActive, setCurrentSectionActive] = useState<Sections>(
    Sections.TRANSLATE
  );

  const [execute, setExecute] = useState<Execute>();

  const { handleSubmit, register, setValue, setFocus } = useForm<Inputs>();

  return (
    <GlobalContext.Provider
      value={{
        currentSectionActive,
        setCurrentSectionActive,
        execute,
        setExecute,
        handleSubmit,
        register,
        setValue,
        setFocus
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
