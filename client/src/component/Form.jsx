import React, {useState} from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addPet', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
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
        <h2>Know a pet that needs a home?</h2>
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
            <label className='formTitle'>Skills (Optional):
                <input type="text" value={skill1} onChange={e => setSkill1(e.target.value)}></input>
                <input type="text" value={skill2} onChange={e => setSkill2(e.target.value)}></input>
                <input type="text" value={skill3} onChange={e => setSkill3(e.target.value)}></input>
            </label>
    
            <button type='submit'>Submit Pet</button>
        </form>
    </div>
  )
}

export default Form