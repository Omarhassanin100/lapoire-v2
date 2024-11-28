import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <div className={`${styles.buttonParent}`}>
    <button  className={`btn btn-primary ${styles.Button}`} >{props.title}</button>
   </div>
)
}

export default Button
