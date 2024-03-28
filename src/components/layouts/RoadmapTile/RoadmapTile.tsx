import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/store";
import filterRequestsByStatus from "../../../utils/helpers/filterRequestsByStatus";
import styles from "./RoadmapTile.module.css";
import { useSelector } from "react-redux";

const RoadmapTile = () => {
  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );

  const plannedRequests = filterRequestsByStatus(productRequests, "planned");
  const inProgress = filterRequestsByStatus(productRequests, "in-progress");
  const liveRequests = filterRequestsByStatus(productRequests, "live");

  const categories = [
    { name: "Planned", color: "#f49f85", requests: plannedRequests },
    { name: "In-Progress", color: "#ad1fea", requests: inProgress },
    { name: "Live", color: "#8fdf82", requests: liveRequests },
  ];

  const navigate = useNavigate();

  return (
    <section className={styles.roadmap_tile}>
      <div>
        <p>Roadmap</p>
        <button onClick={() => navigate("/roadmap")}>View</button>
      </div>

      <div>
        {categories.map((category) => {
          return (
            <div key={category.name} className={styles.roadmap_category_item}>
              <div>
                <div style={{ backgroundColor: category.color }}></div>
                <p>{category.name}</p>
              </div>

              <p>{category.requests.length}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoadmapTile;
