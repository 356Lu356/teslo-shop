'use client'
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export default function ProductMobileSlideshow({ images, title, className }: Props) {

    return (
        <div className={`${className}`}>
            <Swiper
                style={{
                    width: '100vW',
                    height: '500px'
                }}
                pagination
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2500
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {images.map(image => (
                    <SwiperSlide key={image}>
                        <Image
                            src={`/products/${image}`}
                            width={600}
                            height={500}
                            alt={title}
                            className=" object-cover"
                        />
                    </SwiperSlide>

                ))
                }
            </Swiper>

        </div>
    )
}
