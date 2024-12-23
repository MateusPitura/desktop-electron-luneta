import { createContext } from "react";
import { Inputs, Sections } from "./utils/types";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
  UseFormSetValue,
  UseFormUnregister,
} from "react-hook-form";

interface GlobalContextProperties {
  currentSectionActive?: Sections;
  setCurrentSectionActive: (section: Sections) => void;
  handleSubmit?: UseFormHandleSubmit<Inputs>;
  register?: UseFormRegister<Inputs>;
  setValue?: UseFormSetValue<Inputs>;
  setFocus?: UseFormSetFocus<Inputs>;
  unregister?: UseFormUnregister<Inputs>
}

export const GlobalContext = createContext<GlobalContextProperties>({
  currentSectionActive: undefined,
  setCurrentSectionActive: () => {},
  handleSubmit: undefined,
  register: undefined,
  setValue: undefined,
  setFocus: undefined,
  unregister: undefined,
});
