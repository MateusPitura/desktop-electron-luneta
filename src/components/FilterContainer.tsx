import classNames from "classnames";
import { ReactNode, useEffect, type ReactElement } from "react";

interface FilterContainerProperties {
  children: ReactNode;
  hidden: boolean;
}

export default function FilterContainer({
  children,
  hidden,
}: FilterContainerProperties): ReactElement {
  useEffect(() => {
    const scrollContainer = document.getElementById("filter-scroll-container");
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
      className={classNames("p-2 gap-2 flex overflow-x-auto", {
        hidden: hidden,
      })}
      id="filter-scroll-container"
    >
      {children}
    </div>
  );
}
