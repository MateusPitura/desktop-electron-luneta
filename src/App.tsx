import DividerHoriz from "./components/DividerHoriz";
import SearchBar from "./components/SearchBar";
import SectionBar from "./components/SectionBar";
import Result from "./components/Result";
import FilterBarWrapper from "./components/FilterBarWrapper";
import SearchWrapper from "./components/SearchWrapper";

export default function App() {
  return (
    <div className="bg-dark-surface h-screen flex flex-col rounded-3xl overflow-hidden">
      <SearchWrapper>
        <SearchBar />
        <DividerHoriz />
        <SectionBar />
        <DividerHoriz />
        <FilterBarWrapper />
        <DividerHoriz />
      </SearchWrapper>
      <Result />
    </div>
  );
}
