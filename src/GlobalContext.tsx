import { createContext } from "react";
import { Execute, Inputs, Sections } from "./utils/types";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
  UseFormSetValue,
} from "react-hook-form";

interface GlobalContextProperties {
  currentSectionActive?: Sections;
  setCurrentSectionActive: (section: Sections) => void;
  execute?: Execute;
  setExecute: (execute: Execute) => void;
  handleSubmit?: UseFormHandleSubmit<Inputs>;
  register?: UseFormRegister<Inputs>;
  setValue?: UseFormSetValue<Inputs>;
  setFocus?: UseFormSetFocus<Inputs>;
}

export const GlobalContext = createContext<GlobalContextProperties>({
  currentSectionActive: undefined,
  setCurrentSectionActive: () => {},
  execute: undefined,
  setExecute: () => {},
  handleSubmit: undefined,
  register: undefined,
  setValue: undefined,
  setFocus: undefined,
});
