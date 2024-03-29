import styles from "./RoadmapRequest.module.css";
import { RoadmapRequestProps } from "./types";
import upIcon from "../../../assets/shared/icon-arrow-up.svg";
import commentIcon from "../../../assets/shared/icon-comments.svg";

const RoadmapRequest = ({ request, color }: RoadmapRequestProps) => {
  return (
    <section className={styles.roadmap_request}>
      <div
        className={styles.roadmap_request_bar}
        style={{ backgroundColor: color }}
      ></div>

      <div className={styles.roadmap_request_top}>
        <div style={{ backgroundColor: color }}></div>
        <p>{request.status}</p>
      </div>

      <div>
        <h2 className={styles.roadmap_request_title}>{request.title}</h2>
        <p>{request.description}</p>
        <div className={styles.roadmap_request_category}>
          {request.category}
        </div>

        <div className={styles.roadmap_request_bottom}>
          <button>
            <img src={upIcon} alt="" />
            {request.upvotes}
          </button>

          <div>
            <img src={commentIcon} alt="" />
            {request.comments.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapRequest;
