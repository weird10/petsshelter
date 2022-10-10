import React, {useState} from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addPet', {
            name,
            type,
            description
        }).then((res)=> {
            console.log("WHATTTTT", res)
            navigate('/allPets')
        })
        .catch((err)=>{
            console.log('ERRRRR', err)
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
            { errors.type ?    <span className='danger'>{errors.description.message}</span> : null}
            <button type='submit'>Submit Pet</button>
        </form>
    </div>
  )
}

export default Form