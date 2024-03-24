import Bulb from "../svgs/Bulb";
import styles from "./Navbar.module.css";
import DownArrow from "../svgs/DownArrow";
import Button from "../ui/Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Bulb />
        <h1>6 Suggestions</h1>
      </div>

      <button>
        Sort by: <span>Most Upvotes</span>
        <DownArrow />
      </button>

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
