import { ReactElement, useState } from "react";
import { Inputs, Sections } from "./utils/types";
import { GlobalContext } from "./GlobalContext";
import { useForm } from "react-hook-form";

interface GlobalProviderProperties {
  children: ReactElement;
}

export function GlobalProvider({ children }: GlobalProviderProperties) {
  const [currentSectionActive, setCurrentSectionActive] = useState<Sections>(
    Sections.TRANSLATE
  );

  const { handleSubmit, register, setValue, setFocus } = useForm<Inputs>();

  return (
    <GlobalContext.Provider
      value={{
        currentSectionActive,
        setCurrentSectionActive,
        handleSubmit,
        register,
        setValue,
        setFocus,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
