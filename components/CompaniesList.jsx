import React from 'react'
import styles from "../styles/CompaniesList.module.scss"

const CompaniesList = () => {
  return (
    <div className={styles.companiesList}>
        <div className={styles.pxpContainer}>
            <div className={styles.listingCenter}>
                <div className={styles.listingTitle}>
                    <div className={styles.listingLabel}>
                        Companies Listing
                    </div>
                    <h2> List the <span> companies </span>in a <br/> creative way.</h2>
                    <div className={styles.listSubtitle}>
                    Display your companies list using best in class design templates.
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CompaniesList