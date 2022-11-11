import React from "react";
import styles from "./testimonials.module.scss"
import {testimonialsData} from "./data"
// Import Swiper React u2-components
import {Swiper, SwiperSlide} from "swiper/react";

// import required modules
import {Pagination} from "swiper";


export const Testimonials = () => {

    return (
        <section className={"testimonial container section"} id={"testimonials"}>
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className={`${styles.testimonial__container}`}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination]}>
                {testimonialsData.map(({id, image, title, description}, index) => {
                    return (
                        <SwiperSlide className={`${styles.testimonial__card}`}
                                     key={index}>
                            <img src={image} alt="profileImg" className={`${styles.testimonial__img}`}/>
                            <h3 className={`${styles.testimonial__name}`}>{title}</h3>
                            <p className={`${styles.testimonial__description}`}>{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>
    );
};
