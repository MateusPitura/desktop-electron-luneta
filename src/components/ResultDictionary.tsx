import {
  Fragment,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
} from "react";
import ResultOutputContainer from "./ResultOutputContainer";
import { Execute } from "../utils/types";
import ResultOptionsContainer from "./ResultOptionsContainer";
import ResultOption from "./ResultOption";
import DividerHoriz from "./DividerHoriz";

interface ResultDictionaryProperties {
  result?: Execute;
}

export default function ResultDictionary({
  result,
}: ResultDictionaryProperties): ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const output = useMemo(() => {
    return result?.output ? JSON.parse(result?.output) : [];
  }, [result]);

  const meanings = useMemo(() => output?.[0]?.meanings, [output]);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp" && event.metaKey && event.ctrlKey) {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "ArrowDown" && event.metaKey && event.ctrlKey) {
      setActiveIndex((prevIndex) =>
        Math.min(prevIndex + 1, (meanings.length ?? 1) - 1)
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [result]);

  return (
    <>
      <ResultOptionsContainer>
        {meanings?.map((meaning: unknown, index: number) => (
          <Fragment key={index}>
            <ResultOption
              label={meaning.partOfSpeech}
              supportText={output?.[0]?.word}
              active={activeIndex === index}
              onClick={() => handleActiveIndex(index)}
            />
            <DividerHoriz />
          </Fragment>
        ))}
      </ResultOptionsContainer>
      <ResultOutputContainer>
        {meanings?.[activeIndex]?.definitions?.map((content: unknown) => {
          return (
            <div key={content.definition}>
              <p>{content.definition}</p>
              <p>Example: {content.example}</p>
              <p>Synonyms: {content.synonyms.join(", ")}</p>
              <p>Antonyms: {content.antonyms.join(", ")}</p>
              <DividerHoriz />
            </div>
          );
        })}
      </ResultOutputContainer>
    </>
  );
}
