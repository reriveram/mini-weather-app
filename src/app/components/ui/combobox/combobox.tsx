import { LocationType } from "@/app/types";
import { v4 as uuid } from "uuid";

import {
  comboboxContainer,
  homeInput,
  homeInputExpanded,
  locationList,
} from "./combobox.css";
import { Option } from "../../option";

interface ComboboxProps {
  options: LocationType[];
  inputValue: string;
  handleOnChange: (value: string) => void;
}

export default function Combobox({
  options,
  inputValue,
  handleOnChange,
}: ComboboxProps) {
  return (
    <div className={comboboxContainer}>
      <input
        className={inputValue ? homeInputExpanded : homeInput}
        value={inputValue}
        onChange={(e) => handleOnChange(e.target.value)}
        placeholder="Enter your city..."
      />

      {inputValue && (
        <ul className={locationList}>
          {options.map((option) => (
            <Option key={uuid()} option={option} />
          ))}
        </ul>
      )}
    </div>
  );
}
