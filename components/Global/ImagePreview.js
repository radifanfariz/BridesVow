import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import imageLoader from "../../utils/imageLoader";

const ImagePreview = () => {
  // const handleClick = (e, path) => {
  //     e.preventDefault()
  //     switch (path) {
  //         case "/preview/first":
  //             Router.push(path)
  //         default:
  //             Router.push("/")
  //     }
  // }

  const imageData = [
    {
      id: "1",
      name: "mokap",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "2",
      name: "mokap2",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "3",
      name: "mokap3",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "4",
      name: "mokap4",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "5",
      name: "mokap5",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col items-center">
          <div className="flex justify-center xl:max-w-7xl max-w-[90vw] relative">
            <Swiper
              mousewheel={true}
              navigation={true}
              modules={[Navigation, Mousewheel]}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 100,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 100,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: -30,
                },
              }}
              className="mySwiper rounded-[100px] border-4 border-black "
            >
              {imageData.map((itemImage) => {
                return (
                  <SwiperSlide key={itemImage.name}>
                    <div className="xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative ml-8 my-5">
                      <Link href={itemImage.link}>
                        <a target={"_blank"} className="relative">
                          <Image
                            priority={true}
                            className=""
                            layout="fill"
                            src={`${itemImage.src}`}
                            loader={imageLoader}
                            alt="product"
                          />
                          <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">
                            Click Preview
                          </div>
                        </a>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePreview;

// onClick={(e) => {handleClick(e,'/preview/first')}}
