import { useContext, type ReactElement, type ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import { GlobalContext } from "../GlobalContext";
import { Inputs, Sections } from "../utils/types";
import { formatTranslateFilter } from "../utils/formatTranslateFilter";
import parseTranslateFilter from "../utils/parseTranslateFilter";
import { defaultLanguage, languages } from "../utils/constants";

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
        const languageFormatted = languages.filter(
          (filter) => filter.value === data.dictionaryFilter
        );
        const execute = {
          command: `curl https://api.dictionaryapi.dev/api/v2/entries/${
            data.dictionaryFilter ?? "en"
          }/${data.search}`, // Fazer igual ao translate
          section: Sections.DICTIONARY,
          info: {
            languageFormatted: languageFormatted.length
              ? languageFormatted
              : [defaultLanguage], // Fazer igual ao translate
          },
        };
        window.electron.send("execute", JSON.stringify(execute));
        break;
      }
    }
  };

  return <form onSubmit={handleSubmit?.(handleOnSubmit)}>{children}</form>;
}
