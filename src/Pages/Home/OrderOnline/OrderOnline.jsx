import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const OrderOnline = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <SectionTitle
        heading="ORDER ONLINE"
        subheading="From 11:00am to 10:00pm"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide className="select-none">
          <img src={slider1} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider2} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider3} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider4} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider5} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider1} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider2} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider3} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="select-none">
          <img src={slider5} alt="" />
          <h3 className="text-2xl font-bold text-white uppercase  z-20 -mt-16 text-center">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderOnline;
