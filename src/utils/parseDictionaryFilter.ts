import { defaultLanguage, languages } from "./constants";
import { Option } from "./types";

interface ParseDictionaryFilterProperties {
  language?: string;
}

export default function parseDictionaryFilter({
  language,
}: ParseDictionaryFilterProperties): Option[] {
  const languageFormatted = languages.find(
    (filter) => filter.value === language
  );
  return languageFormatted ? [languageFormatted] : [defaultLanguage];
}
