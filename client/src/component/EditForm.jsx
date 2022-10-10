import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditForm = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState({})
    
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
    .then((res) => {
        console.log(res)
        setName(res.data.name)
        setType(res.data.type)
        setDescription(res.data.description)
    })
    .catch((err)=> {
        console.log(err)
    })
} ,[] )

const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/updatePet/${id}`,{
        name,
        type,
        description
    })
    .then((res) => {
    navigate('/allPets')        
    }).catch((err) => {console.log(err)
    setErrors(err.response.data.errors)
})
}

return (
    <div>
        <form onSubmit={submitHandler} className='basicForm'>
            <label className='formTitle'>Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </label>
            { errors.name ?    <span className='danger'>{errors.name.message}</span> : null}
            <label className='formTitle'>Type:
                <input type="text" value={type} onChange={e => setType(e.target.value)}></input>
            </label>
            { errors.type ?    <span className='danger'>{errors.type.message}</span> : null}
            <label className='formTitle'>Description:
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
            </label>
            { errors.description ?    <span className='danger'>{errors.description.message}</span> : null}
            <button type='submit'>Update Pet</button>
        </form>
    </div>
  )
}

export default EditForm