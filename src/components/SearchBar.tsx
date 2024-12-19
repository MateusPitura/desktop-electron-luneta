import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { GlobalContext } from "../GlobalContext";
import { Sections } from "../utils/types";

export default function SearchBar(): ReactElement {
  const { execute } = useContext(GlobalContext);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    const getClipboardContent = () =>
      navigator.clipboard.readText().then((text) => {
        if (text) {
          setInput(text);
        }
      });

    window.addEventListener("focus", getClipboardContent);
    return () => {
      window.removeEventListener("focus", getClipboardContent);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.includes("Arrow")) {
        return;
      }
      if (event.key === "Enter") {
        handleExecute();
        return;
      }
      inputRef.current?.focus();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

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
          ref={inputRef}
        />
      </label>
    </div>
  );
}
