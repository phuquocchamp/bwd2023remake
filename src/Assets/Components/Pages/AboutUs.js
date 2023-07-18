import { memo } from 'react';
import '../../CSS/AboutUs.css';
import CarouselSwiper from '../LittleComponent/CarouselSwiper';

function AboutUs() {
    return (
        <div>
            <div className="about-us">
                {/* Inner Image */}
                {/* <div className="inner__title">
                    <div className="overlay__image"></div>
                    <div className="banner__title">FireWing</div>
                </div> */}
                {/* Thông tin về Đề Tài */}
                <div className="container__info">
                    <h1 className="container__title">
                        FireWing - Cung cấp thông tin, dự báo cháy rừng
                    </h1>
                    <p className="container__description">
                        FireWing là một nền tảng được phát triển bởi các sinh viên VKU với mục tiêu cung cấp thông tin
                        và dự báo về cháy rừng.
                    </p>
                    <p className="container__description">
                        FireWing giúp người dùng nắm bắt và cập nhật các thông tin về cháy rừng, bao gồm tình hình hiện
                        tại, dự báo, đánh giá nguy cơ.
                    </p>
                    <p className="container__description">
                        Chúng tôi cam kết đem đến cho người dùng những thông tin hữu ích và giúp tăng cường nhận thức về
                        cháy rừng, từ đó đóng góp vào việc bảo vệ môi trường và sự an toàn cho cộng đồng.
                    </p>
                </div>
                {/* Caroursel*/}

                {/*  */}
            </div>
            <div className="cards__container">
                <CarouselSwiper />
            </div>
        </div>
    );
}

export default memo(AboutUs);
