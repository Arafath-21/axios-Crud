import React from 'react'

function BlogCard({name,email,username,customKey}) {

  return <tr>
            <td>{customKey}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{username}</td>
        </tr>



}

export default BlogCard