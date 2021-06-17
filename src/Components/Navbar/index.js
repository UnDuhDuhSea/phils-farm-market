import Berries from "../../imgs/berries (1).png"
import PhilsTitle from "../../imgs/philsTitle.png"
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"

export const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
    return ( 
        <header className="text-gray-600 body-font bg-red-400">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <img src={PhilsTitle} alt="Berries"></img> */}
      <h1>Phils Farm Market</h1>
      {/* <span className="ml-3 text-xl">Phils Farm Market</span> */}
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href="#Footer">Hours</a>
      <a className="mr-5 hover:text-gray-900" href="#Footer">Location</a>
      <a className="mr-5 hover:text-gray-900" href="#Berries">In Season</a>
      <a className="mr-5 hover:text-gray-900" href="#Footer">Contacts Us</a>
    </nav>
    <a href="#Berries"><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href="#Berries" data-aos="fade-right">Whats in Season?
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button></a>
  </div>
</header>

    );
};
