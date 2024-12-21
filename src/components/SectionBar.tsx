import { useContext, useEffect, type ReactElement } from "react";
import SectionItem from "./SectionItem";
import { AutoAwesome, MenuBook, Translate } from "@mui/icons-material";
import DividerVert from "./DividerVert";
import { Sections } from "../utils/types";
import { GlobalContext } from "../GlobalContext";

export default function SectionBar(): ReactElement {
  const { currentSectionActive, setCurrentSectionActive } =
    useContext(GlobalContext);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (currentSectionActive) {
      const sections = Object.keys(Sections);
      const currentIndex = sections.indexOf(currentSectionActive);
      if (event.key === "ArrowLeft" && event.metaKey && event.ctrlKey) {
        const newIndex = Math.max(currentIndex - 1, 0);
        const newSection = sections[newIndex];
        setCurrentSectionActive(newSection as Sections);
      } else if (event.key === "ArrowRight" && event.metaKey && event.ctrlKey) {
        const newIndex = Math.min(currentIndex + 1, sections.length - 1);
        const newSection = sections[newIndex];
        setCurrentSectionActive(newSection as Sections);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSectionActive]);

  useEffect(() => {
    const scrollContainer = document.getElementById("section-scroll-container");

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollLeft += event.deltaY / 10;
      }
    };
    scrollContainer?.addEventListener("wheel", handleScroll);

    return () => {
      scrollContainer?.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full flex overflow-x-auto overflow-y-hidden"
      id="section-scroll-container"
    >
      <SectionItem
        label="Translate"
        active={currentSectionActive === Sections.TRANSLATE}
        onClick={() => setCurrentSectionActive(Sections.TRANSLATE)}
      >
        <div className="text-dark-primary flex items-center">
          <Translate color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
      <SectionItem
        label="Dictionary"
        active={currentSectionActive === Sections.DICTIONARY}
        onClick={() => setCurrentSectionActive(Sections.DICTIONARY)}
      >
        <div className="text-dark-primary flex items-center">
          <MenuBook color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
      <SectionItem
        label="Chat"
        active={currentSectionActive === Sections.CHAT}
        onClick={() => setCurrentSectionActive(Sections.CHAT)}
      >
        <div className="text-dark-primary flex items-center">
          <AutoAwesome color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
    </div>
  );
}
