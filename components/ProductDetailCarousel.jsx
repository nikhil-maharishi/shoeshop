import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ProductDetailCarousel = ({image}) => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
   infiniteLoop={true}
   showIndicators={false}
   showStatus={false}
   thumbWidth={60}
   className="productCarousel"
    
>
  
<img src={image}/>
<img src={image}/>
<img src={image}/>
<img src={image}/>
<img src="/p5.png"/>
<img src="/p6.png"/>
<img src="/p7.png"/>
        
      
</Carousel>
</div>
  )
}

export default ProductDetailCarousel