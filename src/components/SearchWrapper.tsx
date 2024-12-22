import { useContext, type ReactElement, type ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import { GlobalContext } from "../GlobalContext";
import { Inputs, Sections } from "../utils/types";
import { formatTranslateFilter } from "../utils/formatTranslateFilter";
import parseTranslateFilter from "../utils/parseTranslateFilter";
import { formatDictionaryFilter } from "../utils/formatDictionaryFilter";
import parseDictionaryFilter from "../utils/parseDictionaryFilter";

interface SearchWrapperProperties {
  children: ReactNode;
}

export default function SearchWrapper({
  children,
}: SearchWrapperProperties): ReactElement {
  const { handleSubmit } = useContext(GlobalContext);

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    switch (data.section) {
      case Sections.TRANSLATE: {
        const filterFormatted = formatTranslateFilter({
          from: data.translateFilterFrom,
          to: data.translateFilterTo,
        });
        const { from, to } = parseTranslateFilter({
          from: data.translateFilterFrom,
          to: data.translateFilterTo,
        });
        const execute = {
          command: `trans -b ${filterFormatted} "${data.search}"`,
          section: Sections.TRANSLATE,
          info: {
            from,
            to,
          },
        };
        window.electron.send("execute", JSON.stringify(execute));
        break;
      }
      case Sections.DICTIONARY: {
        const filterFormatted = formatDictionaryFilter({
          language: data.dictionaryFilter,
        });
        const language = parseDictionaryFilter({
          language: data.dictionaryFilter,
        });
        const execute = {
          command: `curl https://api.dictionaryapi.dev/api/v2/entries/${filterFormatted}/${data.search}`,
          section: Sections.DICTIONARY,
          info: {
            language,
          },
        };
        window.electron.send("execute", JSON.stringify(execute));
        break;
      }
    }
  };

  return <form onSubmit={handleSubmit?.(handleOnSubmit)}>{children}</form>;
}
