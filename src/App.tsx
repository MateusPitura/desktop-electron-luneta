import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

export default function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    window.electron.receive("command-result", (data) => {
      console.log("🌠 data: ", data);
      setOutput(data);
    });
  }, []);

  const handleExecute = () => {
    window.electron.send("execute-command", command);
  };

  return (
    <div className="p-4 bg-neutral-300 flex">
      <label className="flex flex-1 gap-2">
        <div className="place-items-center">
          <SearchIcon fontSize="large" />
        </div>
        <input
          type="search"
          className="flex-1 p-2 outline-none appearance-none"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button onClick={handleExecute}>Send message</button>
        <pre>{output}</pre>
      </label>
    </div>
  );
}
