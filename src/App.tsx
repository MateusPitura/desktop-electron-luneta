import { useEffect, useState } from "react";
import DividerHoriz from "./components/DividerHoriz";
import SearchBar from "./components/SearchBar";
import SectionBar from "./components/SectionBar";
import FilterBar from "./components/FilterBar";
import Result from "./components/Result";

export default function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    window.electron.receive("command-result", (data) => {
      setOutput(data);
    });
  }, []);

  const handleSetCommand = (value: string) => {
    setCommand(value);
  };

  const handleExecute = () => {
    const commandFormatted = `trans --brief pt:en "${command}"`;
    window.electron.send("execute-command", commandFormatted);
  };

  return (
    <div className="bg-dark-surface h-screen flex flex-col">
      <SearchBar
        command={command}
        handleExecute={handleExecute}
        handleSetCommand={handleSetCommand}
      />
      <DividerHoriz />
      <SectionBar />
      <DividerHoriz />
      <FilterBar />
      <DividerHoriz />
      <Result output={output} />
    </div>
  );
}
