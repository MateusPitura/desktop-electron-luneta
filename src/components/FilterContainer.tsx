import { useEffect, type ReactElement } from "react";

interface FilterContainerProperties {
  children: ReactElement;
}

export default function FilterContainer({
  children,
}: FilterContainerProperties): ReactElement {
  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    scrollContainer?.addEventListener("wheel", (event) => {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY / 10;
    });

    return () => {
      scrollContainer?.removeEventListener("wheel", () => {});
    };
  }, []);

  return (
    <div className="p-2 gap-2 flex overflow-x-auto" id="scroll-container">
      {children}
    </div>
  );
}
