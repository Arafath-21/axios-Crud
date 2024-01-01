import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import BlogCard from './BlogCard';
import { API_URL } from '../App';

function Home() {
  let [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      let res = await axios.get(API_URL);
      let filteredBlogs = res.data.filter((e) => e.status);
      setBlogs(filteredBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className='container-fluid home-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((e) => (
            <BlogCard key={e.id} customKey={e.id} name={e.name} email={e.email} username={e.username} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
