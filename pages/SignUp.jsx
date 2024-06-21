import { SignUp } from '@/Models/utilityfunction'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const SingUp = () => {
  let router = useRouter()
  let [user,SetUser] = useState({
    name : "",
    email : "",
    password : ""
  })

  let handleChange = async(e) => {
    let {name,value} = e.target;
    SetUser({
      ...user,
       [name] : value
    })
  }

  let HandleSubmit = async(e) =>{
         e.preventDefault()
           const response = await SignUp(user,"SignUp");
            
         if (response && response.data && response.data.success) {
           alert(response.data.msg);
           router.push("/Login")
         } else if (response && response.status === 409) {
           alert(response.data.msg);
         } else {
           alert('An error occurred. Please try again.');
         }
         SetUser({
          name : "",
          email : "",
          password : ""
         })
  }

  return (
    <>
    <div className="h-screen">
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={HandleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="text" name="name" value={user.name} id="text" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input type="email" name="email" value={user.email} id="password" onChange={handleChange} placeholder="Enter Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              
              <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link href="/Login" className="font-medium text-gray-600 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default SingUp