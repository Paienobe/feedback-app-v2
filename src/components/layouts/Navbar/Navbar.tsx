import Bulb from "../../svgs/Bulb";
import styles from "./Navbar.module.css";
import DownArrow from "../../svgs/DownArrow";
import Button from "../../ui/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import SortDropdown from "../SortDropdown/SortDropdown";
import { useState } from "react";
import { sortingOptions } from "../../../utils/constants/sorting-constants";

const Navbar = () => {
  const suggestions = useSelector(
    (state: RootState) => state.productRequests.value
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [chosenSort, setChosenSort] = useState(sortingOptions[0]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_info_section}>
        <Bulb />
        <h1>{suggestions.length} Suggestions</h1>
      </div>

      <div className={styles.dropdown_holder}>
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Sort by: <span>{chosenSort}</span>
          <DownArrow />
        </button>
        {showDropdown && (
          <SortDropdown
            chosenSort={chosenSort}
            setChosenSort={setChosenSort}
            setShowDropdown={setShowDropdown}
          />
        )}
      </div>

      <Button
        text="+ Add Feedback"
        width="9.75rem"
        height="2.75rem"
        backgroundColor="var(--purple)"
        onClick={() => {}}
      />
    </nav>
  );
};

export default Navbar;
