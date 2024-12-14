import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProperties {
  command: string;
  handleSetCommand: (value: string) => void;
  handleExecute: () => void;
}

export default function SearchBar({
  command,
  handleSetCommand,
  handleExecute,
}: SearchBarProperties): ReactElement {
  return (
    <div className="p-4">
      <label className="flex flex-1 gap-2 items-center">
        <div className="text-dark-primary flex items-center">
          <SearchIcon fontSize="large" color="inherit" />
        </div>
        <input
          type="search"
          className="flex-1 p-2 outline-none appearance-none bg-inherit text-dark-onSurface text-lg caret-dark-primary"
          value={command}
          onChange={(e) => handleSetCommand(e.target.value)}
        />
        <button onClick={handleExecute} className="text-dark-onSurface">
          Search
        </button>
      </label>
    </div>
  );
}
