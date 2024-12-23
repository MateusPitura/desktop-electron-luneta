import { useContext, type ReactElement } from "react";
import SectionItem from "./SectionItem";
import { AutoAwesome, MenuBook, Translate } from "@mui/icons-material";
import DividerVert from "./DividerVert";
import { Sections } from "../utils/types";
import { GlobalContext } from "../GlobalContext";
import SectionBarContainer from "./SectionBarContainer";

export default function SectionBar(): ReactElement {
  const { currentSectionActive, setCurrentSectionActive } =
    useContext(GlobalContext);

  return (
    <SectionBarContainer>
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
    </SectionBarContainer>
  );
}
