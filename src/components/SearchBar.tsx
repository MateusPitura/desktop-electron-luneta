import { useContext, useState, type ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { GlobalContext } from "../GlobalContext";
import { Sections } from "../utils/types";

export default function SearchBar(): ReactElement {
  const { execute } = useContext(GlobalContext);

  const [input, setInput] = useState("");

  const handleSetCommand = (value: string) => {
    setInput(value);
  };

  const handleExecute = () => {
    const executeFormatted = { ...execute };
    switch (executeFormatted.section) {
      case Sections.Translate:
        executeFormatted.command = `${executeFormatted.command} "${input}"`;
        window.electron.send("execute", JSON.stringify(executeFormatted));
        break;
    }
  };

  return (
    <div className="p-4">
      <label className="flex flex-1 gap-2 items-center">
        <div className="text-dark-primary flex items-center">
          <SearchIcon fontSize="large" color="inherit" />
        </div>
        <input
          type="search"
          className="flex-1 p-2 outline-none appearance-none bg-inherit text-dark-onSurface text-lg caret-dark-primary"
          value={input}
          onChange={(e) => handleSetCommand(e.target.value)}
        />
        <button onClick={handleExecute} className="text-dark-onSurface outline-none">
          Search
        </button>
      </label>
    </div>
  );
}
