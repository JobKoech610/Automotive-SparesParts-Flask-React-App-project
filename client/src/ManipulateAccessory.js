import React from 'react'


 function ManipulateAccessory({id,deleteAccessory,toggleForm,image,location,accessories,description,price}) {
  return (
    <div className='item'>
        <img src={image} alt='img'className='img' />
        <p>location:{location}</p>
        <p>{accessories}</p>
        <p>{description}</p>
        <p>price:{price}</p>
        <button onClick={toggleForm} className="btnn">
        Update
      </button>
     {/* <button onClick={()=> updateAccessory(id)} className="btn" >update</button> */}
     <button onClick={()=> deleteAccessory(id)} className="btnnn" >delete</button>
    </div>
  )
}
export default  ManipulateAccessory