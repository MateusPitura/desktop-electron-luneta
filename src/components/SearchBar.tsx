import { useContext, useEffect, useState, type ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { GlobalContext } from "../GlobalContext";

export default function SearchBar(): ReactElement {
  const { register, setValue, setFocus } = useContext(GlobalContext);
  const [suggestText, setSuggestText] = useState("");

  useEffect(() => {
    const getClipboardContent = () =>
      navigator.clipboard.readText().then((text) => {
        if (text) {
          setSuggestText(text.trim());
        }
      });

    window.addEventListener("focus", getClipboardContent);
    return () => {
      window.removeEventListener("focus", getClipboardContent);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        event.preventDefault();
        setFocus?.("search");
        setValue?.("search", suggestText);
      } else if (event.key === "/") {
        event.preventDefault();
        setFocus?.("search");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [suggestText]);

  return (
    <div className="p-4">
      <label className="flex flex-1 gap-2 items-center">
        <div className="text-dark-primary flex items-center">
          <SearchIcon fontSize="large" color="inherit" />
        </div>
        <input
          type="search"
          className="flex-1 p-2 outline-none appearance-none bg-inherit text-dark-onSurface text-lg caret-dark-primary"
          placeholder={suggestText}
          {...register?.("search")}
        />
      </label>
    </div>
  );
}
