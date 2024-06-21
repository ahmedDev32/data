import React, { useEffect, useState } from 'react'
import { IoBookSharp, IoBasketballSharp, IoCarSharp, IoFastFoodSharp, IoFitnessSharp, IoGameControllerSharp, IoHeartSharp, IoHomeSharp, IoMusicalNotesSharp, IoShirtSharp, IoHammerSharp, IoMedicalSharp } from 'react-icons/io5'; // Adjusted icons imported
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import Footer from '@/components/footer'
import { useRouter } from 'next/router'
import CircleIon from '@/components/CircleIon';
import { ProductsData } from '@/Models/utilityfunction';
import ProductsCards from '@/components/ProductsCards';
import Slider from "../components/Slider"
const Index = () => {
  let router = useRouter()
  const iconArr = [
    { Icon: IoBookSharp, Text: "Books" },
    { Icon: IoBasketballSharp, Text: "Sports" },
    { Icon: IoCarSharp, Text: "Automobiles" },
    { Icon: IoFastFoodSharp, Text: "Food" },
    { Icon: IoFitnessSharp, Text: "Fitness" },
    { Icon: IoGameControllerSharp, Text: "Gaming" },
    { Icon: IoHeartSharp, Text: "Health" },
    { Icon: IoHomeSharp, Text: "Home" },
    { Icon: IoMusicalNotesSharp, Text: "Music" },
    { Icon: IoMedicalSharp, Text: "Surgical" },
    { Icon: IoShirtSharp, Text: "Clothes" }
  ];
  let [products,setproducts] = useState([])

  // fetch products data
  useEffect(()=>{
    let getdata = async()=>{
      let data = await ProductsData()
      setproducts(data.data.parsePro)
    }
    getdata()
   
  },[])

   let bsCards = [
    {
      image : "/images/s8.JPG",
      category : "Surgical",
      desc : "Shop THe Best Surgical Instruments"
    },
    {
      image : "/images/s9.JPG",
      category : "Clothing",
      desc : "Shop The Best Brands"
    },{
      image : "/images/s7.JPG",
      category : "Sports",
      desc : "Shop The Best Products"
    }
   ]
  return (
    <>
    <div className="my-2 mt-2 h-screen">
    <div 
  className="m-4  flex justify-center  rounded-xl bg-cover  bg-center"
>
  <Slider/>
</div>

<div className="flex justify-center items-center dark:bg-white relative">
    <div className="absolute inset-0 w-full h-full">
        <img src="/images/i1.jpg" alt="Background" className="object-cover w-full h-full" />
    </div>
    <div className="p-12 relative z-10">
        <div className="flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left lg:flex-nowrap md:p-8">
            <div className="flex-1 w-full mb-5 md:mb-0 md:w-1/2">
                <h3 className="mb-2 text-2xl font-bold text-white">Build Your Custom Design</h3>
                <p className="text-white">Elevate your brand with our bespoke product designs, tailored to reflect your unique identity.</p>
                <p className="text-white font-bold mt-3">If you want any custom products, please let us know.</p>
            </div>
            <div className="w-full md:w-auto lg:max-w-3xl -mt-3">
                <div className="flex flex-col sm:flex-row">
                    <button onClick={() => { router.push("/Contact") }} type="submit" className="w-full px-6 py-4 mt-5 text-white text-lg bg-blue-600 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap">Contact Us</button>
                </div>
            </div>
        </div>
    </div>
</div>


    <div className="mx-14 mb-5">
      <div className="flex  flex-col">
        <h1 className="text-2xl text-center mb-2 font-bold text-dark">
          Our Top Category
        </h1>
        <div className="mt-5 mb-3 flex flex-wrap justify-center">
          {
            iconArr.map((Icon,Index)=>{
              return <CircleIon  key={Index} Icon={Icon.Icon} Text={Icon.Text}/>
            })
          }
        </div>
      </div>
    </div>
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src="/images/s5.png"
              alt="Banner image"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 mx-auto">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              On more than 50 products upto 10% Off 
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Dont hesitate to buy our products, we have the best quality products in the market.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 " />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap my-4 justify-between">
  {
    bsCards.map((data)=>{
            return(
              <div className="mx-auto flex flex-col" key={data.category}>
              <img src={data.image} className='w-96 h-80 rounded-lg' alt="" />
              <div className="flex flex-col justify-center items-center text-center my-3">
                <span className=" font-bold text-2xl text-bold">Explore Our Unique Designs</span>
                <span className='font-semibold'>
                  {data.desc}
                </span>
              </div>
            </div>
            )
    })
  }
 

</div>

    <div className="mt-5 flex flex-col">
      <h1 className="text-center flex justify-center font-bold text-2xl">
        Feature Products
     </h1>
     <div className="mt-4 mx-3">
      <div className="flex flex-wrap justify-around">
       {
        products.filter(data => data.featured).map((data,index)=>{
          return <ProductsCards key={index} data={data}/>
        })
       }
      </div>
     </div>
    </div>
    <div className="flex  justify-center items-center   ">
    <div className="p-12">
        <div
            className="flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700">
            <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-black">Subscribe to Newsletter</h3>
                <p className="text- dark:text-gray-800 ">Provide your email to get email notification when we launch
                    new
                    products or publish new articles
                </p>
            </div>
            <div className="w-full  md:w-auto lg:max-w-3xl -mt-3">
                <form noValidate="">
                    <input type="hidden" name="tags" value="earlyaccess"/>
                    <div className="flex flex-col sm:flex-row">
                        <input type="email" id="email" name="email" placeholder="Enter your email address" className="flex-1 px-3 py-2 placeholder-gray-800 border border-gray-800 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-800 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-300 dark:focus:ring-gray-200 dark:focus:border-gray-100"/>
                        <button type="submit" className="w-full px-6 py-4 mt-5 text-white text-lg bg-white rounded-md sm:mt-0 sm:w-auto whitespace-nowrap dark:bg-sky-400"> Subscribe </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<Footer/>
    </div>
    </>

  )
}

export default Index