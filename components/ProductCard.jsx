import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

const ProductCard = ({src,title,price, rating,id}) => {
   
  return (
     <Link href={`/product/[id]`} as={`/product/${id}`} className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
     <div className='w-[200px] h-[200px]'><img className='w-full h-[200px] rounded-lg ' src={src} alt='Product Image' /></div>
     <div className="p-4 text-black[0.9]">
         <h2 className="text-lg font-medium">{title}</h2>
         <div className="flex items-center">
             <p className="mr-2 text-lg font-semibold">${price}</p>
             <p className="text-base font-medium line-through"></p>
             <p className="ml-auto text-base font-medium text-green-500">Rating-{rating}</p>
         </div>
     </div>
 </Link>
  )
}

export default ProductCard