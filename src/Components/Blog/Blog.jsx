import React from 'react'

const Blog = ({image}) => {
  return (
    <div className='Blog'>
        <img src={image} alt="image" />
        <h3>Blog</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, asperiores mollitia. Consectetur labore vel esse.</p>
        <button className="btn">Read more</button>
    </div>
  )
}

export default Blog;