import { useEffect, useState, type ReactElement } from "react";
import ResultOption from "./ResultOption";
import DividerHoriz from "./DividerHoriz";

export default function Result(): ReactElement {
  const [output, setOutput] = useState("");

  useEffect(() => {
    window.electron.receive("result", (data) => {
      setOutput(data);
    });
  }, []);

  return (
    <div className="flex flex-1">
      {/* Result side bar */}
      <div className="bg-dark-surfaceBright max-w-64 flex-1">
        <ResultOption label="measure" supportText="noun" />
        <DividerHoriz />
        <ResultOption label="measure" supportText="verb" active />
        <DividerHoriz />
        <ResultOption label="measure" supportText="adjective" />
        <DividerHoriz />
      </div>
      {/* Search Output */}
      <div className="p-4 flex-1 text-dark-onSurface text-lg">{output}</div>
    </div>
  );
}
