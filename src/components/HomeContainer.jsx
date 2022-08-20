import React from "react";

import HeroBg from "../img/heroBg.png";
import mainImg from '../img/cookingpng.png'
import "../styles/style.css"
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className="mt-20 text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Taste Ghar k khanay Jesa Chahiye
        </p>
        <p class=" leading-relaxed">Umdah khana brings Hygenic Quality Home food at your Door step with
          fresh made meal for you.For your better cooked food we takes pre-order maximum which is 24 hours
          before you can give order to us.We are conected with different Social Media platforms Mostly
          present on <u><i><a target="_blank"
            href="https://www.facebook.com/umdahkhanay">Facebook</a></i></u> and <u><i><a
              target="_blank" href="https://www.instagram.com/umdahkhanay">Instagram </a></i></u> .
          You also submit your pre-order on Whatsapp and do check it out.
        </p>
        <button
          type="button"
          className="button bg-main text-color-primary text-primary w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Get a Quote
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-700 w-full lg:w-auto lg:h-700"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute lg:-bottom-44 lg:left-36 flex items-center justify-center lg:px-32 py-4 gap-2 flex-wrap">
        <img
          src={mainImg}
          className=" ml-auto h-700 w-full lg:w-650 lg:h-530"
          alt="main"
        />
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
