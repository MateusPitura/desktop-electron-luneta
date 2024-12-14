import type { ReactElement } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Option } from "../utils/types";
import { languages } from "../utils/constants";

interface FilterDropDownMenuProperties {
  onClick: (option: Option) => void;
}

export default function FilterDropDownMenu({
  onClick,
}: FilterDropDownMenuProperties): ReactElement {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none hover:opacity-50">
        <div className="text-dark-onPrimary flex items-center">
          <ArrowDropDown color="inherit" fontSize="small" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={4}
          className="bg-dark-primary p-2 rounded-md shadow-md"
        >
          {languages.map((language) => (
            <DropdownMenuItem className="outline-none" key={language.value}>
              <button
                className="text-sm text-dark-onPrimary hover:opacity-50 cursor-pointer w-full text-left"
                onClick={() => onClick(language)}
              >
                {language.label}
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
