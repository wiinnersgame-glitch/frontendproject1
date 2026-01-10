import React from "react";
import { FaRocket, FaChartLine, FaGraduationCap, FaStar } from "react-icons/fa";
import Navbarx from "./components/Navbarx";
import Herosection from "./components/Herosection";
import Join from "./components/Join";
import Wealth from "./components/Wealth";
import Algo from "./components/Algo";
import Learning from "./components/Learning";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Partner from "./components/Partner";

import telegram from "./components/photo/telegram.png"
import youtubes from "./components/photo/youtube.png"
import whatsapp from "./components/photo/social.png"
import instagrams from "./components/photo/twitter.png"
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 ">

      <div className="flex justify-end sticky top-[50%] lg:top-1/3  z-50">
        <div className=" absolute   z-30 flex flex-col gap-5 md:gap-5 rounded-l-xl textblurx bg-secondary py-4 px-2 md:p-5 ">
          <img className="w-[4vh] md:w-[2vw] " src={instagrams} />
          <img className="w-[4vh] md:w-[2vw] " src={telegram} />
          <img className="w-[4vh] md:w-[2vw] " src={whatsapp} />
          <img className="w-[4vh] md:w-[2vw] " src={youtubes} />
        </div>

        <div className=" absolute   z-30 flex flex-col gap-5 md:gap-5 rounded-l-xl textblurx bg-secondary py-4 px-2 md:p-5 ">
          <img className="w-[4vh] md:w-[2vw] " src={instagrams} />
          <img className="w-[4vh] md:w-[2vw] " src={telegram} />
          <img className="w-[4vh] md:w-[2vw] " src={whatsapp} />
          <img className="w-[4vh] md:w-[2vw] " src={youtubes} />
        </div>

        <div className=" absolute   z-30 flex flex-col gap-5 md:gap-5 rounded-l-xl  bg-secondary py-4 px-2 md:p-5 ">
          <a href="https://x.com/wiinnersgame"> <img className="w-[4vh] md:w-[2vw] " src={instagrams} /></a>
          <a href=""><img className="w-[4vh] md:w-[2vw] " src={telegram} /></a>
          <a href="https://wa.me/7253900555"><img className="w-[4vh] md:w-[2vw] " src={whatsapp} /></a>
          <a href=""><img className="w-[4vh] md:w-[2vw] " src={youtubes} /></a>
        </div>
      </div>
      {/* Navbar 
      <Navbarx /> */}

      {/* Hero Section */}
      <Herosection />
      <Aboutus />
      {/* Why Join Us */}
      <Join />

      {/* Wealth Creation */}
      {/* <Wealth /> */}

      {/* Algo Trading */}
      <Algo />

      {/* Learning */}
      {/* <Learning /> */}

      {/* Reviews */}
      <Review />

      {/* Partners */}
      {/* <Partner /> */}

      {/* <Footer /> */}
    </div>
  );
}


export default App;
