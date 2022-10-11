import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'



const OnePet = () => {
    const {id} = useParams()
    const navigate = useNavigate()


    const [likes, setLikes] = useState(0)
    const [pet, setPet] = useState({})

    
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            setPet(res.data)
        }).catch((err)=> console.log(err))
    })

    const adoptHandler = () => {
        axios.delete(`http://localhost:8000/api/adoptPet/${id}`)
        .then((res) => {    
            console.log("Adopted by someone")
            navigate('/allPets')
        })
        .catch(err=> console.log(err))
    } 

    const likeMe = () => {
        setLikes(likes +1)
    }

    const handleClick = event => {
        event.currentTarget.disabled = true;
        likeMe()
        console.log('button clicked');
    }

  return (
    <div className='petSplash'>
        <div className='petText'>
            <h2>{pet.name}'s Page</h2>
            <h3>Type: {pet.type}</h3>
            <h3>Description: {pet.description}</h3>
            <table className='smallTable'>
                <tbody>
                    <tr>
                    <td><h3 className='hype'>Skills:</h3></td>
                    <td>
                        <ul>
                            <li>{pet.skill1}</li>
                            <li>{pet.skill2}</li>
                            <li>{pet.skill3}</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
                <p>{likes} Like!!!</p>
            <button className="warning" onClick={(e) => adoptHandler(pet._id)}>Adopt me please!</button>
            <button className="likey" onClick={handleClick}>Give me LIKESSS!</button>        
        </div>
    </div>
  )
}

export default OnePet