import { useContext, type ReactElement } from "react";
import { Execute, Sections } from "../utils/types";
import ResultTranslate from "./ResultTranslate";
import ResultDictionary from "./ResultDictionary";
import { GlobalContext } from "../GlobalContext";

interface ResultWrapperProperties {
  result?: Execute;
}

export default function ResultWrapper({
  result,
}: ResultWrapperProperties): ReactElement {
  const { currentSectionActive } = useContext(GlobalContext);

  switch (currentSectionActive) {
    case Sections.TRANSLATE:
      return <ResultTranslate result={result} />;
    case Sections.DICTIONARY:
      return <ResultDictionary result={result}/>;
    default:
      return <ResultTranslate result={result} />;
  }
}
