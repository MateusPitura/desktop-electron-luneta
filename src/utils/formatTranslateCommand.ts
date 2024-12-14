import { Option } from "./types";

interface FormatTranslateCommandProperties {
  from: Option[];
  to: Option[];
}

export function formatTranslateCommand({
  from,
  to,
}: FormatTranslateCommandProperties): string {
  const fromFormatted = from[0]?.value ?? "";
  const toFormatted = to.map((filter) => filter.value).join("+");
  return `${fromFormatted}:${toFormatted}`;
}
