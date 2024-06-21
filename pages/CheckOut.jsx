import { GetSubtotal, PlaceOrder } from '@/Models/utilityfunction'
import ChangePrice from '@/components/ChangePrice'
import Footer from '@/components/footer'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import { useRouter } from 'next/router'

const CheckOut = () => {
    let [Subtotal,SetSubtotal] = useState(0)
    let [CartData,SetCartData] = useState([])
    let router = useRouter()
    useEffect(()=>{
        let value = GetSubtotal()
        SetSubtotal(value)
        let getData = JSON.parse(localStorage.getItem("Cart"))
        if(getData){
            if(!Array.isArray(getData)){
                SetCartData([getData])
            }else{
                SetCartData(getData)
            }
        }
    },[])

    let [CheckOut,SetCheckOut] = useState({
        email : "",
        name : "",
        phoneNo : "",
        Address:"",
        State:"",
        zip : "",

    })

    let HandleChange = async(e)  => {
        let {name,value} = e.target
        SetCheckOut({
            ...CheckOut,
            [name] : value
        })
    }

    let HandleSubmit = async(e) =>{
        e.preventDefault()
        console.log(CheckOut);
        let data={
            CheckOut,
            products:CartData,
            Subtotal
        }
        console.log(data);
       let response = await PlaceOrder(data)
       console.log(response);      
       if (response && response.data && response.data.success) {
        alert(response.data.msg);
        localStorage.clear("Cart")
        router.push("/")
      } else if (response && response.status === 409) {
        alert(response.data.msg);
      } else {
        alert('An error occurred. Please try again.');
      }
      SetCheckOut({
        email : "",
        name : "",
        phoneNo : "",
        Address:"",
        State:"",
        zip : "",
      })
       
    }

  return (
    <>
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" className="text-2xl font-bold text-gray-800">Azibella</a>
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
          ></a>
          <span className="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Place Order</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      
      </ul>
    </div>
  </div>
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-8 pt-8">
    <p className="text-xl font-medium">Order Details</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        {
            CartData && (
             CartData.map((item,index)=>{
                return(
                    <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img className=" justify-center h-24 w-32 m-auto rounded-md border object-cover object-center" src={item.image} alt={item.image} />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold">{item.name}</span>
                      <span className="float-right text-gray-400">{item.category}</span>
                      <p className="text-lg flex font-bold">$ <ChangePrice processedPrice={item.processedPrice} qty={item.qty} /></p>
                    </div>
                  </div>
                )
             })
            )
        }
     
    
    </div>

    
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Customer Details</p>
    <p className="text-gray-400">Complete your order by providing your Details.</p>
    <form onSubmit={HandleSubmit} >
    <div className="">
      <label for="email" className="mt-4 mb-2 block text-sm font-medium">Your Email</label>
      <div className="relative">
        <input type="email" id="email" name="email" value={CheckOut.email} onChange={HandleChange} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" required />
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="name" className="mt-4 mb-2 block text-sm font-medium">Your Name</label>
      <div className="relative">
        <input type="text" id="name" name="name" value={CheckOut.name} onChange={HandleChange} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your name" required/>
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>

      <label for="phone" className="mt-4 mb-2 block text-sm font-medium">Your Phone</label>
      <div className="relative">
        <input type="text" id="phone" name="phoneNo" value={CheckOut.phoneNo} onChange={HandleChange} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your Phone Number" required />
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      
      <label for="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="Address" value={CheckOut.Address} onChange={HandleChange} className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" required />
          
        </div>
        <input type="text" name="State" value={CheckOut.State} onChange={HandleChange} className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="State" required/>
        <input type="text" name="zip" value={CheckOut.zip} onChange={HandleChange} className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Zip" required />
      </div>

      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center mb-2 justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">${Subtotal}</p>
        </div>
        <div className="flex items-center mb-2 justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">$0.10</p>
        </div>
      </div>
      {/* <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${(Subtotal)}</p>
      </div> */}
    </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Submit Inquiry</button>
    </form>
  </div>
</div>
<Footer/>

    </>
  )
}

export default CheckOut