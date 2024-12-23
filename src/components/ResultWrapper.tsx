import { useContext, useEffect, useState, type ReactElement } from "react";
import { Execute, Sections } from "../utils/types";
import ResultTranslate from "./ResultTranslate";
import ResultDictionary from "./ResultDictionary";
import { GlobalContext } from "../GlobalContext";

interface ExecuteOutput {
  Translate?: Execute;
  Dictionary?: Execute;
}

export default function ResultWrapper(): ReactElement {
  const { currentSectionActive } = useContext(GlobalContext);
  const [result, setResult] = useState<ExecuteOutput>();

  useEffect(() => {
    window.electron.receive("result", (data) => {
      const dataFormatted: Execute = JSON.parse(data);
      setResult((prev) => ({
        ...prev,
        [dataFormatted.section]: dataFormatted,
      }));
    });
  }, []);

  switch (currentSectionActive) {
    case Sections.TRANSLATE:
      return <ResultTranslate result={result?.Translate} />;
    case Sections.DICTIONARY:
      return <ResultDictionary result={result?.Dictionary} />;
    default:
      return <ResultTranslate result={result?.Translate} />;
  }
}
