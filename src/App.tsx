import { AutoAwesome, MenuBook, Translate } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import DividerHoriz from "./components/DividerHoriz";
import DividerVert from "./components/DividerVert";
import SectionItem from "./components/SectionItem";
import FilterSelect from "./components/FilterSelect";
import FilterActive from "./components/FilterActive";
import ResultOption from "./components/ResultOption";

export default function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    window.electron.receive("command-result", (data) => {
      setOutput(data);
    });
  }, []);

  const handleExecute = () => {
    const commandFormatted = `trans --brief pt:en "${command}"`;
    window.electron.send("execute-command", commandFormatted);
  };

  return (
    <div className="bg-dark-surface h-screen flex flex-col">
      {/* Search bar */}
      <div className="p-4">
        <label className="flex flex-1 gap-2 items-center">
          <SearchIcon fontSize="large" color="primary" />
          <input
            type="search"
            className="flex-1 p-2 outline-none appearance-none bg-inherit text-dark-onSurface text-lg"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
          />
          <button onClick={handleExecute} className="text-dark-onSurface">
            Search
          </button>
        </label>
      </div>
      <DividerHoriz />
      {/* Section bar */}
      <div className="w-full flex">
        <SectionItem label="Translate" counter={3}>
          <Translate color="primary" />
        </SectionItem>
        <DividerVert />
        <SectionItem label="Dictionary" counter={2} active>
          <MenuBook color="primary" />
        </SectionItem>
        <DividerVert />
        <SectionItem label="Chat">
          <AutoAwesome color="primary" />
        </SectionItem>
        <DividerVert />
      </div>
      <DividerHoriz />
      {/* Filter bar */}
      <div className="p-2 gap-2 flex">
        <div className="flex gap-2">
          <FilterSelect label="Language" />
          <FilterActive label="Portuguese" />
          <FilterActive label="English" />
        </div>
      </div>
      <DividerHoriz />
      {/* Result */}
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
    </div>
  );
}
