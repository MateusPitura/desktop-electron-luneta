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

interface FilterDropDownMenuProperties {
  options: Option[];
  onClick: (option: Option) => void;
}

export default function FilterDropDownMenu({
  options,
  onClick,
}: FilterDropDownMenuProperties): ReactElement {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none hover:opacity-50">
        <div className="text-dark-onPrimary flex items-center">
          <ArrowDropDown color="inherit" fontSize="small" />
        </div>
      </DropdownMenuTrigger>
      {options.length !== 0 && (
        <DropdownMenuPortal>
          <DropdownMenuContent
            sideOffset={4}
            className="bg-dark-primary p-2 rounded-md shadow-md"
          >
            {options.map((options) => (
              <DropdownMenuItem className="outline-none" key={options.value}>
                <button
                  className="text-sm text-dark-onPrimary hover:opacity-50 cursor-pointer w-full text-left"
                  onClick={() => onClick(options)}
                >
                  {options.label}
                </button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenuPortal>
      )}
    </DropdownMenu>
  );
}
