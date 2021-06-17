import Strawberry from "../../imgs/strawberry (1).png";
import Blueberry from "../../imgs/blueberries.png";
import Blackberry from "../../imgs/blackberry.png";
import Pumpkin from "../../imgs/pumpkin (1).png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Berries = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <a name="Berries"></a>
        <div
          className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-right"
        >
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            P
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg> */}
              <img src={Strawberry} alt="strawberry"></img>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                JUNE
              </h2>
              <p className="leading-relaxed">
                We offer Strawberries (Hood, Mary Peak, Albiens), Rasperries
                (Cascades), Marion Berries, and Boysen Berries in the month of
                June.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-left"
        >
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            H
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg> */}
              <img src={Blackberry} alt="blueberries"></img>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                JULY
              </h2>
              <p className="leading-relaxed">
                Rasberries (Cascades), Marion Berries, Boysen Berries,
                Blueberries, Blackberries, Summer Squash, Cucumbers, Corn, and
                Tomatoes in July.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-right"
        >
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            I
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
            <circle cx={12} cy={5} r={3} />
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
          </svg> */}
              <img src={Blueberry} alt="blueberries"></img>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                AUGUST
              </h2>
              <p className="leading-relaxed">
                Blueberries, Peaches, Summer Squash, Corn, and Tomatoes in the
                month of August.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto"
          data-aos="fade-left"
        >
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            L
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center">
              {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg> */}
              <img src={Pumpkin} alt="pumpkin"></img>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                SEPTEMBER - OCTOBER
              </h2>
              <p className="leading-relaxed">
                Blueberries, Peaches, Apples, Summer Squash, Corn, Tomatoes,
                Winter Squash, and last but not least... Pumpkins!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
