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
      if (event.key === "ArrowLeft") {
        const newIndex = Math.max(currentIndex - 1, 0);
        const newSection = sections[newIndex];
        setCurrentSectionActive(newSection as Sections);
      } else if (event.key === "ArrowRight") {
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
    <div className="w-full flex overflow-auto" id="section-scroll-container">
      <SectionItem
        label="Translate"
        counter={3}
        active={currentSectionActive === Sections.Translate}
        onClick={() => setCurrentSectionActive(Sections.Translate)}
      >
        <div className="text-dark-primary flex items-center">
          <Translate color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
      <SectionItem
        label="Dictionary"
        counter={2}
        active={currentSectionActive === Sections.Dictionary}
        onClick={() => setCurrentSectionActive(Sections.Dictionary)}
      >
        <div className="text-dark-primary flex items-center">
          <MenuBook color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
      <SectionItem
        label="Chat"
        active={currentSectionActive === Sections.Chat}
        onClick={() => setCurrentSectionActive(Sections.Chat)}
      >
        <div className="text-dark-primary flex items-center">
          <AutoAwesome color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
    </div>
  );
}
