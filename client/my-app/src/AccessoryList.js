import React, { useEffect, useState} from 'react'
import ManipulateAccessory from './ManipulateAccessory'
// import Search from './search'

const AccessoryList = ({id})=> {
    const [data, setData] = useState([])
    // const[searchTerm, setSearchTerm]=useState("")
    const[patch,setPatch]=useState({
        location: "", 
        accessories: "",
        description: "",
        price: "",
        image: "",
    })
    const [showForm, setShowForm] = useState(false);

    
useEffect(()=>{
    fetch('http://127.0.0.1:5555/showroom')
    .then(r => r.json())
    .then(data =>setData(data))
},[])

function deleteAccessory(id){
    fetch(`http://127.0.0.1:5555/showroom/${id}`,{
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() =>{
      const updatedAccessories= data.filter((data)=> data.id !== id)
      setData(updatedAccessories)
    })
   }
function handleOnChange(event) {
    setPatch({
      ...patch,
      [event.target.name]: event.target.value,
    })
  }
function updateAccessory(id){
    fetch(`http://127.0.0.1:5555/showroom/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patch)
    })
    .then(resp => resp.json())
    .then(updatedAccessory =>{
      const update= data.map((item)=>{
        if(item.id === updatedAccessory.id) return updatedAccessory
        return item
      })
      setData(update)
    })
   }
   const toggleForm = () => {
    setShowForm(!showForm);
   }
  
   const access= data.map((item,index) =>
 <ManipulateAccessory key={index} id={item.id} updateAccessory={updateAccessory} toggleForm={toggleForm} deleteAccessory={deleteAccessory} location={item.location} price={item.price} description={item.description} image={item.image}/>
  
 )
//  const displayedAccessories = data.filter((accessory) => {
//   return accessory.name.toLowerCase().includes(searchTerm.toLowerCase());
// });

// if(!data) return <h1>...loading</h1>
// console.log(displayedAccessories);
   

return (
    <div className='charac'>
      {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/> */}
      {/* <ManipulateAccessory data={displayedAccessories}/> */}
        {access}
        {/* <button onClick={toggleForm} className="btn">
        Update
      </button> */}
      {showForm && (
        <form className="accessory-form" onSubmit={updateAccessory}>
          <input
            onChange={handleOnChange}
            type="text"
            name="location"
            value={patch.location}
            placeholder="location"
            // required
          />
          <input
            onChange={handleOnChange}
            type="text"
            name="accessories"
            value={patch.accessories}
            placeholder="accessory"
          />
          <input
            onChange={handleOnChange}
            type="text"
            name="description"
            value={patch.description}
            placeholder="description"
          />
          <input
            onChange={handleOnChange}
            type="text"
            name="price"
            value={patch.price}
            placeholder="price"
          />
          <input
            onChange={handleOnChange}
            type="text"
            name="image"
            value={patch.image}
            placeholder="image"
          />
          <button type="submit" className='btn'>Update</button>
        </form>
      )}

    </div>
)

}

export default AccessoryList
