import React from 'react'

const Blog = ({image,title}) => {
  return (
    <div className='Blog'>
        <img src={image} alt="image" />
        <div className='text-container'>
          <h3>{title}</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, asperiores mollitia. Consectetur labore vel esse.</p>
          <button className="btn">Read more</button>
        </div>
    </div>
  )
}

export default Blog;