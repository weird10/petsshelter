import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'




const PetList = () => {
    const [pets, setPets] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
    .then((res) => {
        setPets(res.data)
    })
    .catch((err) => console.log(err))
    } , [] )

    const strAscending = [...pets].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );
  console.log(strAscending);

return (
    <div className="App">
        <table className='basicTable'>
            <tr>
                <th>Name: </th>
                <th>Type: </th>
                <th>Actions:</th>
        
            </tr>
            
        {
            strAscending.map((pet, index) => (
                <tr key={pet._id}>
                    
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td><Link className="falseButton" to={`/onepet/${pet._id}`}>{pet.name}'s Page</Link><span><Link className="button likey" to={`/editpet/${pet._id}`}> Update</Link></span></td>
                       
                        
                </tr>
            ))
        }
         </table>
    </div>
)
}

export default PetList