import { type ReactElement } from "react";
import ResultWrapper from "./ResultWrapper";

export default function Result(): ReactElement {
  return (
    <div className="flex flex-1 overflow-auto">
      <ResultWrapper />
    </div>
  );
}
