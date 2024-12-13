import SearchIcon from "@mui/icons-material/Search";

export default function App() {
  return (
    <div className="p-4 bg-neutral-300 flex">
      <label className="flex flex-1 gap-2">
        <div className="place-items-center">
          <SearchIcon fontSize="large"/>
        </div>
        <input type="search" className="flex-1 p-2 outline-none appearance-none" />
      </label>
    </div>
  );
}
