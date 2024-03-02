'use client';

import s from '@/app/[locale]/(globalRoutes)/contact-us/_components/AboutUs/aboutUs.module.scss';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './styles.css';

const images = [
  {
    url: '/images/mainSliderImages/sliderImage.webp',
    alt: 'image1',
  },
  {
    url: '/images/mainSliderImages/sliderImage.webp',
    alt: 'image2',
  },
  {
    url: '/images/mainSliderImages/sliderImage.webp',
    alt: 'image3',
  },
];
//
const AboutUs = () => {
  //     const [array, setArray] = useState([])
  //
  //     useEffect(() => {
  //         fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //             .then(response => response.json())
  //             .then(json => {
  //                     const newJson = json.map(
  //                         (item) => {
  //                             const newItem = {body: item.body, id: item.id, title: item.title}
  //                             return newItem;
  //                         }
  //                     )
  //                     setArray(newJson)
  //                     console.log(newJson)
  //                 }
  //             )
  //     }, []);
  //     console.log(array)
  return (
    <section className={s.aboutUs}>
      <div className='_container'>
        {/*{*/}
        {/*    array.map((pole) => {*/}
        {/*            return <div key={pole.id}>*/}
        {/*                <p style={{color: "red"}}>{pole.title}</p>*/}
        {/*                <p>{pole.body}</p>*/}
        {/*            </div>*/}
        {/*        }*/}
        {/*    )*/}
        {/*}*/}
        <div className={s.about}>
          <div className={s.aboutImg}>
            <img src='/images/name.webp' alt='Paste20image' height={532} width={720} />
          </div>
          <div className={s.aboutPost}>
            <div className={s.aboutTitle}>About Us</div>
            <div className={s.aboutText}>
              <p>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
              <p> Our customer service is always prepared to support you 24/7</p>
            </div>
            <UnderLineLink url={'/shop'}>Shop Now</UnderLineLink>
          </div>
        </div>
      </div>
      <>
        <Swiper navigation loop modules={[Navigation]} className='mySwiper'>
          {images.map((image) => (
            <SwiperSlide key={image.alt}>
              <img src={image.url} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};
export default AboutUs;
