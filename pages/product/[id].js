import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import RelatedProducts from "@/components/RelatedProducts";
import axios from "axios";
import { useRouter } from "next/router";
import { data } from "autoprefixer";

const ProductDetail = ({product}) => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* leftColumn Starts */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailCarousel image={product.image} />
          </div>
          {/* rightColumn Starts */}
          <div className="flex-[1] py-3">
            {/* productTitle */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {product.title}
            </div>
            {/* productSubTitle */}
            <div className="text-lg font-semibold mb-5">SubTitle</div>
            {/* productPrice */}
            <div className="flex items-center">${product.price}</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* product size range start */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 7
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}

              <div className="text-red-600 mt-1">
                Size selection is required
              </div>

              {/* SHOW ERROR END */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>{product.description}</ReactMarkdown>
                            </div>
                        </div>
            </div>
            
          </div>
        </div>

        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export async function getServerSideProps({params:{id}}){
    let result = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await result.json()
    console.log(data);
  
  return {
    props :{product:data}
  }
}

export default ProductDetail;
