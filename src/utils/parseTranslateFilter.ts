import { defaultLanguage, languages } from "./constants";
import { Option } from "./types";

interface ParseTranslateFilterProperties {
  from?: string;
  to?: string | string[];
}

interface ParseTranslateFilterResponse {
  from: Option[];
  to: Option[];
}

export default function parseTranslateFilter({
  from,
  to,
}: ParseTranslateFilterProperties): ParseTranslateFilterResponse {
  const fromFormatted = languages.filter((language) => language.value === from);
  let toFormatted;
  if (Array.isArray(to)) {
    toFormatted = languages.filter((language) =>
      to.some((item) => item === language.value)
    );
  } else {
    toFormatted = languages.filter((language) => language.value === to);
  }
  return {
    from: fromFormatted,
    to: toFormatted.length > 0 ? toFormatted : [defaultLanguage],
  };
}