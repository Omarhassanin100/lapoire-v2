import React from 'react'
import { FormSelect } from 'react-bootstrap';
import styles from './DrobDown.module.css'
const DrobDown = () => {
  return (
    <div className='col-12 col-md-6'>
    <FormSelect className={`${styles.formSelect}`}>
      <option disabled>Choose size</option>
      <option className={`${styles.option}`} value="Piece">Piece</option>
    </FormSelect>
    </div>
    )
}

export default DrobDown
