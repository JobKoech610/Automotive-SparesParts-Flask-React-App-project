import React,{useState} from 'react'
import car from './image/car.png'
function Accessory() {
  const [formData, setFormData] =  useState({
    location: "", 
    accessories: "",
    description: "",
    price: "",
    image: "",
  })
  function handleOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  // function handleClickSubmit(){
  //   alert("added successfully")
  // }
  function handleSubmit(event) {
    event.preventDefault()

  // Validate price as integer
  const priceRegex = /^\d+$/;
  if (!priceRegex.test(formData.price)) {
    alert("Please enter a valid price as an integer.");
    return;
  }

  // Validate image as URL with .jpg or .png extension
  const imageRegex = /\.(jpg|png)$/;
  if (!imageRegex.test(formData.image)) {
    alert("Please enter a valid image URL with .jpg or .png extension.");
    return;
  }


    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData),
    }
    fetch('http://127.0.0.1:5555/showroom',post)
    .then(response => response.json())
    .then(data => setFormData(data))
    .catch (error => console.log (error))
  }


  return (
    <>
    <form onSubmit={handleSubmit} className="accessory-form">
        <input className='input' onChange={handleOnChange} type= "text" name = "location" value ={formData.location} placeholder = "location" required/>
        <input className='input' onChange={handleOnChange} type = "text" name = "accessories" value = {formData.accessories} placeholder = "accessory"required/>
        <input className='input' onChange={handleOnChange} type = "text" name = "description"value = {formData.description} placeholder = "description"required/>
        <input className='input' onChange={handleOnChange} type = "text" name = "price" value = {formData.price} placeholder = "price"required/>
        <input className='input' onChange={handleOnChange} type = "text" name = "image" value = {formData.image} placeholder = "image"required/>
        <button className='btn' type= "submit" value="accessory added" onClick={(e)=>alert(e.target.value)}> add Accessory</button>
    </form>
    <img src={car} alt="car" className='car'/>
    </>

  )
}
export default Accessory