import { useSelector } from "react-redux";
import { roadmapCategories } from "../../../utils/constants/roadmap-constants";
import styles from "./RoadmapBody.module.css";
import { RootState } from "../../../store/store";
import filterRequestsByStatus from "../../../utils/helpers/filterRequestsByStatus";
import { Request } from "../../../types";
import RoadmapRequest from "../RoadmapRequest/RoadmapRequest";
import { Link } from "react-router-dom";
import StatusTabs from "../StatusTabs/StatusTabs";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { useState } from "react";

const RoadmapBody = () => {
  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );

  const requests: { [x: string]: Request[] } = {
    Planned: filterRequestsByStatus(productRequests, "planned"),
    "In-Progress": filterRequestsByStatus(productRequests, "in-progress"),
    Live: filterRequestsByStatus(productRequests, "live"),
  };

  const isMobile = useIsMobile();

  const [selectedStatus, setSelectedStatus] = useState(
    roadmapCategories[0].name
  );

  return (
    <section className={styles.roadmap_body}>
      {isMobile && (
        <StatusTabs
          requestObject={requests}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      )}
      {roadmapCategories.map((category) => {
        const categoryRequests = requests[category.name];
        if (isMobile && category.name !== selectedStatus) {
          return null;
        }
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
