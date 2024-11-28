import React from 'react'
import styles from './Quntity.module.css'
const PeciesCounter = (props) => {
  return (
    <div className='col-12 col-md-5 '>
    <div className={`d-flex align-items-center rounded   w-sm-100 justify-content-sm-between ${styles.counterParent}`} >
    <img className={`${styles.conterButton}`} src='https://lapoire.online/Content/images/flaticons/min.svg' alt='button' />
    <span className={`${styles.count}`}>{props.count}</span>
    <img className={`${styles.conterButton}`} src='https://lapoire.online/Content/images/flaticons/plus.svg' alt='button' />
    </div>
    </div>
)
}

export default PeciesCounter
