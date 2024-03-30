import styles from "./SortDropdown.module.css";
import check from "../../../assets/shared/icon-check.svg";
import { sortingOptions } from "../../../utils/constants/sorting-constants";
import { SortDropdownProps } from "./types";
import { sort } from "../../../store/slices/productRequestsSlice";
import { useDispatch } from "react-redux";

const SortDropdown = ({
  chosenSort,
  setChosenSort,
  setShowDropdown,
}: SortDropdownProps) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.sort_dropdown}>
      {sortingOptions.map((option) => {
        return (
          <button
            key={option}
            onClick={() => {
              setChosenSort(option);
              dispatch(sort({ sortBy: option }));
              setShowDropdown(false);
            }}
          >
            {option}
            {chosenSort === option && <img src={check} alt="" />}
          </button>
        );
      })}
    </div>
  );
};

export default SortDropdown;
