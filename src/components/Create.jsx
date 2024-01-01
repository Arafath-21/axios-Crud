import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
function Create() {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [username,setUser] = useState("")
  let navigate = useNavigate("")

  const handleSubmit= async(e)=>{
   try {
    e.preventDefault();
    if (!name || !email || !username) {
      alert('Please fill in all required fields.');
      return;
    }
    let res = await axios.post(API_URL,{
      name,
      email,
      username,
      status:true
    })
    if(res.status===201)
    {
      alert('User Created Successfully')
      navigate('/dashboard')
    }
   } catch (error) {
      console.log(error)
   }

  }

  return <div className='create-wrapper container-fluid'>
    <div className='form-wrapper'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"  onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>User Name</Form.Label>
        <Form.Control type='text' placeholder='UserName' onChange={(e)=>setUser(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={(e)=>handleSubmit(e)}>
        Submit
      </Button>
    </Form>
    </div>
  </div>
}

export default Create