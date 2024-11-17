import React from 'react'
import { useForm } from "react-hook-form";
const Form = ({formSubmitData}) => {
  const {register,handleSubmit,reset} = useForm();
  const handleFormSubmit = (data)=>{
    formSubmitData(data);
    reset();
  };
  return (
    <div>
      <form className='flex gap-5' onSubmit={handleSubmit(handleFormSubmit)}>
          <input className='px-2 py-1  text-base rounded-md outline-none' {...register("name")}  type="text" placeholder='name' />
          <input className='px-2 py-1  text-base rounded-md outline-none' {...register("email")}  type="text" placeholder='email' />
          <input className='px-2 py-1  text-base rounded-md outline-none' {...register("image")}  type="text" placeholder='image-url' />
          <input className='py-1 px-2 bg-blue-500 rounded-md text-white font-semibold' type="submit" />
      </form>
    </div>
  )
}

export default Form
