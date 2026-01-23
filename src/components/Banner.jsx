import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80"
              alt="Dog adoption"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                Find Your Furry Friend Today!
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
              alt="Adopt pets"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                Adopt, Don’t Shop — Give a Pet a Home.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/159/522/large_2x/pet-care-concept-various-pet-accessories-and-tools-on-blue-background-flat-lay-photo.jpg"
              alt="Happy pets"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                Because Every Pet Deserves Love and Care.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 (Extra) */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://t4.ftcdn.net/jpg/13/94/51/17/360_F_1394511705_kl1T3a1LCyuHE3vTPnnG7lrjYWqkLAAs.jpg"
              alt="Happy pet owner"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                Bringing Pets & People Together ❤️
              </h2>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Banner;
