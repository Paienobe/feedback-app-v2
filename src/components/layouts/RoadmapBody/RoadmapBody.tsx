import { useSelector } from "react-redux";
import { roadmapCategories } from "../../../utils/constants/roadmap-constants";
import styles from "./RoadmapBody.module.css";
import { RootState } from "../../../store/store";
import filterRequestsByStatus from "../../../utils/helpers/filterRequestsByStatus";
import { Request } from "../../../types";
import RoadmapRequest from "../RoadmapRequest/RoadmapRequest";
import { Link } from "react-router-dom";

const RoadmapBody = () => {
  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );

  const requests: { [x: string]: Request[] } = {
    Planned: filterRequestsByStatus(productRequests, "planned"),
    "In-Progress": filterRequestsByStatus(productRequests, "in-progress"),
    Live: filterRequestsByStatus(productRequests, "live"),
  };

  return (
    <section className={styles.roadmap_body}>
      {roadmapCategories.map((category) => {
        const categoryRequests = requests[category.name];
        return (
          <div key={category.name} className={styles.roadmap_column}>
            <h2>
              {category.name} ({categoryRequests.length})
            </h2>
            <p>{category.description}</p>

            <div className={styles.roadmap_request_holder}>
              {categoryRequests.map((request) => {
                return (
                  <Link to={`/comments/${request.id}`} key={request.id}>
                    <RoadmapRequest request={request} color={category.color} />
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RoadmapBody;
