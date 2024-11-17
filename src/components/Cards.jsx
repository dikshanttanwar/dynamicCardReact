import React from 'react'
import Card from './Card'
const Cards = ({users,removeUser}) => {
  return (
    <div className='w-[80vw] max-h-96 p-5 overflow-auto rounded-md flex flex-wrap justify-center items-center gap-10'>
      {users.map((item,index)=>{
        return <Card user={item} removeUser={removeUser} id={index} key={index} />
      })}
    </div>
  )
}

export default Cards
