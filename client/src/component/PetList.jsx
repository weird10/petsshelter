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
    <div>
        <h1>Pet List</h1>
        {
            strAscending.map((pet, index) => (
                <div className="boxed" key={pet._id}>
                    <div className='petText'>
                        <h3>Name: {pet.name}</h3>
                        <p>Type: {pet.type}</p>
                        <p>Description: {pet.description}</p>
                        <Link to={`/onepet/${pet._id}`}>{pet.name}'s Page</Link>
                    </div>
                </div>
            ))
        }
    </div>
)
}

export default PetList