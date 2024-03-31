import styles from "./FormDropdown.module.css";
import downIcon from "../../../assets/shared/icon-arrow-down.svg";
import { FormDropdownProps } from "./types";
import { useState } from "react";

const FormDropdown = ({
  defaultText,
  dropdownOptions,
  setSelection,
}: FormDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={styles.form_dropdown}>
      <button onClick={() => setShowOptions(!showOptions)} type="button">
        <p>{defaultText}</p>
        <img src={downIcon} alt="" />
      </button>

      {showOptions && (
        <div>
          {dropdownOptions.map((option) => {
            return (
              <button
                type="button"
                key={option}
                onClick={() => {
                  setSelection(option);
                  setShowOptions(false);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FormDropdown;
