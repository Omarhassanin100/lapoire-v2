import React from 'react'
import { Container } from 'react-bootstrap'

const ProductDescription = () => {
  return (
    <div className='my-5 pb-5'>
    <Container>
      <div className='row'>
      <div className='col-12'>
      <ul className='w-100' style={{borderBottom:"1px solid #1A7742",listStyleType:"none",padding:"0"}}>
        <li style={{margin:"0 0 -1px",padding:"8px 48px",borderBottom:"2px solid #292929",width:"fit-content",fontWeight:'bold',cursor:"pointer"}} className='p-sm-0'>
        Description
        </li>
      </ul>
      <div className='mt-4'>
      <Container>
      <div className='row'>
      <ul style={{listStyleType:"none"}}>
        <li style={{lineHeight:"30px",color:"#292929"}}>
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
