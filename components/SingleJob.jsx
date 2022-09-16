import React from 'react'
import styles from "../styles/SingleJob.module.scss"
const SingleJob = () => {
  return (
    <div className={styles.singleJob}>
        <div className={styles.pxpContainer}>
            <div className={styles.pxpSingleJob}>
                <div className={styles.singleJobTitle}>
                    <div className={styles.titleCenter}>
                        <div className={styles.title}>
                            <div className={styles.singleJobLabel}>
                                Single Job
                            </div>
                            <h2> Clean and organized <span>job</span> <br/> presentation</h2>
                            <div className={styles.subTitle}>
                            Present your job details elegantly using built-in flexible and well designed layouts.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default SingleJob