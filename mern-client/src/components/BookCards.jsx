import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay"

import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";

const BookCards = ({ headLine, books }) => {
  return (
    <div>
      <div className="my-16 px-4 lg:px-24">
        <h2 className="text-2xl text-center font-medium text-black my-5">
          {headLine}
        </h2>
        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
              
         }}
            
            loop={true}
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper w-full h-full"
          >
            {books.map((book) => (
              <SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`}>
                  <div className="relative">
                    <img src={book.imageURL} />
                    <div className="absolute top-3 right-3 bg-red-600 hover:bg-black p-2 rounded">
                        <AiOutlineShopping  className="w-4 h-4 text-white"/>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3 className="limit1-text">{book.bookTitle}</h3>
                      <p>{book.authorName}</p>
                    </div>
                    <div className="">
                      {/* <p>20.000vnd</p> */}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BookCards;
