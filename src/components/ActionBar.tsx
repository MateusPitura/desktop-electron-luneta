import { ContentCopy } from "@mui/icons-material";
import type { ReactElement } from "react";

interface ActionBarProperties {
  onClickCopy: () => void;
}

export default function ActionBar({
  onClickCopy,
}: ActionBarProperties): ReactElement {
  return (
    <div className="flex items-center justify-end">
      <button
        className="hover:opacity-50 cursor-pointer text-dark-primary flex items-center"
        onClick={onClickCopy}
      >
        <ContentCopy fontSize="small" color="inherit" />
      </button>
    </div>
  );
}
