import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {
  let [users,setUsers] = useState([]);
  let formSubmitData=(data)=>{
    setUsers([...users,data]);
  }
  let removeUser=(id)=>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center flex-col gap-10'>
        <Cards removeUser={removeUser} users={users} />
        <Form formSubmitData={formSubmitData} />
    </div>
  )
}

export default App
