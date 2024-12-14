import { useContext, type ReactElement } from "react";
import SectionItem from "./SectionItem";
import { AutoAwesome, MenuBook, Translate } from "@mui/icons-material";
import DividerVert from "./DividerVert";
import { Sections } from "../utils/types";
import { GlobalContext } from "../GlobalContext";

export default function SectionBar(): ReactElement {
  const { currentSectionActive, setCurrentSectionActive } =
    useContext(GlobalContext);

  return (
    <div className="w-full flex">
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
