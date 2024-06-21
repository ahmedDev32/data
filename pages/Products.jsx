import { ProductsData } from '@/Models/utilityfunction';
import ProductsCards from '@/components/ProductsCards';
import Footer from '@/components/footer';
import { CiMenuKebab } from "react-icons/ci";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FiChevronDown } from 'react-icons/fi'; // FiChevronDown is the down arrow icon from Feather Icons
import { useRouter } from 'next/router';
import VerticalMenu from '@/components/VerticalMenu';


const Products = ({product}) => {
  let router = useRouter()
let [ProData,SetProData] = useState([])
let [search,setSearch] = useState("")
let [q,setqs] = useState()
let [Down,SetDown] = useState(false)
  useEffect(()=>{
    let query = router.query.p
    console.log(query);
  let getdata = async()=>{
   let data = await ProductsData()
   SetProData(data.data.parsePro)
   return 
  }
  getdata()
 setqs(query)
  },[router.query])
  let ChangeProduct_Content = async(data) =>{
    let filterCat = product.filter(items => items.category === data)
    SetProData(filterCat)
    console.log(filterCat);
  }

  let QueryChane = async(data) =>{
    let Searchdata = product.filter(item => item.name.toLowerCase().includes(data.toLowerCase().trim()))
    SetProData(Searchdata)
  }

  let HandleChange = async(data) =>{
    let Searchdata = product.filter(item => item.name.toLowerCase().includes(data.toLowerCase().trim()))
    SetProData(Searchdata)
  }

  let [Open,isOpen] = useState(false)
  let [filter,SetFilter] = useState("")
  let newSet = new Set()
  for (let Data in ProData){
    if(!newSet.has(ProData[Data].category)){
      newSet.add(ProData[Data].category)
    }
  }
  console.log(newSet)
  return (
    <>
         <section className="relative">
        <img 
          src="/images/products.jpg" 
          alt="About Us Background" 
          className="w-full h-200"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-5xl font-bold text-white">Our Products</h2>
        </div>
      </section>
    <div className="h-screen">
     <div className="my-8 px-2">
     <div className="max-w-lg mx-auto">
      <div className="flex text-center">
        <div className="relative w-full">
          <input
            type="search"
            
            id="search-dropdown"
            className="block p-3 w-full z-20 text-lg text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50   border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search For Product...."
            value={search}
            onChange = {(e)=>{
              setSearch(e.target.value)
            }}
            required
          />
          <button
            type="submit"
            onClick={()=>{
              HandleChange(search)
            }}
            className="absolute top-0 end-0 p-3 px-4 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-gray-800"
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
    <div className="my-7 bg-gray-50 p-1">
      <div className="flex justify-between px-6">
        <h5 className="text-sm text-dark">
          Check Products
        </h5>
        <h5 className="text-sm" >
          <button className="border-none focus:border-none flex text-center" onClick={()=>{
          isOpen(!Open)
        }}>
            Filter By Category <span><FiChevronDown className='mt-1.5' /></span>
          </button>
        </h5>
      </div>
    </div>
    
     </div>
     {Open && (
        <div id="dropdown" className="z-10 w-56  -mt-6 p-3 bg-white absolute right-0 rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            {[
"Eyelash Tweezers", "Paper Coated Tweezers", "Fiber Tip Tweezers",
      "Cuticle Nipper", "Nail Pincher", "Nail Pusher",
      "Manicure Pedicure Kits", "Shaving kits", "Shaving Bowls & Brush","Needle Holder",
      "Mouth Mirrors", "Dental Curettes", "Eyelash Applicators",
      "Eyelash & Eyebrow Scissors", "Mirrors for Eyelash Extensions",
      "Eyebrow Tweezers", "Lash Lifting Tools", "Packaging",
      "Hair Cutting Scissors", "Thinning Scissors", "Double Edge Safety Razor","Retractors","Diagnostics",
      "Shaving Razors", "Finger Razors", "Eyelash Applicators" , "ORTHOPEDIC INSTRUMENTS" , "Scissors", "Dental Instruments","Cardiovascular", "Gynecology"
            ].map((data) => (
              <li key={data} className="flex items-center">
                <input
                  id={data}
                  type="checkbox"
                  value=""
                  checked = {filter === data}
                  onChange={(e)=>{
                    SetFilter(data)
                    ChangeProduct_Content(data)
                  }}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />

                <label htmlFor={data} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {data}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      {
       ProData && ProData.length === 0 && <h1 className="text-center font-bold text-3xl">
        No Product Found For {filter}
       </h1> 
      }
{
 ProData && ProData.length === 0 && <h1 className="text-center text-3xl">No Product Found For {q}
</h1>
}
      <div className=" flex  px-1">
        <div className="mb-5 z-50 ">
         <VerticalMenu />
        </div>
        <div className=" flex justify-center flex-wrap w-full m-4 ">
        {
          q==="All" ?ProData && ProData.map((data,index)=>{
            return <ProductsCards className="mx-2" key={index} data={data}/>
          }) :
          ProData && ProData.filter(data => data.category===q).map((data,index)=>{
            return <ProductsCards className="mx-2" key={index} data={data}/>
          })
        }
        </div>
        
      </div>
      <Footer/>
     
    </div>
    </>
  )
}


export const getServerSideProps = async (context) => {

  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_HOST+"/api/Products") 
    const product = response.data.parsePro;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
};

export default Products