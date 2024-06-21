import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AddToCart, ProductsData, getSingleProduct } from '@/Models/utilityfunction'
import Footer from '@/components/footer'

const ProductsDetails = () => {
    let router = useRouter()
    let {Id} = router.query
    let [product,SetProduct] = useState(null)
    useEffect(()=>{
      let GetData = async(Id)=>{
        if(Id !== undefined && Id){
          let data = await getSingleProduct(Id)
          SetProduct(data.data.data)
        }
        
      }
      GetData(Id)
    },[Id])
    const conversionRate = 0.0062; // This is an example rate. Update with the current rate.

const convertToUSD = (price) => {
  // Remove any spaces and check if the price includes a dollar sign
  if (price.includes('$')) {
    // Price is already in USD, return as is
    return price;
  } else {
    // Convert PKR to USD
    const numericPrice = parseFloat(price.replace(/,/g, '')); // Remove commas if any
    const convertedPrice = numericPrice * conversionRate;
    return `$${convertedPrice.toFixed(2)}`; // Format to 2 decimal places
  }
};
let processedPrice;
if(product && product.price){
   processedPrice = convertToUSD(product.price);

}

let Send_To_Cart = ({id,name,imageUrl,price,category})=>{
  AddToCart(id,name,20,imageUrl,price,category)
}

let Buy_Now = ({id,name,imageUrl,price,category}) =>{
    localStorage.clear("Cart")
    const conversionRate = 0.0062; // This is an example rate. Update with the current rate.

    const convertToUSD = (price) => {
        // Remove any spaces and check if the price includes a dollar sign
        if (price.includes('$')) {
          // Price is already in USD, return as is
          return price;
        } else {
          // Convert PKR to USD
          const numericPrice = parseFloat(price.replace(/,/g, '')); // Remove commas if any
          const convertedPrice = numericPrice * conversionRate;
          return `$${convertedPrice.toFixed(2)}`; // Format to 2 decimal places
        }
      };
       let  processedPrice = convertToUSD(price);
    let CartData = {
      id, name,qty:20,image:imageUrl, processedPrice, category
  }
  let data = [CartData]
  localStorage.setItem("Cart",JSON.stringify(data))
  router.push("/CheckOut")

}

  return (
    <>
   
    {
      product && (
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className=" w-80 h-auto"
              src={product.imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest"> {product.category} </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {
                   Array.from({ length: product.rating }, (_, index) => (
                    <svg
                    key={`filled-${index}`}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))
                  }
                 
                 
                  {
                   Array.from({ length: 5 - product.rating }, (_, index) => (
                    <svg
                      key={`unfilled-${index}`}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))
                  }
                  <span className="text-gray-600 ml-3">{product.rating} ratings</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
              {product.description === "None" ? (
                `Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric.
                Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.`
              ) : (
                product.description
              )}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {
                  product.category === "Clothing" ? <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div> : null
                }
                {
                  product.category === "Clothing" ? <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div> : null
                }
              </div>
              <span className="title-font font-medium text-2xl text-gray-900 flex">
                  <strong className="mx2">
                    MOQ : 30
                  </strong>
                  </span>
                <span className="title-font font-medium text-2xl text-gray-900 flex">
                  <strong className="mx2">
                    Price : 
                  </strong>
                  {processedPrice}
                  </span>
                  <hr />
              <div className="flex my-4 mx-5">
                <button onClick={()=>{
                  Send_To_Cart(product)
                }} className="flex rounded-md ml-auto text-dark bg-gray-50 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 ">Add To Cart</button>
                <button onClick={()=>{
                  Buy_Now(product)
                }} className="rounded-md bg-gray-900 p-0 border-0 inline-flex items-center justify-center text-white px-6 py-2 ml-4">
                  Send Inquiry 
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }


<Footer/>
    </>
  )
}

export default ProductsDetails