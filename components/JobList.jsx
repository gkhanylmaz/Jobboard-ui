import React from "react";
import styles from "../styles/JobList.module.scss";
import JobsCard from "./JobsCard";

const JobList = () => {
  return (
    <div className={styles.jobsSection}>
      <div className={styles.pxpContainer}>
        <div className={styles.jobsRow}>
          <div className={styles.jobsTitle}>
            <div className={styles.jobsLabel}>Job Listing</div>
            <h2>
              Showcase <span> jobs</span> with <br /> beautifully designed{" "}
              <br />
              layouts
            </h2>
            <div className={styles.jobsSubtitle}>
              {" "}
              Enhance the job search experience using the layout that meets your
              vision
            </div>
            <div>
              <div className={styles.jobsNumber}>42+</div>
            </div>
          </div>
          <JobsCard/>
        </div>
      </div>
    </div>
  );
};

export default JobList;
