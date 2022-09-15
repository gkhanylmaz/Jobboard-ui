import React from 'react'
import styles from "../styles/JobsCard.module.scss"

const JobsCard = () => {
  return (
    <div className={styles.JobsCards}>
        <div className={styles.pxpContainer}>
            <div className={styles.Cards}>
               <div className={styles.Card}>
                <div className={styles.pxpFeature}>
                    <div className={styles.pxpFeatureIcon}>
                
                    </div>
                    <div className={styles.pxpFeatureText}>
                    Multiple design layouts

                    </div>
                </div>
               </div>
               <div className={styles.Card}>
                <div className={styles.pxpFeature}>
                    <div className={styles.pxpFeatureIcon}>
                         
                    </div>
                    <div className={styles.pxpFeatureText}>
                    Advanced search and filter system
                    </div>
                </div>
               </div>
               <div className={styles.Card}>
                <div className={styles.pxpFeature}>
                    <div className={styles.pxpFeatureIcon}>
                         
                    </div>
                    <div className={styles.pxpFeatureText}>
                    Popular searches algorithm
                    </div>
                </div>
               </div>
               <div className={styles.Card}>
                <div className={styles.pxpFeature}>
                    <div className={styles.pxpFeatureIcon}>
                         
                    </div>
                    <div className={styles.pxpFeatureText}>
                    Multiple job card designs
                    </div>
                </div>
               </div>

            </div>

        </div>
    </div>
  )
}

export default JobsCard