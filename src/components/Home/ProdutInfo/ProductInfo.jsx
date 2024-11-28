import React from 'react'
import { Container} from 'react-bootstrap';
import Button from '../../Shared/AddtoCartButton/Button';
import DrobDown from '../../Shared/DrobDown/DrobDown';
import QuntityCounter from '../../Shared/QuntitiyCounter/QuantityCounter'
import styles from './ProductInfo.module.css'
const ProductInfo = () => {
  return (
    <div className='h-100'>
    <Container className='h-100'>
      <div className={`${styles.parent} row py-5 d-flex align-items-start justify-content-center h-100`}>
        <div className='col-md-6 col-12   h-100 '>
          <div className={` ${styles.imgParent} w-100`} >
          <img className="w-100" src="https://xretail.blob.core.windows.net/lapoirecontainer/ca82d8dd-afc5-437b-b2ee-2edd21dffe25-638647735652747618.png" alt='product img'/>
          </div>
        </div>

{/* title section  */}

        <div className='col-md-6 col-12 h-100 '>
          <div className={`${styles.titleParent}`}>
             <h3 className={`${styles.title}`}>
             Small Chocolate Delicacies Box
             </h3>
          </div>

 {/* price section  */}
          <div className='pb-3'>
          <span className={`${styles.price}`}>
          775 EGP
          </span>
          </div>
{/* INGREDIENTS section  */}
          <div className='mb-3'>
          <h4 className={`${styles.description}`}>INGREDIENTS:</h4>
          <h6 className={`${styles.descriptionContent}`}>30 PCs: Mastic, Dark Chocolate Ganache, Brittle, Pistachio, Almond Croquant, Gianduja, Nutella Dark Chocolate, Halawa Shaar, Coffee, Caramel, Runny Caramel, Toffee, Coconut.</h6>
          </div>
{/* Avilapilty and Category section  */}

          <div className='pb-4 d-flex align-items-center gap-3'>
          <span >
            <span className={`${styles.spanBold}`}>Availability:</span>
            <span className={`${styles.span}`}>2 In Stock</span>
          </span>
          <span>
            <span className={`${styles.spanBold}`}>Categories:</span>
            <span className={`${styles.span}`}>Chocolates</span>
          </span>
          </div>

{/* qunataty section  */}

          <div className=' row pb-4 d-flex align-items-center  row-gap-3 w-100'>
          <DrobDown/>
          <QuntityCounter count='1'/>
        </div>

{/* button section  */}

        <Button title='Add to Cart'/>

{/* dilvery info section  */}
        <div>
          <div>
            <span className={`${styles.delvery}`}>Delivery within:</span>
            <span className={`${styles.delveryInfo}`}>45 - 60 mins</span>
          </div>
          <div>
          <span className={`${styles.delvery}`}>Delivery note :</span>
          <span className={`${styles.delveryInfo}`}>Orders may be delayed due to rush hours</span>
          </div>
        </div>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default ProductInfo
