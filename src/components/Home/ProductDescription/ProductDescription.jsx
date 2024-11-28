import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './productDes.module.css'
const ProductDescription = () => {
  return (
    <div className='my-5 pb-5'>
    <Container>
      <div className='row'>
      <div className='col-12'>
      <ul className={`w-100 ${styles.tapListParent}`}>
        <li className={`${styles.tapList}`}>
        Description
        </li>
      </ul>
      <div className='mt-4'>
      <Container>
      <div className='row'>
      <ul className={`w-100 ${styles.descriptionListParent}`}>
        <li className={`${styles.descriptionList}`}>
        30 PCs: Mastic, Dark Chocolate Ganache, Brittle, Pistachio, Almond Croquant, Gianduja, Nutella Dark Chocolate, Halawa Shaar, Coffee, Caramel, Runny Caramel, Toffee, Coconut.
        </li>
      </ul>
      </div>
      </Container>
      </div>
      </div>
      </div>
    </Container>
    </div>
  )
}

export default ProductDescription
