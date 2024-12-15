import { Fragment, useEffect, useState, type ReactElement } from "react";
import ResultOptionsContainer from "./ResultOptionsContainer";
import ResultOption from "./ResultOption";
import DividerHoriz from "./DividerHoriz";
import ResultOutputContainer from "./ResultOutputContainer";
import { Execute } from "../utils/types";
import { ContentCopy } from "@mui/icons-material";

interface ResultTranslateProperties {
  result?: Execute;
}

export default function ResultTranslate({
  result,
}: ResultTranslateProperties): ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(
      result?.output?.split("\n")[activeIndex] ?? ""
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "ArrowDown") {
      setActiveIndex((prevIndex) =>
        Math.min(prevIndex + 1, (result?.info.to.length ?? 1) - 1)
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
        {result?.info.to.map((to, index) => (
          <Fragment key={to.value}>
            <ResultOption
              label={result.info.from[0]?.label ?? "Auto"}
              supportText={to.label}
              onClick={() => handleActiveIndex(index)}
              active={activeIndex === index}
            />
            <DividerHoriz />
          </Fragment>
        ))}
      </ResultOptionsContainer>
      <ResultOutputContainer>
        <div className="flex items-center justify-end">
          <button
            className="hover:opacity-50 cursor-pointer text-dark-primary flex items-center"
            onClick={handleOnClickCopy}
          >
            <ContentCopy fontSize="small" color="inherit" />
          </button>
        </div>
        {result?.output?.split("\n")[activeIndex]}
      </ResultOutputContainer>
    </>
  );
}
