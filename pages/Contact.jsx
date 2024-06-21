import { SendEmail } from '@/Models/utilityfunction';
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const ContactUs = () => {
    let router = useRouter()
    let [ContactMsg,SetContactMsg] = useState({
        name : "",
        phoneNo : "",
        email : "",
        description:""
 
    })

    let HandleChange = async(e)=>{
        let {name,value} = e.target;
        SetContactMsg({
            ...ContactMsg,
            [name] : value
        })
    }

    let SubmitForm = async(e)=>{
     e.preventDefault()
     let response = await SendEmail(ContactMsg)
     if (response && response.data && response.data.success) {
        alert(response.data.msg);
        router.push("/")
      } else if (response && response.status === 409) {
        alert(response.data.msg);
      } else {
        alert('An error occurred. Please try again.');
      }
      SetContactMsg({
        name : "",
        phoneNo : "",
        email : "",
        description:""
      })
    }

  return (
    <section className="text-gray-600 body-font relative">
      <form onSubmit={SubmitForm} >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Contact Us To Make Your Custom Designs
            </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" value={ContactMsg.name} onChange={HandleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" value={ContactMsg.email} onChange={HandleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base
                 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 required
                 />
              </div>
              
            </div>
            <div className="p-2 w-1/2 m-auto">
              <div className="relative">
                <label htmlFor="phoneNo" className="leading-7 text-sm text-gray-600">Phone Nmber</label>
                <input type="phoneNo" id="phoneNo" name="phoneNo" value={ContactMsg.phoneNo} onChange={HandleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base
                 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 required
                 />
              </div>
              
            </div>
            
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Describe Your Design</label>
                <textarea id="description" name="description" value={ContactMsg.description} onChange={HandleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Send Message</button>
            </div>
            
          </div>
        </div>
      </div>
      </form>
      <Footer/>
    </section>
  );
}

export default ContactUs;
