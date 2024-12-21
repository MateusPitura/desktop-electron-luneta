import { Option } from "./types";

export const languages: Option[] = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "pt",
    label: "Portuguese",
  },
  {
    value: "es",
    label: "Spanish",
  },
  {
    label: "French",
    value: "fr",
  },
];

export const defaultLanguage = languages[0];