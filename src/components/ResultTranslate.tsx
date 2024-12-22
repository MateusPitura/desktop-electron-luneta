import {
  Fragment,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
} from "react";
import ResultOptionsContainer from "./ResultOptionsContainer";
import ResultOption from "./ResultOption";
import DividerHoriz from "./DividerHoriz";
import ResultOutputContainer from "./ResultOutputContainer";
import { Execute, Translate } from "../utils/types";

interface ResultTranslateProperties {
  result?: Execute;
}

export default function ResultTranslate({
  result,
}: ResultTranslateProperties): ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const infoMemoized = useMemo(
    () => result?.info as Translate | undefined,
    [result]
  );

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(
      result?.output?.split("\n")[activeIndex] ?? ""
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp" && event.metaKey && event.ctrlKey) {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "ArrowDown" && event.metaKey && event.ctrlKey) {
      setActiveIndex((prevIndex) =>
        Math.min(prevIndex + 1, (infoMemoized?.to.length ?? 1) - 1)
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
        {infoMemoized?.to?.map((to, index) => (
          <Fragment key={to.value}>
            <ResultOption
              label={infoMemoized?.from[0]?.label ?? "Auto"}
              supportText={to.label}
              onClick={() => handleActiveIndex(index)}
              active={activeIndex === index}
            />
            <DividerHoriz />
          </Fragment>
        ))}
      </ResultOptionsContainer>
      <ResultOutputContainer onClickCopy={handleOnClickCopy}>
        {result?.output?.split("\n")[activeIndex]}
      </ResultOutputContainer>
    </>
  );
}
