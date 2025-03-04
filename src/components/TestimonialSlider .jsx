import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    quote: "Missive is more important to me than Slack. It’s a powerful solution to a deep-rooted challenge...",
    name: "Jeremy Cai",
    role: "Founder at Italic",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Missive keeps our communication unified and our team coordinated.",
    name: "David Price",
    role: "Founder at Avenue Systems",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote: "Missive helps our team make sure emails are handled quickly and effortlessly.",
    name: "Sarah Hum",
    role: "Co-Founder at Canny",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    quote: "It just makes things so much easier. I can't imagine working without Missive anymore.",
    name: "John Doe",
    role: "CEO at Startup",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    quote: "Our team productivity has skyrocketed since using Missive!",
    name: "Anna Smith",
    role: "Head of Marketing",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-16">
      {/* Title */}
      <h2
        className="text-4xl font-bold text-gray-900 text-center mb-12"
        style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}
      >
        We Love Building for Small Businesses
      </h2>

      {/* Testimonial Slider */}
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-white shadow-lg rounded-xl p-6 border transition duration-300 hover:shadow-xl flex flex-col justify-between h-[200px]">
                <p className="text-lg text-gray-700 italic mb-4 flex-1">“{testimonial.quote}”</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 flex gap-4 w-full justify-between transform -translate-y-1/2 px-4">
          <button className="swiper-button-prev bg-gray-300 p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-400 transition duration-300"></button>
          <button className="swiper-button-next bg-gray-300 p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-400 transition duration-300"></button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
