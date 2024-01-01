import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { API_URL } from '../App';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        const blogDetails = response.data;
        setName(blogDetails.name);
        setUser(blogDetails.username);
        setEmail(blogDetails.email);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  const handleSubmit = async () => {
    try {
      const updatedBlog = {
        name,
        username,
        email,
      };

      const response = await axios.put(`${API_URL}/${id}`, updatedBlog);

      alert(`User Updated Sucesfully`)
      navigate(`/`);
      console.log('Blog updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return <div className='create-wrapper container-fluid'>
  <div className='form-wrapper'>
  <Form>
    <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>User Name</Form.Label>
      <Form.Control type='text' placeholder='UserName' value={username} onChange={(e)=>setUser(e.target.value)}/>
    </Form.Group>
    <Button variant="primary m-auto" onClick={()=>handleSubmit()}>
      save
    </Button>
  </Form>
  </div>
</div>
}

export default Edit