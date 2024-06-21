import React from 'react'

const CircleIon = ({Icon,Text}) => {
  return (
   <div className="mx-7 mb-12 w-16 h-16 rounded-full bg-gray-100">
    <div className="flex flex-col">
    <div className="py-3 flex flex-col justify-center pt-5 px-4 text-3xl text-center">
        <Icon/>
        
    </div>
    <span className="text-center mt-2">
            {Text}
        </span>
    </div>
    
   </div>
)
}

export default CircleIon