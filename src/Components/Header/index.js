import PhilsFarmPic1 from "../../imgs/IMG_7917.jpeg"
import PhilsIcon from "../../imgs/philsHeroIcon.png"
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"

export const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
    return (
//       <section className="text-gray-600 body-font">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-aos="fade-in">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Fresh and Local
//             <br className="hidden lg:inline-block" />Berries and Produce
//             </h1>
//             <p className="mb-8 leading-relaxed">Phils family has been selling berries in Sherwood, Oregon for over 50 years. About 7 years ago Phil stopped selling berries from his home, and moved to this location.</p>
//           <div className="flex justify-center">
//         <a href="#Berries"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">What's fresh right now?</button></a>
//       </div>
//     </div>
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img className="object-cover object-center rounded" alt="hero" src={PhilsFarmPic1} data-aos="fade-left"/>
//     </div>
//   </div>
// </section>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pt-0">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={PhilsIcon} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Phils Farm Market
        <br className="hidden lg:inline-block" /><span className="text-sm">Sherwood Oregon</span>
      </h1>
      <p className="mb-8 leading-relaxed">Phils family has been selling berries in Sherwood, Oregon for over 50 years. About 7 years ago Phil stopped selling berries from his home, and moved to this location.</p>
    </div>
  </div>
</section>
    );
};
