import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const RelatedProducts = ({ products }) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setData(response.data));
    } catch (error) {
      console.error(error);
    }
    console.log(Data);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {Data?.map((product) => (
            <ProductCard
              key={product?.id}
              src={product?.image}
              title={product?.title}
              price={product?.price}
              rating={product?.rating.rate}
            />
          ))}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
