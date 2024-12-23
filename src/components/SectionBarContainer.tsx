import { ReactNode, useContext, useEffect, type ReactElement } from "react";
import { GlobalContext } from "../GlobalContext";
import { Sections } from "../utils/types";

interface SectionBarContainerProperties {
  children?: ReactNode;
}

export default function SectionBarContainer({
  children,
}: SectionBarContainerProperties): ReactElement {
  const { currentSectionActive, setCurrentSectionActive, setValue } =
    useContext(GlobalContext);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (currentSectionActive) {
      const sections = Object.values(Sections);
      const currentIndex = sections.indexOf(currentSectionActive);
      let newIndex = currentIndex;
      if (event.key === "ArrowLeft" && event.metaKey && event.ctrlKey) {
        newIndex = Math.max(currentIndex - 1, 0);
      } else if (event.key === "ArrowRight" && event.metaKey && event.ctrlKey) {
        newIndex = Math.min(currentIndex + 1, sections.length - 1);
      }
      const newSection = sections[newIndex];
      setCurrentSectionActive(newSection);
      setValue?.("section", newSection);
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
      {children}
    </div>
  );
}
