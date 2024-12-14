import type { ReactElement } from "react";
import SectionItem from "./SectionItem";
import { AutoAwesome, MenuBook, Translate } from "@mui/icons-material";
import DividerVert from "./DividerVert";

interface SectionBarProperties {}

export default function SectionBar({}: SectionBarProperties): ReactElement {
  return (
    <div className="w-full flex">
      <SectionItem label="Translate" counter={3}>
        <div className="text-dark-primary flex items-center">
          <Translate color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
      <SectionItem label="Dictionary" counter={2} active>
        <div className="text-dark-primary flex items-center">
          <MenuBook color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
      <SectionItem label="Chat">
        <div className="text-dark-primary flex items-center">
          <AutoAwesome color="inherit" />
        </div>
      </SectionItem>
      <DividerVert />
    </div>
  );
}
