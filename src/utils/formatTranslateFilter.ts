interface FormatTranslateFilterProperties {
  from?: string;
  to?: string | string[];
}

export function formatTranslateFilter({
  from,
  to,
}: FormatTranslateFilterProperties): string {
  let toFormatted;
  if (Array.isArray(to)) {
    toFormatted = to.join("+");
  } else {
    toFormatted = to;
  }
  return `${from ?? ''}:${toFormatted ?? ''}`;
}
