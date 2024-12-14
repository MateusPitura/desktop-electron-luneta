import { Fragment, useState, type ReactElement } from "react";
import ResultOptionsContainer from "./ResultOptionsContainer";
import ResultOption from "./ResultOption";
import DividerHoriz from "./DividerHoriz";
import ResultOutputContainer from "./ResultOutputContainer";
import { Execute } from "../utils/types";

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

  return (
    <>
      <ResultOptionsContainer>
        <>
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
        </>
      </ResultOptionsContainer>
      <ResultOutputContainer>
        <>{result?.output?.split("\n")[activeIndex]}</>
      </ResultOutputContainer>
    </>
  );
}
