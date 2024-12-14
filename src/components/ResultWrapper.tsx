import { useContext, type ReactElement } from "react";
import { GlobalContext } from "../GlobalContext";
import { Execute, Sections } from "../utils/types";
import ResultTranslate from "./ResultTranslate";
import ResultDictionary from "./ResultDictionary";
import ResultChat from "./ResultChat";

interface ResultWrapperProperties {
  result?: Execute;
}

export default function ResultWrapper({
  result,
}: ResultWrapperProperties): ReactElement {
  const { currentSectionActive } = useContext(GlobalContext);

  switch (currentSectionActive) {
    case Sections.Translate:
      return <ResultTranslate result={result} />;
    case Sections.Dictionary:
      return <ResultDictionary />;
    case Sections.Chat:
      return <ResultChat />;
    default:
      return <ResultTranslate result={result} />;
  }
}
