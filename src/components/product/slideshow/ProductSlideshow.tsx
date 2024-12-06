'use client'
import { useState } from "react";

import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from "next/image";

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export default function ProductSlideshow({ images, title, className }: Props) {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={`${className}`}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties
                }
                loop={true}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 2500
                }}
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {images.map(image => (
                    <SwiperSlide key={image}>
                        <Image
                            src={`/products/${image}`}
                            width={1024}
                            height={800}
                            alt={title}
                            className="rounded-lg object-cover"
                        />
                    </SwiperSlide>

                ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper"
            >
                {images.map(image => (
                    <SwiperSlide key={image}>
                        <Image
                            src={`/products/${image}`}
                            width={300}
                            height={300}
                            alt={title}
                            className="rounded-lg object-cover"
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}