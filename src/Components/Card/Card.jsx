import React from 'react'

const Card = ({image}) => {
  return (
    <div className='Card'>
      <img src={image} alt="img" />
        <>
          <h3>Card</h3>
          <p>This Card</p>
          <button className="btn">view</button>
        </>
    </div>
  )
}

export default Card;