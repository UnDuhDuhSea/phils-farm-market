import FieldImg from '../../imgs/IMG_7033.jpeg'
import StrawberryImg from '../../imgs/IMG_7247.jpeg'
import MarionBerryImg from '../../imgs/IMG_7420.jpeg'
import PhilsSignImg from '../../imgs/IMG_8127.jpeg'
import MtnImg from '../../imgs/IMG_7376.jpeg'
import PumpkingImg from '../../imgs/IMG_8578.png'
import Facebook from '../../imgs/facebook.png'
import Instagram from '../../imgs/instagram.png'
import Yelp from '../../imgs/yelp.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"

export const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
    return (
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4" data-aos="fade-left">Follow us on Facebook/Instagram or write a review on Yelp!</h1>
      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0 m-5" data-aos="fade-in">
      <a href="https://www.facebook.com/philsfarmmarket/">
        <img src={Facebook} alt="facebook icon"></img>
        </a>
      </div>
      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0 m-5" data-aos="fade-in">
      <a href="https://www.instagram.com/phils_farm_market/?hl=en">
      <img src={Instagram} alt="Instagram icon"></img> 
      </a> 
      </div>
      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0 m-5" data-aos="fade-in">
      <a href="https://www.yelp.com/biz/phils-pumpkin-patch-sherwood">
      <img src={Yelp} alt="Yelp icon"></img>
      </a>
      </div>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2" data-aos="fade-right">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={FieldImg}/>
        </div>
        <div className="md:p-2 p-1 w-1/2" data-aos="fade-in">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={StrawberryImg} />
        </div>
        <div className="md:p-2 p-1 w-full" data-aos="fade-right">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={MarionBerryImg} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full" data-aos="fade-left">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={PhilsSignImg} />
        </div>
        <div className="md:p-2 p-1 w-1/2" data-aos="fade-in">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={MtnImg} />
        </div>
        <div className="md:p-2 p-1 w-1/2" data-aos="fade-left">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={PumpkingImg} />
        </div>
      </div>
    </div>
  </div>
</section>

    );
}

export default Gallery;
