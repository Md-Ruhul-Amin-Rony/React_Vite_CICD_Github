import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <div className=' bg-emerald-200 p-5 m-5 rounded-lg text-black text-center inline-block p-6'>
        <img className='h-32 w-32 rounded-full mb-3 ml-20 ' src={props.photo} alt="" />
      <h1 className='text-3xl '>{props.name}</h1>
      <h1>{props.city}, {props.age}</h1>
      <button>{props.profession}</button>
    </div>
  )

}
Card.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}



export default Card;
