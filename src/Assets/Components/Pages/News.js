import { memo } from 'react'

import '../../CSS/News.css'

import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay /*, EffectCoverflow */ } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);


const News = (props) => {
  const imageList = [
    { img: './PublicAssets/Img/News/ID1.webp', heading: '"Hạnh phúc là trạng thái tâm lý, không phải mục tiêu cuối cùng." - Martin Seligman' },
    { img: './PublicAssets/Img/News/ID2.webp', heading: '"Sự thay đổi bắt đầu khi bạn quyết định không chấp nhận tình trạng hiện tại."' },
    { img: './PublicAssets/Img/News/ID3.jpg', heading: '"Hãy hiểu tâm lý của bạn, bạn sẽ hiểu được mọi thứ."' },
  ];
  return (
    <div className="News">
      
      {/* Swiper Image */}

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        className="carousel__container"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        // autoplay={{ delay: 2500 }} // Tự động chuyển slide sau 3 giây
        loop
        style={{ width: '100%', height: '100%' }}
      >
        {imageList.map((image, index) => (
          <SwiperSlide className='swiper__slide' key={index}>
            <div className="news__header">
              <h2>{image.heading}</h2>
            </div>
            <img src={image.img} alt="news" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Blog Layout */}     

 
      <div className="news__blogs">
        <div className="left__column">

          <div className="news__card">
            <h2 className="card__heading">Gửi tôi của nhiều năm về trước</h2>
            <h5 className="card__description">“Dường như chỉ có tôi, đang một mình dò dẫm trong bóng tối. Cô đơn và tuyệt vọng”</h5>
            <div className="card__img bg1"></div>
            <p className="card__text">Hãy tin tớ. Chỉ cần cậu kiên nhẫn, cậu rồi sẽ nhìn thấy lối ra. Lối ra đã ở đó chờ cậu rồi, chỉ cần trái tim cậu sẵn lòng để đón nhận thôi. Bằng cách nào ư? Bằng cách tin tưởng vào chính mình một cách hồn nhiên nhất trong từng khoảnh khắc hiện tại, kể cả khi cậu chưa nắm trong tay bất cứ một bằng chứng nào</p>

          </div>


          <div className="news__card">
            <h2 className="card__heading">Về Nhà - Ngay cả khi đang ở nhà, tớ cũng muốn được "về nhà".</h2>
            <h5 className="card__description">Tớ hy vọng cậu tìm thấy một ngôi nhà ấm cúng bên trong mình, thay vì ước rằng mình có thể nhiều như thế này hơn hay bớt thế kia đi. </h5>
            <div className="card__img bg2"></div>
            <p className="card__text">ớ hy vọng cậu vẫn giữ niềm tin ở bản thân, kể cả khi trước mắt cậu chưa phải là những gì cậu muốn nhìn thấy. Tớ hy vọng cậu vẫn sẽ trân trọng và chăm sóc bản thân khi cậu mệt mỏi hay bất lực. Tớ hy vọng sẽ luôn có những điều tốt đẹp bất ngờ xuất hiện trong cuộc sống của cậu.</p>

          </div>


        </div>
        <div className="right__column">
          <div className="news__card">
            <h2 className="card__heading">About me</h2>
            <div className="card__img bg3">
            </div>
            <p className="card__text">Trưởng thành với cậu là gì? </p>      
          </div>

          <div className="news__card">
            <h3 className="card__section">Popular Post</h3>
            <div className="card__img bg4"></div>
            <div className="card__img bg5"></div>
            <div className="card__img bg6"></div>
          </div>


          <div className="news__card">
            <h3 className="card__section">MindMend</h3>
            <p className="card__text"></p>
          </div>
        </div>
      </div>


    </div>

  )
}


export default memo(News)
