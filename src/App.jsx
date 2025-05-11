import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";

 export default function App() {
  const [show , setShow]= useState(false);
  const { register, handleSubmit , watch } = useForm();
  const name = watch("name");
  const email = watch("email");
  const age = watch("age");
const onsubmit = (data) => {
  console.log(data);
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white shadow-lg rounded-2xl p-10 text-center">
      <h1 className=" relative mb-15 text-blue-700 justify-center underline text-2xl"> React Hook Form</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="relative mb-8">
          <label htmlFor="name">Name: </label>
          <input
          className="border-2 rounded-md pl-3 "
          type="text"
          placeholder="Enter your name"
          {...register("name",{required:'Name is required'})}
          />
          
        </div>
        <div className=" relative mb-8">
          <label htmlFor="email" className="pr-1">Email: </label>
          <input 
          className="border-2 rounded-md pl-3 "
          type="email" 
          placeholder="Enter your email"
          {...register("email",{required:'Email is required'})}
          />
        </div>

         <div className=" relative mb-8">
          <label htmlFor="age" className="pr-3">Age: </label>
          <input 
          className="border-2 rounded-md pl-3 "
          type="number" 
          placeholder="Enter your age"
          {...register("age",{required:'Age is required'})}
          />
        </div>
<button  onClick={() => setShow(true)}  className=" text-lg text-white bg-blue-700 rounded-2xl py-2 px-7 mb-5 hover:bg-blue-600 duration-200 active:bg-blue-700" >Submit</button>
{show && (
  <div className="absolute rounded-2xl top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Form Data</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <button onClick={() => setShow(false)} className="mt-4 text-blue-500 hover:underline">Close</button>
    </div>
  </div>
)}
<p>Your name is : {name}</p><br />
<p>Your email is: {email}</p><br />
<p>Your age is : {age}</p><br />

      </form>
      </div>

    </div>
    
  )
}