import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';

const ProductsCards = ({data}) => {
  let router = useRouter()
    const conversionRate = 0.0062; // This is an example rate. Update with the current rate.

// const convertToUSD = (price) => {
//   // Remove any spaces and check if the price includes a dollar sign
//   if (price.includes('$')) {
//     // Price is already in USD, return as is
//     return price;
//   } else {
//     // Convert PKR to USD
//     const numericPrice = parseFloat(price.replace(/,/g, '')); // Remove commas if any
//     const convertedPrice = numericPrice * conversionRate;
//     return `$${convertedPrice.toFixed(2)}`; // Format to 2 decimal places
//   }
// };
//     const processedPrice = convertToUSD(data.price);
  return (
    <div className=" mb-3 px-2 mx-1  max-w-80 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
      <div className="">
      <Link href={process.env.NEXT_PUBLIC_HOST+"/productsDetails/Id="+data.name}>
        <img className="p-3 w-80 h-60 m-auto rounded-3xl" src={data.imageUrl} alt="product image" />
    </Link>
    <span className="text-pretty mb-2 mx-2">
      {data.category}
    </span>
    <div className="px-2 pb-3">
        <Link href={process.env.NEXT_PUBLIC_HOST+"/productsDetails/Id="+data.name}>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{data.name.slice(0,15)}....</h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-2">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                {/* Repeat the star SVGs as needed */}
            </div>
            <span className="bg-gray-100 text-dark text-xs font-semibold px-2.5 py-0.5 rounded  dark:text-blue-800 ms-3">{data.rating}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-900 dark:text-white">{data.price}</span>
            <span onClick={()=>{
              router.push(`${process.env.NEXT_PUBLIC_HOST+"/productsDetails/Id="+data.name}`)
            }} className='px-4 cursor-pointer text-white rounded-xl py-1 bg-gray-800 border'>
              Visit
            </span>
        </div>
    </div>
      </div>
    
</div>

  )
}

export default ProductsCards