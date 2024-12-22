import { defaultLanguage } from "./constants";

interface FormatDictionaryFilterProperties {
  language?: string;
}

export function formatDictionaryFilter({
  language,
}: FormatDictionaryFilterProperties): string {
  return language ?? defaultLanguage.value;
}
