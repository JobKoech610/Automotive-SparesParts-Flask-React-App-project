import React, {useEffect} from 'react'
// import accessory
function AccessoryList(){
    // const [data, setData] = useState('')
 
useEffect(()=>{
    fetch('http://127.0.0.1:5555/showroom')
    .then(r => r.json())
    .then(data => console.log(data))
},[])
// function addData(){}
// function deleteData(){} delete in here
// function updateData(){} patch in here
// update patch
// delete

return (
    <div>
{/*add the component accessory that is imported */}
    </div>
)

}

export default AccessoryList
