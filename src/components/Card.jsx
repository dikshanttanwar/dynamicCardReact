import React from 'react'

const Card = ({user,removeUser,id}) => {
  return (
    <>
            <div className='w-48 bg-white rounded-md p-3 flex gap-1 justify-evenly   flex-col items-center'>
                <div className='w-16 h-16 bg-zinc-400 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover ' src={user.image} alt="" />
                </div>
                <h1 className='text-xl font-semibold'>{user.name}</h1>
                <h1 className='opacity-45 text-sm font-semibold'>{user.email}</h1>
                <p className='text-center text-xs leading-4 tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, consequatur?</p>
                <button onClick={()=>removeUser(id)} className='px-2 py-1 bg-red-500 text-white font-semibold rounded-lg text-sm'>Remove It</button>
            </div>
    </>
  )
}

export default Card
