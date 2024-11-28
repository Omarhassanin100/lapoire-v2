import React from 'react'
import { Container, FormSelect } from 'react-bootstrap';
const ProductInfo = () => {
  return (
    <div className='h-100'>
    <Container style={{height:"100%"}}>
      <div style={{paddingTop:"50px",paddingBottom:"50px",height:"100%"}} className='row py-5 d-flex align-items-start justify-content-center '>
        <div className='col-md-6 col-12   h-100 '>
          <div className='w-100'  style={{paddingLeft:"50px",paddingRight:"50px"}}>
          <img className="w-100" src="https://xretail.blob.core.windows.net/lapoirecontainer/ca82d8dd-afc5-437b-b2ee-2edd21dffe25-638647735652747618.png" alt="product image"/>
          </div>
        </div>
        <div className='col-md-6 col-12 h-100 '>
          <div style={{paddingBottom:"30px"}}>
             <h3 style={{fontWeight:"bold",fontSize:"42px"}}>
             Small Chocolate Delicacies Box
             </h3>
          </div>
          <div className='pb-3'>
          <span style={{color:"#1A7742",fontWeight:"bold",fontSize:"20px"}}>
          775 EGP
          </span>
          </div>
          <div className='mb-3'>
          <h4 style={{color:"#1A7742",fontSize:"16px",fontWeight:"bold"}}>INGREDIENTS:</h4>
          <h6 style={{cColor:"#292929",fontSize:"14px",lineHeight:"30px"}}>30 PCs: Mastic, Dark Chocolate Ganache, Brittle, Pistachio, Almond Croquant, Gianduja, Nutella Dark Chocolate, Halawa Shaar, Coffee, Caramel, Runny Caramel, Toffee, Coconut.</h6>
          </div>
          <div className='pb-4 d-flex align-items-center gap-3'>
          <span >
            <span style={{color:"#1A7742",fontSize:"14px",fontWeight:"bold"}}>Availability:</span>
            <span style={{color:"#292929"}}>2 In Stock</span>
          </span>
          <span>
            <span style={{color:"#1A7742",fontSize:"14px",fontWeight:"bold"}}>Categories:</span>
            <span style={{color:"#292929"}}>Chocolates</span>
          </span>
          </div>
          <div className=' row pb-4 d-flex align-items-center  row-gap-3 w-100'>
          <div className='col-12 col-md-6'>
          <FormSelect style={{color:"#1A7742",fontWeight:"bold",padding:"8px 24px",fontSize:"14px",borderColor:"#1A7742"}}>
            <option disabled>Choose size</option>
            <option style={{color:"#1A7742"}} value="Piece">Piece</option>
          </FormSelect>
          </div>
          <div className='col-12 col-md-6 '>
          <div style={{border:"1px solid #1A7742",gap:"20px",padding:"4px"}} className='d-flex align-items-center rounded   w-sm-100 justify-content-sm-between' >
          <img style={{width:"30px",height:"30px"}} src='https://lapoire.online/Content/images/flaticons/min.svg' alt='button' />
          <span>1</span>
          <img style={{width:"30px",height:"30px"}} src='https://lapoire.online/Content/images/flaticons/plus.svg' alt='button' />
          </div>
        </div>
        </div>
        <div style={{margin:"0 0 32px"}}>
          <button style={{ border:"none",fontSize:"18px", padding:"8px 85px",backgroundColor:"#1A7742",margin:"0 4px 8px"}} className='btn btn-primary'>Add to Cart</button>
        </div>
        <div>
          <div>
            <span style={{color:"#1A7742",paddingRight:"10px",fontWeight:"bold"}}>Delivery within</span>
            <span style={{color:"#1A7742"}}>45 - 60 mins</span>
          </div>
          <div>
          <span style={{color:"#1A7742",paddingRight:"10px",fontWeight:"bold"}}>Delivery note :</span>
          <span style={{color:"#1A7742"}}>Orders may be delayed due to rush hours</span>
          </div>
        </div>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default ProductInfo
