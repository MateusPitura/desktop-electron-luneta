import { Translate } from "./types";

export function formatTranslateCommand({
  from,
  to,
}: Translate): string {
  const fromFormatted = from[0]?.value ?? "";
  const toFormatted = to.map((filter) => filter.value).join("+");
  return `${fromFormatted}:${toFormatted}`;
}
