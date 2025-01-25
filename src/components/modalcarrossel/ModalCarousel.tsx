import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import banner from '../../assets/images/banner-header.png'
import banner2 from '../../assets/images/banner-header2.png'


const ModalCarousel = () => {
 
  const banners = [
      {
          id: 1,
          url: banner
      },
      {
          id: 2,
          url: banner2
      },
      {
          id: 3,
          url: banner
      },
  
  ]
  
  
  return (
    <Carousel plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]} className="h-full">
        <CarouselContent>
      {banners.map((banner) => (
        <CarouselItem key={banner.id}> 
          <img src={banner.url} alt={`Banner ${banner.id}`}  className="w-full h-full object-cover"/>
        </CarouselItem>
      ))}
       </CarouselContent>
      
    </Carousel>
  );
};

export default ModalCarousel