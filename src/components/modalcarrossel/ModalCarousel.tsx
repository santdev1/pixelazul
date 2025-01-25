import banners from "../../share/banners";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react";


const ModalCarousel = () => {
   
    const [image, setImage] = useState([])
    useEffect(()=>{
        setImage(banners)
    },[])

  return (
    <Carousel plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]} className="h-full">
        <CarouselContent>
      {image.map((banner) => (
        <CarouselItem key={banner.id}> 
          <img src={banner.url} alt={`Banner ${banner.id}`}  className="w-full h-full object-cover"/>
        </CarouselItem>
      ))}
       </CarouselContent>
      
    </Carousel>
  );
};

export default ModalCarousel