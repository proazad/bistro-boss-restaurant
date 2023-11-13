import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import {FaQuoteLeft} from "react-icons/fa"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { HashNavigation, Navigation, Pagination } from "swiper/modules";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [setReviews]);
  return (
    <div className="max-w-5xl mx-auto my-16">
      <SectionTitle
        subheading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <div className="">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review._id} data-hash="slide1">
              <div className="flex flex-col items-center justify-center px-20 text-center my-4">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaQuoteLeft className="text-5xl my-4"/>
                <p className="text-lg mt-4">
                {review.details}
                </p>
                <p className="text-2xl mb-5">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
