import { useEffect, useState, type ReactElement } from "react";
import { Execute } from "../utils/types";
import ResultWrapper from "./ResultWrapper";

export default function Result(): ReactElement {
  const [result, setResult] = useState<Execute>();

  useEffect(() => {
    window.electron.receive("result", (data) => {
      setResult(JSON.parse(data));
    });
  }, []);

  return (
    <div className="flex flex-1">
      <ResultWrapper result={result} />
    </div>
  );
}
