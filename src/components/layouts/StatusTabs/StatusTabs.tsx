import { roadmapCategories } from "../../../utils/constants/roadmap-constants";
import styles from "./StatusTabs.module.css";
import { StatusTabsProps } from "./types";

const StatusTabs = ({
  requestObject,
  selectedStatus,
  setSelectedStatus,
}: StatusTabsProps) => {
  return (
    <section className={styles.status_tabs}>
      {roadmapCategories.map((category) => {
        const isSelected = category.name === selectedStatus;
        return (
          <button
            key={category.name}
            style={{ borderBottomColor: isSelected ? category.color : "" }}
            onClick={() => setSelectedStatus(category.name)}
          >
            {category.name} ({requestObject[category.name].length})
          </button>
        );
      })}
    </section>
  );
};

export default StatusTabs;
